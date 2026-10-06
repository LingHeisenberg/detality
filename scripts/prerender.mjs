import {readFile,writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {createServer,loadEnv} from 'vite';
// Use the same production environment as the browser build (contact/WhatsApp settings).
Object.assign(process.env,loadEnv('production',process.cwd(),''));
const server=await createServer({mode:'production',server:{middlewareMode:true},appType:'custom',ssr:{noExternal:['react-router','react-router-dom'],resolve:{conditions:['module','import']}}});
const escapeHTML=value=>value.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
try{
 const {render,routes}=await server.ssrLoadModule('/src/prerender.jsx');
 const template=await readFile(resolve('dist/index.html'),'utf8');
 for(const path of [...routes,'/404']){
  const {html,metadata,domain,structuredData}=render(path);
  let document=template.replace('<div id="root"></div>',`<div id="root">${html}</div>`);
  document=document.replace(/<title>[^<]*<\/title>/,`<title>${escapeHTML(metadata.title)}</title>`);
  const values={'name="description"':metadata.description,'property="og:title"':metadata.title,'property="og:description"':metadata.description,'property="og:url"':domain+path,'name="twitter:title"':metadata.title,'name="twitter:description"':metadata.description};
  for(const [attribute,value] of Object.entries(values))document=document.replace(new RegExp(`<meta ${attribute} content="[^"]*"\\s*/?>`),`<meta ${attribute} content="${escapeHTML(value)}"/>`);
  document=document.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/,`<link rel="canonical" href="${domain+path}"/>`);
  document=document.replace('</head>',`<meta name="robots" content="${metadata.noindex?'noindex,follow':'index,follow,max-image-preview:large'}"/><meta property="og:site_name" content="Detality"/>${structuredData?`<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g,'\\u003c')}</script>`:''}</head>`);
  const file=path==='/'?resolve('dist/index.html'):resolve('dist',`${path.slice(1)}.html`);
  await writeFile(file,document);
  if(!html.includes('<h1')||!document.includes(metadata.title))throw new Error(`Pré-renderização incompleta: ${path}`);
 }
 console.log(`SEO: ${routes.length} páginas pré-renderizadas, dados estruturados e página 404 gerados.`);
}finally{await server.close();}

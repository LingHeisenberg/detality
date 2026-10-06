import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {AppContent} from './App';
import {siteConfig} from './config/siteConfig';
import {seoPages,notFoundSEO} from './config/seoConfig';
export const routes=Object.keys(seoPages);
export function render(path){const metadata=seoPages[path]||notFoundSEO;return {html:renderToString(<StaticRouter location={path}><AppContent/></StaticRouter>),metadata,domain:siteConfig.domain,structuredData:path==='/'?{'@context':'https://schema.org','@graph':[{'@type':'WebSite','@id':`${siteConfig.domain}/#website`,name:'Detality',alternateName:'DETALITY',url:`${siteConfig.domain}/`,inLanguage:'pt',publisher:{'@id':`${siteConfig.domain}/#organization`}},{'@type':'Organization','@id':`${siteConfig.domain}/#organization`,name:siteConfig.companyName,url:`${siteConfig.domain}/`,description:siteConfig.description,email:siteConfig.emails.general,...(siteConfig.phone?{telephone:siteConfig.phone}:{}),...(Object.values(siteConfig.socials).some(Boolean)?{sameAs:Object.values(siteConfig.socials).filter(Boolean)}:{})}]}:null};}

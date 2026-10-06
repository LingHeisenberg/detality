# Tornar a Detality encontrável

## Implementação

- `npm run build` gera HTML completo para as oito páginas, sem depender de JavaScript para ler o conteúdo.
- Nome Detality em títulos, dados estruturados WebSite/Organization e Open Graph.
- Canonical próprio, descrições por página, sitemap e robots.txt.
- Página de erro com `noindex` e ficheiro `404.html` para HTTP 404 na Vercel.
- Os dados estruturados usam apenas informações fornecidas, sem moradas, certificações ou perfis inventados.

## Depois de publicar

1. Publique na Vercel e associe `detality.com`. Confirme HTTPS e escolha `https://detality.com` como domínio principal. Redireccione `www.detality.com` para o domínio principal na configuração de domínios da Vercel.
2. Confirme que a homepage, `/servicos`, `/sobre`, `/robots.txt` e `/sitemap.xml` estão públicos, sem autenticação ou bloqueio de indexação. Verifique que uma URL inexistente responde com HTTP 404.
3. No Google Search Console, adicione a propriedade de domínio `detality.com` e copie o registo TXT apresentado para o fornecedor DNS. É necessário acesso à conta/DNS do proprietário.
4. Envie `https://detality.com/sitemap.xml` na secção Sitemaps.
5. Na Inspecção de URL, inspeccione `https://detality.com/`, execute o teste da URL publicada e solicite indexação. Repita para páginas importantes se necessário. Repetir o pedido continuamente não acelera o processo.
6. Adicione e verifique o website no Bing Webmaster Tools e envie o mesmo sitemap.
7. Acrescente URLs reais das redes sociais à configuração e ligue esses perfis ao domínio oficial. Use o nome Detality de forma consistente.

## Limites

O website em `127.0.0.1` é apenas local e não está acessível aos motores. Alterar o código não publica o website nem verifica a propriedade do domínio. Pedido de indexação não garante inclusão, prazo ou primeira posição. O Google indica que o rastreio pode demorar alguns dias a algumas semanas. Sugestões de preenchimento automático ao digitar “detality” também são controladas pelos motores; não existe uma configuração do website que as imponha.

## Referências oficiais

- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- https://developers.google.com/search/docs/appearance/site-names
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://search.google.com/search-console
- https://www.bing.com/webmasters

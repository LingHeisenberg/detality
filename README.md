# Detality

Website institucional em português para uma empresa moçambicana de tecnologia. React SPA com React Router, Vite, JavaScript, Tailwind CSS e Lucide React. Sem Next.js ou biblioteca de animação. O visual tecnológico é construído em CSS e SVG, sem fotografias ou dados empresariais inventados.

## Executar

Requer Node.js 20.19+ e npm.

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Estrutura

- `src/pages`: Home, Services, Solutions, Portfolio, About, Contact, Privacy, Terms e NotFound.
- `src/components`: common, layout, sections, ui e forms.
- `src/data`: navigation.js, services.js, solutions.js e projects.js.
- `src/config/siteConfig.js`: identidade, domínio, descrição, emails, telefone, WhatsApp e redes sociais.
- `src/utils/contactApi.js`: ponto de integração do formulário.
- `src/index.css`: design responsivo e estilos complementares ao Tailwind.
- `public`: favicon, imagem social, robots.txt e sitemap.xml.

## Configuração

Copie `.env.example` para `.env.local` quando necessário. Nunca coloque segredos em variáveis `VITE_`, pois ficam públicos no browser.

| Informação | Local |
| --- | --- |
| Telefone | `src/config/siteConfig.js`, campo `phone` |
| WhatsApp | `VITE_WHATSAPP_NUMBER` ou campo `whatsapp` na configuração |
| Emails | `src/config/siteConfig.js`, objecto `emails` |
| Redes sociais | `src/config/siteConfig.js`, objecto `socials` |
| Serviços | `src/data/services.js` |
| Soluções | `src/data/solutions.js` |
| Projectos | `src/data/projects.js` |
| Navegação | `src/data/navigation.js` |

WhatsApp deve incluir o indicativo internacional e apenas números. Sem número, o botão é ocultado. Redes sem URL não são mostradas. Adicione serviços e projectos seguindo os objectos existentes; os componentes geram os cards automaticamente. Os ícones disponíveis estão em `src/components/common/Icon.jsx`.

## Formulário

Sem `VITE_API_URL`, valida os dados e mostra sucesso de validação, deixando explícito que não houve envio. Não guarda dados nem usa localStorage. Com a variável configurada, envia JSON por POST para `${VITE_API_URL}/api/contact`. Para uma API no mesmo domínio, use `https://detality.com` como base. O backend deve implementar validação, limites de pedidos, envio de email e política de conservação. Uma API noutro domínio deve permitir CORS. Nunca configure uma API real sem actualizar a política de privacidade.

## Deploy na Vercel

1. Envie este projecto para um repositório Git e importe-o na Vercel (ou execute `npx vercel` numa sessão autenticada).
2. Seleccione o preset **Vite**, comando de build `npm run build` e pasta de saída `dist`.
3. Configure as variáveis de ambiente necessárias e faça deploy.
4. Adicione `detality.com` e siga os registos DNS indicados pela Vercel.

`vercel.json` encaminha rotas da SPA para `index.html`, preservando o prefixo `/api/`. Verifique `/servicos`, `/portfolio`, `/sobre` e `/contactos` ao actualizar o browser. A página 404 é renderizada pelo React; numa hospedagem estática SPA o HTTP pode continuar a ser 200. A página 404 inclui `noindex`.

## SEO e acessibilidade

Metadados iniciais em `index.html`; título, descrição, Open Graph e canonical actualizados pelo componente SEO por rota. Para indexação que exija HTML de cada rota sem JavaScript, considere pré-renderização numa fase posterior. Sitemap e robots usam o domínio oficial. Google Fonts carrega Inter; existe fallback sans-serif. Sem analytics ou cookies de rastreamento. Inclui link para saltar conteúdo, foco visível, menu com Escape, labels, mensagens acessíveis e redução de movimento.

## Pendências antes do lançamento

- Confirmar emails e configurar caixas de correio.
- Adicionar telefone, WhatsApp e URLs reais das redes sociais.
- Substituir o wordmark temporário pelo logo oficial, se existir.
- Confirmar os detalhes técnicos dos projectos demonstrativos antes de apresentar casos reais.
- Integrar e testar a API se pretender receber pedidos pelo formulário.
- Rever juridicamente privacidade e termos antes da utilização comercial definitiva.
- Configurar domínio/DNS na Vercel e validar o website publicado.

Não foram inventados clientes, testemunhos, números, certificações, escritórios ou preços.

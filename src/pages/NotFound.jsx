import SEO from '../components/common/SEO';
import Button from '../components/ui/Button';
export default function NotFound(){return <section className="not-found container"><SEO title="Página não encontrada" noindex/><p className="eyebrow">ERRO 404</p><h1>Página não encontrada.</h1><p>A página que procura não existe ou foi movida.</p><Button to="/">Voltar ao início</Button></section>;}

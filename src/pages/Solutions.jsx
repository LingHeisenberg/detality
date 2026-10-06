import SEO from '../components/common/SEO';
import PageIntro from '../components/common/PageIntro';
import Icon from '../components/common/Icon';
import {solutions} from '../data/solutions';
import CTASection from '../components/sections/CTASection';
export default function Solutions(){return <><SEO title="Soluções"/><PageIntro eyebrow="SOLUÇÕES" title="O seu desafio é o nosso ponto de partida." description="Compreendemos os processos, identificamos oportunidades e construímos soluções digitais que tornam o trabalho mais simples."/><section className="section"><div className="container grid-two">{solutions.map(s=><article className="solution-detail" key={s.title}><Icon name={s.icon} size={28}/><h2>{s.title}</h2><small>O DESAFIO</small><p>{s.problem}</p><small>A SOLUÇÃO</small><p>{s.description}</p></article>)}</div></section><CTASection/></>;}

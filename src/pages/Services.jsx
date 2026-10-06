import SEO from '../components/common/SEO';
import PageIntro from '../components/common/PageIntro';
import Icon from '../components/common/Icon';
import Button from '../components/ui/Button';
import CTASection from '../components/sections/CTASection';
import {services} from '../data/services';
export default function Services(){return <><SEO title="Serviços"/><PageIntro eyebrow="SERVIÇOS" title="A tecnologia certa para cada desafio." description="Desenvolvimento de software, criação de websites, redes empresariais e suporte IT em Moçambique. Soluções integradas para acompanhar a evolução da sua empresa."/><section className="section"><div className="container service-details">{services.map((s,i)=><article id={s.id} key={s.id}><div className="service-number">0{i+1}<Icon name={s.icon} size={35}/></div><div><h2>{s.title}</h2><p>{s.description}</p><ul>{s.details.map(d=><li key={d}>{d}</li>)}</ul><div className="tags">{s.technologies.map(t=><span key={t}>{t}</span>)}</div></div><Button to="/contactos?tipo=orcamento">Pedir orçamento</Button></article>)}</div></section><CTASection/></>;}

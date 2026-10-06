import SEO from '../components/common/SEO';
import PageIntro from '../components/common/PageIntro';
import ProjectCard from '../components/ui/ProjectCard';
import {projects} from '../data/projects';
import CTASection from '../components/sections/CTASection';
export default function Portfolio(){return <><SEO title="Portfólio"/><PageIntro eyebrow="PORTFÓLIO / CASOS TÉCNICOS" title="Ideias que ganham forma com tecnologia." description="Projectos demonstrativos para explorar possibilidades técnicas. Estes conceitos não representam clientes, trabalhos contratados ou resultados comprovados."/><section className="section"><div className="container grid-two">{projects.map(p=><div id={p.id} key={p.id}><ProjectCard project={p} expanded/></div>)}</div></section><CTASection/></>;}

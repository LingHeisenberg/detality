import {projects} from '../../data/projects';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
export default function PortfolioSection(){return <section className="section"><div className="container"><SectionTitle eyebrow="04 / PORTFÓLIO" title="Da complexidade à solução." description="Explore conceitos demonstrativos que mostram como software e infraestrutura podem trabalhar juntos. Não representam clientes ou trabalhos contratados."/><div className="grid-two">{projects.map(p=><ProjectCard project={p} key={p.id}/>)}</div></div></section>;}

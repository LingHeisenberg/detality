import {Link} from 'react-router-dom';
import {ArrowUpRight} from 'lucide-react';
import {solutions} from '../../data/solutions';
import Icon from '../common/Icon';
import SectionTitle from '../ui/SectionTitle';
export default function SolutionsSection(){return <section className="section light"><div className="container"><SectionTitle eyebrow="03 / SOLUÇÕES" title="Desafios reais. Soluções que fazem sentido." description="Ligamos as necessidades do seu negócio às possibilidades da tecnologia."/><div className="solutions-grid">{solutions.map(s=><Link className="solution-item" to="/solucoes" key={s.title}><Icon name={s.icon}/><div><h3>{s.title}</h3><p>{s.description}</p></div><ArrowUpRight size={19}/></Link>)}</div></div></section>;}

import {services} from '../../data/services';
import ServiceCard from '../ui/ServiceCard';
import SectionTitle from '../ui/SectionTitle';
export default function ServicesSection(){return <section className="section"><div className="container"><SectionTitle eyebrow="01 / NOSSOS SERVIÇOS" title="Tudo o que o seu negócio precisa para evoluir tecnologicamente." description="Da primeira ideia à infraestrutura que a sustenta. Tecnologia pensada como um todo."/><div className="grid-three">{services.map(s=><ServiceCard key={s.id} service={s}/>)}</div></div></section>;}

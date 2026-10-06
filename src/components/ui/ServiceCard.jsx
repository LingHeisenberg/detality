import {Link} from 'react-router-dom';
import {ArrowUpRight} from 'lucide-react';
import Icon from '../common/Icon';
export default function ServiceCard({service}){return <article className="service-card"><div className="icon-box"><Icon name={service.icon} size={25}/></div><h3>{service.title}</h3><p>{service.description}</p><Link to={`/servicos#${service.id}`}>Saber mais <ArrowUpRight size={17}/></Link></article>;}

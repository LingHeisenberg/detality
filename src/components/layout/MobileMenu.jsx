import {NavLink} from 'react-router-dom';
import {navigation} from '../../data/navigation';
import Button from '../ui/Button';
export default function MobileMenu({open,onClose}){return <div id="mobile-menu" className={`mobile-menu ${open?'open':''}`} inert={!open} aria-hidden={!open}><nav aria-label="Navegação mobile">{navigation.map(item=><NavLink key={item.to} to={item.to} onClick={onClose}>{item.label}</NavLink>)}<Button onClick={onClose}>Solicitar Orçamento</Button></nav></div>;}

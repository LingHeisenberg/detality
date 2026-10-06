import {useEffect,useState} from 'react';
import {NavLink,useLocation} from 'react-router-dom';
import {Menu,X} from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';
import {navigation} from '../../data/navigation';
export default function Navbar(){const [open,setOpen]=useState(false);const [scrolled,setScrolled]=useState(false);const {pathname}=useLocation();useEffect(()=>{const update=()=>setScrolled(window.scrollY>20);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update);},[]);useEffect(()=>{if(!open)return;const handle=e=>{if(e.key==='Escape'){setOpen(false);document.getElementById('menu-toggle')?.focus();}};document.addEventListener('keydown',handle);return()=>document.removeEventListener('keydown',handle);},[open]);return <header className={`navbar ${scrolled?'scrolled':''} ${pathname==='/'?'home-nav':''}`}><div className="container nav-inner"><Logo/><nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(item=><NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}</nav><div className="nav-cta"><Button>Solicitar Orçamento</Button></div><button id="menu-toggle" className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open?'Fechar menu':'Abrir menu'}>{open?<X/>:<Menu/>}</button></div><MobileMenu open={open} onClose={()=>setOpen(false)}/></header>;}

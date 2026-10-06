import {lazy,Suspense} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import WhatsAppButton from './components/common/WhatsAppButton';
import Home from './pages/Home';
const Services=lazy(()=>import('./pages/Services'));const Solutions=lazy(()=>import('./pages/Solutions'));const Portfolio=lazy(()=>import('./pages/Portfolio'));const About=lazy(()=>import('./pages/About'));const Contact=lazy(()=>import('./pages/Contact'));const Privacy=lazy(()=>import('./pages/Privacy'));const Terms=lazy(()=>import('./pages/Terms'));const NotFound=lazy(()=>import('./pages/NotFound'));
export default function App(){return <BrowserRouter><a href="#main" className="skip-link">Saltar para o conteúdo</a><ScrollToTop/><Navbar/><main id="main"><Suspense fallback={<div className="loading" role="status">A carregar…</div>}><Routes><Route path="/" element={<Home/>}/><Route path="/servicos" element={<Services/>}/><Route path="/solucoes" element={<Solutions/>}/><Route path="/portfolio" element={<Portfolio/>}/><Route path="/sobre" element={<About/>}/><Route path="/contactos" element={<Contact/>}/><Route path="/privacidade" element={<Privacy/>}/><Route path="/termos" element={<Terms/>}/><Route path="*" element={<NotFound/>}/></Routes></Suspense></main><Footer/><WhatsAppButton/></BrowserRouter>;}

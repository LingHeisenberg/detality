import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import WhatsAppButton from './components/common/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
export function AppContent(){return <><a href="#main" className="skip-link">Saltar para o conteúdo</a><ScrollToTop/><Navbar/><main id="main"><Routes><Route path="/" element={<Home/>}/><Route path="/servicos" element={<Services/>}/><Route path="/solucoes" element={<Solutions/>}/><Route path="/portfolio" element={<Portfolio/>}/><Route path="/sobre" element={<About/>}/><Route path="/contactos" element={<Contact/>}/><Route path="/privacidade" element={<Privacy/>}/><Route path="/termos" element={<Terms/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/><WhatsAppButton/></>;}
export default function App(){return <BrowserRouter><AppContent/></BrowserRouter>;}

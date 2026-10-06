import {MessageCircle} from 'lucide-react';
import {siteConfig} from '../../config/siteConfig';
export default function WhatsAppButton(){const number=siteConfig.whatsapp.replace(/\D/g,'');if(!number)return null;return <a className="whatsapp" href={`https://wa.me/${number}?text=${encodeURIComponent('Olá Detality, gostaria de saber mais sobre os vossos serviços.')}`} target="_blank" rel="noopener noreferrer" aria-label="Contactar a Detality pelo WhatsApp"><MessageCircle/></a>;}

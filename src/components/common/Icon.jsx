import {Code2,Globe,Network,Cloud,Headphones,Lightbulb,BriefcaseBusiness,Workflow,ChartNoAxesCombined,Plug,ShieldCheck,Layers,Target,RefreshCw} from 'lucide-react';
const icons={Code2,Globe,Network,Cloud,Headphones,Lightbulb,BriefcaseBusiness,Workflow,ChartNoAxesCombined,Plug,ShieldCheck,Layers,Target,RefreshCw};
export default function Icon({name,...props}) { const Component=icons[name]||Code2;return <Component {...props}/>; }

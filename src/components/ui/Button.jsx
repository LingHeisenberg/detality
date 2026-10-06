import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
export default function Button({children,to='/contactos',secondary=false,...props}) { return <Link className={`button ${secondary?'secondary':''}`} to={to} {...props}>{children}<ArrowUpRight size={17}/></Link>; }

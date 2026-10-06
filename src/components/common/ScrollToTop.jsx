import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
export default function ScrollToTop(){const {pathname,hash}=useLocation();useEffect(()=>{window.scrollTo(0,0);if(!hash)return;const scroll=()=>{const target=document.getElementById(hash.slice(1));if(!target)return false;target.scrollIntoView();return true;};if(scroll())return;const observer=new MutationObserver(()=>{if(scroll())observer.disconnect();});observer.observe(document.getElementById('main'),{childList:true,subtree:true});return()=>observer.disconnect();},[pathname,hash]);return null;}

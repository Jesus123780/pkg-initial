import{r as C}from"./index-DPzuYzxM.js";import{r as E}from"./utils-D5IJ2A55.js";var v={exports:{}};(function(p,s){Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=O;var f=C,I=E;const g=typeof IntersectionObserver=="function",b=new Map,d=[];function _(t){const r={root:t.root||null,margin:t.rootMargin||""},l=d.find(o=>o.root===r.root&&o.margin===r.margin);let e;if(l&&(e=b.get(l),e))return e;const n=new Map,i=new IntersectionObserver(o=>{o.forEach(c=>{const a=n.get(c.target),u=c.isIntersecting||c.intersectionRatio>0;a&&u&&a(u)})},t);return e={id:r,observer:i,elements:n},d.push(r),b.set(r,e),e}function k(t,r,l){const{id:e,observer:n,elements:i}=_(l);return i.set(t,r),n.observe(t),function(){if(i.delete(t),n.unobserve(t),i.size===0){n.disconnect(),b.delete(e);const c=d.findIndex(a=>a.root===e.root&&a.margin===e.margin);c>-1&&d.splice(c,1)}}}function O({rootRef:t,rootMargin:r,disabled:l}){const e=l||!g,[n,i]=f.useState(!1),[o,c]=f.useState(null);f.useEffect(()=>{if(g){if(e||n)return;if(o&&o.tagName)return k(o,m=>m&&i(m),{root:t==null?void 0:t.current,rootMargin:r})}else if(!n){const u=I.requestIdleCallback(()=>i(!0));return()=>I.cancelIdleCallback(u)}},[o,e,r,t,n]);const a=f.useCallback(()=>{i(!1)},[]);return[c,n,a]}(typeof s.default=="function"||typeof s.default=="object"&&s.default!==null)&&typeof s.default.__esModule>"u"&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),p.exports=s.default)})(v,v.exports);var h=v.exports;export{h as u};

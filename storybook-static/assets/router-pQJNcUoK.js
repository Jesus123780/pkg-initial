import{_ as P}from"./_interop_require_default-DgqNHo5w.js";import{r as m}from"./index-DPzuYzxM.js";import{r as $,i as q}from"./router-Dr3MF1HQ.js";import{r as M}from"./router-context-1OOWBe6R.js";var s={exports:{}},d={exports:{}},R;function I(){return R||(R=1,function(h,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=_;var i=P.default,y=i(m),n=j();function _(l){function c(t){return y.default.createElement(l,Object.assign({router:n.useRouter()},t))}return c.getInitialProps=l.getInitialProps,c.origGetInitialProps=l.origGetInitialProps,c}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),h.exports=e.default)}(d,d.exports)),d.exports}var g;function j(){return g||(g=1,function(h,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Router",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"withRouter",{enumerable:!0,get:function(){return c.default}}),e.useRouter=O,e.createRouter=w,e.makePublicRouterInstance=k,e.default=void 0;var i=P.default,y=i(m),n=i($),_=M,l=i(q),c=i(I());const t={router:null,readyCallbacks:[],ready(r){if(this.router)return r();typeof window<"u"&&this.readyCallbacks.push(r)}},p=["pathname","route","query","asPath","components","isFallback","basePath","locale","locales","defaultLocale","isReady","isPreview","isLocaleDomain","domainLocales"],C=["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"],b=["push","replace","reload","back","prefetch","beforePopState"];Object.defineProperty(t,"events",{get(){return n.default.events}});function v(){if(!t.router){const r=`No router instance found.
You should only use "next/router" on the client side of your app.
`;throw new Error(r)}return t.router}p.forEach(r=>{Object.defineProperty(t,r,{get(){return v()[r]}})}),b.forEach(r=>{t[r]=(...u)=>v()[r](...u)}),C.forEach(r=>{t.ready(()=>{n.default.events.on(r,(...u)=>{const a=`on${r.charAt(0).toUpperCase()}${r.substring(1)}`,o=t;if(o[a])try{o[a](...u)}catch(f){console.error(`Error when running the Router event: ${a}`),console.error(l.default(f)?`${f.message}
${f.stack}`:f+"")}})})});var E=t;e.default=E;function O(){return y.default.useContext(_.RouterContext)}function w(...r){return t.router=new n.default(...r),t.readyCallbacks.forEach(u=>u()),t.readyCallbacks=[],t.router}function k(r){const u=r,a={};for(const o of p){if(typeof u[o]=="object"){a[o]=Object.assign(Array.isArray(u[o])?[]:{},u[o]);continue}a[o]=u[o]}return a.events=n.default.events,b.forEach(o=>{a[o]=(...f)=>u[o](...f)}),a}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),h.exports=e.default)}(s,s.exports)),s.exports}var S=j();export{S as r};
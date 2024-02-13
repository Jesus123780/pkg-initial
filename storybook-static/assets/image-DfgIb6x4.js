import{c as Ke,a as Qe}from"./_commonjsHelpers-C4iS2aBk.js";import{a as Se,b as Pe,h as Ye,_ as Ze,n as et}from"./utils-D5IJ2A55.js";import{_ as re}from"./_interop_require_default-DgqNHo5w.js";import{r as K}from"./index-DPzuYzxM.js";import{u as tt}from"./use-intersection-BigaMEX4.js";var be={exports:{}},we={exports:{}},Ee={};Object.defineProperty(Ee,"__esModule",{value:!0});Ee.default=at;var nt=Se.default,Ae=nt(K);function at(w){const{headManager:t,reduceComponentsToState:j}=w;function z(){if(t&&t.mountedInstances){const $=Ae.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(j($,w))}}if(Ie){var q;t==null||(q=t.mountedInstances)==null||q.add(w.children),z()}return Re(()=>{var $;return t==null||($=t.mountedInstances)==null||$.add(w.children),()=>{var u;t==null||(u=t.mountedInstances)==null||u.delete(w.children)}}),Re(()=>(t&&(t._pendingUpdate=z),()=>{t&&(t._pendingUpdate=z)})),it(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}const Ie=typeof window>"u",Re=Ie?()=>{}:Ae.useLayoutEffect,it=Ie?()=>{}:Ae.useEffect;var se={};Object.defineProperty(se,"__esModule",{value:!0});se.AmpStateContext=void 0;var ot=re.default,rt=ot(K);const st=rt.default.createContext({});se.AmpStateContext=st;var Ce={};Object.defineProperty(Ce,"__esModule",{value:!0});Ce.isInAmpMode=lt;function lt({ampFirst:w=!1,hybrid:t=!1,hasQuery:j=!1}={}){return w||t&&j}(function(w,t){var j={};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=Y,t.default=void 0;var z=Pe.default,q=re.default,$=Se.default,u=$(K),o=q(Ee),de=se,Q=Ye,ue=Ce;function Y(g=!1){const l=[u.default.createElement("meta",{charSet:"utf-8"})];return g||l.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width"})),l}function ce(g,l){return typeof l=="string"||typeof l=="number"?g:l.type===u.default.Fragment?g.concat(u.default.Children.toArray(l.props.children).reduce((v,c)=>typeof c=="string"||typeof c=="number"?v:v.concat(c),[])):g.concat(l)}const Z=["name","httpEquiv","charSet","itemProp"];function B(){const g=new Set,l=new Set,v=new Set,c={};return h=>{let k=!0,y=!1;if(h.key&&typeof h.key!="number"&&h.key.indexOf("$")>0){y=!0;const O=h.key.slice(h.key.indexOf("$")+1);g.has(O)?k=!1:g.add(O)}switch(h.type){case"title":case"base":l.has(h.type)?k=!1:l.add(h.type);break;case"meta":for(let O=0,me=Z.length;O<me;O++){const A=Z[O];if(h.props.hasOwnProperty(A))if(A==="charSet")v.has(A)?k=!1:v.add(A);else{const H=h.props[A],P=c[A]||new Set;(A!=="name"||!y)&&P.has(H)?k=!1:(P.add(H),c[A]=P)}}break}return k}}function fe(g,l){const{inAmpMode:v}=l;return g.reduce(ce,[]).reverse().concat(Y(v).reverse()).filter(B()).reverse().map((c,h)=>{const k=c.key||h;if(j.__NEXT_OPTIMIZE_FONTS&&!v&&c.type==="link"&&c.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(y=>c.props.href.startsWith(y))){const y=z({},c.props||{});return y["data-href"]=y.href,y.href=void 0,y["data-optimized-fonts"]=!0,u.default.cloneElement(c,y)}return u.default.cloneElement(c,{key:k})})}function ee({children:g}){const l=u.useContext(de.AmpStateContext),v=u.useContext(Q.HeadManagerContext);return u.default.createElement(o.default,{reduceComponentsToState:fe,headManager:v,inAmpMode:ue.isInAmpMode(l)},g)}var te=ee;t.default=te,(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),w.exports=t.default)})(we,we.exports);var dt=we.exports,T={};Object.defineProperty(T,"__esModule",{value:!0});T.imageConfigDefault=T.VALID_LOADERS=void 0;const ut=["default","imgix","cloudinary","akamai","custom"];T.VALID_LOADERS=ut;const ct={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",remotePatterns:[],unoptimized:!1};T.imageConfigDefault=ct;var le={};Object.defineProperty(le,"__esModule",{value:!0});le.ImageConfigContext=void 0;var ft=re.default,mt=ft(K),pt=T;const gt=mt.default.createContext(pt.imageConfigDefault);le.ImageConfigContext=gt;(function(w,t){var j={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=Z;var z=Pe.default,q=re.default,$=Se.default,u=Ze.default,o=$(K),de=q(dt),Q=T,ue=tt,Y=le,ce=et;function Z(e){var{src:n,sizes:r,unoptimized:i=!1,priority:d=!1,loading:a,lazyRoot:_=null,lazyBoundary:m,className:p,quality:I,width:S,height:C,style:M,objectFit:ne,objectPosition:ae,onLoadingComplete:V,placeholder:D="empty",blurDataURL:R}=e,ie=u(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]);const F=o.useContext(Y.ImageConfigContext),U=o.useMemo(()=>{const s=fe||F||Q.imageConfigDefault,J=[...s.deviceSizes,...s.imageSizes].sort((_e,ve)=>_e-ve),ye=s.deviceSizes.sort((_e,ve)=>_e-ve);return z({},s,{allSizes:J,deviceSizes:ye})},[F]);let x=ie,E=r?"responsive":"intrinsic";"layout"in x&&(x.layout&&(E=x.layout),delete x.layout);let N=Te;if("loader"in x){if(x.loader){const s=x.loader;var b;b=J=>{const ye=u(J,["config"]);return s(ye)},N=b}delete x.loader}let oe="";if(me(n)){const s=y(n)?n.default:n;if(!s.src)throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(s)}`);if(R=R||s.blurDataURL,oe=s.src,(!E||E!=="fill")&&(C=C||s.height,S=S||s.width,!s.height||!s.width))throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(s)}`)}n=typeof n=="string"?n:oe;let G=!d&&(a==="lazy"||typeof a>"u");(n.startsWith("data:")||n.startsWith("blob:"))&&(i=!0,G=!1),typeof window<"u"&&ee.has(n)&&(G=!1),U.unoptimized&&(i=!0);const[De,Ue]=o.useState(!1),[Ne,We,ze]=ue.useIntersection({rootRef:_,rootMargin:m||"200px",disabled:!G}),ke=!G||We,f={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},pe={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0};let ge=!1,he;const Be={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:ne,objectPosition:ae};let W=P(S),X=P(C);const Le=P(I),He=Object.assign({},M,Be),Ve=D==="blur"&&!De?{backgroundSize:ne||"cover",backgroundPosition:ae||"0% 0%",filter:"blur(20px)",backgroundImage:`url("${R}")`}:{};if(E==="fill")f.display="block",f.position="absolute",f.top=0,f.left=0,f.bottom=0,f.right=0;else if(typeof W<"u"&&typeof X<"u"){const s=X/W,J=isNaN(s)?"100%":`${s*100}%`;E==="responsive"?(f.display="block",f.position="relative",ge=!0,pe.paddingTop=J):E==="intrinsic"?(f.display="inline-block",f.position="relative",f.maxWidth="100%",ge=!0,pe.maxWidth="100%",he=`data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27${W}%27%20height=%27${X}%27/%3e`):E==="fixed"&&(f.display="inline-block",f.position="relative",f.width=W,f.height=X)}let L={src:te,srcSet:void 0,sizes:void 0};ke&&(L=H({config:U,src:n,unoptimized:i,layout:E,width:W,quality:Le,sizes:r,loader:N}));let Fe=n,je="imagesrcset",$e="imagesizes";j.__NEXT_REACT_ROOT&&(je="imageSrcSet",$e="imageSizes");const Ge={[je]:L.srcSet,[$e]:L.sizes},Xe=typeof window>"u"?o.default.useEffect:o.default.useLayoutEffect,Oe=o.useRef(V),Me=o.useRef(n);o.useEffect(()=>{Oe.current=V},[V]),Xe(()=>{Me.current!==n&&(ze(),Me.current=n)},[ze,n]);const Je=z({isLazy:G,imgAttributes:L,heightInt:X,widthInt:W,qualityInt:Le,layout:E,className:p,imgStyle:He,blurStyle:Ve,loading:a,config:U,unoptimized:i,placeholder:D,loader:N,srcString:Fe,onLoadingCompleteRef:Oe,setBlurComplete:Ue,setIntersection:Ne,isVisible:ke,noscriptSizes:r},x);return o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:f},ge?o.default.createElement("span",{style:pe},he?o.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:he}):null):null,o.default.createElement(qe,Object.assign({},Je))),d?o.default.createElement(de.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+L.src+L.srcSet+L.sizes,rel:"preload",as:"image",href:L.srcSet?void 0:L.src},Ge))):null)}function B(e){return e[0]==="/"?e.slice(1):e}const fe=j.__NEXT_IMAGE_OPTS,ee=new Set,te="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";typeof window>"u"&&(Ke.__NEXT_IMAGE_IMPORTED=!0);function g({config:e,src:n,width:r,quality:i}){const d=new URL(`${e.path}${B(n)}`),a=d.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString()),d.href}function l({config:e,src:n,width:r}){return`${e.path}${B(n)}?imwidth=${r}`}function v({config:e,src:n,width:r,quality:i}){const a=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return`${e.path}${a}${B(n)}`}function c({src:e}){throw new Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}function h({config:e,src:n,width:r,quality:i}){return n.endsWith(".svg")&&!e.dangerouslyAllowSVG?n:`${ce.normalizePathTrailingSlash(e.path)}?url=${encodeURIComponent(n)}&w=${r}&q=${i||75}`}const k=new Map([["default",h],["imgix",g],["cloudinary",v],["akamai",l],["custom",c]]);function y(e){return e.default!==void 0}function O(e){return e.src!==void 0}function me(e){return typeof e=="object"&&(y(e)||O(e))}function A({deviceSizes:e,allSizes:n},r,i,d){if(d&&(i==="fill"||i==="responsive")){const _=/(^|\s)(1?\d?\d)vw/g,m=[];for(let p;p=_.exec(d);p)m.push(parseInt(p[2]));if(m.length){const p=Math.min(...m)*.01;return{widths:n.filter(I=>I>=e[0]*p),kind:"w"}}return{widths:n,kind:"w"}}return typeof r!="number"||i==="fill"||i==="responsive"?{widths:e,kind:"w"}:{widths:[...new Set([r,r*2].map(_=>n.find(m=>m>=_)||n[n.length-1]))],kind:"x"}}function H({config:e,src:n,unoptimized:r,layout:i,width:d,quality:a,sizes:_,loader:m}){if(r)return{src:n,srcSet:void 0,sizes:void 0};const{widths:p,kind:I}=A(e,d,i,_),S=p.length-1;return{sizes:!_&&I==="w"?"100vw":_,srcSet:p.map((C,M)=>`${m({config:e,src:n,quality:a,width:C})} ${I==="w"?C:M+1}${I}`).join(", "),src:m({config:e,src:n,quality:a,width:p[S]})}}function P(e){if(typeof e=="number")return e;if(typeof e=="string")return parseInt(e,10)}function Te(e){var n;const r=((n=e.config)==null?void 0:n.loader)||"default",i=k.get(r);if(i)return i(e);throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${Q.VALID_LOADERS.join(", ")}. Received: ${r}`)}function xe(e,n,r,i,d,a){if(!e||e.src===te||e["data-loaded-src"]===n)return;e["data-loaded-src"]=n,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentNode&&(ee.add(n),i==="blur"&&a(!0),d!=null&&d.current)){const{naturalWidth:m,naturalHeight:p}=e;d.current({naturalWidth:m,naturalHeight:p})}})}const qe=e=>{var{imgAttributes:n,heightInt:r,widthInt:i,qualityInt:d,layout:a,className:_,imgStyle:m,blurStyle:p,isLazy:I,placeholder:S,loading:C,srcString:M,config:ne,unoptimized:ae,loader:V,onLoadingCompleteRef:D,setBlurComplete:R,setIntersection:ie,onLoad:F,onError:U,isVisible:x,noscriptSizes:E}=e,N=u(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return C=I?"lazy":C,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},N,n,{decoding:"async","data-nimg":a,className:_,style:z({},m,p),ref:o.useCallback(b=>{ie(b),b!=null&&b.complete&&xe(b,M,a,S,D,R)},[ie,M,a,S,D,R]),onLoad:b=>{const oe=b.currentTarget;xe(oe,M,a,S,D,R),F&&F(b)},onError:b=>{S==="blur"&&R(!0),U&&U(b)}})),(I||S==="blur")&&o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},N,H({config:ne,src:M,unoptimized:ae,layout:a,width:i,quality:d,sizes:E,loader:V}),{decoding:"async","data-nimg":a,style:m,className:_,loading:C}))))};(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),w.exports=t.default)})(be,be.exports);var ht=be.exports,yt=ht;const Et=Qe(yt);export{Et as I};
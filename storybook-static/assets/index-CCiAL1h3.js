import{j as S}from"./jsx-runtime-DI8_P1Ft.js";import{P as n}from"./index-B3IC6ylx.js";import{r as a}from"./index-DPzuYzxM.js";const m=({children:g,moveY:y=!1,moveX:v=!1,minX:o,minY:s,maxX:u,maxY:d})=>{const r=a.useRef(null),l=a.useRef();a.useEffect(()=>{r.current&&(r.current.style.left=`${o|0}px`,r.current.style.top=`${s|0}px`)},[o,s]);const b=e=>{const{target:t,clientX:i,clientY:p}=e,{offsetTop:L,offsetLeft:h}=t,{left:x,top:D}=r.current.getBoundingClientRect();l.current={dragStartLeft:x-h,dragStartTop:D-L,dragStartX:i,dragStartY:p},window.addEventListener("mousemove",f,!1),window.addEventListener("mouseup",c,!1)},c=a.useCallback(()=>{window.removeEventListener("mousemove",f,!1),window.removeEventListener("mouseup",c,!1)},[]),E=({touches:e})=>{const{clientX:t,clientY:i}=e[0];w({valueX:t,valueY:i})},f=a.useCallback(({clientX:e,clientY:t})=>{const i=l.current.dragStartLeft+e-l.current.dragStartX,p=l.current.dragStartTop+t-l.current.dragStartY;w({valueX:i,valueY:p})},[]);a.useEffect(()=>()=>{window.removeEventListener("mousemove",f,!1),window.removeEventListener("mouseup",c,!1)},[]);const w=a.useCallback(({valueX:e,valueY:t})=>{v&&(u&&u>e?e=u:o&&o<e&&(e=o),r.current.style.left=`${e}px`),y&&(d&&d>t?t=d:s&&s<t&&(t=s),r.current.style.top=`${t}px`)},[u,d,o,s,v,y]);return S("div",{"data-testid":"draggable-element",onMouseDown:b,onTouchMove:E,ref:r,style:{width:"100%",position:"fixed",touchAction:"none"},children:g})};m.propTypes={children:n.any,maxX:n.any,maxY:n.any,minX:n.number,minY:n.number,moveX:n.bool,moveY:n.bool};try{m.displayName="Draggable",m.__docgenInfo={description:"",displayName:"Draggable",props:{moveY:{defaultValue:{value:"false"},description:"",name:"moveY",required:!1,type:{name:"boolean"}},moveX:{defaultValue:{value:"false"},description:"",name:"moveX",required:!1,type:{name:"boolean"}},minX:{defaultValue:null,description:"",name:"minX",required:!0,type:{name:"any"}},minY:{defaultValue:null,description:"",name:"minY",required:!0,type:{name:"any"}},maxX:{defaultValue:null,description:"",name:"maxX",required:!0,type:{name:"any"}},maxY:{defaultValue:null,description:"",name:"maxY",required:!0,type:{name:"any"}}}}}catch{}export{m as D};
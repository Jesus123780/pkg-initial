import{j as d}from"./jsx-runtime-DI8_P1Ft.js";import{T as n}from"./index-C-73uXbr.js";import"./index-DPzuYzxM.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./index-B3IC6ylx.js";import"./index-BINBIgVg.js";import"./index-RGaBZlDs.js";const D={title:"molecules/Toast",component:n,argTypes:{backgroundColor:{control:"color"}}},p=l=>d(n,{...l}),r=p.bind({});r.args={toastList:[{backgroundColor:"red",title:"Title",description:"Description"}]};const o=p.bind({});o.args={toastList:[{backgroundColor:"red",title:"Title 1",description:"Description 1",id:1},{backgroundColor:"green",title:"Title 2",description:"Description 2",id:2},{backgroundColor:"blue",title:"Title 3",description:"Description 3",id:3}]};var t,e,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  return <Toast {...args} />;
}`,...(s=(e=r.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};var a,i,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return <Toast {...args} />;
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const f=["TemplateToast","MultipleToasts"];export{o as MultipleToasts,r as TemplateToast,f as __namedExportsOrder,D as default};
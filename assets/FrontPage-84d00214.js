import{c as l,a as i,j as e,F as m,b as h,d,e as x,E as j,B as u,C as p,u as g,f,r as N,g as r,R as c,h as n,L as S}from"./index-500f4f4c.js";const v=l().shape({search:i().required()}),y={search:""},b=({onSubmit:s})=>e.jsx(m,{initialValues:y,validationSchema:v,onSubmit:s,children:e.jsxs(h,{className:"d-flex flex-column align-items-center",children:[e.jsx(d,{as:x,size:"lg",placeholder:"Search for events",className:"mb-3",name:"search"}),e.jsx(j,{component:"span",name:"search",className:"small text-danger mb-3"}),e.jsx(u,{type:"submit",variant:"primary",size:"lg",className:"text-white",title:"Search",children:e.jsx(p,{width:20})})]})}),w=()=>{const{onSearch:s}=g(),o=f();return N.useEffect(()=>{const a=window.localStorage.getItem("path");if(a){localStorage.removeItem("path");const t=JSON.parse(a);o(t.pathname,{search:t.search})}},[]),e.jsx(r,{children:e.jsx(c,{className:"justify-content-center",children:e.jsx(n,{sm:10,children:e.jsxs("div",{className:"bg-secondary d-flex flex-column py-5 my-5 rounded shadow-lg",children:[e.jsx(S,{style:{maxWidth:200},className:"mx-auto"}),e.jsx(r,{children:e.jsx(c,{className:"justify-content-center",children:e.jsx(n,{sm:6,children:e.jsx("div",{className:"py-3",children:e.jsx(b,{onSubmit:s})})})})})]})})})})};export{w as default};

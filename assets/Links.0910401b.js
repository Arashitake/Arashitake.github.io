import{C as L}from"./Common.6299f1fc.js";import{_ as h,f,I as $,j as v,m as b,W as B,o as a,c as o,h as s,H as g,z as d,b as t,t as l,A as C,k as w,g as x,w as H,a as P,M as p,L as k}from"./app.0d4c2068.js";import"./Sidebar.bd4a22c4.js";const z={class:"title"},N={key:1,class:"subtitle"},S=f({__name:"PageHeader",props:{pageInfo:{type:Object,default:()=>({})}},setup(m){const r=m,{pageInfo:e}=$(r),u=v(),n=b(()=>e.value.bgImage?{backgroundImage:`url(${B(e.value.bgImage.path)})`}:{});return(i,_)=>(a(),o("div",{class:C(["page-header",{"use-image":s(e).bgImage}]),style:g(s(n))},[s(e).bgImage&&s(e).bgImage.mask?(a(),o("div",{key:0,class:"header-mask",style:g({background:s(e).bgImage.mask})},null,4)):d("",!0),t("h1",z,l(s(e).title||s(u).title),1),s(e).subtitle?(a(),o("h3",N,l(s(e).subtitle),1)):d("",!0)],6))}});var V=h(S,[["__file","PageHeader.vue"]]);const j={class:"links-wrapper"},D={class:"link-group"},F={class:"content"},T=["href"],A=["src"],E={class:"sitename"},M={class:"desc"},O=f({__name:"Links",setup(m){const r=w(),e=v(),u=b(()=>{var i;const n=r.value.pages&&r.value.pages.links?r.value.pages.links:{};return n.title===void 0&&(n.title=(i=r.value.pageText)==null?void 0:i.links),n});return(n,i)=>(a(),x(L,null,{page:H(()=>[P(V,{"page-info":s(u)},null,8,["page-info"]),t("div",j,[(a(!0),o(k,null,p(s(e).links,(_,I)=>(a(),o("div",{key:`link-group-${I}`,class:"link-section"},[t("h2",null,l(_.title),1),t("div",D,[(a(!0),o(k,null,p(_.items,(c,y)=>(a(),o("div",{key:`link-${y}`,class:"link-item"},[t("div",F,[t("a",{href:c.url,target:"_blank",rel:"noopener noreferrer"},[t("img",{src:n.$withBase(c.img)},null,8,A),t("span",E,l(c.sitename),1),t("div",M,l(c.desc),1)],8,T)])]))),128))])]))),128))])]),_:1}))}});var G=h(O,[["__file","Links.vue"]]);export{G as default};

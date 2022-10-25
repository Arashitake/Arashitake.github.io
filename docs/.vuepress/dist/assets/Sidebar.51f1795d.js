import{k as x,m as k,B as he,_ as $,f as y,o as s,c as u,b as i,h as a,C as be,r as C,D as H,E as R,a as _,F as fe,v as G,G as J,t as E,H as ie,g as T,z as S,A as P,w as Y,y as q,T as we,I as ue,s as N,J as Q,K as ce,L as A,M as K,N as W,j as de,l as U,n as ke,O as $e,P as ye,Q as Ie,R as Le,S as Te,U as Se,V as xe,e as Be,q as Ne}from"./app.f9568f53.js";const le=d=>decodeURI(d).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Ce=(d,t)=>{if(t.hash===d)return!0;const e=le(t.path),r=le(d);return e===r},ve=(d,t)=>d.link&&Ce(d.link,t)?!0:d.children?d.children.some(e=>ve(e,t)):!1,Ve=()=>{const d=x(),t=he();return k(()=>t.value.frontmatter.layout==="Post"&&t.value.frontmatter.catalog!==!1&&(d.value.catalog||t.value.frontmatter.catalog)&&t.value.headers.length>0)},Me={class:"footer"},De=["innerHTML"],Oe=y({__name:"Footer",setup(d){const e=x().value.footer;return(r,o)=>(s(),u("footer",Me,[i("span",{innerHTML:a(e)},null,8,De)]))}});var St=$(Oe,[["__file","Footer.vue"]]);const He=["title"],Re=y({__name:"ToggleColorModeButton",setup(d){const t=["light","dark","auto"],e=x(),{currentMode:r}=be(),o=()=>{const h=(t.indexOf(r.value)+1)%t.length;r.value=t[h]};return(v,h)=>{const m=C("VIcon");return s(),u("div",{title:a(e).toggleColorMode,onClick:o},[H(_(m,{name:"fa-sun"},null,512),[[R,a(r)==="light"]]),H(_(m,{name:"fa-moon"},null,512),[[R,a(r)==="dark"]]),H(_(m,{name:"fa-magic"},null,512),[[R,a(r)==="auto"]])],8,He)}}});var Ee=$(Re,[["__file","ToggleColorModeButton.vue"]]);const Pe=["title"],Fe=y({__name:"ToggleSidebarButton",emits:["toggle"],setup(d){const t=x();return(e,r)=>{const o=C("VIcon");return s(),u("div",{class:"toggle-sidebar-button",title:a(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:r[0]||(r[0]=v=>e.$emit("toggle"))},[_(o,{name:"bi-layout-sidebar-inset"})],8,Pe)}}});var Ae=$(Fe,[["__file","ToggleSidebarButton.vue"]]);const We={class:"menu-btn-wrapper"},qe={class:"menu-btn-icon"},Ke=i("span",null,null,-1),ze=i("span",null,null,-1),je=i("span",null,null,-1),Ue=[Ke,ze,je],Ye={class:"menu-progress"},Ge={class:"menu-btn-child-wrapper"},Je=y({__name:"Menu",emits:["toggle-sidebar","toggle-catalog"],setup(d){const t=x(),e=fe({isMenuOpen:!1,isTextVisible:!1,isBtnIconVisible:!0,menuText:"0",borderLen:"0% 314.15926%"});G(()=>{window.addEventListener("scroll",r)}),J(()=>{window.removeEventListener("scroll",r)});const r=()=>{const c=window.pageYOffset,b=m(),n=document.documentElement.clientHeight;let l=c/(b-n)*100;l>100&&(l=100),isNaN(l)||Math.round(l)<=0?(l=0,e.isTextVisible=!1,e.isBtnIconVisible=!0):(e.isTextVisible=!0,e.menuText=Math.round(l)+"%",e.isBtnIconVisible=!1),e.borderLen=3.1415926*(l||0)+"% 314.15926%"},o=()=>{e.isMenuOpen=!e.isMenuOpen},v=()=>{window.scrollTo({top:0,behavior:"smooth"})},h=()=>{window.scrollTo({top:m(),behavior:"smooth"})},m=()=>{const c=document.querySelector(".theme-container");return c?c.offsetHeight:0},g=Ve();return(c,b)=>{const n=C("VIcon");return s(),u("div",{class:P(["menu-btn-container",{open:e.isMenuOpen}])},[i("div",We,[i("div",{class:"menu-btn",onClick:o},[H(i("div",qe,Ue,512),[[R,e.isBtnIconVisible]]),H(i("div",{class:"menu-text"},E(e.menuText),513),[[R,e.isTextVisible]]),(s(),u("svg",Ye,[i("circle",{class:"menu-border",cx:"50%",cy:"50%",r:"48%",style:ie({"stroke-dasharray":e.borderLen})},null,4)]))]),i("div",Ge,[a(t).colorModeSwitch?(s(),T(Ee,{key:0,class:"menu-btn-child"})):S("",!0),i("div",{class:"menu-btn-child",onClick:h},[_(n,{name:"fa-chevron-down"})]),i("div",{class:"menu-btn-child",onClick:v},[_(n,{name:"fa-chevron-up"})]),a(g)?(s(),u("div",{key:1,class:"menu-btn-child menu-toc-btn",onClick:b[0]||(b[0]=l=>c.$emit("toggle-catalog"))},[_(n,{name:"fa-list-ul"})])):S("",!0),_(Ae,{class:"menu-btn-child menu-btn-sidebar",onToggle:b[1]||(b[1]=l=>c.$emit("toggle-sidebar"))})])])],2)}}});var xt=$(Je,[["__file","Menu.vue"]]);const Qe=y({__name:"DropdownTransition",setup(d){const t=r=>{r.style.height=r.scrollHeight+"px"},e=r=>{r.style.height=""};return(r,o)=>(s(),T(we,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:Y(()=>[q(r.$slots,"default")]),_:3}))}});var pe=$(Qe,[["__file","DropdownTransition.vue"]]);const Xe=["aria-label"],Ze={class:"title"},et={key:0,class:"nav-icon"},tt=i("span",{class:"arrow down"},null,-1),nt=["aria-label"],at={class:"title"},st={key:0,class:"nav-icon"},ot={class:"navbar-dropdown"},rt={class:"navbar-dropdown-subtitle"},lt={key:1},it={class:"navbar-navbar-dropdown-subitem-wrapper"},ut=y({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(d){const t=d,{item:e}=ue(t),r=k(()=>e.value.ariaLabel||e.value.text),o=N(!1),v=Q();ce(()=>v.path,()=>{o.value=!1});const h=g=>{g.detail===0?o.value=!o.value:o.value=!1},m=(g,c)=>c[c.length-1]===g;return(g,c)=>{const b=C("VIcon");return s(),u("div",{class:P(["navbar-dropdown-wrapper",{open:o.value}])},[i("button",{class:"navbar-dropdown-title",type:"button","aria-label":a(r),onClick:h},[i("span",Ze,[a(e).icon?(s(),u("span",et,[_(b,{name:a(e).icon},null,8,["name"])])):S("",!0),i("span",null,E(a(e).text),1)]),tt],8,Xe),i("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":a(r),onClick:c[0]||(c[0]=n=>o.value=!o.value)},[i("span",at,[a(e).icon?(s(),u("span",st,[_(b,{name:a(e).icon},null,8,["name"])])):S("",!0),i("span",null,E(a(e).text),1)]),i("span",{class:P(["arrow",o.value?"down":"right"])},null,2)],8,nt),_(pe,null,{default:Y(()=>[H(i("ul",ot,[(s(!0),u(A,null,K(a(e).children,n=>(s(),u("li",{key:n.text,class:"navbar-dropdown-item"},[n.children?(s(),u(A,{key:0},[i("h4",rt,[n.link?(s(),T(W,{key:0,item:n,onFocusout:l=>m(n,a(e).children)&&n.children.length===0&&(o.value=!1)},null,8,["item","onFocusout"])):(s(),u("span",lt,E(n.text),1))]),i("ul",it,[(s(!0),u(A,null,K(n.children,l=>(s(),u("li",{key:l.link,class:"navbar-dropdown-subitem"},[_(W,{item:l,onFocusout:w=>m(l,n.children)&&m(n,a(e).children)&&(o.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(s(),T(W,{key:1,item:n,onFocusout:l=>m(n,a(e).children)&&(o.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[R,o.value]])]),_:1})],2)}}});var ct=$(ut,[["__file","NavbarDropdown.vue"]]);const dt={key:0,class:"navbar-items"},vt={key:0,class:"navbar-item"},pt={key:0,class:"nav-icon"},mt=y({__name:"NavbarItems",emits:["toggle-search"],setup(d){const t=()=>{const n=U(),l=$e(),w=ye(),f=x();return k(()=>{var I,L,F;const V=Object.keys(w.value.locales);if(V.length<2)return[];const M=n.currentRoute.value.path,B=n.currentRoute.value.fullPath,p=n.currentRoute.value.hash;return[{text:(I=f.value.selectLanguageText)!=null?I:"unknown language",ariaLabel:(F=(L=f.value.selectLanguageAriaLabel)!=null?L:f.value.selectLanguageText)!=null?F:"unknown language",icon:f.value.langIcon,children:V.map(O=>{var ee,te,ne,ae,se,oe;const z=(te=(ee=w.value.locales)==null?void 0:ee[O])!=null?te:{},X=(ae=(ne=f.value.locales)==null?void 0:ne[O])!=null?ae:{},Z=`${z.lang}`,ge=(se=X.selectLanguageName)!=null?se:Z;let j;if(Z===w.value.lang)j=B;else{const re=M.replace(l.value,O);n.getRoutes().some(_e=>_e.path===re)?j=`${re}${p}`:j=(oe=X.home)!=null?oe:O}return{text:ge,link:j}})}]})},e=n=>Ie(n)?Le(n):n.children?{...n,children:n.children.map(e)}:n,o=(()=>{const n=x();return k(()=>(n.value.navbar||[]).map(e))})(),v=t(),h=k(()=>[...o.value,...g.value?v.value:[]]),m=de(),g=k(()=>{const l=U().currentRoute.value.path;return m.value.layout===void 0&&l.indexOf("/page/")===-1&&ke.value.path!==""}),c=x(),b=k(()=>c.value.search&&m.value.search!==!1);return(n,l)=>{const w=C("VIcon");return a(h).length?(s(),u("nav",dt,[(s(!0),u(A,null,K(a(h),f=>(s(),u("div",{key:f.text,class:"navbar-item"},[f.children?(s(),T(ct,{key:0,item:f},null,8,["item"])):(s(),T(W,{key:1,item:f},null,8,["item"]))]))),128)),a(b)?(s(),u("div",vt,[i("a",{style:{cursor:"pointer"},onClick:l[0]||(l[0]=f=>n.$emit("toggle-search"))},[a(c).searchIcon?(s(),u("span",pt,[_(w,{name:a(c).searchIcon},null,8,["name"])])):S("",!0),i("span",null,E(a(c).searchText),1)])])):S("",!0)])):S("",!0)}}});var me=$(mt,[["__file","NavbarItems.vue"]]);const gt={class:"site-name"},_t=y({__name:"Navbar",props:{isSidebar:{type:Boolean,required:!0}},emits:["toggle-search"],setup(d){const t=x(),e=de(),r=U(),o=N(null),v=N(null),h=k(()=>t.value.home||"/"),m=k(()=>t.value.navbarTitle),g=N(0),c=k(()=>g.value?{maxWidth:g.value+"px"}:{}),b=N(0),n=N(!1),l=N(!1),w=N(!0),f=()=>{const p=window.pageYOffset;p<b.value?p>0&&n.value?l.value=!0:(l.value=!1,n.value=!1):(l.value=!1,o.value&&p>o.value.offsetHeight&&(n.value=!0)),b.value=p},V=()=>{let p=!1;e.value.layout==="HomePage"&&(p=!0),e.value.layout==="Post"&&e.value.useHeaderImage&&(p=!0),e.value.layout==="Tags"&&t.value.pages&&t.value.pages.tags&&t.value.pages.tags.bgImage&&(p=!0),e.value.layout==="Links"&&t.value.pages&&t.value.pages.links&&t.value.pages.links.bgImage&&(p=!0),w.value=p};let M;G(()=>{const D=B(o.value,"paddingLeft")+B(o.value,"paddingRight"),I=()=>{var L;window.innerWidth<=719||!o.value?g.value=0:g.value=o.value.offsetWidth-D-(((L=v.value)==null?void 0:L.offsetWidth)||0)};I(),window.addEventListener("resize",I,!1),window.addEventListener("orientationchange",I,!1),V(),M=r.afterEach(()=>{V()}),window.addEventListener("scroll",f)}),J(()=>{window.removeEventListener("scroll",f),M()});function B(p,D){var F,O,z;const I=(z=(O=(F=p==null?void 0:p.ownerDocument)==null?void 0:F.defaultView)==null?void 0:O.getComputedStyle(p,null))==null?void 0:z[D],L=Number.parseInt(I,10);return Number.isNaN(L)?0:L}return(p,D)=>{const I=C("RouterLink"),L=C("NavbarSearch");return s(),u("header",{ref_key:"navbar",ref:o,class:P(["navbar",{"is-fixed":n.value||d.isSidebar,"is-visible":l.value||d.isSidebar,invert:w.value}])},[i("span",{ref_key:"navbarBrand",ref:v},[_(I,{to:a(h)},{default:Y(()=>[i("span",gt,E(a(m)),1)]),_:1},8,["to"])],512),i("div",{class:"navbar-items-wrapper",style:ie(a(c))},[q(p.$slots,"before"),_(me,{class:"can-hide",onToggleSearch:D[0]||(D[0]=F=>p.$emit("toggle-search"))}),q(p.$slots,"after"),_(L)],4)],2)}}});var Bt=$(_t,[["__file","Navbar.vue"]]);const ht=["onKeydown"],bt={class:"sidebar-item-children"},ft=y({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(d){const t=d,{item:e,depth:r}=ue(t),o=Q(),v=U(),h=k(()=>ve(e.value,o)),m=k(()=>({"sidebar-item":!0,"sidebar-heading":r.value===0,active:h.value,collapsible:e.value.collapsible})),g=k(()=>e.value.collapsible?h.value:!0),[c,b]=Te(g.value),n=w=>{e.value.collapsible&&(w.preventDefault(),b())},l=v.afterEach(w=>{Se(()=>{c.value=g.value})});return J(()=>{l()}),(w,f)=>{var M;const V=C("SidebarItem",!0);return s(),u("li",null,[a(e).link?(s(),T(W,{key:0,class:P(a(m)),item:a(e)},null,8,["class","item"])):(s(),u("p",{key:1,tabindex:"0",class:P(a(m)),onClick:n,onKeydown:xe(n,["enter"])},[Be(E(a(e).text)+" ",1),a(e).collapsible?(s(),u("span",{key:0,class:P(["arrow",a(c)?"down":"right"])},null,2)):S("",!0)],42,ht)),(M=a(e).children)!=null&&M.length?(s(),T(pe,{key:2},{default:Y(()=>[H(i("ul",bt,[(s(!0),u(A,null,K(a(e).children,B=>(s(),T(V,{key:`${a(r)}${B.text}${B.link}`,item:B,depth:a(r)+1},null,8,["item","depth"]))),128))],512),[[R,a(c)]])]),_:1})):S("",!0)])}}});var wt=$(ft,[["__file","SidebarItem.vue"]]);const kt={key:0,class:"sidebar-items"},$t=y({__name:"SidebarItems",setup(d){const t=Q(),e=Ne();return G(()=>{ce(()=>t.hash,r=>{const o=document.querySelector(".sidebar");if(!o)return;const v=document.querySelector(`.sidebar a.sidebar-item[href="${t.path}${r}"]`);if(!v)return;const{top:h,height:m}=o.getBoundingClientRect(),{top:g,height:c}=v.getBoundingClientRect();g<h?v.scrollIntoView(!0):g+c>h+m&&v.scrollIntoView(!1)})}),(r,o)=>a(e).length?(s(),u("ul",kt,[(s(!0),u(A,null,K(a(e),v=>(s(),T(wt,{key:`${v.text}${v.link}`,item:v},null,8,["item"]))),128))])):S("",!0)}});var yt=$($t,[["__file","SidebarItems.vue"]]);const It={class:"sidebar"},Lt=y({__name:"Sidebar",emits:["toggle-search"],setup(d){return(t,e)=>(s(),u("aside",It,[_(me,{onToggleSearch:e[0]||(e[0]=r=>t.$emit("toggle-search"))}),q(t.$slots,"top"),_(yt),q(t.$slots,"bottom")]))}});var Nt=$(Lt,[["__file","Sidebar.vue"]]);export{St as F,xt as M,Bt as N,Nt as S};

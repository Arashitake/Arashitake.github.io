import{a0 as G,a1 as M,a2 as H,_ as V,f as F,k as y,r as U,o as l,c as u,h as n,a as P,N as E,z as k,b as L,t as N,w as I,L as w,M as O,e as R,j as C,m as x,B as $,q as j,J as q,Q as z,R as A,a3 as J}from"./app.0d4c2068.js";const Q=a=>!G(a)||/github\.com/.test(a)?"GitHub":/bitbucket\.org/.test(a)?"Bitbucket":/gitlab\.com/.test(a)?"GitLab":/gitee\.com/.test(a)?"Gitee":null,K={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},W=({docsRepo:a,editLinkPattern:c})=>{if(c)return c;const o=Q(a);return o!==null?K[o]:null},X=({docsRepo:a,docsBranch:c,docsDir:o,filePathRelative:p,editLinkPattern:_})=>{if(!p)return null;const d=W({docsRepo:a,editLinkPattern:_});return d?d.replace(/:repo/,G(a)?a:`https://github.com/${a}`).replace(/:branch/,c).replace(/:path/,M(`${H(o)}/${p}`)):null},Y={class:"page-meta"},Z={key:0,class:"meta-item edit-link"},tt={key:1,class:"meta-item last-updated"},et={class:"meta-item-label"},nt={class:"meta-item-info"},at={key:2,class:"meta-item contributors"},st={class:"meta-item-label"},rt={class:"meta-item-info"},it=["title"],ot=R(", "),lt=F({__name:"PageMeta",setup(a){const c=()=>{const t=y(),r=$(),i=C();return x(()=>{var D,S,T;if(!((S=(D=i.value.editLink)!=null?D:t.value.editLink)!=null?S:!0))return null;const{repo:e,docsRepo:s=e,docsBranch:f="main",docsDir:v="",editLinkText:g}=t.value;if(!s)return null;const B=X({docsRepo:s,docsBranch:f,docsDir:v,filePathRelative:r.value.filePathRelative,editLinkPattern:(T=i.value.editLinkPattern)!=null?T:t.value.editLinkPattern});return B?{text:g!=null?g:"Edit this page",link:B}:null})},o=()=>{const t=y(),r=$(),i=C();return x(()=>{var s,f,v,g;return!((f=(s=i.value.lastUpdated)!=null?s:t.value.lastUpdated)!=null?f:!0)||!((v=r.value.git)!=null&&v.updatedTime)?null:new Date((g=r.value.git)==null?void 0:g.updatedTime).toLocaleString()})},p=()=>{const t=y(),r=$(),i=C();return x(()=>{var e,s,f,v;return((s=(e=i.value.contributors)!=null?e:t.value.contributors)!=null?s:!0)&&(v=(f=r.value.git)==null?void 0:f.contributors)!=null?v:null})},_=y(),d=c(),b=o(),m=p();return(t,r)=>{const i=U("VIcon"),h=U("ClientOnly");return l(),u("footer",Y,[n(d)?(l(),u("div",Z,[P(i,{name:"fa-pencil-alt"}),P(E,{class:"meta-item-label",item:n(d)},null,8,["item"])])):k("",!0),n(b)?(l(),u("div",tt,[L("span",et,N(n(_).lastUpdatedText)+": ",1),P(h,null,{default:I(()=>[L("span",nt,N(n(b)),1)]),_:1})])):k("",!0),n(m)&&n(m).length?(l(),u("div",at,[L("span",st,N(n(_).contributorsText)+": ",1),L("span",rt,[(l(!0),u(w,null,O(n(m),(e,s)=>(l(),u(w,{key:s},[L("span",{class:"contributor",title:`email: ${e.email}`},N(e.name),9,it),s!==n(m).length-1?(l(),u(w,{key:0},[ot],64)):k("",!0)],64))),128))])])):k("",!0)])}}});var ht=V(lt,[["__file","PageMeta.vue"]]);const ut={key:0,class:"page-nav"},ct={class:"inner"},dt={key:0,class:"prev"},mt={key:1,class:"next"},pt=F({__name:"PageNav",setup(a){const c=t=>t===!1?null:z(t)?A(t):J(t)?t:!1,o=(t,r,i)=>{const h=t.findIndex(e=>e.link===r);if(h!==-1){const e=t[h+i];return e!=null&&e.link?e:null}for(const e of t)if(e.children){const s=o(e.children,r,i);if(s)return s}return null},p=C(),_=j(),d=q(),b=x(()=>{const t=c(p.value.prev);return t!==!1?t:o(_.value,d.path,-1)}),m=x(()=>{const t=c(p.value.next);return t!==!1?t:o(_.value,d.path,1)});return(t,r)=>n(b)||n(m)?(l(),u("nav",ut,[L("p",ct,[n(b)?(l(),u("span",dt,[P(E,{item:n(b)},null,8,["item"])])):k("",!0),n(m)?(l(),u("span",mt,[P(E,{item:n(m)},null,8,["item"])])):k("",!0)])])):k("",!0)}});var ft=V(pt,[["__file","PageNav.vue"]]);export{ht as P,ft as a};

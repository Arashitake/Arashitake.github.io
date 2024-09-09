import{C as J}from"./Common.6299f1fc.js";import{P as K}from"./PageHeader.629de037.js";import{_ as N,f as E,u as b,l as W,X,a6 as z,a4 as F,m as A,o as s,c as n,L as C,M as L,A as x,h as y,H as q,e as G,t as h,s as D,F as O,K as Q,r as U,b as e,a as S,w as M,z as $,D as k,E as T,p as Z,i as ee,J as te,g as ae}from"./app.0d4c2068.js";import{r as se}from"./resolveTime.fab24dba.js";import"./Sidebar.bd4a22c4.js";const oe=p=>{const c={},l=[];for(const t of p){if(!t.info.date)continue;const g=se(t.info.date,"year");c[g]?c[g].push(t):c[g]=[t]}for(const t in c)l.unshift({year:t,data:c[t]});return l},ne=(p,c)=>c===""?p:p.filter(l=>l.info.tags?l.info.tags.includes(c):!1);const le={class:"taglist"},re=["onClick"],ce={key:0},ie={key:1},ue=E({__name:"TagList",props:{currentTag:{type:String,default:""}},setup(p){const c=b(),l=W(),t=X(),{tagsWithColor:g}=z(),{posts:f}=F(),r=A(()=>[{name:c.value.showAllTagsText,path:t.value.path,tagColor:null,pages:[]},...g.value]);return(P,_)=>(s(),n("div",le,[(s(!0),n(C,null,L(y(r),(i,B)=>(s(),n("span",{key:B,class:x(["article-tag",[i.name===p.currentTag&&"active",i.path===y(t).path&&"tag-all"]]),style:q([i.tagColor?{backgroundColor:i.tagColor}:{}]),onClick:V=>y(l).push(i.path)},[G(h(i.name)+" ",1),i.path==y(t).path?(s(),n("sup",ce,h(y(f).length),1)):(s(),n("sup",ie,h(i.pages.length),1))],14,re))),128))]))}});var ge=N(ue,[["__scopeId","data-v-48aaea0a"],["__file","TagList.vue"]]);const R=p=>(Z("data-v-19b6e374"),p=p(),ee(),p),pe={class:"tagpost-box"},_e={class:"tag-postlist"},de={class:"year"},ve={class:"post-item"},he={class:"post-time"},fe=R(()=>e("span",{class:"date-icon"},null,-1)),me={class:"post-content"},ye={class:"post-img"},ke=["src","alt"],Te={class:"post-text"},Ce={class:"title"},Le={key:0,class:"subtitle"},Pe={key:0,class:"pagelist"},xe=["onClick"],we={key:1,class:"pagelist"},$e=R(()=>e("span",null,"...",-1)),Ae=["onClick"],Se=R(()=>e("span",null,"...",-1)),Be=E({__name:"TagPostList",props:{data:{type:Array,default:()=>[]}},setup(p){const c=p,l=D(null),t=D(2),g=D(0),f=7,r=O([]),P=o=>{let d=0,u=[];for(let a=0;a<o.length;a++){d<f&&u.push({year:o[a].year,data:[]});for(let m=0;m<o[a].data.length;m++)d<f&&(d++,u[u.length-1].data.push(o[a].data[m])),d==f&&(r.push(u),u=[],u.push({year:o[a].year,data:[]}),d=0);a==o.length-1&&u[u.length-1].data.length!=0&&r.push(u)}};let _=c.data;Q(()=>c.data,o=>{_!==o&&(_=o,r.length=0,P(o),g.value=0)},{immediate:!0});const i=o=>{const d=r.length-1;let u=[...Array(5).keys()].map(a=>a+o);return o<=2&&(t.value=2),u[u.length-1]>=d&&(t.value=d-4),o=t.value,u=[...Array(5).keys()].map(a=>a+o),u},B=()=>{t.value-=5},V=()=>{t.value+=5},w=o=>{g.value=o-1,l.value&&l.value.scrollIntoView({behavior:"smooth"})},H=o=>new Date(o).toLocaleDateString().replace(new RegExp("/","gm"),"-");return P(c.data),(o,d)=>{const u=U("RouterLink");return s(),n("div",pe,[e("div",{class:"scroll-ele",ref_key:"targetElement",ref:l},null,512),(s(!0),n(C,null,L(r[g.value],(a,m)=>(s(),n("section",{key:m},[e("div",_e,[e("span",de,h(a.year),1),(s(!0),n(C,null,L(a.data,(v,I)=>(s(),n("div",{key:I,class:"item"},[e("div",ve,[e("div",he,[e("p",null,h(H(v.info.date)),1),fe]),S(u,{to:v.path},{default:M(()=>[e("div",me,[e("div",ye,[v.info.headerImage?(s(),n("img",{key:0,src:v.info.headerImage,alt:v.info.title},null,8,ke)):$("",!0)]),e("div",Te,[e("p",Ce,h(v.info.title),1),v.info.subtitle?(s(),n("p",Le,h(v.info.subtitle),1)):$("",!0)]),e("ul",null,[(s(!0),n(C,null,L(v.info.tags,(Y,j)=>(s(),n("li",{key:j},h(Y),1))),128))])])]),_:2},1032,["to"])])]))),128))])]))),128)),r.length<=7?(s(),n("ul",Pe,[(s(!0),n(C,null,L(r.length,(a,m)=>(s(),n("li",{key:m,onClick:v=>w(a)},[e("span",{class:x(a-1===g.value?"item-hover":"")},h(a),3)],8,xe))),128))])):$("",!0),r.length>7?(s(),n("ul",we,[k(e("button",{onClick:B},"<",512),[[T,t.value!==2]]),e("li",{onClick:d[0]||(d[0]=a=>w(1))},[e("span",{class:x(g.value===0?"item-hover":"")},"1",2)]),k(e("div",null,[$e,k(e("span",null,"......",512),[[T,t.value===r.length-5]])],512),[[T,t.value!==2]]),(s(!0),n(C,null,L(i(t.value),(a,m)=>(s(),n("li",{key:m,onClick:v=>w(a)},[e("span",{class:x(a-1===g.value?"item-hover":"")},h(a),3)],8,Ae))),128)),k(e("div",null,[Se,k(e("span",null,"......",512),[[T,t.value===2]])],512),[[T,t.value!==r.length-5]]),e("li",{onClick:d[1]||(d[1]=a=>w(r.length))},[e("span",{class:x(g.value===r.length-1?"item-hover":"")},h(r.length),3)]),k(e("button",{onClick:V},">",512),[[T,t.value!==r.length-5]])])):$("",!0)])}}});var De=N(Be,[["__scopeId","data-v-19b6e374"],["__file","TagPostList.vue"]]);const Ne={class:"tags-wrapper"},Ee=E({__name:"Tags",setup(p){const c=te(),l=b(),{posts:t}=F(),{tags:g}=z(),f=A(()=>{const _=g.value.find(i=>i.path===c.path);return _?_.name:l.value.showAllTagsText}),r=A(()=>{const _=f.value===l.value.showAllTagsText?"":f.value;return oe(ne(t.value,_))}),P=A(()=>{var i;const _=l.value.pages&&l.value.pages.tags?l.value.pages.tags:{};return _.title===void 0&&(_.title=(i=l.value.pageText)==null?void 0:i.tags),_});return(_,i)=>(s(),ae(J,null,{page:M(()=>[S(K,{"page-info":y(P)},null,8,["page-info"]),e("div",Ne,[S(ge,{"current-tag":y(f)},null,8,["current-tag"]),S(De,{data:y(r)},null,8,["data"])])]),_:1}))}});var Me=N(Ee,[["__scopeId","data-v-3f63a796"],["__file","Tags.vue"]]);export{Me as default};

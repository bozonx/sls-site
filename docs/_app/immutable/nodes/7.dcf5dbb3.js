import{P as $}from"../chunks/constants.f625d88e.js";import{l as E}from"../chunks/requests.bf021245.js";import{s as S,f as _,a as j,y,g as h,d as u,c as w,h as g,j as p,r as v,i as b,v as N}from"../chunks/scheduler.3ff4aac6.js";import{S as O,i as P,b as k,d as C,m as D,a as I,t as R,e as T}from"../chunks/index.94ef6edc.js";import{b as A}from"../chunks/t.f8372d26.js";import{R as F}from"../chunks/RenderHtml.017da696.js";const J=async a=>{const n=await E(a,`/api/1/${$}/${a.params.lang}/main`);return{result:JSON.parse(n.result)}},L=Object.freeze(Object.defineProperty({__proto__:null,load:J},Symbol.toStringTag,{value:"Module"}));function M(a){let n,s,l,m,e,c,o,i;return document.title=n=a[1]("chunks.projectFullName"),o=new F({props:{html:a[0].result.html}}),{c(){s=_("meta"),m=j(),e=_("section"),c=_("div"),k(o.$$.fragment),this.h()},l(t){const r=y("svelte-1o5bwrg",document.head);s=h(r,"META",{name:!0,content:!0}),r.forEach(u),m=w(t),e=h(t,"SECTION",{});var d=g(e);c=h(d,"DIV",{class:!0});var f=g(c);C(o.$$.fragment,f),f.forEach(u),d.forEach(u),this.h()},h(){p(s,"name","description"),p(s,"content",l=a[0].result.meta.descr),p(c,"class","html-block")},m(t,r){v(document.head,s),b(t,m,r),b(t,e,r),v(e,c),D(o,c,null),i=!0},p(t,[r]){(!i||r&2)&&n!==(n=t[1]("chunks.projectFullName"))&&(document.title=n),(!i||r&1&&l!==(l=t[0].result.meta.descr))&&p(s,"content",l);const d={};r&1&&(d.html=t[0].result.html),o.$set(d)},i(t){i||(I(o.$$.fragment,t),i=!0)},o(t){R(o.$$.fragment,t),i=!1},d(t){t&&(u(m),u(e)),u(s),T(o)}}}function q(a,n,s){let l;N(a,A,e=>s(1,l=e));let{data:m}=n;return a.$$set=e=>{"data"in e&&s(0,m=e.data)},[m,l]}class Q extends O{constructor(n){super(),P(this,n,q,M,S,{data:0})}}export{Q as component,L as universal};
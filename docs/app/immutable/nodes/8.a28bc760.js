import{a as j}from"../chunks/requests.bf021245.js";import{P as v}from"../chunks/Button.60812e86.js";import{s as P,A as $,f,a as A,T as E,g as h,d as c,c as S,h as y,j as p,x as O,i as g,z as N}from"../chunks/scheduler.bd84d178.js";import{S as T,i as k,b as w,d as z,m as C,a as F,t as I,e as M}from"../chunks/index.932a6797.js";import{g as U,c as q,d as D}from"../chunks/tw-merge.65241f9e.js";import{o as b}from"../chunks/objects.a5aee15f.js";import{A as G}from"../chunks/Article.a2e16167.js";const R=async t=>(await j(t,v)).result,Y=Object.freeze(Object.defineProperty({__proto__:null,load:R},Symbol.toStringTag,{value:"Module"}));function B(t){let o,n,m,l,a,r,i;document.title=o=t[0].meta.title+" | "+t[1]("chunks.projectFullName");const d=[b(t[0].meta,"date","name","thumbUrl"),{html:t[0].html}];let _={};for(let e=0;e<d.length;e+=1)_=$(_,d[e]);return r=new G({props:_}),{c(){n=f("meta"),l=A(),a=f("secion"),w(r.$$.fragment),this.h()},l(e){const s=E("svelte-1e53jf8",document.head);n=h(s,"META",{name:!0,content:!0}),s.forEach(c),l=S(e),a=h(e,"SECION",{});var u=y(a);z(r.$$.fragment,u),u.forEach(c),this.h()},h(){p(n,"name","description"),p(n,"content",m=t[0].meta.descr)},m(e,s){O(document.head,n),g(e,l,s),g(e,a,s),C(r,a,null),i=!0},p(e,[s]){(!i||s&3)&&o!==(o=e[0].meta.title+" | "+e[1]("chunks.projectFullName"))&&(document.title=o),(!i||s&1&&m!==(m=e[0].meta.descr))&&p(n,"content",m);const u=s&1?U(d,[q(b(e[0].meta,"date","name","thumbUrl")),{html:e[0].html}]):{};r.$set(u)},i(e){i||(F(r.$$.fragment,e),i=!0)},o(e){I(r.$$.fragment,e),i=!1},d(e){e&&(c(l),c(a)),c(n),M(r)}}}function H(t,o,n){let m;N(t,D,a=>n(1,m=a));let{data:l}=o;return t.$$set=a=>{"data"in a&&n(0,l=a.data)},[l,m]}class Z extends T{constructor(o){super(),k(this,o,H,B,P,{data:0})}}export{Z as component,Y as universal};

import{s as j,f as $,a as h,B as w,g as T,d as g,c as b,h as P,j as _,x as k,i as f,z as F,M as G,l as L,m as M,n as O,y as q,U as y}from"../chunks/scheduler.a558e907.js";import{S as z,i as B,b as E,d as v,m as A,a as C,t as N,e as S}from"../chunks/index.44f1ba3c.js";import{A as H}from"../chunks/Button.995995c6.js";import"../chunks/singletons.1434d3ca.js";import{d as I}from"../chunks/tw-merge.c02d960d.js";import{P as U}from"../chunks/PageHeader.695582d8.js";import{T as X}from"../chunks/TagsGrid.75e772b3.js";function D(r){let s=r[1]("link.allTags")+"",t;return{c(){t=L(s)},l(a){t=M(a,s)},m(a,l){f(a,t,l)},p(a,l){l&2&&s!==(s=a[1]("link.allTags")+"")&&O(t,s)},d(a){a&&g(t)}}}function J(r){let s,t,a,l,n,m,c,o,p;return document.title=s=r[1]("link.allTags")+" | "+r[1]("chunks.projectFullName"),m=new U({props:{$$slots:{default:[D]},$$scope:{ctx:r}}}),o=new X({props:{tags:r[2]}}),{c(){t=$("meta"),l=h(),n=$("section"),E(m.$$.fragment),c=h(),E(o.$$.fragment),this.h()},l(e){const i=w("svelte-lgwchs",document.head);t=T(i,"META",{name:!0,content:!0}),i.forEach(g),l=b(e),n=T(e,"SECTION",{});var u=P(n);v(m.$$.fragment,u),c=b(u),v(o.$$.fragment,u),u.forEach(g),this.h()},h(){_(t,"name","description"),_(t,"content",a=r[1]("descr.allTags"))},m(e,i){k(document.head,t),f(e,l,i),f(e,n,i),A(m,n,null),k(n,c),A(o,n,null),p=!0},p(e,[i]){(!p||i&2)&&s!==(s=e[1]("link.allTags")+" | "+e[1]("chunks.projectFullName"))&&(document.title=s),(!p||i&2&&a!==(a=e[1]("descr.allTags")))&&_(t,"content",a);const u={};i&10&&(u.$$scope={dirty:i,ctx:e}),m.$set(u);const d={};i&4&&(d.tags=e[2]),o.$set(d)},i(e){p||(C(m.$$.fragment,e),C(o.$$.fragment,e),p=!0)},o(e){N(m.$$.fragment,e),N(o.$$.fragment,e),p=!1},d(e){e&&(g(l),g(n)),g(t),S(m),S(o)}}}function K(r,s,t){let a,l,n=q,m=()=>(n(),n=y(c,o=>t(2,l=o)),c);F(r,I,o=>t(1,a=o)),r.$$.on_destroy.push(()=>n());let c;return m(t(0,c=G(H))),[c,a,l]}class ee extends z{constructor(s){super(),B(this,s,K,J,j,{})}}export{ee as component};

import{s as j,f as $,a as h,B as w,g as T,d as _,c as b,h as P,j as g,x as k,i as f,z as F,S as G,l as L,m as O,n as q,y,_ as z}from"../chunks/scheduler.d92df8e5.js";import{S as B,i as H,b as E,d as S,m as v,a as A,t as C,e as N}from"../chunks/index.8ce64f8c.js";import{A as I}from"../chunks/Button.eb3946d4.js";import"../chunks/singletons.3d6696fa.js";import{d as M}from"../chunks/tw-merge.f0198306.js";import{P as X}from"../chunks/PageHeader.2da8af18.js";import{T as D}from"../chunks/TagsGrid.cfb144e8.js";function J(r){let s=r[1]("link.allTags")+"",t;return{c(){t=L(s)},l(a){t=O(a,s)},m(a,l){f(a,t,l)},p(a,l){l&2&&s!==(s=a[1]("link.allTags")+"")&&q(t,s)},d(a){a&&_(t)}}}function K(r){let s,t,a,l,n,m,c,o,p;return document.title=s=r[1]("link.allTags")+" | "+r[1]("chunks.projectFullName"),m=new X({props:{$$slots:{default:[J]},$$scope:{ctx:r}}}),o=new D({props:{tags:r[2]}}),{c(){t=$("meta"),l=h(),n=$("section"),E(m.$$.fragment),c=h(),E(o.$$.fragment),this.h()},l(e){const i=w("svelte-lgwchs",document.head);t=T(i,"META",{name:!0,content:!0}),i.forEach(_),l=b(e),n=T(e,"SECTION",{});var u=P(n);S(m.$$.fragment,u),c=b(u),S(o.$$.fragment,u),u.forEach(_),this.h()},h(){g(t,"name","description"),g(t,"content",a=r[1]("descr.allTags"))},m(e,i){k(document.head,t),f(e,l,i),f(e,n,i),v(m,n,null),k(n,c),v(o,n,null),p=!0},p(e,[i]){(!p||i&2)&&s!==(s=e[1]("link.allTags")+" | "+e[1]("chunks.projectFullName"))&&(document.title=s),(!p||i&2&&a!==(a=e[1]("descr.allTags")))&&g(t,"content",a);const u={};i&10&&(u.$$scope={dirty:i,ctx:e}),m.$set(u);const d={};i&4&&(d.tags=e[2]),o.$set(d)},i(e){p||(A(m.$$.fragment,e),A(o.$$.fragment,e),p=!0)},o(e){C(m.$$.fragment,e),C(o.$$.fragment,e),p=!1},d(e){e&&(_(l),_(n)),_(t),N(m),N(o)}}}function Q(r,s,t){let a,l,n=y,m=()=>(n(),n=z(c,o=>t(2,l=o)),c);F(r,M,o=>t(1,a=o)),r.$$.on_destroy.push(()=>n());let c;return m(t(0,c=G(I))),[c,a,l]}class ee extends B{constructor(s){super(),H(this,s,Q,K,j,{})}}export{ee as component};

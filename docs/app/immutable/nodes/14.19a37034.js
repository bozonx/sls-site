import{b as O}from"../chunks/requests.bf021245.js";import{s as V,f as d,a as k,B as z,g,d as c,c as E,h as $,j as _,x as u,i as h,z as b,l as S,m as j,n as I}from"../chunks/scheduler.a558e907.js";import{S as C,i as F,b as P,d as T,m as w,a as D,t as L,e as N}from"../chunks/index.44f1ba3c.js";import{p as H}from"../chunks/stores.f40f7962.js";import{d as M}from"../chunks/tw-merge.cda2b992.js";import{P as U}from"../chunks/PagesList.b8c22035.js";import{H as q}from"../chunks/HeaderSubLink.ab21bcfe.js";const A=async t=>O(t,`/api/1/tag/${t.params.lang}/${t.params.tag}/${t.params.page}`),x=Object.freeze(Object.defineProperty({__proto__:null,load:A},Symbol.toStringTag,{value:"Module"}));function B(t){let s=t[1]("link.allTags")+"",n;return{c(){n=S(s)},l(r){n=j(r,s)},m(r,i){h(r,n,i)},p(r,i){i&2&&s!==(s=r[1]("link.allTags")+"")&&I(n,s)},d(r){r&&c(n)}}}function G(t){let s,n,r=`${t[1]("header.tag")} #${t[2].params.tag}`,i,p,l,m,a;return m=new q({props:{href:`/${t[2].params.lang}/tags`,$$slots:{default:[B]},$$scope:{ctx:t}}}),{c(){s=d("div"),n=d("div"),i=S(r),p=k(),l=d("div"),P(m.$$.fragment),this.h()},l(e){s=g(e,"DIV",{class:!0});var o=$(s);n=g(o,"DIV",{class:!0});var f=$(n);i=j(f,r),f.forEach(c),p=E(o),l=g(o,"DIV",{});var v=$(l);T(m.$$.fragment,v),v.forEach(c),o.forEach(c),this.h()},h(){_(n,"class","flex-1"),_(s,"class","flex w-full")},m(e,o){h(e,s,o),u(s,n),u(n,i),u(s,p),u(s,l),w(m,l,null),a=!0},p(e,o){(!a||o&6)&&r!==(r=`${e[1]("header.tag")} #${e[2].params.tag}`)&&I(i,r);const f={};o&4&&(f.href=`/${e[2].params.lang}/tags`),o&10&&(f.$$scope={dirty:o,ctx:e}),m.$set(f)},i(e){a||(D(m.$$.fragment,e),a=!0)},o(e){L(m.$$.fragment,e),a=!1},d(e){e&&c(s),N(m)}}}function J(t){let s,n,r,i,p,l,m;return document.title=s=t[1]("header.tag")+" #"+t[2].params.tag+" | "+t[1]("chunks.projectFullName"),l=new U({props:{baseUrl:`/${t[2].params.lang}/blog`,res:t[0],$$slots:{default:[G]},$$scope:{ctx:t}}}),{c(){n=d("meta"),i=k(),p=d("secion"),P(l.$$.fragment),this.h()},l(a){const e=z("svelte-1txb5ix",document.head);n=g(e,"META",{name:!0,content:!0}),e.forEach(c),i=E(a),p=g(a,"SECION",{});var o=$(p);T(l.$$.fragment,o),o.forEach(c),this.h()},h(){_(n,"name","description"),_(n,"content",r=`${t[1]("descr.tag")} #${t[2].params.tag}`)},m(a,e){u(document.head,n),h(a,i,e),h(a,p,e),w(l,p,null),m=!0},p(a,[e]){(!m||e&6)&&s!==(s=a[1]("header.tag")+" #"+a[2].params.tag+" | "+a[1]("chunks.projectFullName"))&&(document.title=s),(!m||e&6&&r!==(r=`${a[1]("descr.tag")} #${a[2].params.tag}`))&&_(n,"content",r);const o={};e&4&&(o.baseUrl=`/${a[2].params.lang}/blog`),e&1&&(o.res=a[0]),e&14&&(o.$$scope={dirty:e,ctx:a}),l.$set(o)},i(a){m||(D(l.$$.fragment,a),m=!0)},o(a){L(l.$$.fragment,a),m=!1},d(a){a&&(c(i),c(p)),c(n),N(l)}}}function K(t,s,n){let r,i;b(t,M,l=>n(1,r=l)),b(t,H,l=>n(2,i=l));let{data:p}=s;return t.$$set=l=>{"data"in l&&n(0,p=l.data)},[p,r,i]}class ee extends C{constructor(s){super(),F(this,s,K,J,V,{data:0})}}export{ee as component,x as universal};

import{l as A}from"../chunks/requests.bf021245.js";import{s as B,f as S,a as P,y as D,g as b,d as m,c as w,h as y,j as v,r as E,i as k,U as H,v as J,l as T,m as C,n as F}from"../chunks/scheduler.3ff4aac6.js";import{S as G,i as K,b as I,d as M,m as U,a as $,c as Q,t as j,e as q,g as R}from"../chunks/index.94ef6edc.js";import{e as L}from"../chunks/Heading.f183ad18.js";import"../chunks/singletons.6a702819.js";import{b as V}from"../chunks/t.f8372d26.js";import{S as W}from"../chunks/SimpleLink.f68af206.js";import{P as X}from"../chunks/PageHeader.2984d2df.js";const Y=async o=>await A(o,`/api/1/seasons/${o.params.lang}`),ue=Object.freeze(Object.defineProperty({__proto__:null,load:Y},Symbol.toStringTag,{value:"Module"}));function N(o,a,e){const n=o.slice();return n[2]=a[e],n}function Z(o){let a=o[1]("link.allSeasons")+"",e;return{c(){e=T(a)},l(n){e=C(n,a)},m(n,r){k(n,e,r)},p(n,r){r&2&&a!==(a=n[1]("link.allSeasons")+"")&&F(e,a)},d(n){n&&m(e)}}}function x(o){let a=o[2].replace(/\-/," - ")+"",e;return{c(){e=T(a)},l(n){e=C(n,a)},m(n,r){k(n,e,r)},p(n,r){r&1&&a!==(a=n[2].replace(/\-/," - ")+"")&&F(e,a)},d(n){n&&m(e)}}}function O(o){let a,e,n,r;return e=new W({props:{href:`/seasons/${o[2]}/1`,$$slots:{default:[x]},$$scope:{ctx:o}}}),{c(){a=S("li"),I(e.$$.fragment),n=P()},l(l){a=b(l,"LI",{});var i=y(a);M(e.$$.fragment,i),n=w(i),i.forEach(m)},m(l,i){k(l,a,i),U(e,a,null),E(a,n),r=!0},p(l,i){const _={};i&1&&(_.href=`/seasons/${l[2]}/1`),i&33&&(_.$$scope={dirty:i,ctx:l}),e.$set(_)},i(l){r||($(e.$$.fragment,l),r=!0)},o(l){j(e.$$.fragment,l),r=!1},d(l){l&&m(a),q(e)}}}function ee(o){let a,e,n,r,l,i,_,p,d;document.title=a=o[1]("link.allSeasons")+" | "+o[1]("chunks.projectFullName"),i=new X({props:{$$slots:{default:[Z]},$$scope:{ctx:o}}});let h=L(o[0].result),s=[];for(let t=0;t<h.length;t+=1)s[t]=O(N(o,h,t));const z=t=>j(s[t],1,1,()=>{s[t]=null});return{c(){e=S("meta"),r=P(),l=S("section"),I(i.$$.fragment),_=P(),p=S("ul");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){const c=D("svelte-g99xd0",document.head);e=b(c,"META",{name:!0,content:!0}),c.forEach(m),r=w(t),l=b(t,"SECTION",{});var f=y(l);M(i.$$.fragment,f),_=w(f),p=b(f,"UL",{class:!0});var u=y(p);for(let g=0;g<s.length;g+=1)s[g].l(u);u.forEach(m),f.forEach(m),this.h()},h(){v(e,"name","description"),v(e,"content",n=o[1]("descr.season")),v(p,"class","space-y-3")},m(t,c){E(document.head,e),k(t,r,c),k(t,l,c),U(i,l,null),E(l,_),E(l,p);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(p,null);d=!0},p(t,[c]){(!d||c&2)&&a!==(a=t[1]("link.allSeasons")+" | "+t[1]("chunks.projectFullName"))&&(document.title=a),(!d||c&2&&n!==(n=t[1]("descr.season")))&&v(e,"content",n);const f={};if(c&34&&(f.$$scope={dirty:c,ctx:t}),i.$set(f),c&1){h=L(t[0].result);let u;for(u=0;u<h.length;u+=1){const g=N(t,h,u);s[u]?(s[u].p(g,c),$(s[u],1)):(s[u]=O(g),s[u].c(),$(s[u],1),s[u].m(p,null))}for(R(),u=h.length;u<s.length;u+=1)z(u);Q()}},i(t){if(!d){$(i.$$.fragment,t);for(let c=0;c<h.length;c+=1)$(s[c]);d=!0}},o(t){j(i.$$.fragment,t),s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)j(s[c]);d=!1},d(t){t&&(m(r),m(l)),m(e),q(i),H(s,t)}}}function te(o,a,e){let n;J(o,V,l=>e(1,n=l));let{data:r}=a;return o.$$set=l=>{"data"in l&&e(0,r=l.data)},[r,n]}class fe extends G{constructor(a){super(),K(this,a,te,ee,B,{data:0})}}export{fe as component,ue as universal};
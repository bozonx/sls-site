import{s as M,e as b,a as L,q as U,c as v,f as p,g as A,b as C,m as k,h as E,i as d,r as X,k as y,p as z,t as N,d as j,j as F,n as D,u as J}from"../chunks/scheduler.d1faf42b.js";import{S as K,i as Q,c as I,a as O,m as B,t as T,e as R,b as S,d as G,g as V}from"../chunks/index.d8116598.js";import{e as w}from"../chunks/Heading.e2a5c8d5.js";import{A as W}from"../chunks/constants.7bf7eb19.js";import"../chunks/singletons.98c48d8c.js";import{S as Y}from"../chunks/SimpleLink.53e3dabf.js";import{P as Z}from"../chunks/PageHeader.0914a80d.js";import{t as x}from"../chunks/t.101f4c53.js";function P(i,a,e){const s=i.slice();return s[3]=a[e],s}function ee(i){let a=i[1]("link.allTags")+"",e;return{c(){e=N(a)},l(s){e=j(s,a)},m(s,n){d(s,e,n)},p(s,n){n&2&&a!==(a=s[1]("link.allTags")+"")&&F(e,a)},d(s){s&&p(e)}}}function te(i){let a,e=i[3]+"",s;return{c(){a=N("#"),s=N(e)},l(n){a=j(n,"#"),s=j(n,e)},m(n,l){d(n,a,l),d(n,s,l)},p(n,l){l&4&&e!==(e=n[3]+"")&&F(s,e)},d(n){n&&(p(a),p(s))}}}function q(i){let a,e,s,n;return e=new Y({props:{href:`/tags/${i[3]}/1`,$$slots:{default:[te]},$$scope:{ctx:i}}}),{c(){a=b("li"),I(e.$$.fragment),s=L()},l(l){a=v(l,"LI",{});var r=C(a);O(e.$$.fragment,r),s=A(r),r.forEach(p)},m(l,r){d(l,a,r),B(e,a,null),E(a,s),n=!0},p(l,r){const f={};r&4&&(f.href=`/tags/${l[3]}/1`),r&68&&(f.$$scope={dirty:r,ctx:l}),e.$set(f)},i(l){n||(T(e.$$.fragment,l),n=!0)},o(l){S(e.$$.fragment,l),n=!1},d(l){l&&p(a),G(e)}}}function le(i){let a,e,s,n,l,r,f,_,g;document.title=a=i[1]("link.allTags")+" | "+i[1]("chunks.projectFullName"),r=new Z({props:{$$slots:{default:[ee]},$$scope:{ctx:i}}});let h=w(i[2]),o=[];for(let t=0;t<h.length;t+=1)o[t]=q(P(i,h,t));const H=t=>S(o[t],1,1,()=>{o[t]=null});return{c(){e=b("meta"),n=L(),l=b("section"),I(r.$$.fragment),f=L(),_=b("ul");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){const c=U("svelte-lgwchs",document.head);e=v(c,"META",{name:!0,content:!0}),c.forEach(p),n=A(t),l=v(t,"SECTION",{});var m=C(l);O(r.$$.fragment,m),f=A(m),_=v(m,"UL",{class:!0});var u=C(_);for(let $=0;$<o.length;$+=1)o[$].l(u);u.forEach(p),m.forEach(p),this.h()},h(){k(e,"name","description"),k(e,"content",s=i[1]("descr.allTags")),k(_,"class","space-y-3")},m(t,c){E(document.head,e),d(t,n,c),d(t,l,c),B(r,l,null),E(l,f),E(l,_);for(let m=0;m<o.length;m+=1)o[m]&&o[m].m(_,null);g=!0},p(t,[c]){(!g||c&2)&&a!==(a=t[1]("link.allTags")+" | "+t[1]("chunks.projectFullName"))&&(document.title=a),(!g||c&2&&s!==(s=t[1]("descr.allTags")))&&k(e,"content",s);const m={};if(c&66&&(m.$$scope={dirty:c,ctx:t}),r.$set(m),c&4){h=w(t[2]);let u;for(u=0;u<h.length;u+=1){const $=P(t,h,u);o[u]?(o[u].p($,c),T(o[u],1)):(o[u]=q($),o[u].c(),T(o[u],1),o[u].m(_,null))}for(V(),u=h.length;u<o.length;u+=1)H(u);R()}},i(t){if(!g){T(r.$$.fragment,t);for(let c=0;c<h.length;c+=1)T(o[c]);g=!0}},o(t){S(r.$$.fragment,t),o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)S(o[c]);g=!1},d(t){t&&(p(n),p(l)),p(e),G(r),X(o,t)}}}function ae(i,a,e){let s,n,l=D,r=()=>(l(),l=J(f,_=>e(2,n=_)),f);y(i,x,_=>e(1,s=_)),i.$$.on_destroy.push(()=>l());let f;return r(e(0,f=z(W))),[f,s,n]}class me extends K{constructor(a){super(),Q(this,a,ae,le,M,{})}}export{me as component};
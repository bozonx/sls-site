import{s as _,z as l,f as d,l as p,g,h,m as c,d as f,i as $,x as i,n as u}from"../chunks/scheduler.d92df8e5.js";import{S as E,i as b,b as A,d as S,m as x,a as y,t as q,e as w}from"../chunks/index.8ce64f8c.js";import{A as z}from"../chunks/Alert.31f1dab1.js";import{p as C}from"../chunks/stores.6c5e9713.js";import{d as N}from"../chunks/tw-merge.f0198306.js";function P(n){let e,s=n[0].status+"",t,r,a;return{c(){e=d("span"),t=p(s),r=p(": "),a=p(n[1])},l(o){e=g(o,"SPAN",{});var m=h(e);t=c(m,s),r=c(m,": "),a=c(m,n[1]),m.forEach(f)},m(o,m){$(o,e,m),i(e,t),i(e,r),i(e,a)},p(o,m){m&1&&s!==(s=o[0].status+"")&&u(t,s),m&2&&u(a,o[1])},d(o){o&&f(e)}}}function j(n){let e,s;return e=new z({props:{color:"red",$$slots:{default:[P]},$$scope:{ctx:n}}}),{c(){A(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){x(e,t,r),s=!0},p(t,[r]){const a={};r&11&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){q(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function k(n,e,s){let t,r;l(n,C,o=>s(0,t=o)),l(n,N,o=>s(2,r=o));let a="";return n.$$.update=()=>{n.$$.dirty&5&&(t.error.message?t.status===404?s(1,a=r("httpErrors.404")):s(1,a=t.error.message):s(1,a=r("httpErrors."+t.status)))},[t,a,r]}class I extends E{constructor(e){super(),b(this,e,k,j,_,{})}}export{I as component};

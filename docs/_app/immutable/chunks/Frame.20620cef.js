import{s as K,e as S,i as M,d as h,F as q,R as B,x as p,G as D,w as L,f as Q,g as T,h as W,a0 as G,J as X,B as f,C as Y,D as Z,E as $,V as ee,K as re,O as ae,P as k,p as de}from"./scheduler.5590a43f.js";import{S as te,i as ie,a as m,g as le,t as C,c as oe,f as J}from"./index.5bced83a.js";import{b as ne,g as ge}from"./tw-merge.63480cf7.js";function v(e){let r,d,o,n,t,i;const b=e[14].default,g=L(b,e,e[13],null);let y=[e[8],{class:e[7]},{role:e[6]}],u={};for(let l=0;l<y.length;l+=1)u=p(u,y[l]);return{c(){r=Q(e[1]),g&&g.c(),this.h()},l(l){r=T(l,(e[1]||"null").toUpperCase(),{class:!0,role:!0});var s=W(r);g&&g.l(s),s.forEach(h),this.h()},h(){G(e[1])(r,u)},m(l,s){M(l,r,s),g&&g.m(r,null),e[20](r),n=!0,t||(i=[X(d=e[4].call(null,r,e[5])),f(r,"click",e[15]),f(r,"mouseenter",e[16]),f(r,"mouseleave",e[17]),f(r,"focusin",e[18]),f(r,"focusout",e[19])],t=!0)},p(l,s){e=l,g&&g.p&&(!n||s&8192)&&Y(g,b,e,e[13],n?$(b,e[13],s,null):Z(e[13]),null),G(e[1])(r,u=ge(y,[s&256&&e[8],(!n||s&128)&&{class:e[7]},(!n||s&64)&&{role:e[6]}])),d&&ee(d.update)&&s&32&&d.update.call(null,e[5])},i(l){n||(m(g,l),l&&re(()=>{n&&(o||(o=J(r,e[2],e[3],!0)),o.run(1))}),n=!0)},o(l){C(g,l),l&&(o||(o=J(r,e[2],e[3],!1)),o.run(0)),n=!1},d(l){l&&h(r),g&&g.d(l),e[20](null),l&&o&&o.end(),t=!1,ae(i)}}}function se(e){let r=e[1],d,o=!1,n,t=e[1]&&v(e);return{c(){t&&t.c(),d=S()},l(i){t&&t.l(i),d=S()},m(i,b){t&&t.m(i,b),M(i,d,b),n=!0},p(i,[b]){i[1]?r?K(r,i[1])?(t.d(1),t=v(i),r=i[1],t.c(),o&&(o=!1,m(t)),t.m(d.parentNode,d)):(o&&(o=!1,m(t)),t.p(i,b)):(t=v(i),r=i[1],t.c(),m(t),t.m(d.parentNode,d)):r&&(o=!0,le(),C(t,1,1,()=>{t=null,r=i[1],o=!1}),oe())},i(i){n||(m(t,i),n=!0)},o(i){C(t,i),n=!1},d(i){i&&h(d),t&&t.d(i)}}}function ue(e,r,d){const o=["tag","color","rounded","border","shadow","transition","params","node","use","options","role"];let n=q(r,o),{$$slots:t={},$$scope:i}=r;const b=()=>({duration:0}),g=()=>{};B("background",!0);let{tag:y=n.href?"a":"div"}=r,{color:u="default"}=r,{rounded:l=!1}=r,{border:s=!1}=r,{shadow:c=!1}=r,{transition:U=b}=r,{params:F={}}=r,{node:_=void 0}=r,{use:w=g}=r,{options:E={}}=r,{role:N=void 0}=r;const O={gray:"bg-gray-50 dark:bg-gray-800",red:"bg-red-50 dark:bg-gray-800",yellow:"bg-yellow-50 dark:bg-gray-800 ",green:"bg-green-50 dark:bg-gray-800 ",indigo:"bg-indigo-50 dark:bg-gray-800 ",purple:"bg-purple-50 dark:bg-gray-800 ",pink:"bg-pink-50 dark:bg-gray-800 ",blue:"bg-blue-50 dark:bg-gray-800 ",light:"bg-gray-50 dark:bg-gray-700",dark:"bg-gray-50 dark:bg-gray-800",default:"bg-white dark:bg-gray-800",dropdown:"bg-white dark:bg-gray-700",navbar:"bg-white dark:bg-gray-900",navbarUl:"bg-gray-50 dark:bg-gray-800",form:"bg-gray-50 dark:bg-gray-700",primary:"bg-primary-50 dark:bg-gray-800 ",orange:"bg-orange-50 dark:bg-orange-800",none:""},R={gray:"text-gray-800 dark:text-gray-300",red:"text-red-800 dark:text-red-400",yellow:"text-yellow-800 dark:text-yellow-300",green:"text-green-800 dark:text-green-400",indigo:"text-indigo-800 dark:text-indigo-400",purple:"text-purple-800 dark:text-purple-400",pink:"text-pink-800 dark:text-pink-400",blue:"text-blue-800 dark:text-blue-400",light:"text-gray-700 dark:text-gray-300",dark:"text-gray-700 dark:text-gray-300",default:"text-gray-500 dark:text-gray-400",dropdown:"text-gray-700 dark:text-gray-200",navbar:"text-gray-700 dark:text-gray-200",navbarUl:"text-gray-700 dark:text-gray-400",form:"text-gray-900 dark:text-white",primary:"text-primary-800 dark:text-primary-400",orange:"text-orange-800 dark:text-orange-400",none:""},V={gray:"border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",red:"border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",yellow:"border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",green:"border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",indigo:"border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",purple:"border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",pink:"border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",blue:"border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",light:"border-gray-500 divide-gray-500",dark:"border-gray-500 divide-gray-500",default:"border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",dropdown:"border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",navbar:"border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",navbarUl:"border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",form:"border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",primary:"border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",orange:"border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",none:""};let P;function j(a){k.call(this,e,a)}function x(a){k.call(this,e,a)}function z(a){k.call(this,e,a)}function A(a){k.call(this,e,a)}function H(a){k.call(this,e,a)}function I(a){de[a?"unshift":"push"](()=>{_=a,d(0,_)})}return e.$$set=a=>{d(26,r=p(p({},r),D(a))),d(8,n=q(r,o)),"tag"in a&&d(1,y=a.tag),"color"in a&&d(9,u=a.color),"rounded"in a&&d(10,l=a.rounded),"border"in a&&d(11,s=a.border),"shadow"in a&&d(12,c=a.shadow),"transition"in a&&d(2,U=a.transition),"params"in a&&d(3,F=a.params),"node"in a&&d(0,_=a.node),"use"in a&&d(4,w=a.use),"options"in a&&d(5,E=a.options),"role"in a&&d(6,N=a.role),"$$scope"in a&&d(13,i=a.$$scope)},e.$$.update=()=>{e.$$.dirty&512&&d(9,u=u??"default"),e.$$.dirty&512&&B("color",u),d(7,P=ne(O[u],R[u],l&&"rounded-lg",s&&"border",V[u],c&&"shadow-md",r.class))},r=D(r),[_,y,U,F,w,E,N,P,n,u,l,s,c,i,t,j,x,z,A,H,I]}class ke extends te{constructor(r){super(),ie(this,r,ue,se,K,{tag:1,color:9,rounded:10,border:11,shadow:12,transition:2,params:3,node:0,use:4,options:5,role:6})}}export{ke as F};

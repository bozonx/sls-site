import{y as b,_ as T,O as I,s as x,V as O}from"./scheduler.d92df8e5.js";const f=[];function U(e,t){return{subscribe:p(e,t).subscribe}}function p(e,t=b){let n;const r=new Set;function o(s){if(x(e,s)&&(e=s,n)){const i=!f.length;for(const l of r)l[1](),f.push(l,e);if(i){for(let l=0;l<f.length;l+=2)f[l][0](f[l+1]);f.length=0}}}function c(s){o(s(e))}function a(s,i=b){const l=[s,i];return r.add(l),r.size===1&&(n=t(o,c)||b),s(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:o,update:c,subscribe:a}}function q(e,t,n){const r=!Array.isArray(e),o=r?[e]:e;if(!o.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const c=t.length<2;return U(n,(a,s)=>{let i=!1;const l=[];let _=0,h=b;const v=()=>{if(_)return;h();const u=t(r?l[0]:l,a,s);c?a(u):h=O(u)?u:b},R=o.map((u,g)=>T(u,S=>{l[g]=S,_&=~(1<<g),i&&v()},()=>{_|=1<<g}));return i=!0,v(),function(){I(R),h(),i=!1}})}var w;const L=((w=globalThis.__sveltekit_mub8hm)==null?void 0:w.base)??"";var A;const N=((A=globalThis.__sveltekit_mub8hm)==null?void 0:A.assets)??L,V="1698277541847",K="sveltekit:snapshot",$="sveltekit:scroll",z="sveltekit:index",m={tap:1,hover:2,viewport:3,eager:4,off:-1};function B(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function C(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const y={...m,"":m.hover};function E(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function D(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=E(e)}}function G(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,o=!n||!!r||Y(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:o,target:r,download:c}}function X(e){let t=null,n=null,r=null,o=null,c=null,a=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=d(s,"preload-code")),o===null&&(o=d(s,"preload-data")),t===null&&(t=d(s,"keepfocus")),n===null&&(n=d(s,"noscroll")),c===null&&(c=d(s,"reload")),a===null&&(a=d(s,"replacestate")),s=E(s);function i(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:y[r??"off"],preload_data:y[o??"off"],keep_focus:i(t),noscroll:i(n),reload:i(c),replace_state:i(a)}}function k(e){const t=p(e);let n=!0;function r(){n=!0,t.update(a=>a)}function o(a){n=!1,t.set(a)}function c(a){let s;return t.subscribe(i=>{(s===void 0||n&&i!==s)&&a(s=i)})}return{notify:r,set:o,subscribe:c}}function P(){const{set:e,subscribe:t}=p(!1);let n;async function r(){clearTimeout(n);try{const o=await fetch(`${N}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!o.ok)return!1;const a=(await o.json()).version!==V;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:r}}function Y(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function H(e){e.client}const W={url:k({}),page:k({}),navigating:p(null),updated:P()};export{z as I,m as P,$ as S,K as a,G as b,X as c,W as d,L as e,D as f,B as g,H as h,Y as i,q as j,C as s,p as w};

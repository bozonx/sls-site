import{d as y,w as p}from"./index.b893effa.js";function u(t,e=" "){if(typeof t!="string")return t;let r=0;for(let n=0;n<t.length&&t[n]===e;n++)r++;return t.slice(r)}const s=".";function c(t){if(!t||typeof t!="string")return[];const e=[],r=t.replace(/\[/g,s+"[");return u(r,s).split(s).forEach(o=>{if(o.indexOf("[")===0){const i=Number(o.match(/\d+/)[0]);e.push(i)}else e.push(o)}),e}function A(t){if(!Array.isArray(t)||!t.length)return"";let e="";for(const r of t)typeof r=="number"?e+=`[${r}]`:typeof r=="string"&&r&&(e+=s+r);return u(e,s)}function f(t,e,r){if(typeof t>"u")return r;if(typeof e!="string")return r;const n=c(e),o=A(g(n));if(Array.isArray(t)){if(typeof n[0]!="number")return r;const i=n[0];return o?f(t[i],o,r):l(t,i)?t[i]:r}else if(t&&typeof t=="object"){if(typeof n[0]!="string")return r;let i=n[0];return o?f(t[i],o,r):Reflect.ownKeys(t).includes(i)?t[i]:r}else return r}function l(t,e){return!Array.isArray(t)||typeof e!="number"?!1:e>=0&&e<t.length}function g(t){if(!Array.isArray(t)||!t.length)return[];const e=[...t];return e.shift(),e}const h=p({}),b=y(h,t=>e=>f(t,e,e));export{u as a,h as b,b as t};
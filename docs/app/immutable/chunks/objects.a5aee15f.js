function n(r,...f){if(!r||Array.isArray(r)||typeof r!="object")return{};const e={};for(let t of Object.keys(r))f.indexOf(t)<0&&(e[t]=r[t]);return e}function i(r,...f){if(!r||Array.isArray(r)||typeof r!="object")return{};const e={};for(let t of f)e[t]=r[t];return e}export{n as o,i as p};
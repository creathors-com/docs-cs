const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DHvUGVJF.js","./Bsyumra8.js","./entry.CJmnLB1j.css"])))=>i.map(i=>d[i]);
import{bg as d,bh as m,_ as w,bi as u}from"./Bsyumra8.js";async function p(t,e){return await $fetch(`/api/content/${e}/database.sql`,{context:{},responseType:"text",headers:{"content-type":"text/plain"},query:{v:d[String(e)],t:void 0}})}async function h(t,e="gzip"){var s;const o=Uint8Array.from(atob(t),c=>c.charCodeAt(0)),n=(s=new Response(new Blob([o])).body)==null?void 0:s.pipeThrough(new DecompressionStream(e));return(await new Response(n).text()).split(`
`)}function l(t,e){const o=g(t),a={...e};for(const n in a)o[n]==="json"&&a[n]&&a[n]!=="undefined"&&(a[n]=JSON.parse(a[n])),o[n]==="boolean"&&a[n]!=="undefined"&&(a[n]=!!a[n]);for(const n in a)a[n]==="NULL"&&(a[n]=void 0);return a}function g(t){const e=t.match(/FROM\s+(\w+)/);if(!e)return{};const o=m[b(e[1])];return(o==null?void 0:o.fields)||{}}function b(t){return t.replace(/^_content_/,"")}let r;function y(t){return{all:async(e,o)=>(await f(t),r.exec({sql:e,bind:o,rowMode:"object",returnValue:"resultRows"}).map(a=>l(e,a))),first:async(e,o)=>(await f(t),l(e,r.exec({sql:e,bind:o,rowMode:"object",returnValue:"resultRows"}).shift())),exec:async e=>{await f(t),await r.exec({sql:e})}}}async function f(t){if(!r){const s=await(await w(()=>import("./DHvUGVJF.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(c=>c.default))();r=new s.oo1.DB}if(window.sessionStorage.getItem("previewToken"))return r;let e=null;const o=`checksum_${t}`,a=`collection_${t}`;let n="matched";try{const i=r.exec({sql:`SELECT * FROM ${u.info} where id = '${o}'`,rowMode:"object",returnValue:"resultRows"}).shift();(i==null?void 0:i.version)!==d[String(t)]&&(n="mismatch")}catch{n="missing"}if(n!=="matched"){if(window.localStorage.getItem(`content_${o}`)===d[String(t)]&&(e=window.localStorage.getItem(`content_${a}`)),!e){e=await p(void 0,String(t));try{window.localStorage.setItem(`content_${o}`,d[String(t)]),window.localStorage.setItem(`content_${a}`,e)}catch(s){console.error("Database integrity check failed, rebuilding database",s)}}const i=await h(e);await r.exec({sql:`DROP TABLE IF EXISTS ${u[String(t)]}`}),n==="mismatch"&&await r.exec({sql:`DELETE FROM ${u.info} WHERE id = '${o}'`});for(const s of i)try{await r.exec(s)}catch(c){console.error("Error executing command",c)}}return r}export{y as loadDatabaseAdapter};

import{g as i,i as l,a as x,b,A as f,e as u,t as a,s as $}from"./entry-client-9739558d.js";import{_ as h}from"./v2.0-b0ca50ad.js";import{_ as v}from"./v2.0_migration-57edecc9.js";import"./index-995cd32a.js";const k=t=>Object.entries(t).map(([r,e])=>({link:r.replace(/^\.\/|\.mdx$/g,""),...e.meta})),w=k(Object.assign({"./v2.0.mdx":h,"./v2.0_migration.mdx":v})),C=a('<div m="y-5 xl:y-10 x-auto" px-3 max="w-[1700px]"><div grid gap-5 class="md:grid-cols-2 2xl:grid-cols-3">'),y=a("<button bg-blue-6 text-white-1 dark:bg-blue-3 dark:text-dark-1 px-5>read more"),S=a('<div border="slate 0 dark:dark-4 solid" class="shadow-xl flex flex-col gap-4 items-start" bg="dark:dark-3"><img w-full rounded-t-lg loading="lazy"><div h-full flex flex-col gap-10 justify-between p-10 pt-5><div><h2 class="m-0" pb-5></h2><p text-lg class="m-0 p-0"></p></div><!#><!/>');function M(){return(()=>{const t=i(C),r=t.firstChild;return l(r,()=>w.map(e=>(()=>{const s=i(S),n=s.firstChild,d=n.nextSibling,o=d.firstChild,g=o.firstChild,m=g.nextSibling,_=o.nextSibling,[p,c]=x(_.nextSibling);return l(g,()=>e.heading),l(m,()=>e.details),l(d,b(f,{get href(){return e.link},get children(){return i(y)}}),p,c),u(()=>$(n,"src",`/news/${e.cover}`)),s})())),t})()}export{M as default};

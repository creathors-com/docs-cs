import{d as q,a9 as A,C as D,i as s,z as u,w as C,A as l,g as E,n,e as H,c as r,f as o,a6 as p,t as g,F as P,I as S,H as B,B as L,P as O,aw as z,ad as T,am as G,bq as J,a8 as K}from"./Bsyumra8.js";import M from"./zfY-3g1u.js";const Q={slots:{root:"relative isolate",container:"flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16",wrapper:"",headline:"mb-3",leading:"flex items-center mb-6",leadingIcon:"size-10 shrink-0 text-[var(--ui-primary)]",title:"text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-[var(--ui-text-highlighted)]",description:"text-base sm:text-lg text-[var(--ui-text-muted)]",links:"mt-8 flex flex-wrap gap-x-6 gap-y-3",features:"mt-8 grid"},variants:{orientation:{horizontal:{container:"lg:grid-cols-2 lg:items-center",description:"text-pretty",features:"gap-4"},vertical:{container:"",headline:"justify-center",leading:"justify-center",title:"text-center",description:"text-center text-balance",links:"justify-center",features:"sm:grid-cols-2 lg:grid-cols-3 gap-8"}},reverse:{true:{wrapper:"lg:order-last"}},headline:{true:{headline:"font-semibold text-[var(--ui-primary)] flex items-center gap-1.5"}},title:{true:{description:"mt-6"}},description:{true:""},features:{true:""}},compoundVariants:[{orientation:"vertical",title:!0,class:{features:"mt-16"}},{orientation:"vertical",description:!0,class:{features:"mt-16"}},{orientation:"vertical",features:!0,class:{links:"mt-16"}}]},R={key:1,class:"hidden lg:block"},W=K;var I;const X=z({extend:z(Q),...((I=W.uiPro)==null?void 0:I.pageSection)||{}}),Y=q({__name:"PageSection",props:{as:{default:"section"},headline:{},icon:{},title:{},description:{},links:{},features:{},orientation:{default:"vertical"},reverse:{type:Boolean},class:{},ui:{}},setup(U){const t=U,a=A(),i=D(()=>{var e;return X({orientation:t.orientation,reverse:t.reverse,title:!!t.title||!!a.title,description:!!t.description||!!a.description,features:!!((e=t.features)!=null&&e.length)||!!a.features})});return(e,Z)=>{var m;const V=T,j=M,N=G,F=J;return s(),u(L(O),{as:e.as,"data-orientation":e.orientation,class:n(i.value.root({class:[t.class,(m=t.ui)==null?void 0:m.root]}))},{default:C(()=>{var f;return[l(e.$slots,"top"),E(F,{class:n(i.value.container({class:(f=t.ui)==null?void 0:f.container}))},{default:C(()=>{var v,h,k,y,_,b,x,$,w;return[H("div",{class:n(i.value.wrapper({class:(v=t.ui)==null?void 0:v.wrapper}))},[e.icon||a.leading?(s(),r("div",{key:0,class:n(i.value.leading({class:(h=t.ui)==null?void 0:h.leading}))},[l(e.$slots,"leading",{},()=>{var c;return[e.icon?(s(),u(V,{key:0,name:e.icon,class:n(i.value.leadingIcon({class:(c=t.ui)==null?void 0:c.leadingIcon}))},null,8,["name","class"])):o("",!0)]})],2)):o("",!0),e.headline||a.headline?(s(),r("div",{key:1,class:n(i.value.headline({class:(k=t.ui)==null?void 0:k.headline,headline:!a.headline}))},[l(e.$slots,"headline",{},()=>[p(g(e.headline),1)])],2)):o("",!0),e.title||a.title?(s(),r("h2",{key:2,class:n(i.value.title({class:(y=t.ui)==null?void 0:y.title}))},[l(e.$slots,"title",{},()=>[p(g(e.title),1)])],2)):o("",!0),e.description||a.description?(s(),r("div",{key:3,class:n(i.value.description({class:(_=t.ui)==null?void 0:_.description}))},[l(e.$slots,"description",{},()=>[p(g(e.description),1)])],2)):o("",!0),(b=e.features)!=null&&b.length||a.features?(s(),r("ul",{key:4,class:n(i.value.features({class:(x=t.ui)==null?void 0:x.features}))},[l(e.$slots,"features",{},()=>[(s(!0),r(P,null,S(e.features,(c,d)=>(s(),u(j,B({key:d,as:"li",ref_for:!0},c),null,16))),128))])],2)):o("",!0),($=e.links)!=null&&$.length||a.links?(s(),r("div",{key:5,class:n(i.value.links({class:(w=t.ui)==null?void 0:w.links}))},[l(e.$slots,"links",{},()=>[(s(!0),r(P,null,S(e.links,(c,d)=>(s(),u(N,B({key:d,size:"lg",ref_for:!0},c),null,16))),128))])],2)):o("",!0)],2),a.default?l(e.$slots,"default",{key:0}):e.orientation==="horizontal"?(s(),r("div",R)):o("",!0)]}),_:3},8,["class"]),l(e.$slots,"bottom")]}),_:3},8,["as","data-orientation","class"])}}}),se=Object.assign(Y,{__name:"UPageSection"});export{se as default};

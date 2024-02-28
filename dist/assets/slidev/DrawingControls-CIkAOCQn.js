import{r as N,z as R,A as G,B as H,C as J,D as O,E as T,F as Y,G as Q,H as W,I as X,J as Z}from"../modules/unplugin-icons-C7ILewI8.js";import{d as $,t as h,a4 as ee,az as ne,b as z,f as se,h as B,z as e,o as w,c as y,k as o,l as s,i as l,e as i,x as te,aj as f,ak as oe,ag as le,F as ae,au as b,g as re}from"../modules/vue-DRRb1hwN.js";import{L as ie}from"../modules/shiki-DI0ntXsc.js";import{_ as L,aq as r,af as m,ar as ue,as as ce,at as de,au as _e,av as pe,aw as u,U as _,ax as D}from"../index-CYtyG2Pe.js";import{I as a,V as C}from"./SlidesShow-BuE8I12d.js";import"./bottom-8bZrDSPf.js";import"./DrawingPreview-2DWefGKz.js";const me=$({__name:"Draggable",props:{storageKey:{type:String,required:!1},initial:{type:Object,required:!1}},setup(x){const g=x,v=h(null),p=g.initial??{x:0,y:0},c=g.storageKey?ee(g.storageKey,p):h(p),{style:k}=ne(v,{initialValue:c});return(d,n)=>(w(),z("div",{ref_key:"el",ref:v,class:"fixed",style:B(e(k))},[se(d.$slots,"default")],4))}}),ge=L(me,[["__file","/Users/christophe.porteneuve/Personal/talks/confoo-html/node_modules/@slidev/client/internals/Draggable.vue"]]),fe=i("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[i("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1),we=i("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[i("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),i("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),i("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1),ve={class:"flex bg-main p-2"},be={class:"inline-block w-7 text-center"},ke={class:"pt-.5"},ye=$({__name:"DrawingControls",setup(x){function g(){D.undo()}function v(){D.redo()}let p="stylus";function c(d){r.value=d,_.value=!0,d!=="eraseLine"&&(p=d)}function k(d){m.color=d,_.value=!0,r.value=p}return(d,n)=>{const M=N,S=R,U=G,V=H,E=J,P=O,j=T,q=Y,A=Q,F=W,I=X,K=Z;return w(),y(ge,{class:l(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-20 border border-main",e(_)?"":e(u)?"opacity-40 hover:opacity-90":"opacity-0 pointer-events-none"]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:o(()=>[s(a,{title:"Draw with stylus",class:l({shallow:e(r)!=="stylus"}),onClick:n[0]||(n[0]=t=>c("stylus"))},{default:o(()=>[s(M)]),_:1},8,["class"]),s(a,{title:"Draw a line",class:l({shallow:e(r)!=="line"}),onClick:n[1]||(n[1]=t=>c("line"))},{default:o(()=>[fe]),_:1},8,["class"]),s(a,{title:"Draw an arrow",class:l({shallow:e(r)!=="arrow"}),onClick:n[2]||(n[2]=t=>c("arrow"))},{default:o(()=>[s(S)]),_:1},8,["class"]),s(a,{title:"Draw an ellipse",class:l({shallow:e(r)!=="ellipse"}),onClick:n[3]||(n[3]=t=>c("ellipse"))},{default:o(()=>[s(U)]),_:1},8,["class"]),s(a,{title:"Draw a rectangle",class:l({shallow:e(r)!=="rectangle"}),onClick:n[4]||(n[4]=t=>c("rectangle"))},{default:o(()=>[s(V)]),_:1},8,["class"]),s(a,{title:"Erase",class:l({shallow:e(r)!=="eraseLine"}),onClick:n[5]||(n[5]=t=>c("eraseLine"))},{default:o(()=>[s(E)]),_:1},8,["class"]),s(C),s(e(ie),null,{popper:o(()=>[i("div",ve,[i("div",be,te(e(m).size),1),i("div",ke,[f(i("input",{"onUpdate:modelValue":n[6]||(n[6]=t=>e(m).size=t),type:"range",min:"1",max:"15",onChange:n[7]||(n[7]=t=>r.value=e(p))},null,544),[[oe,e(m).size]])])])]),default:o(()=>[s(a,{title:"Adjust stroke width",class:l({shallow:e(r)==="eraseLine"})},{default:o(()=>[we]),_:1},8,["class"])]),_:1}),(w(!0),z(ae,null,le(e(ue),t=>(w(),y(a,{key:t,title:"Set brush color",class:l(e(m).color===t&&e(r)!=="eraseLine"?"active":"shallow"),onClick:Ce=>k(t)},{default:o(()=>[i("div",{class:l(["w-6 h-6 transition-all transform border",e(m).color!==t?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:B(e(_)?{background:t}:{borderColor:t})},null,6)]),_:2},1032,["class","onClick"]))),128)),s(C),s(a,{title:"Undo",class:l({disabled:!e(ce)}),onClick:n[8]||(n[8]=t=>g())},{default:o(()=>[s(P)]),_:1},8,["class"]),s(a,{title:"Redo",class:l({disabled:!e(de)}),onClick:n[9]||(n[9]=t=>v())},{default:o(()=>[s(j)]),_:1},8,["class"]),s(a,{title:"Delete",class:l({disabled:!e(_e)}),onClick:n[10]||(n[10]=t=>e(pe)())},{default:o(()=>[s(q)]),_:1},8,["class"]),s(C),s(a,{title:e(u)?"Unpin drawing":"Pin drawing",class:l({shallow:!e(u)}),onClick:n[11]||(n[11]=t=>u.value=!e(u))},{default:o(()=>[f(s(A,{class:"transform -rotate-45"},null,512),[[b,e(u)]]),f(s(F,null,null,512),[[b,!e(u)]])]),_:1},8,["title","class"]),e(_)?(w(),y(a,{key:0,title:e(u)?"Drawing pinned":"Drawing unpinned",class:l({shallow:!e(_)}),onClick:n[12]||(n[12]=t=>_.value=!e(_))},{default:o(()=>[f(s(I,null,null,512),[[b,e(u)]]),f(s(K,null,null,512),[[b,!e(u)]])]),_:1},8,["title","class"])):re("v-if",!0)]),_:1},8,["class"])}}}),Me=L(ye,[["__file","/Users/christophe.porteneuve/Personal/talks/confoo-html/node_modules/@slidev/client/internals/DrawingControls.vue"]]);export{Me as default};

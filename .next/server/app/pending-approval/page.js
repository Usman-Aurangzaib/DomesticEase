(()=>{var e={};e.id=8325,e.ids=[8325],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},87508:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>s.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var r=n(50482),a=n(69108),i=n(62563),s=n.n(i),o=n(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);n.d(t,l);let c=["",{children:["pending-approval",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,7011)),"C:\\Users\\DELL\\Desktop\\DOMESTIC-EASE\\src\\app\\pending-approval\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,21342)),"C:\\Users\\DELL\\Desktop\\DOMESTIC-EASE\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\DELL\\Desktop\\DOMESTIC-EASE\\src\\app\\pending-approval\\page.tsx"],u="/pending-approval/page",p={require:n,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/pending-approval/page",pathname:"/pending-approval",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},21255:(e,t,n)=>{Promise.resolve().then(n.bind(n,78561))},78561:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r=n(95344),a=n(64470),i=n(44730),s=n(96442),o=n(63085),l=n(3729),c=n(98117);let d=()=>{let e=(0,a.p)(),[t,n]=(0,l.useState)(!1),{user:d}=(0,c.a)(),u=async t=>{if(!d){e({title:"Please login in again",status:"error",duration:9e3,isClosable:!0});return}await fetch("/api/approve-mail",{method:"POST",body:JSON.stringify({email:d})}),e({title:"Email will be sent if the user exists",status:"success",duration:9e3,isClosable:!0}),n(!0)};return r.jsx(i.k,{direction:"column",width:"100%",justifyContent:"center",alignItems:"center",marginY:10,paddingBottom:64,children:(0,r.jsxs)(i.k,{background:"gray.800",rounded:8,direction:"column",alignItems:"center",justifyContent:"center",gap:8,paddingX:8,paddingY:16,children:[r.jsx("div",{className:"brand",children:r.jsx("a",{href:"/",children:r.jsx("img",{src:"/a_logo.png",alt:"Logo",width:"200px"})})}),r.jsx(s.x,{fontSize:"x-large",fontWeight:"bold",color:"white",children:"Your account is pending approval, please verify your email"}),r.jsx(o.z,{isDisabled:t,onClick:u,colorScheme:"teal",children:"Send verification email"})]})})}},7011:(e,t,n)=>{"use strict";n.r(t),n.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>s});let r=(0,n(86843).createProxy)(String.raw`C:\Users\DELL\Desktop\DOMESTIC-EASE\src\app\pending-approval\page.tsx`),{__esModule:a,$$typeof:i}=r,s=r.default},73881:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(70337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},63085:(e,t,n)=>{"use strict";n.d(t,{z:()=>f});var r=n(3729),[a,i]=(0,n(23175).k)({strict:!1,name:"ButtonGroupContext"}),s=n(4308),o=n(39689),l=n(95344);function c(e){let{children:t,className:n,...a}=e,i=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,c=(0,o.cx)("chakra-button__icon",n);return(0,l.jsx)(s.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:c,children:i})}c.displayName="ButtonIcon";var d=n(61469);function u(e){let{label:t,placement:n,spacing:a="0.5rem",children:i=(0,l.jsx)(d.$,{color:"currentColor",width:"1em",height:"1em"}),className:c,__css:u,...p}=e,m=(0,o.cx)("chakra-button__spinner",c),x="start"===n?"marginEnd":"marginStart",g=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[x]:t?a:0,fontSize:"1em",lineHeight:"normal",...u}),[u,t,x,a]);return(0,l.jsx)(s.m.div,{className:m,...p,__css:g,children:i})}u.displayName="ButtonSpinner";var p=n(69153),m=n(95459),x=n(21092),g=n(89320),f=(0,m.G)((e,t)=>{let n=i(),a=(0,x.mq)("Button",{...n,...e}),{isDisabled:c=null==n?void 0:n.isDisabled,isLoading:d,isActive:m,children:f,leftIcon:v,rightIcon:y,loadingText:_,iconSpacing:b="0.5rem",type:j,spinner:E,spinnerPlacement:S="start",className:k,as:C,...P}=(0,g.Lr)(e),q=(0,r.useMemo)(()=>{let e={...null==a?void 0:a._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!n&&{_focus:e}}},[a,n]),{ref:w,type:D}=function(e){let[t,n]=(0,r.useState)(!e);return{ref:(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]),type:t?"button":void 0}}(C),N={rightIcon:y,leftIcon:v,iconSpacing:b,children:f};return(0,l.jsxs)(s.m.button,{ref:(0,p.qq)(t,w),as:C,type:null!=j?j:D,"data-active":(0,o.PB)(m),"data-loading":(0,o.PB)(d),__css:q,className:(0,o.cx)("chakra-button",k),...P,disabled:c||d,children:[d&&"start"===S&&(0,l.jsx)(u,{className:"chakra-button__spinner--start",label:_,placement:"start",spacing:b,children:E}),d?_||(0,l.jsx)(s.m.span,{opacity:0,children:(0,l.jsx)(h,{...N})}):(0,l.jsx)(h,{...N}),d&&"end"===S&&(0,l.jsx)(u,{className:"chakra-button__spinner--end",label:_,placement:"end",spacing:b,children:E})]})});function h(e){let{leftIcon:t,rightIcon:n,children:r,iconSpacing:a}=e;return(0,l.jsxs)(l.Fragment,{children:[t&&(0,l.jsx)(c,{marginEnd:a,children:t}),r,n&&(0,l.jsx)(c,{marginStart:a,children:n})]})}f.displayName="Button"},96442:(e,t,n)=>{"use strict";n.d(t,{x:()=>d});var r=n(95459),a=n(21092),i=n(89320),s=n(4308),o=n(39689),l=n(70709),c=n(95344),d=(0,r.G)(function(e,t){let n=(0,a.mq)("Text",e),{className:r,align:d,decoration:u,casing:p,...m}=(0,i.Lr)(e),x=(0,l.o)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,c.jsx)(s.m.p,{ref:t,className:(0,o.cx)("chakra-text",e.className),...x,...m,__css:n})});d.displayName="Text"},44730:(e,t,n)=>{"use strict";n.d(t,{k:()=>s});var r=n(95459),a=n(4308),i=n(95344),s=(0,r.G)(function(e,t){let{direction:n,align:r,justify:s,wrap:o,basis:l,grow:c,shrink:d,...u}=e;return(0,i.jsx)(a.m.div,{ref:t,__css:{display:"flex",flexDirection:n,alignItems:r,justifyContent:s,flexWrap:o,flexBasis:l,flexGrow:c,flexShrink:d},...u})});s.displayName="Flex"},70709:(e,t,n)=>{"use strict";function r(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}n.d(t,{o:()=>r})},69153:(e,t,n)=>{"use strict";n.d(t,{lq:()=>a,qq:()=>i});var r=n(3729);function a(...e){return t=>{e.forEach(e=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}(e,t)})}}function i(...e){return(0,r.useMemo)(()=>a(...e),e)}},64470:(e,t,n)=>{"use strict";n.d(t,{p:()=>o});var r=n(77780),a=n(30798),i=n(54948),s=n(3729);function o(e){let{theme:t}=(0,i.uP)(),n=(0,r.OX)();return(0,s.useMemo)(()=>(0,a.Cj)(t.direction,{...n,...e}),[e,t.direction,n])}}};var t=require("../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[1638,5263,337,116],()=>n(87508));module.exports=r})();
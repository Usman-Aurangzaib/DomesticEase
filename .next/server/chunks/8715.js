"use strict";exports.id=8715,exports.ids=[8715],exports.modules={45:(e,a,r)=>{r.d(a,{AW:()=>o,FA:()=>f,Nq:()=>d,PR:()=>s,Re:()=>i,bG:()=>c,h8:()=>t,r4:()=>n}),r(13664);var l=r(28371),t=(0,l.$)("9c3fff7bc34ea049ee987a3faad47491f6dcc742"),n=(0,l.$)("0f4d132821da063e73dee58ac0271c6b416dbe08"),i=(0,l.$)("2727ff5f424dc69ed443f01d95876fa2ea974c6d"),s=(0,l.$)("830a08f0b4898aa4d63fb94229055f2fce3e3f71"),c=(0,l.$)("e80969a57efceefee6a8a65908e1e314fe49a2a0"),d=(0,l.$)("ae483d5d3c1e2e20ae95a2933fab40df31f7512a"),o=(0,l.$)("a8dbe559b9e3e82e687aabcfe7c2bab9f020568c"),f=(0,l.$)("59975b62b53c5f40ad91cc17f309d881c82b0209")},51518:(e,a,r)=>{r.r(a),r.d(a,{$$ACTION_0:()=>c,$$ACTION_1:()=>o,$$ACTION_2:()=>u,$$ACTION_3:()=>v,$$ACTION_4:()=>m,$$ACTION_5:()=>y,$$ACTION_6:()=>S,$$ACTION_7:()=>N,createServiceUser:()=>d,createUser:()=>s,deleteUser:()=>x,getAllServiceUsers:()=>h,getAllUsers:()=>g,getUser:()=>f,getUserInfo:()=>b,updateUser:()=>p});var l=r(60398);r(75811);var t=r(20915),n=r(46893);let i=async e=>{let{database:a,client:r}=await (0,t.default)(),l=a.collection("user"),n=await l.findOne({email:e});return r.close(),n},s=(0,l.registerServerReference)("dab07b5958eb4650ece771bcba69be64c61f2338",c);async function c(e){let{database:a,client:r}=await (0,t.default)(),l=a.collection("user");if(await i(e.email))throw"User already exists";let n=await l.insertOne(e);return console.log({user:n}),r.close(),JSON.parse(JSON.stringify(n))}let d=(0,l.registerServerReference)("6b01299afed5f0665d014a4af2855e7649356ed0",o);async function o(e){let{database:a,client:r}=await (0,t.default)(),l=a.collection("user");if(await i(e.email))throw"User already exists";let n=await l.insertOne({...e,type:"service",approved:!1});return console.log({user:n}),r.close(),JSON.parse(JSON.stringify(n))}let f=(0,l.registerServerReference)("c5daaae2c8a269884ec101003cee7f2605e1150e",u);async function u(e,a){let{database:r,client:l}=await (0,t.default)(),n=r.collection("user"),i=await n.findOne({email:e,password:a});return console.log({user:i}),JSON.parse(JSON.stringify(i))}let b=(0,l.registerServerReference)("42add083530816ef53685d2bc3bb9dc9ac390d43",v);async function v(e){let{database:a,client:r}=await (0,t.default)(),l=a.collection("user"),n=await l.findOne({email:e});return console.log({user:n}),r.close(),JSON.parse(JSON.stringify(n))}let p=(0,l.registerServerReference)("d48555850f75bbc8331ae2649fda238e04723775",m);async function m(e,a){let{database:r,client:l}=await (0,t.default)(),n=r.collection("user"),i=await n.updateOne({email:e},{$set:a});return console.log({user:i}),l.close(),JSON.parse(JSON.stringify(i))}let g=(0,l.registerServerReference)("9c58d2425d31d23d3f8e3fede0e025a9a16aaf00",y);async function y(){let{database:e,client:a}=await (0,t.default)(),r=e.collection("user"),l=await r.find({type:{$ne:"service"}}).toArray();return console.log({user:l}),a.close(),JSON.parse(JSON.stringify(l))}let h=(0,l.registerServerReference)("7691509385738a31cc2b30475603815741bc16de",S);async function S(){let{database:e,client:a}=await (0,t.default)(),r=e.collection("user"),l=await r.find({type:"service"}).toArray();return console.log({user:l}),a.close(),JSON.parse(JSON.stringify(l))}let x=(0,l.registerServerReference)("fb901ff69281c7c2704cbf39121f1ae1992b3848",N);async function N(e){let{database:a,client:r}=await (0,t.default)(),l=a.collection("user"),n=await l.deleteOne({email:e});return console.log({user:n}),r.close(),JSON.parse(JSON.stringify(n))}(0,n.ensureServerEntryExports)([s,d,f,b,p,g,h,x]),(0,l.registerServerReference)("0f4d132821da063e73dee58ac0271c6b416dbe08",s),(0,l.registerServerReference)("2727ff5f424dc69ed443f01d95876fa2ea974c6d",d),(0,l.registerServerReference)("830a08f0b4898aa4d63fb94229055f2fce3e3f71",f),(0,l.registerServerReference)("e80969a57efceefee6a8a65908e1e314fe49a2a0",b),(0,l.registerServerReference)("ae483d5d3c1e2e20ae95a2933fab40df31f7512a",p),(0,l.registerServerReference)("a8dbe559b9e3e82e687aabcfe7c2bab9f020568c",g),(0,l.registerServerReference)("59975b62b53c5f40ad91cc17f309d881c82b0209",h),(0,l.registerServerReference)("9c3fff7bc34ea049ee987a3faad47491f6dcc742",x)},20915:(e,a,r)=>{r.d(a,{default:()=>t});var l=r(38013);let t=async()=>{let e=new l.MongoClient("mongodb+srv://basitdev:Z8TTCBtR5z0z76QC@domestic-ease-cluster.ygthspq.mongodb.net/");try{await e.connect();let a=e.db("domestic-ease-client");return console.log("Connected to MongoDB"),{client:e,database:a}}catch(e){console.error(e)}}},73881:(e,a,r)=>{r.r(a),r.d(a,{default:()=>t});var l=r(70337);let t=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,l.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},61802:(e,a,r)=>{r.d(a,{Y:()=>m});var l=r(23175),t=r(69153),n=r(95459),i=r(21092),s=r(89320),c=r(4308),d=r(39689),o=r(3729),f=r(95344),[u,b]=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[v,p]=(0,l.k)({strict:!1,name:"FormControlContext"});function m(e){let{isDisabled:a,isInvalid:r,isReadOnly:l,isRequired:t,...n}=function(e){var a,r,l;let t=p(),{id:n,disabled:i,readOnly:s,required:c,isRequired:o,isInvalid:f,isReadOnly:u,isDisabled:b,onFocus:v,onBlur:m,...g}=e,y=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&y.push(t.feedbackId),(null==t?void 0:t.hasHelpText)&&y.push(t.helpTextId),{...g,"aria-describedby":y.join(" ")||void 0,id:null!=n?n:null==t?void 0:t.id,isDisabled:null!=(a=null!=i?i:b)?a:null==t?void 0:t.isDisabled,isReadOnly:null!=(r=null!=s?s:u)?r:null==t?void 0:t.isReadOnly,isRequired:null!=(l=null!=c?c:o)?l:null==t?void 0:t.isRequired,isInvalid:null!=f?f:null==t?void 0:t.isInvalid,onFocus:(0,d.v0)(null==t?void 0:t.onFocus,v),onBlur:(0,d.v0)(null==t?void 0:t.onBlur,m)}}(e);return{...n,disabled:a,readOnly:l,required:t,"aria-invalid":(0,d.Qm)(r),"aria-required":(0,d.Qm)(t),"aria-readonly":(0,d.Qm)(l)}}(0,n.G)(function(e,a){let r=(0,i.jC)("Form",e),{getRootProps:l,htmlProps:n,...b}=function(e){let{id:a,isRequired:r,isInvalid:l,isDisabled:n,isReadOnly:i,...s}=e,c=(0,o.useId)(),f=a||`field-${c}`,u=`${f}-label`,b=`${f}-feedback`,v=`${f}-helptext`,[p,m]=(0,o.useState)(!1),[g,y]=(0,o.useState)(!1),[h,S]=(0,o.useState)(!1),x=(0,o.useCallback)((e={},a=null)=>({id:v,...e,ref:(0,t.lq)(a,e=>{e&&y(!0)})}),[v]),N=(0,o.useCallback)((e={},a=null)=>({...e,ref:a,"data-focus":(0,d.PB)(h),"data-disabled":(0,d.PB)(n),"data-invalid":(0,d.PB)(l),"data-readonly":(0,d.PB)(i),id:void 0!==e.id?e.id:u,htmlFor:void 0!==e.htmlFor?e.htmlFor:f}),[f,n,h,l,i,u]),O=(0,o.useCallback)((e={},a=null)=>({id:b,...e,ref:(0,t.lq)(a,e=>{e&&m(!0)}),"aria-live":"polite"}),[b]),w=(0,o.useCallback)((e={},a=null)=>({...e,...s,ref:a,role:"group","data-focus":(0,d.PB)(h),"data-disabled":(0,d.PB)(n),"data-invalid":(0,d.PB)(l),"data-readonly":(0,d.PB)(i)}),[s,n,h,l,i]);return{isRequired:!!r,isInvalid:!!l,isReadOnly:!!i,isDisabled:!!n,isFocused:!!h,onFocus:()=>S(!0),onBlur:()=>S(!1),hasFeedbackText:p,setHasFeedbackText:m,hasHelpText:g,setHasHelpText:y,id:f,labelId:u,feedbackId:b,helpTextId:v,htmlProps:s,getHelpTextProps:x,getErrorMessageProps:O,getRootProps:w,getLabelProps:N,getRequiredIndicatorProps:(0,o.useCallback)((e={},a=null)=>({...e,ref:a,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[])}}((0,s.Lr)(e)),p=(0,d.cx)("chakra-form-control",e.className);return(0,f.jsx)(v,{value:b,children:(0,f.jsx)(u,{value:r,children:(0,f.jsx)(c.m.div,{...l({},a),className:p,__css:r.container})})})}).displayName="FormControl",(0,n.G)(function(e,a){let r=p(),l=b(),t=(0,d.cx)("chakra-form__helper-text",e.className);return(0,f.jsx)(c.m.div,{...null==r?void 0:r.getHelpTextProps(e,a),__css:l.helperText,className:t})}).displayName="FormHelperText"},46006:(e,a,r)=>{r.d(a,{I:()=>o});var l=r(61802),t=r(95459),n=r(21092),i=r(89320),s=r(4308),c=r(39689),d=r(95344),o=(0,t.G)(function(e,a){let{htmlSize:r,...t}=e,o=(0,n.jC)("Input",t),f=(0,i.Lr)(t),u=(0,l.Y)(f),b=(0,c.cx)("chakra-input",e.className);return(0,d.jsx)(s.m.input,{size:r,...u,__css:o.field,ref:a,className:b})});o.displayName="Input",o.id="Input"},3:(e,a,r)=>{r.d(a,{P:()=>u});var l=r(39689),t=r(95459),n=r(4308),i=r(95344),s=(0,t.G)(function(e,a){let{children:r,placeholder:t,className:s,...c}=e;return(0,i.jsxs)(n.m.select,{...c,ref:a,className:(0,l.cx)("chakra-select",s),children:[t&&(0,i.jsx)("option",{value:"",children:t}),r]})});s.displayName="SelectField";var c=r(61802),d=r(21092),o=r(89320),f=r(3729),u=(0,t.G)((e,a)=>{var r;let t=(0,d.jC)("Select",e),{rootProps:f,placeholder:u,icon:b,color:v,height:m,h:g,minH:y,minHeight:h,iconColor:S,iconSize:x,...N}=(0,o.Lr)(e),[O,w]=function(e,a){let r={},l={};for(let[t,n]of Object.entries(e))a.includes(t)?r[t]=n:l[t]=n;return[r,l]}(N,o.oE),C=(0,c.Y)(w),$={paddingEnd:"2rem",...t.field,_focus:{zIndex:"unset",...null==(r=t.field)?void 0:r._focus}};return(0,i.jsxs)(n.m.div,{className:"chakra-select__wrapper",__css:{width:"100%",height:"fit-content",position:"relative",color:v},...O,...f,children:[(0,i.jsx)(s,{ref:a,height:null!=g?g:m,minH:null!=y?y:h,placeholder:u,...C,__css:$,children:e.children}),(0,i.jsx)(p,{"data-disabled":(0,l.PB)(C.disabled),...(S||v)&&{color:S||v},__css:t.icon,...x&&{fontSize:x},children:b})]})});u.displayName="Select";var b=e=>(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),v=(0,n.m)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),p=e=>{let{children:a=(0,i.jsx)(b,{}),...r}=e,l=(0,f.cloneElement)(a,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return(0,i.jsx)(v,{...r,className:"chakra-select__icon-wrapper",children:(0,f.isValidElement)(a)?l:null})};p.displayName="SelectIcon"}};
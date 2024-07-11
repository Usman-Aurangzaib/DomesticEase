(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8241],{4294:function(t,e,s){Promise.resolve().then(s.bind(s,1669))},7907:function(t,e,s){"use strict";var i=s(5313);s.o(i,"useParams")&&s.d(e,{useParams:function(){return i.useParams}}),s.o(i,"usePathname")&&s.d(e,{usePathname:function(){return i.usePathname}}),s.o(i,"useRouter")&&s.d(e,{useRouter:function(){return i.useRouter}})},6518:function(t,e,s){"use strict";s.d(e,{AW:function(){return c},FA:function(){return d},Nq:function(){return l},PR:function(){return o},Re:function(){return a},bG:function(){return u},h8:function(){return r},r4:function(){return n}}),s(5355);var i=s(3472),r=(0,i.$)("9c3fff7bc34ea049ee987a3faad47491f6dcc742"),n=(0,i.$)("0f4d132821da063e73dee58ac0271c6b416dbe08"),a=(0,i.$)("2727ff5f424dc69ed443f01d95876fa2ea974c6d"),o=(0,i.$)("830a08f0b4898aa4d63fb94229055f2fce3e3f71"),u=(0,i.$)("e80969a57efceefee6a8a65908e1e314fe49a2a0"),l=(0,i.$)("ae483d5d3c1e2e20ae95a2933fab40df31f7512a"),c=(0,i.$)("a8dbe559b9e3e82e687aabcfe7c2bab9f020568c"),d=(0,i.$)("59975b62b53c5f40ad91cc17f309d881c82b0209")},1669:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return M}});var i=s(7437),r=s(6518),n=s(4741),a=s(209),o=s(4873),u=s(6129),l=s(129),c=s(653),d=s(2250),h=s(4285),p=s(7895),f=s(9623),m=s(1957),v=s(7082),x=s(568),b=s(703),y=s(7907),g=function(t){let{worker:e,setNull:s}=t,g=(0,y.useRouter)();(0,v.NL)();let j=(0,n.p)(),{mutate:C,isPending:k}=(0,x.D)({mutationFn:async()=>await (0,r.h8)(e.email),onSuccess:()=>{j({title:"User Deleted",description:"User has been deleted",status:"success",duration:5e3,isClosable:!0}),g.push("/dashboard/service-workers")}}),{mutate:S,isPaused:w}=(0,x.D)({mutationFn:async()=>await (0,r.Nq)(e.email,{approved:!e.approved}),onSuccess:()=>{j({title:e.approved?"User Disapproved":"User Approved",description:e.approved?"User has been disapproved":"User has been approved",status:"success",duration:5e3,isClosable:!0}),g.push("/dashboard/service-workers")}});return e?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(a.u_,{onClose:s,isOpen:!0,isCentered:!0,children:[(0,i.jsx)(o.Z,{}),(0,i.jsxs)(u.h,{children:[(0,i.jsx)(l.x,{children:"Order"}),(0,i.jsx)(c.o,{}),(0,i.jsxs)(d.f,{children:[(0,i.jsxs)(h.k,{background:"gray.100",padding:2,borderRadius:4,gap:2,flexDir:"column",children:[(0,i.jsx)(p.x,{fontSize:"large",fontWeight:"bold",children:"Worker Information"}),(0,i.jsx)(b.default,{alt:"123",src:"/api/get-image/".concat(e.image),width:200,height:200,style:{borderRadius:4,maxWidth:"200px",maxHeight:"200px"}}),(0,i.jsxs)(p.x,{children:["Worker Name: ",e.name]}),(0,i.jsxs)(p.x,{children:["Worker Email: ",e.email]}),(0,i.jsxs)(p.x,{children:["Worker Phone: ",e.phone]}),(0,i.jsxs)(p.x,{children:["Worker Address: ",e.address]}),(0,i.jsxs)(p.x,{children:["Worker City: ",e.city]}),(0,i.jsxs)(p.x,{children:["Worker State: ",e.state]}),(0,i.jsxs)(p.x,{children:["Worker Zip: ",e.zip]}),(0,i.jsxs)(p.x,{children:["Worker Service: ",e.service]}),(0,i.jsxs)(p.x,{children:["Worker Type: ",e.type]}),(0,i.jsxs)(p.x,{children:["Worker Approved: ",e.approved?"YES":"NO"]})]}),(0,i.jsxs)(h.k,{marginY:2,gap:2,children:[(0,i.jsx)(f.z,{colorScheme:"red",w:"100%",onClick:()=>{C()},isLoading:k,children:"Delete Service Worker"}),e.approved?(0,i.jsx)(f.z,{colorScheme:"facebook",w:"100%",onClick:()=>S(),isLoading:w,children:"Disapprove"}):(0,i.jsx)(f.z,{onClick:()=>S(),isLoading:w,colorScheme:"green",w:"100%",children:"Approve"})]})]}),(0,i.jsx)(m.m,{children:(0,i.jsx)(f.z,{w:"100%",onClick:s,children:"Close"})})]})]})}):(0,i.jsx)(i.Fragment,{})},j=s(3518),C=s(7727),k=s(8542),S=s(2540),w=s(6956),R=s(5426),O=s(8633),P=s(2973),T=s(4642),F=s(2265),M=()=>{let[t,e]=(0,F.useState)(null),{data:s,isLoading:n}=(0,T.a)({queryKey:["service-users"],queryFn:async()=>(0,r.FA)()});return console.log(s),(0,i.jsxs)(h.k,{flexDir:"column",gap:8,maxHeight:"95vh",overflowY:"scroll",w:"100%",children:[(0,i.jsx)(p.x,{fontWeight:"bold",fontSize:"xx-large",p:8,children:"Service Workers List"}),(0,i.jsx)(j.I,{placeholder:"Search",marginX:4,bg:"white"}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g,{worker:t,setNull:()=>e(null)}),(0,i.jsxs)(C.i,{variant:"simple",size:"md",width:"full",children:[(0,i.jsx)(k.h,{children:(0,i.jsxs)(S.Tr,{children:[(0,i.jsx)(w.Th,{children:"NAME"}),(0,i.jsx)(w.Th,{children:"ADDRESS"}),(0,i.jsx)(w.Th,{children:"CITY"}),(0,i.jsx)(w.Th,{children:"SERVICE TYPE"}),(0,i.jsx)(w.Th,{children:"APPROVED"})]})}),(0,i.jsxs)(R.p,{children:[n&&(0,i.jsx)(O.$,{}),null==s?void 0:s.map(t=>(0,i.jsxs)(S.Tr,{onClick:()=>e(t),_hover:{bg:"teal.100"},cursor:"pointer",children:[(0,i.jsx)(P.Td,{children:t.name}),(0,i.jsx)(P.Td,{children:t.address}),(0,i.jsx)(P.Td,{children:t.city}),(0,i.jsx)(P.Td,{children:t.service}),(0,i.jsx)(P.Td,{children:t.approved?"YES":"NO"})]},t.id))]})]})]})]})}},5700:function(t,e,s){"use strict";s.d(e,{Y:function(){return v}});var i=s(8608),r=s(6881),n=s(9030),a=s(6335),o=s(1073),u=s(9367),l=s(7362),c=s(2265),d=s(7437),[h,p]=(0,i.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[f,m]=(0,i.k)({strict:!1,name:"FormControlContext"});function v(t){let{isDisabled:e,isInvalid:s,isReadOnly:i,isRequired:r,...n}=function(t){var e,s,i;let r=m(),{id:n,disabled:a,readOnly:o,required:u,isRequired:c,isInvalid:d,isReadOnly:h,isDisabled:p,onFocus:f,onBlur:v,...x}=t,b=t["aria-describedby"]?[t["aria-describedby"]]:[];return(null==r?void 0:r.hasFeedbackText)&&(null==r?void 0:r.isInvalid)&&b.push(r.feedbackId),(null==r?void 0:r.hasHelpText)&&b.push(r.helpTextId),{...x,"aria-describedby":b.join(" ")||void 0,id:null!=n?n:null==r?void 0:r.id,isDisabled:null!=(e=null!=a?a:p)?e:null==r?void 0:r.isDisabled,isReadOnly:null!=(s=null!=o?o:h)?s:null==r?void 0:r.isReadOnly,isRequired:null!=(i=null!=u?u:c)?i:null==r?void 0:r.isRequired,isInvalid:null!=d?d:null==r?void 0:r.isInvalid,onFocus:(0,l.v0)(null==r?void 0:r.onFocus,f),onBlur:(0,l.v0)(null==r?void 0:r.onBlur,v)}}(t);return{...n,disabled:e,readOnly:i,required:r,"aria-invalid":(0,l.Qm)(s),"aria-required":(0,l.Qm)(r),"aria-readonly":(0,l.Qm)(i)}}(0,n.G)(function(t,e){let s=(0,a.jC)("Form",t),{getRootProps:i,htmlProps:n,...p}=function(t){let{id:e,isRequired:s,isInvalid:i,isDisabled:n,isReadOnly:a,...o}=t,u=(0,c.useId)(),d=e||"field-".concat(u),h="".concat(d,"-label"),p="".concat(d,"-feedback"),f="".concat(d,"-helptext"),[m,v]=(0,c.useState)(!1),[x,b]=(0,c.useState)(!1),[y,g]=(0,c.useState)(!1),j=(0,c.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{id:f,...t,ref:(0,r.lq)(e,t=>{t&&b(!0)})}},[f]),C=(0,c.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...t,ref:e,"data-focus":(0,l.PB)(y),"data-disabled":(0,l.PB)(n),"data-invalid":(0,l.PB)(i),"data-readonly":(0,l.PB)(a),id:void 0!==t.id?t.id:h,htmlFor:void 0!==t.htmlFor?t.htmlFor:d}},[d,n,y,i,a,h]),k=(0,c.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{id:p,...t,ref:(0,r.lq)(e,t=>{t&&v(!0)}),"aria-live":"polite"}},[p]),S=(0,c.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...t,...o,ref:e,role:"group","data-focus":(0,l.PB)(y),"data-disabled":(0,l.PB)(n),"data-invalid":(0,l.PB)(i),"data-readonly":(0,l.PB)(a)}},[o,n,y,i,a]);return{isRequired:!!s,isInvalid:!!i,isReadOnly:!!a,isDisabled:!!n,isFocused:!!y,onFocus:()=>g(!0),onBlur:()=>g(!1),hasFeedbackText:m,setHasFeedbackText:v,hasHelpText:x,setHasHelpText:b,id:d,labelId:h,feedbackId:p,helpTextId:f,htmlProps:o,getHelpTextProps:j,getErrorMessageProps:k,getRootProps:S,getLabelProps:C,getRequiredIndicatorProps:(0,c.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...t,ref:e,role:"presentation","aria-hidden":!0,children:t.children||"*"}},[])}}((0,o.Lr)(t)),m=(0,l.cx)("chakra-form-control",t.className);return(0,d.jsx)(f,{value:p,children:(0,d.jsx)(h,{value:s,children:(0,d.jsx)(u.m.div,{...i({},e),className:m,__css:s.container})})})}).displayName="FormControl",(0,n.G)(function(t,e){let s=m(),i=p(),r=(0,l.cx)("chakra-form__helper-text",t.className);return(0,d.jsx)(u.m.div,{...null==s?void 0:s.getHelpTextProps(t,e),__css:i.helperText,className:r})}).displayName="FormHelperText"},3518:function(t,e,s){"use strict";s.d(e,{I:function(){return c}});var i=s(5700),r=s(9030),n=s(6335),a=s(1073),o=s(9367),u=s(7362),l=s(7437),c=(0,r.G)(function(t,e){let{htmlSize:s,...r}=t,c=(0,n.jC)("Input",r),d=(0,a.Lr)(r),h=(0,i.Y)(d),p=(0,u.cx)("chakra-input",t.className);return(0,l.jsx)(o.m.input,{size:s,...h,__css:c.field,ref:e,className:p})});c.displayName="Input",c.id="Input"},8542:function(t,e,s){"use strict";s.d(e,{h:function(){return o}});var i=s(7727),r=s(9030),n=s(9367),a=s(7437),o=(0,r.G)((t,e)=>{let s=(0,i.p)();return(0,a.jsx)(n.m.thead,{...t,ref:e,__css:s.thead})})},7727:function(t,e,s){"use strict";s.d(e,{i:function(){return h},p:function(){return d}});var i=s(9030),r=s(6335),n=s(1073),a=s(9367),o=s(7362),u=s(8608),l=s(7437),[c,d]=(0,u.k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),h=(0,i.G)((t,e)=>{let s=(0,r.jC)("Table",t),{className:i,layout:u,...d}=(0,n.Lr)(t);return(0,l.jsx)(c,{value:s,children:(0,l.jsx)(a.m.table,{ref:e,__css:{tableLayout:u,...s.table},className:(0,o.cx)("chakra-table",i),...d})})});h.displayName="Table"},2540:function(t,e,s){"use strict";s.d(e,{Tr:function(){return o}});var i=s(7727),r=s(9030),n=s(9367),a=s(7437),o=(0,r.G)((t,e)=>{let s=(0,i.p)();return(0,a.jsx)(n.m.tr,{...t,ref:e,__css:s.tr})})},5426:function(t,e,s){"use strict";s.d(e,{p:function(){return o}});var i=s(7727),r=s(9030),n=s(9367),a=s(7437),o=(0,r.G)((t,e)=>{let s=(0,i.p)();return(0,a.jsx)(n.m.tbody,{...t,ref:e,__css:s.tbody})})},6956:function(t,e,s){"use strict";s.d(e,{Th:function(){return o}});var i=s(7727),r=s(9030),n=s(9367),a=s(7437),o=(0,r.G)((t,e)=>{let{isNumeric:s,...r}=t,o=(0,i.p)();return(0,a.jsx)(n.m.th,{...r,ref:e,__css:o.th,"data-is-numeric":s})})},2973:function(t,e,s){"use strict";s.d(e,{Td:function(){return o}});var i=s(7727),r=s(9030),n=s(9367),a=s(7437),o=(0,r.G)((t,e)=>{let{isNumeric:s,...r}=t,o=(0,i.p)();return(0,a.jsx)(n.m.td,{...r,ref:e,__css:o.td,"data-is-numeric":s})})},4741:function(t,e,s){"use strict";s.d(e,{p:function(){return o}});var i=s(8504),r=s(750),n=s(2032),a=s(2265);function o(t){let{theme:e}=(0,n.uP)(),s=(0,i.OX)();return(0,a.useMemo)(()=>(0,r.Cj)(e.direction,{...s,...t}),[t,e.direction,s])}},1793:function(t,e,s){"use strict";s.d(e,{R:function(){return o},m:function(){return a}});var i=s(5139),r=s(2041),n=s(326),a=class extends r.F{#t;#e;#s;#i;constructor(t){super(),this.mutationId=t.mutationId,this.#e=t.defaultOptions,this.#s=t.mutationCache,this.#t=[],this.state=t.state||o(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.#e,...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#t.includes(t)||(this.#t.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#t=this.#t.filter(e=>e!==t),this.scheduleGc(),this.#s.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#t.length||("pending"===this.state.status?this.scheduleGc():this.#s.remove(this))}continue(){return this.#i?.continue()??this.execute(this.state.variables)}async execute(t){let e="pending"===this.state.status;try{if(!e){this.#r({type:"pending",variables:t}),await this.#s.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#r({type:"pending",context:e,variables:t})}let s=await (this.#i=(0,n.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#r({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#i.promise);return await this.#s.config.onSuccess?.(s,t,this.state.context,this),await this.options.onSuccess?.(s,t,this.state.context),await this.#s.config.onSettled?.(s,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(s,null,t,this.state.context),this.#r({type:"success",data:s}),s}catch(e){try{throw await this.#s.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#s.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#r({type:"error",error:e})}}}#r(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,n.Kw)(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),i.V.batch(()=>{this.#t.forEach(e=>{e.onMutationUpdate(t)}),this.#s.notify({mutation:this,type:"updated",action:t})})}};function o(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},568:function(t,e,s){"use strict";s.d(e,{D:function(){return d}});var i=s(2265),r=s(1793),n=s(5139),a=s(4614),o=s(6063),u=class extends a.l{#n;#a=void 0;#o;#u;constructor(t,e){super(),this.#n=t,this.setOptions(e),this.bindMethods(),this.#l()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#n.defaultMutationOptions(t),(0,o.VS)(this.options,e)||this.#n.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#o,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,o.Ym)(e.mutationKey)!==(0,o.Ym)(this.options.mutationKey)?this.reset():this.#o?.state.status==="pending"&&this.#o.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#o?.removeObserver(this)}onMutationUpdate(t){this.#l(),this.#c(t)}getCurrentResult(){return this.#a}reset(){this.#o?.removeObserver(this),this.#o=void 0,this.#l(),this.#c()}mutate(t,e){return this.#u=e,this.#o?.removeObserver(this),this.#o=this.#n.getMutationCache().build(this.#n,this.options),this.#o.addObserver(this),this.#o.execute(t)}#l(){let t=this.#o?.state??(0,r.R)();this.#a={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#c(t){n.V.batch(()=>{if(this.#u&&this.hasListeners()){let e=this.#a.variables,s=this.#a.context;t?.type==="success"?(this.#u.onSuccess?.(t.data,e,s),this.#u.onSettled?.(t.data,null,e,s)):t?.type==="error"&&(this.#u.onError?.(t.error,e,s),this.#u.onSettled?.(void 0,t.error,e,s))}this.listeners.forEach(t=>{t(this.#a)})})}},l=s(7082),c=s(826);function d(t,e){let s=(0,l.NL)(e),[r]=i.useState(()=>new u(s,t));i.useEffect(()=>{r.setOptions(t)},[r,t]);let a=i.useSyncExternalStore(i.useCallback(t=>r.subscribe(n.V.batchCalls(t)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),o=i.useCallback((t,e)=>{r.mutate(t,e).catch(c.Z)},[r]);if(a.error&&(0,c.L)(r.options.throwOnError,[a.error]))throw a.error;return{...a,mutate:o,mutateAsync:a.mutate}}}},function(t){t.O(0,[1571,8633,8618,4642,3104,8504,3232,1409,2971,8069,1744],function(){return t(t.s=4294)}),_N_E=t.O()}]);
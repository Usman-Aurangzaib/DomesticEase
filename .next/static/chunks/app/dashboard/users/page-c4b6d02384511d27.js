(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3618],{6284:function(t,e,n){Promise.resolve().then(n.bind(n,4520))},3472:function(t,e,n){"use strict";Object.defineProperty(e,"$",{enumerable:!0,get:function(){return i}});let s=n(5355);function i(t){let{createServerReference:e}=n(6671);return e(t,s.callServer)}},6518:function(t,e,n){"use strict";n.d(e,{AW:function(){return l},FA:function(){return h},Nq:function(){return c},PR:function(){return o},Re:function(){return a},bG:function(){return u},h8:function(){return i},r4:function(){return r}}),n(5355);var s=n(3472),i=(0,s.$)("9c3fff7bc34ea049ee987a3faad47491f6dcc742"),r=(0,s.$)("0f4d132821da063e73dee58ac0271c6b416dbe08"),a=(0,s.$)("2727ff5f424dc69ed443f01d95876fa2ea974c6d"),o=(0,s.$)("830a08f0b4898aa4d63fb94229055f2fce3e3f71"),u=(0,s.$)("e80969a57efceefee6a8a65908e1e314fe49a2a0"),c=(0,s.$)("ae483d5d3c1e2e20ae95a2933fab40df31f7512a"),l=(0,s.$)("a8dbe559b9e3e82e687aabcfe7c2bab9f020568c"),h=(0,s.$)("59975b62b53c5f40ad91cc17f309d881c82b0209")},4520:function(t,e,n){"use strict";n.r(e);var s=n(7437),i=n(6518),r=n(4285),a=n(7895),o=n(7727),u=n(8542),c=n(2540),l=n(6956),h=n(5426),d=n(8633),f=n(2973),p=n(9623),m=n(7082),x=n(4642),v=n(568);e.default=()=>{let t=(0,m.NL)(),{data:e,isLoading:n}=(0,x.a)({queryKey:["users-admin"],queryFn:async()=>(0,i.AW)()}),{mutate:b}=(0,v.D)({mutationFn:async t=>{await (0,i.h8)(t)},onSuccess:()=>{t.invalidateQueries({queryKey:["users-admin"]})}});return(0,s.jsxs)(r.k,{flexDir:"column",gap:8,maxHeight:"95vh",overflowY:"scroll",w:"100%",children:[(0,s.jsx)(a.x,{fontWeight:"bold",fontSize:"xx-large",p:8,children:"Users list"}),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.i,{variant:"simple",size:"md",width:"full",children:[(0,s.jsx)(u.h,{children:(0,s.jsxs)(c.Tr,{children:[(0,s.jsx)(l.Th,{children:"NAME"}),(0,s.jsx)(l.Th,{children:"ADDRESS"}),(0,s.jsx)(l.Th,{children:"CITY"}),(0,s.jsx)(l.Th,{children:"PHONE"}),(0,s.jsx)(l.Th,{children:"EMAIL"}),(0,s.jsx)(l.Th,{children:"ACTION"})]})}),(0,s.jsxs)(h.p,{children:[n&&(0,s.jsx)(d.$,{}),null==e?void 0:e.map(t=>{var e,n,i,r;return(0,s.jsxs)(c.Tr,{children:[(0,s.jsx)(f.Td,{children:null!==(e=t.name)&&void 0!==e?e:"Empty"}),(0,s.jsx)(f.Td,{children:null!==(n=t.address)&&void 0!==n?n:"Empty"}),(0,s.jsx)(f.Td,{children:null!==(i=t.city)&&void 0!==i?i:"Empty"}),(0,s.jsx)(f.Td,{children:null!==(r=t.phone)&&void 0!==r?r:"Empty"}),(0,s.jsx)(f.Td,{children:t.email}),(0,s.jsx)(f.Td,{children:(0,s.jsx)(p.z,{onClick:()=>{b(t.email)},colorScheme:"red",children:"Delete"})})]},t.id)})]})]})})]})}},9623:function(t,e,n){"use strict";n.d(e,{z:function(){return x}});var s=n(2265),[i,r]=(0,n(8608).k)({strict:!1,name:"ButtonGroupContext"}),a=n(9367),o=n(7362),u=n(7437);function c(t){let{children:e,className:n,...i}=t,r=(0,s.isValidElement)(e)?(0,s.cloneElement)(e,{"aria-hidden":!0,focusable:!1}):e,c=(0,o.cx)("chakra-button__icon",n);return(0,u.jsx)(a.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...i,className:c,children:r})}c.displayName="ButtonIcon";var l=n(8633);function h(t){let{label:e,placement:n,spacing:i="0.5rem",children:r=(0,u.jsx)(l.$,{color:"currentColor",width:"1em",height:"1em"}),className:c,__css:h,...d}=t,f=(0,o.cx)("chakra-button__spinner",c),p="start"===n?"marginEnd":"marginStart",m=(0,s.useMemo)(()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[p]:e?i:0,fontSize:"1em",lineHeight:"normal",...h}),[h,e,p,i]);return(0,u.jsx)(a.m.div,{className:f,...d,__css:m,children:r})}h.displayName="ButtonSpinner";var d=n(6881),f=n(9030),p=n(6335),m=n(1073),x=(0,f.G)((t,e)=>{let n=r(),i=(0,p.mq)("Button",{...n,...t}),{isDisabled:c=null==n?void 0:n.isDisabled,isLoading:l,isActive:f,children:x,leftIcon:b,rightIcon:y,loadingText:g,iconSpacing:j="0.5rem",type:C,spinner:w,spinnerPlacement:S="start",className:_,as:T,...E}=(0,m.Lr)(t),O=(0,s.useMemo)(()=>{let t={...null==i?void 0:i._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...i,...!!n&&{_focus:t}}},[i,n]),{ref:M,type:N}=function(t){let[e,n]=(0,s.useState)(!t);return{ref:(0,s.useCallback)(t=>{t&&n("BUTTON"===t.tagName)},[]),type:e?"button":void 0}}(T),k={rightIcon:y,leftIcon:b,iconSpacing:j,children:x};return(0,u.jsxs)(a.m.button,{ref:(0,d.qq)(e,M),as:T,type:null!=C?C:N,"data-active":(0,o.PB)(f),"data-loading":(0,o.PB)(l),__css:O,className:(0,o.cx)("chakra-button",_),...E,disabled:c||l,children:[l&&"start"===S&&(0,u.jsx)(h,{className:"chakra-button__spinner--start",label:g,placement:"start",spacing:j,children:w}),l?g||(0,u.jsx)(a.m.span,{opacity:0,children:(0,u.jsx)(v,{...k})}):(0,u.jsx)(v,{...k}),l&&"end"===S&&(0,u.jsx)(h,{className:"chakra-button__spinner--end",label:g,placement:"end",spacing:j,children:w})]})});function v(t){let{leftIcon:e,rightIcon:n,children:s,iconSpacing:i}=t;return(0,u.jsxs)(u.Fragment,{children:[e&&(0,u.jsx)(c,{marginEnd:i,children:e}),s,n&&(0,u.jsx)(c,{marginStart:i,children:n})]})}x.displayName="Button"},7895:function(t,e,n){"use strict";n.d(e,{x:function(){return l}});var s=n(9030),i=n(6335),r=n(1073),a=n(9367),o=n(7362),u=n(8001),c=n(7437),l=(0,s.G)(function(t,e){let n=(0,i.mq)("Text",t),{className:s,align:l,decoration:h,casing:d,...f}=(0,r.Lr)(t),p=(0,u.o)({textAlign:t.align,textDecoration:t.decoration,textTransform:t.casing});return(0,c.jsx)(a.m.p,{ref:e,className:(0,o.cx)("chakra-text",t.className),...p,...f,__css:n})});l.displayName="Text"},4285:function(t,e,n){"use strict";n.d(e,{k:function(){return a}});var s=n(9030),i=n(9367),r=n(7437),a=(0,s.G)(function(t,e){let{direction:n,align:s,justify:a,wrap:o,basis:u,grow:c,shrink:l,...h}=t;return(0,r.jsx)(i.m.div,{ref:e,__css:{display:"flex",flexDirection:n,alignItems:s,justifyContent:a,flexWrap:o,flexBasis:u,flexGrow:c,flexShrink:l},...h})});a.displayName="Flex"},8001:function(t,e,n){"use strict";function s(t){let e=Object.assign({},t);for(let t in e)void 0===e[t]&&delete e[t];return e}n.d(e,{o:function(){return s}})},8608:function(t,e,n){"use strict";n.d(e,{k:function(){return i}});var s=n(2265);function i(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{name:e,strict:n=!0,hookName:i="useContext",providerName:r="Provider",errorMessage:a,defaultValue:o}=t,u=(0,s.createContext)(o);return u.displayName=e,[u.Provider,function t(){var e;let o=(0,s.useContext)(u);if(!o&&n){let n=Error(null!=a?a:"".concat(i," returned `undefined`. Seems you forgot to wrap component within ").concat(r));throw n.name="ContextError",null==(e=Error.captureStackTrace)||e.call(Error,n,t),n}return o},u]}},6881:function(t,e,n){"use strict";n.d(e,{lq:function(){return i},qq:function(){return r}});var s=n(2265);function i(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return t=>{e.forEach(e=>{!function(t,e){if(null!=t){if("function"==typeof t){t(e);return}try{t.current=e}catch(n){throw Error("Cannot assign value '".concat(e,"' to ref '").concat(t,"'"))}}}(e,t)})}}function r(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,s.useMemo)(()=>i(...e),e)}},8542:function(t,e,n){"use strict";n.d(e,{h:function(){return o}});var s=n(7727),i=n(9030),r=n(9367),a=n(7437),o=(0,i.G)((t,e)=>{let n=(0,s.p)();return(0,a.jsx)(r.m.thead,{...t,ref:e,__css:n.thead})})},7727:function(t,e,n){"use strict";n.d(e,{i:function(){return d},p:function(){return h}});var s=n(9030),i=n(6335),r=n(1073),a=n(9367),o=n(7362),u=n(8608),c=n(7437),[l,h]=(0,u.k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),d=(0,s.G)((t,e)=>{let n=(0,i.jC)("Table",t),{className:s,layout:u,...h}=(0,r.Lr)(t);return(0,c.jsx)(l,{value:n,children:(0,c.jsx)(a.m.table,{ref:e,__css:{tableLayout:u,...n.table},className:(0,o.cx)("chakra-table",s),...h})})});d.displayName="Table"},2540:function(t,e,n){"use strict";n.d(e,{Tr:function(){return o}});var s=n(7727),i=n(9030),r=n(9367),a=n(7437),o=(0,i.G)((t,e)=>{let n=(0,s.p)();return(0,a.jsx)(r.m.tr,{...t,ref:e,__css:n.tr})})},5426:function(t,e,n){"use strict";n.d(e,{p:function(){return o}});var s=n(7727),i=n(9030),r=n(9367),a=n(7437),o=(0,i.G)((t,e)=>{let n=(0,s.p)();return(0,a.jsx)(r.m.tbody,{...t,ref:e,__css:n.tbody})})},6956:function(t,e,n){"use strict";n.d(e,{Th:function(){return o}});var s=n(7727),i=n(9030),r=n(9367),a=n(7437),o=(0,i.G)((t,e)=>{let{isNumeric:n,...i}=t,o=(0,s.p)();return(0,a.jsx)(r.m.th,{...i,ref:e,__css:o.th,"data-is-numeric":n})})},2973:function(t,e,n){"use strict";n.d(e,{Td:function(){return o}});var s=n(7727),i=n(9030),r=n(9367),a=n(7437),o=(0,i.G)((t,e)=>{let{isNumeric:n,...i}=t,o=(0,s.p)();return(0,a.jsx)(r.m.td,{...i,ref:e,__css:o.td,"data-is-numeric":n})})},1793:function(t,e,n){"use strict";n.d(e,{R:function(){return o},m:function(){return a}});var s=n(5139),i=n(2041),r=n(326),a=class extends i.F{#t;#e;#n;#s;constructor(t){super(),this.mutationId=t.mutationId,this.#e=t.defaultOptions,this.#n=t.mutationCache,this.#t=[],this.state=t.state||o(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.#e,...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#t.includes(t)||(this.#t.push(t),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#t=this.#t.filter(e=>e!==t),this.scheduleGc(),this.#n.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#t.length||("pending"===this.state.status?this.scheduleGc():this.#n.remove(this))}continue(){return this.#s?.continue()??this.execute(this.state.variables)}async execute(t){let e="pending"===this.state.status;try{if(!e){this.#i({type:"pending",variables:t}),await this.#n.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#i({type:"pending",context:e,variables:t})}let n=await (this.#s=(0,r.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#i({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#i({type:"pause"})},onContinue:()=>{this.#i({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#s.promise);return await this.#n.config.onSuccess?.(n,t,this.state.context,this),await this.options.onSuccess?.(n,t,this.state.context),await this.#n.config.onSettled?.(n,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(n,null,t,this.state.context),this.#i({type:"success",data:n}),n}catch(e){try{throw await this.#n.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#n.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#i({type:"error",error:e})}}}#i(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,r.Kw)(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),s.V.batch(()=>{this.#t.forEach(e=>{e.onMutationUpdate(t)}),this.#n.notify({mutation:this,type:"updated",action:t})})}};function o(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},568:function(t,e,n){"use strict";n.d(e,{D:function(){return h}});var s=n(2265),i=n(1793),r=n(5139),a=n(4614),o=n(6063),u=class extends a.l{#r;#a=void 0;#o;#u;constructor(t,e){super(),this.#r=t,this.setOptions(e),this.bindMethods(),this.#c()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#r.defaultMutationOptions(t),(0,o.VS)(this.options,e)||this.#r.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#o,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,o.Ym)(e.mutationKey)!==(0,o.Ym)(this.options.mutationKey)?this.reset():this.#o?.state.status==="pending"&&this.#o.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#o?.removeObserver(this)}onMutationUpdate(t){this.#c(),this.#l(t)}getCurrentResult(){return this.#a}reset(){this.#o?.removeObserver(this),this.#o=void 0,this.#c(),this.#l()}mutate(t,e){return this.#u=e,this.#o?.removeObserver(this),this.#o=this.#r.getMutationCache().build(this.#r,this.options),this.#o.addObserver(this),this.#o.execute(t)}#c(){let t=this.#o?.state??(0,i.R)();this.#a={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#l(t){r.V.batch(()=>{if(this.#u&&this.hasListeners()){let e=this.#a.variables,n=this.#a.context;t?.type==="success"?(this.#u.onSuccess?.(t.data,e,n),this.#u.onSettled?.(t.data,null,e,n)):t?.type==="error"&&(this.#u.onError?.(t.error,e,n),this.#u.onSettled?.(void 0,t.error,e,n))}this.listeners.forEach(t=>{t(this.#a)})})}},c=n(7082),l=n(826);function h(t,e){let n=(0,c.NL)(e),[i]=s.useState(()=>new u(n,t));s.useEffect(()=>{i.setOptions(t)},[i,t]);let a=s.useSyncExternalStore(s.useCallback(t=>i.subscribe(r.V.batchCalls(t)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),o=s.useCallback((t,e)=>{i.mutate(t,e).catch(l.Z)},[i]);if(a.error&&(0,l.L)(i.options.throwOnError,[a.error]))throw a.error;return{...a,mutate:o,mutateAsync:a.mutate}}}},function(t){t.O(0,[1571,8633,8618,4642,2971,8069,1744],function(){return t(t.s=6284)}),_N_E=t.O()}]);
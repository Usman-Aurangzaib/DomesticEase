(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3021],{1266:function(e,t,n){Promise.resolve().then(n.bind(n,1227))},9079:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(3127)},3472:function(e,t,n){"use strict";Object.defineProperty(t,"$",{enumerable:!0,get:function(){return i}});let r=n(5355);function i(e){let{createServerReference:t}=n(6671);return t(e,r.callServer)}},3127:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var u=[],c=!1,s=-1;function d(){c&&r&&(c=!1,r.length?u=r.concat(u):s=-1,u.length&&f())}function f(){if(!c){var e=l(d);c=!0;for(var t=u.length;t;){for(r=u,u=[];++s<t;)r&&r[s].run();s=-1,t=u.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||c||l(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}},a=!0;try{t[e](o,o.exports,r),a=!1}finally{a&&delete n[e]}return o.exports}r.ab="//";var i=r(229);e.exports=i}()},7199:function(e,t,n){"use strict";n.d(t,{Nx:function(){return a},w1:function(){return o},wz:function(){return i}}),n(5355);var r=n(3472),i=(0,r.$)("b00cee09535d9f0ede905d26ffdfec2302265df0"),o=(0,r.$)("9f3ec1c38ffdd9630ed8e638c0c67f95d95de8d0"),a=(0,r.$)("42144440996ad4efe346e042b91a40b17d1bb67e")},1227:function(e,t,n){"use strict";n.r(t);var r=n(7437),i=n(4642),o=n(7199),a=n(4285),l=n(3518),u=n(8633),c=n(7895),s=n(2265),d=n(9079);t.default=()=>{let[e,t]=(0,s.useState)(""),{data:n,isLoading:f}=(0,i.a)({queryKey:["items-admin"],queryFn:async()=>(0,o.Nx)()}),m=""===e?n:null==n?void 0:n.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return(0,r.jsx)("div",{className:"store",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"section-header",children:(0,r.jsx)("h2",{children:"Shop items"})}),(0,r.jsx)(a.k,{paddingBottom:8,justifyContent:"center",children:(0,r.jsx)(l.I,{value:e,type:"text",placeholder:"Search by name",onChange:e=>t(e.target.value),maxW:"400px",w:"100%"})}),(0,r.jsxs)("div",{className:"row",children:[f&&(0,r.jsx)(u.$,{}),(null==m?void 0:m.length)===0&&(0,r.jsx)(c.x,{children:"no product available"}),(0,r.jsx)(a.k,{flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start",gap:"20px",children:null==m?void 0:m.map(e=>(0,r.jsxs)("div",{className:"store-item",style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",maxWidth:"300px"},children:[(0,r.jsx)("img",{src:"/api/get-image/".concat(e.imageName),alt:"Service",style:{width:"100%",maxWidth:"250px",height:"auto",objectFit:"cover"}}),(0,r.jsx)("p",{children:e.name}),(0,r.jsx)("h5",{children:e.description}),(0,r.jsxs)("h6",{children:[" ₨ ",e.price]}),(0,r.jsx)("button",{style:{padding:"10px",borderRadius:"10px",background:"#6666FF",color:"white",border:"none",marginBottom:"10px"},className:"snipcart-add-item","data-item-id":"20","data-item-price":"50.0","data-item-description":e.description,"data-item-image":"/api/get-image/".concat(e.imageName),"data-item-name":e.name,"data-item-url":d.env.url,children:"Add to cart"})]},e.id))})]})]})})}},5700:function(e,t,n){"use strict";n.d(t,{Y:function(){return p}});var r=n(8608),i=n(6881),o=n(9030),a=n(6335),l=n(1073),u=n(9367),c=n(7362),s=n(2265),d=n(7437),[f,m]=(0,r.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[h,v]=(0,r.k)({strict:!1,name:"FormControlContext"});function p(e){let{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:i,...o}=function(e){var t,n,r;let i=v(),{id:o,disabled:a,readOnly:l,required:u,isRequired:s,isInvalid:d,isReadOnly:f,isDisabled:m,onFocus:h,onBlur:p,...x}=e,g=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==i?void 0:i.hasFeedbackText)&&(null==i?void 0:i.isInvalid)&&g.push(i.feedbackId),(null==i?void 0:i.hasHelpText)&&g.push(i.helpTextId),{...x,"aria-describedby":g.join(" ")||void 0,id:null!=o?o:null==i?void 0:i.id,isDisabled:null!=(t=null!=a?a:m)?t:null==i?void 0:i.isDisabled,isReadOnly:null!=(n=null!=l?l:f)?n:null==i?void 0:i.isReadOnly,isRequired:null!=(r=null!=u?u:s)?r:null==i?void 0:i.isRequired,isInvalid:null!=d?d:null==i?void 0:i.isInvalid,onFocus:(0,c.v0)(null==i?void 0:i.onFocus,h),onBlur:(0,c.v0)(null==i?void 0:i.onBlur,p)}}(e);return{...o,disabled:t,readOnly:r,required:i,"aria-invalid":(0,c.Qm)(n),"aria-required":(0,c.Qm)(i),"aria-readonly":(0,c.Qm)(r)}}(0,o.G)(function(e,t){let n=(0,a.jC)("Form",e),{getRootProps:r,htmlProps:o,...m}=function(e){let{id:t,isRequired:n,isInvalid:r,isDisabled:o,isReadOnly:a,...l}=e,u=(0,s.useId)(),d=t||"field-".concat(u),f="".concat(d,"-label"),m="".concat(d,"-feedback"),h="".concat(d,"-helptext"),[v,p]=(0,s.useState)(!1),[x,g]=(0,s.useState)(!1),[y,b]=(0,s.useState)(!1),j=(0,s.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{id:h,...e,ref:(0,i.lq)(t,e=>{e&&g(!0)})}},[h]),k=(0,s.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:t,"data-focus":(0,c.PB)(y),"data-disabled":(0,c.PB)(o),"data-invalid":(0,c.PB)(r),"data-readonly":(0,c.PB)(a),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:d}},[d,o,y,r,a,f]),C=(0,s.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{id:m,...e,ref:(0,i.lq)(t,e=>{e&&p(!0)}),"aria-live":"polite"}},[m]),T=(0,s.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,...l,ref:t,role:"group","data-focus":(0,c.PB)(y),"data-disabled":(0,c.PB)(o),"data-invalid":(0,c.PB)(r),"data-readonly":(0,c.PB)(a)}},[l,o,y,r,a]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!a,isDisabled:!!o,isFocused:!!y,onFocus:()=>b(!0),onBlur:()=>b(!1),hasFeedbackText:v,setHasFeedbackText:p,hasHelpText:x,setHasHelpText:g,id:d,labelId:f,feedbackId:m,helpTextId:h,htmlProps:l,getHelpTextProps:j,getErrorMessageProps:C,getRootProps:T,getLabelProps:k,getRequiredIndicatorProps:(0,s.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}},[])}}((0,l.Lr)(e)),v=(0,c.cx)("chakra-form-control",e.className);return(0,d.jsx)(h,{value:m,children:(0,d.jsx)(f,{value:n,children:(0,d.jsx)(u.m.div,{...r({},t),className:v,__css:n.container})})})}).displayName="FormControl",(0,o.G)(function(e,t){let n=v(),r=m(),i=(0,c.cx)("chakra-form__helper-text",e.className);return(0,d.jsx)(u.m.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:r.helperText,className:i})}).displayName="FormHelperText"},3518:function(e,t,n){"use strict";n.d(t,{I:function(){return s}});var r=n(5700),i=n(9030),o=n(6335),a=n(1073),l=n(9367),u=n(7362),c=n(7437),s=(0,i.G)(function(e,t){let{htmlSize:n,...i}=e,s=(0,o.jC)("Input",i),d=(0,a.Lr)(i),f=(0,r.Y)(d),m=(0,u.cx)("chakra-input",e.className);return(0,c.jsx)(l.m.input,{size:n,...f,__css:s.field,ref:t,className:m})});s.displayName="Input",s.id="Input"},7895:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});var r=n(9030),i=n(6335),o=n(1073),a=n(9367),l=n(7362),u=n(8001),c=n(7437),s=(0,r.G)(function(e,t){let n=(0,i.mq)("Text",e),{className:r,align:s,decoration:d,casing:f,...m}=(0,o.Lr)(e),h=(0,u.o)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,c.jsx)(a.m.p,{ref:t,className:(0,l.cx)("chakra-text",e.className),...h,...m,__css:n})});s.displayName="Text"},4285:function(e,t,n){"use strict";n.d(t,{k:function(){return a}});var r=n(9030),i=n(9367),o=n(7437),a=(0,r.G)(function(e,t){let{direction:n,align:r,justify:a,wrap:l,basis:u,grow:c,shrink:s,...d}=e;return(0,o.jsx)(i.m.div,{ref:t,__css:{display:"flex",flexDirection:n,alignItems:r,justifyContent:a,flexWrap:l,flexBasis:u,flexGrow:c,flexShrink:s},...d})});a.displayName="Flex"},8001:function(e,t,n){"use strict";function r(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}n.d(t,{o:function(){return r}})},8608:function(e,t,n){"use strict";n.d(t,{k:function(){return i}});var r=n(2265);function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{name:t,strict:n=!0,hookName:i="useContext",providerName:o="Provider",errorMessage:a,defaultValue:l}=e,u=(0,r.createContext)(l);return u.displayName=t,[u.Provider,function e(){var t;let l=(0,r.useContext)(u);if(!l&&n){let n=Error(null!=a?a:"".concat(i," returned `undefined`. Seems you forgot to wrap component within ").concat(o));throw n.name="ContextError",null==(t=Error.captureStackTrace)||t.call(Error,n,e),n}return l},u]}},6881:function(e,t,n){"use strict";n.d(t,{lq:function(){return i},qq:function(){return o}});var r=n(2265);function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}}(t,e)})}}function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.useMemo)(()=>i(...t),t)}}},function(e){e.O(0,[1571,8633,8618,4642,2971,8069,1744],function(){return e(e.s=1266)}),_N_E=e.O()}]);
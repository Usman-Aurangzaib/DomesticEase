(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3797],{9335:function(e,t,n){Promise.resolve().then(n.bind(n,3022))},7907:function(e,t,n){"use strict";var r=n(5313);n.o(r,"useParams")&&n.d(t,{useParams:function(){return r.useParams}}),n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},6518:function(e,t,n){"use strict";n.d(t,{AW:function(){return l},FA:function(){return d},Nq:function(){return u},PR:function(){return o},Re:function(){return s},bG:function(){return c},h8:function(){return a},r4:function(){return i}}),n(5355);var r=n(3472),a=(0,r.$)("9c3fff7bc34ea049ee987a3faad47491f6dcc742"),i=(0,r.$)("0f4d132821da063e73dee58ac0271c6b416dbe08"),s=(0,r.$)("2727ff5f424dc69ed443f01d95876fa2ea974c6d"),o=(0,r.$)("830a08f0b4898aa4d63fb94229055f2fce3e3f71"),c=(0,r.$)("e80969a57efceefee6a8a65908e1e314fe49a2a0"),u=(0,r.$)("ae483d5d3c1e2e20ae95a2933fab40df31f7512a"),l=(0,r.$)("a8dbe559b9e3e82e687aabcfe7c2bab9f020568c"),d=(0,r.$)("59975b62b53c5f40ad91cc17f309d881c82b0209")},5402:function(e,t,n){"use strict";n.d(t,{M:function(){return o},a:function(){return c}});var r=n(7437),a=n(7907),i=n(2265);let s=(0,i.createContext)(null),o=e=>{let{children:t}=e,[n,o]=(0,i.useState)(""),c=(0,a.usePathname)(),u=(0,a.useRouter)();return(0,i.useEffect)(()=>{let e=localStorage.getItem("domestic-user");e?o(e):("/book"===c||"/profile"===c||"/dashboard"===c)&&u.push("/")},[]),(0,r.jsx)(s.Provider,{value:{user:n,setUser:o,logout:()=>{localStorage.removeItem("domestic-user"),o(""),u.push("/")}},children:t})},c=()=>{let e=(0,i.useContext)(s);if(!e)throw Error("useUser must be used within a UserWrapper");return e}},3022:function(e,t,n){"use strict";n.r(t);var r=n(7437),a=n(4741),i=n(4285),s=n(8633),o=n(7895),c=n(9623),u=n(5402),l=n(703),d=n(7907),f=n(4642),h=n(6518),m=n(2265);t.default=()=>{let{user:e,logout:t}=(0,u.a)(),{data:n,isLoading:g}=(0,f.a)({queryKey:["userdetails",e],queryFn:async()=>(0,h.bG)(e)}),p=(0,a.p)(),x=(0,d.useRouter)();return((0,m.useEffect)(()=>{"admin@admin.com"===e&&x.push("/dashboard")},[e]),g)?(0,r.jsx)(i.k,{gap:2,width:"100%",marginY:10,justifyContent:"center",children:(0,r.jsx)(s.$,{size:"xl"})}):e?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.k,{alignItems:"center",paddingY:4,width:"100%",flexDir:"column",paddingBottom:64,children:[(null==n||n.type,(0,r.jsxs)(o.x,{fontSize:"x-large",fontWeight:"bold",children:["Welcome ",null==n?void 0:n.name]})),(0,r.jsxs)(i.k,{direction:{base:"column",md:"row"},gap:2,width:"100%",marginTop:10,paddingX:10,children:[(null==n?void 0:n.type)==="service"?(0,r.jsxs)(c.z,{fontSize:"x-large",w:"100%",paddingY:12,colorScheme:"purple",onClick:()=>x.push("/works"),children:[(0,r.jsx)(l.default,{src:"/briefcase.svg",width:30,height:30,alt:"image"}),"Works"]}):(0,r.jsxs)(c.z,{onClick:()=>x.push("/orders"),fontSize:"x-large",w:"100%",paddingY:12,colorScheme:"teal",children:[(0,r.jsx)(l.default,{src:"/orders.svg",width:30,height:30,alt:"image"}),"Orders"]}),(0,r.jsxs)(c.z,{fontSize:"x-large",w:"100%",paddingY:12,colorScheme:"linkedin",onClick:()=>x.push("/profile"),children:[(0,r.jsx)(l.default,{src:"/profile.svg",width:30,height:30,alt:"image"}),"Profile"]}),(0,r.jsxs)(c.z,{fontSize:"x-large",w:"100%",paddingY:12,colorScheme:"facebook",onClick:()=>{x.push("/book")},children:[(0,r.jsx)(l.default,{src:"/book.svg",width:30,height:30,alt:"image"}),"Book"]})]}),(0,r.jsxs)(i.k,{direction:{base:"column",md:"row"},gap:2,width:"100%",marginY:2,paddingX:10,children:[(0,r.jsxs)(c.z,{fontSize:"x-large",w:"100%",paddingY:12,colorScheme:"orange",onClick:async()=>{await (0,h.h8)(e),t(),p({title:"Account Deactivated",description:"Your account has been deactivated",status:"success",duration:9e3,isClosable:!0}),x.push("/")},children:[(0,r.jsx)(l.default,{src:"/delete.svg",width:30,height:30,alt:"image"}),"Deactivate Account"]}),(0,r.jsxs)(c.z,{fontSize:"x-large",w:"100%",paddingY:12,colorScheme:"red",onClick:()=>{t(),p({title:"Logged Out",description:"You have been logged out",status:"success",duration:9e3,isClosable:!0}),x.push("/")},children:[(0,r.jsx)(l.default,{src:"/logout.svg",width:30,height:30,alt:"image"}),"Logout"]}),(0,r.jsxs)(c.z,{fontSize:"x-large",w:"100%",paddingY:12,colorScheme:"whatsapp",onClick:()=>x.push("/reviews-page"),children:[(0,r.jsx)(l.default,{src:"/book.svg",width:30,height:30,alt:"image"}),"Reviews"]})]})]})}):(0,r.jsx)(i.k,{children:(0,r.jsx)(o.x,{fontSize:"xx-large",fontWeight:"800",marginY:10,marginX:"auto",children:"Only logged in users can view this page"})})}},9623:function(e,t,n){"use strict";n.d(t,{z:function(){return p}});var r=n(2265),[a,i]=(0,n(8608).k)({strict:!1,name:"ButtonGroupContext"}),s=n(9367),o=n(7362),c=n(7437);function u(e){let{children:t,className:n,...a}=e,i=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,u=(0,o.cx)("chakra-button__icon",n);return(0,c.jsx)(s.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:u,children:i})}u.displayName="ButtonIcon";var l=n(8633);function d(e){let{label:t,placement:n,spacing:a="0.5rem",children:i=(0,c.jsx)(l.$,{color:"currentColor",width:"1em",height:"1em"}),className:u,__css:d,...f}=e,h=(0,o.cx)("chakra-button__spinner",u),m="start"===n?"marginEnd":"marginStart",g=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[m]:t?a:0,fontSize:"1em",lineHeight:"normal",...d}),[d,t,m,a]);return(0,c.jsx)(s.m.div,{className:h,...f,__css:g,children:i})}d.displayName="ButtonSpinner";var f=n(6881),h=n(9030),m=n(6335),g=n(1073),p=(0,h.G)((e,t)=>{let n=i(),a=(0,m.mq)("Button",{...n,...e}),{isDisabled:u=null==n?void 0:n.isDisabled,isLoading:l,isActive:h,children:p,leftIcon:b,rightIcon:v,loadingText:j,iconSpacing:k="0.5rem",type:w,spinner:S,spinnerPlacement:y="start",className:_,as:C,...z}=(0,g.Lr)(e),N=(0,r.useMemo)(()=>{let e={...null==a?void 0:a._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!n&&{_focus:e}}},[a,n]),{ref:P,type:Y}=function(e){let[t,n]=(0,r.useState)(!e);return{ref:(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]),type:t?"button":void 0}}(C),E={rightIcon:v,leftIcon:b,iconSpacing:k,children:p};return(0,c.jsxs)(s.m.button,{ref:(0,f.qq)(t,P),as:C,type:null!=w?w:Y,"data-active":(0,o.PB)(h),"data-loading":(0,o.PB)(l),__css:N,className:(0,o.cx)("chakra-button",_),...z,disabled:u||l,children:[l&&"start"===y&&(0,c.jsx)(d,{className:"chakra-button__spinner--start",label:j,placement:"start",spacing:k,children:S}),l?j||(0,c.jsx)(s.m.span,{opacity:0,children:(0,c.jsx)(x,{...E})}):(0,c.jsx)(x,{...E}),l&&"end"===y&&(0,c.jsx)(d,{className:"chakra-button__spinner--end",label:j,placement:"end",spacing:k,children:S})]})});function x(e){let{leftIcon:t,rightIcon:n,children:r,iconSpacing:a}=e;return(0,c.jsxs)(c.Fragment,{children:[t&&(0,c.jsx)(u,{marginEnd:a,children:t}),r,n&&(0,c.jsx)(u,{marginStart:a,children:n})]})}p.displayName="Button"},7895:function(e,t,n){"use strict";n.d(t,{x:function(){return l}});var r=n(9030),a=n(6335),i=n(1073),s=n(9367),o=n(7362),c=n(8001),u=n(7437),l=(0,r.G)(function(e,t){let n=(0,a.mq)("Text",e),{className:r,align:l,decoration:d,casing:f,...h}=(0,i.Lr)(e),m=(0,c.o)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,u.jsx)(s.m.p,{ref:t,className:(0,o.cx)("chakra-text",e.className),...m,...h,__css:n})});l.displayName="Text"},4285:function(e,t,n){"use strict";n.d(t,{k:function(){return s}});var r=n(9030),a=n(9367),i=n(7437),s=(0,r.G)(function(e,t){let{direction:n,align:r,justify:s,wrap:o,basis:c,grow:u,shrink:l,...d}=e;return(0,i.jsx)(a.m.div,{ref:t,__css:{display:"flex",flexDirection:n,alignItems:r,justifyContent:s,flexWrap:o,flexBasis:c,flexGrow:u,flexShrink:l},...d})});s.displayName="Flex"},8001:function(e,t,n){"use strict";function r(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}n.d(t,{o:function(){return r}})},6881:function(e,t,n){"use strict";n.d(t,{lq:function(){return a},qq:function(){return i}});var r=n(2265);function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}}(t,e)})}}function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.useMemo)(()=>a(...t),t)}},4741:function(e,t,n){"use strict";n.d(t,{p:function(){return o}});var r=n(8504),a=n(750),i=n(2032),s=n(2265);function o(e){let{theme:t}=(0,i.uP)(),n=(0,r.OX)();return(0,s.useMemo)(()=>(0,a.Cj)(t.direction,{...n,...e}),[e,t.direction,n])}}},function(e){e.O(0,[1571,8633,8618,4642,3104,8504,1409,2971,8069,1744],function(){return e(e.s=9335)}),_N_E=e.O()}]);
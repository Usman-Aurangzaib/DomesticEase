(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2418],{1257:function(e,t,r){Promise.resolve().then(r.bind(r,4671))},7907:function(e,t,r){"use strict";var n=r(5313);r.o(n,"useParams")&&r.d(t,{useParams:function(){return n.useParams}}),r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},8341:function(e,t,r){"use strict";r.d(t,{EA:function(){return i},K3:function(){return c},Mm:function(){return o},N_:function(){return a},_r:function(){return s}}),r(5355);var n=r(3472),i=(0,n.$)("6d757ae541fc0bbdda1c770b8d762a7ba13c8c56"),a=(0,n.$)("6a035b8edf0379b08192112a9a7ab36bc6203901"),s=(0,n.$)("dbc95576c41cfdf6449f327f8376ab30081dfa7c"),o=(0,n.$)("d3404bb93b9a4209d33db081d3774c9915eb1407"),c=(0,n.$)("09a62f06f82ea7d68ac63d7000afb8be15a907d7")},5402:function(e,t,r){"use strict";r.d(t,{M:function(){return o},a:function(){return c}});var n=r(7437),i=r(7907),a=r(2265);let s=(0,a.createContext)(null),o=e=>{let{children:t}=e,[r,o]=(0,a.useState)(""),c=(0,i.usePathname)(),u=(0,i.useRouter)();return(0,a.useEffect)(()=>{let e=localStorage.getItem("domestic-user");e?o(e):("/book"===c||"/profile"===c||"/dashboard"===c)&&u.push("/")},[]),(0,n.jsx)(s.Provider,{value:{user:r,setUser:o,logout:()=>{localStorage.removeItem("domestic-user"),o(""),u.push("/")}},children:t})},c=()=>{let e=(0,a.useContext)(s);if(!e)throw Error("useUser must be used within a UserWrapper");return e}},4671:function(e,t,r){"use strict";r.r(t);var n=r(7437),i=r(8341),a=r(4285),s=r(7895),o=r(8633),c=r(4642),u=r(703),l=r(5402);t.default=()=>{let{user:e}=(0,l.a)(),{data:t,isLoading:r}=(0,c.a)({queryKey:["reviews-mine"],queryFn:async()=>(0,i.EA)(e)});return console.log(t),(0,n.jsxs)(a.k,{flexDir:"column",gap:8,w:"100%",bg:"brown.100",maxHeight:"95vh",overflowY:"scroll",children:[(0,n.jsx)(s.x,{fontWeight:"bold",fontSize:"xx-large",p:8,children:"Reviews List"}),r&&(0,n.jsx)(o.$,{}),null==t?void 0:t.map(e=>(0,n.jsxs)(a.k,{marginX:4,background:"gray.100",padding:2,borderRadius:4,gap:2,flexDir:"column",marginY:2,children:[(0,n.jsx)("img",{src:e.image?"/api/get-image/".concat(e.image):"/user.png",alt:"",style:{objectFit:"cover",borderRadius:"50%",width:"100px",height:"100px"}}),(0,n.jsxs)(s.x,{fontSize:"large",fontWeight:"bold",children:["Reviwer: ",e.user]}),(null==e?void 0:e.rating)&&(0,n.jsxs)(a.k,{fontSize:"large",fontWeight:"bold",children:["Rating:",Array.from(Array(e.rating),(e,t)=>(0,n.jsx)(u.default,{src:"/star.svg",width:30,height:30,alt:"image"},t))]}),(0,n.jsxs)(a.k,{gap:4,children:[(0,n.jsxs)(s.x,{fontSize:"large",fontWeight:"bold",children:["Worker: ",e.worker]}),(0,n.jsx)(s.x,{fontSize:"large",fontWeight:"bold",children:"|"}),(0,n.jsxs)(s.x,{fontSize:"large",fontWeight:"bold",children:["Type: ",e.service]})]}),(0,n.jsxs)(s.x,{children:["Review: ",e.review]}),(0,n.jsx)(s.x,{children:"Attachment:"}),e.videoName&&(0,n.jsxs)(a.k,{gap:2,children:[(0,n.jsx)("img",{src:"/api/get-image/".concat(e.videoName),alt:"",style:{objectFit:"cover",borderRadius:"50%",width:"100px",height:"100px"}}),(0,n.jsx)("video",{src:"/api/get-image/".concat(e.videoName),controls:!0,width:"200px",height:"200px"})]})]},e._id))]})}},7895:function(e,t,r){"use strict";r.d(t,{x:function(){return l}});var n=r(9030),i=r(6335),a=r(1073),s=r(9367),o=r(7362),c=r(8001),u=r(7437),l=(0,n.G)(function(e,t){let r=(0,i.mq)("Text",e),{className:n,align:l,decoration:d,casing:f,...x}=(0,a.Lr)(e),g=(0,c.o)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,u.jsx)(s.m.p,{ref:t,className:(0,o.cx)("chakra-text",e.className),...g,...x,__css:r})});l.displayName="Text"},4285:function(e,t,r){"use strict";r.d(t,{k:function(){return s}});var n=r(9030),i=r(9367),a=r(7437),s=(0,n.G)(function(e,t){let{direction:r,align:n,justify:s,wrap:o,basis:c,grow:u,shrink:l,...d}=e;return(0,a.jsx)(i.m.div,{ref:t,__css:{display:"flex",flexDirection:r,alignItems:n,justifyContent:s,flexWrap:o,flexBasis:c,flexGrow:u,flexShrink:l},...d})});s.displayName="Flex"},8001:function(e,t,r){"use strict";function n(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}r.d(t,{o:function(){return n}})}},function(e){e.O(0,[1571,8633,8618,4642,1409,2971,8069,1744],function(){return e(e.s=1257)}),_N_E=e.O()}]);
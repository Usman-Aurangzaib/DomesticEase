(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7857],{5563:function(e,n,d){Promise.resolve().then(d.bind(d,5829))},5829:function(e,n,d){"use strict";d.r(n);var i=d(7437),l=d(2966),r=d(7912),s=d(4285),a=d(7895),c=d(9623),o=d(7727),t=d(8542),h=d(2540),p=d(6956),u=d(5426),g=d(8633),x=d(2973),j=d(4642),k=d(2265);n.default=()=>{let[e,n]=(0,k.useState)(null),{data:d,isLoading:T}=(0,j.a)({queryKey:["orders"],queryFn:async()=>(0,l.zk)()}),[f,m]=(0,k.useState)("all"),w="all"===f?d:null==d?void 0:d.filter(e=>"paid"===f?e.paid:"not-paid"===f?!e.paid:"pending"===f?"pending"===e.status:"completed"===f?"completed"===e.status:void 0);return(0,i.jsxs)(s.k,{flexDir:"column",gap:8,maxHeight:"95vh",overflowY:"scroll",w:"100%",children:[(0,i.jsx)(a.x,{fontWeight:"bold",fontSize:"xx-large",paddingX:8,paddingTop:8,children:"Orders"}),(0,i.jsxs)(s.k,{w:"100%",gap:4,paddingX:4,children:[(0,i.jsx)(c.z,{background:"all"===f?"green.300":"gray.200",w:"100%",onClick:()=>m("all"),children:"All"}),(0,i.jsx)(c.z,{background:"paid"===f?"green.300":"gray.200",w:"100%",onClick:()=>m("paid"),children:"Paid"}),(0,i.jsx)(c.z,{background:"not-paid"===f?"green.300":"gray.200",w:"100%",onClick:()=>m("not-paid"),children:"Not Paid"}),(0,i.jsx)(c.z,{w:"100%",onClick:()=>m("pending"),background:"pending"===f?"green.300":"gray.200",children:"Pending"}),(0,i.jsx)(c.z,{w:"100%",onClick:()=>m("completed"),background:"completed"===f?"green.300":"gray.200",children:"Completed"})]}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{order:e,setNull:()=>n(null)}),(0,i.jsxs)(o.i,{variant:"simple",size:"md",width:"full",children:[(0,i.jsx)(t.h,{children:(0,i.jsxs)(h.Tr,{children:[(0,i.jsx)(p.Th,{children:"NAME"}),(0,i.jsx)(p.Th,{children:"ADDRESS"}),(0,i.jsx)(p.Th,{children:"CITY"}),(0,i.jsx)(p.Th,{children:"PAYMENT STATUS"})]})}),(0,i.jsxs)(u.p,{children:[T&&(0,i.jsx)(g.$,{}),null==w?void 0:w.map(e=>(0,i.jsxs)(h.Tr,{cursor:"pointer",onClick:()=>n(e),children:[(0,i.jsx)(x.Td,{children:e.name}),(0,i.jsx)(x.Td,{children:e.address}),(0,i.jsx)(x.Td,{children:e.city}),(0,i.jsx)(x.Td,{children:e.paid?"Paid":"Not Paid"})]},e.id))]})]})]})]})}}},function(e){e.O(0,[1571,8633,8618,4642,3104,3232,3413,2971,8069,1744],function(){return e(e.s=5563)}),_N_E=e.O()}]);
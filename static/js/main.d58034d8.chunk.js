(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{320:function(e,a,t){e.exports=t(557)},325:function(e,a,t){},326:function(e,a,t){},427:function(e,a,t){},500:function(e,a,t){},501:function(e,a,t){},555:function(e,a,t){},557:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(38),l=t.n(r),o=(t(325),t(17)),s=t(34),i=t(43),u=t(66),m=t(571),d=t(67),p=t(558),E=t(569),f=t(568),h=t(129);function v(e,a,t,c){var r=Object(n.useState)(Object(o.a)({},e)),l=Object(s.a)(r,2),i=l[0],u=l[1],m=Object(n.useState)({}),d=Object(s.a)(m,2),p=d[0],E=d[1],f=Object(n.useState)(!1),v=Object(s.a)(f,2),g=v[0],C=v[1];function b(){var e=a(i);E(e)}return Object(n.useEffect)(function(){u(Object(o.a)({},e))},[e]),Object(n.useEffect)(function(){g&&(0===Object.keys(p).length?(t(i),C(!1)):C(!1))},[p]),{values:i,handleInputChange:function(e){u(Object(o.a)({},i,Object(h.a)({},e.target.name,e.target.value)))},handleSubmit:function(){b(),C(!0)},handleBlur:function(){b()},errors:p}}var g={newContact:{email:"",fullname:"",phone:"",address:"",occupation:""},searchContact:{key:""}},C=function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)?e.fullname?e.fullname.length<6?(a.fullname="Fullname must be at least 6 characters",a):e.phone?a:(a.phone="Phone Number Required",a):(a.fullname="Fullname Required",a):(a.email="Invalid email address",a):(a.email="Email Required",a)},b=function(e){var a={};return e.key||(a.key="Search Key is required"),a};t(326);var O=function(){var e=v(g.searchContact,b,null),a=e.values,t=e.handleInputChange,n=e.handleSubmit,r=e.handleBlur,l=e.errors;return c.a.createElement("div",{className:"search-contact-wrap"},c.a.createElement(E.a,{className:"search-form"},c.a.createElement(f.a,{className:"search-input",action:{icon:"search",color:"blue",onClick:n},name:"key",placeholder:"Search...",onChange:t,onBlur:r,value:a.key,error:l.key&&!0})))},_=t(577),y=c.a.createContext();t(427);var j=function(e){var a=e.history,t=Object(n.useContext)(y),r=t.loading,l=t.addContact,o=t.successMessage;Object(n.useEffect)(function(){o&&setTimeout(function(){return a.push("/")},5e3)},[o]);var s=v(g.newContact,C,l),i=s.values,u=s.handleInputChange,m=s.handleSubmit,d=s.handleBlur,h=s.errors;return c.a.createElement("div",{className:"relative add-contact-wrap"},r&&c.a.createElement(_.a,null),c.a.createElement(E.a,null,c.a.createElement(E.a.Field,{control:f.a,name:"email",icon:"mail",value:i.email||"",placeholder:"Email",iconPosition:"left",onChange:u,onBlur:d,error:h.email&&!0}),h.email&&c.a.createElement("p",null," ",h.email," "),c.a.createElement(E.a.Field,{control:f.a,name:"fullname",icon:"pencil",value:i.fullname||"",placeholder:"Fullname",iconPosition:"left",onChange:u,onBlur:d,error:h.fullname&&!0}),h.fullname&&c.a.createElement("p",null," ",h.fullname," "),c.a.createElement(E.a.Field,{control:f.a,name:"phone",icon:"phone square",value:i.phone||"",placeholder:"Phone",iconPosition:"left",onChange:u}),h.phone&&c.a.createElement("p",null," ",h.phone," "),c.a.createElement(E.a.Field,{control:f.a,name:"address",icon:"address card",value:i.address||"",placeholder:"Address",iconPosition:"left",onChange:u}),c.a.createElement(E.a.Field,{control:f.a,name:"occupation",icon:"address card",value:i.occupation||"",placeholder:"Occupation",iconPosition:"left",onChange:u}),c.a.createElement(p.a,{content:"Add Contact",basic:!0,color:"blue",icon:"add",onClick:m})))};var T=function(e){var a=e.match,t=Object(n.useContext)(y),r=t.contact,l=t.getContact,o=t.updateContact,s=t.loading;Object(n.useEffect)(function(){l(a.params.id)},[]);var i=v(r,C,o),u=i.values,m=i.handleInputChange,d=i.handleSubmit,h=i.handleBlur,g=i.errors;return c.a.createElement("div",{className:"relative add-contact-wrap"},s&&c.a.createElement(_.a,null),c.a.createElement(E.a,null,c.a.createElement(E.a.Field,{control:f.a,name:"email",icon:"mail",value:u.email||"",placeholder:"Email",iconPosition:"left",onChange:m,onBlur:h,error:g.email&&!0}),g.email&&c.a.createElement("p",null," ",g.email," "),c.a.createElement(E.a.Field,{control:f.a,name:"fullname",icon:"pencil",value:u.fullname||"",placeholder:"Fullname",iconPosition:"left",onChange:m,onBlur:h,error:g.fullname&&!0}),g.fullname&&c.a.createElement("p",null," ",g.fullname," "),c.a.createElement(E.a.Field,{control:f.a,name:"phone",icon:"phone square",value:u.phone||"",placeholder:"Phone",iconPosition:"left",onChange:m}),c.a.createElement(E.a.Field,{control:f.a,name:"address",icon:"address card",value:u.address||"",placeholder:"Address",iconPosition:"left",onChange:m}),c.a.createElement(E.a.Field,{control:f.a,name:"occupation",icon:"address card",value:u.occupation||"",placeholder:"Occupation",iconPosition:"left",onChange:m}),c.a.createElement(p.a,{content:"Update Contact",basic:!0,color:"blue",icon:"user",onClick:d})))},k=t(573),N=t(567),w=t(574),S=t(572),A=t(570),x=function(e){var a=e.id,t=Object(n.useContext)(y),r=t.getContacts,l=t.deleteContact,o=t.deleteSuccess,i=Object(n.useState)(!1),u=Object(s.a)(i,2),m=u[0],d=u[1];return Object(n.useEffect)(function(){o&&setTimeout(function(){return r()},5e3)},[o]),c.a.createElement(c.a.Fragment,null,c.a.createElement(S.a.Item,{text:"Delete",icon:"user delete",style:{color:"red"},onClick:function(){return d(!0)}}),c.a.createElement(A.a,{open:m,header:"Confirm Delete",content:"Are you sure you want to delete this contact?",onCancel:function(){return d(!1)},onConfirm:function(){d(!1),l(a)}}))},F=function(e){var a=e.contact,t=c.a.createElement(d.a,{name:"ellipsis vertical"});return c.a.createElement(k.a.Row,null,c.a.createElement(k.a.Cell,null,c.a.createElement(N.a,null)),c.a.createElement(k.a.Cell,null,c.a.createElement("div",{className:"user-icon",style:{width:"40px",height:"40px",backgroundColor:"#c1c1c1",borderRadius:"50%",color:"#ffffff !important",display:"flex",alignItems:"center",justifyContent:"center"}},c.a.createElement(d.a,{name:"user",size:"big"}))),c.a.createElement(k.a.Cell,null,c.a.createElement(i.b,{to:"/profile/".concat(a._id)},a.fullname)),c.a.createElement(k.a.Cell,null,a.email),c.a.createElement(k.a.Cell,null,a.phone),c.a.createElement(k.a.Cell,null,a.address),c.a.createElement(k.a.Cell,null,c.a.createElement(w.a.Menu,{position:"right"},c.a.createElement(S.a,{item:!0,pointing:"top right",trigger:t,icon:null},c.a.createElement(S.a.Menu,null,c.a.createElement(i.c,{to:"/edit-contact/".concat(a._id)},c.a.createElement(S.a.Item,{text:"Edit",icon:"edit"})),c.a.createElement(x,{id:a._id}))))))};t(500);var R=function(){var e=Object(n.useContext)(y),a=e.contacts,t=e.getContacts,r=e.loading;Object(n.useEffect)(function(){t()},[]);var l=a&&a.map(function(e){return c.a.createElement(F,{key:e._id,contact:e})});return c.a.createElement("div",{className:"relative"},r&&c.a.createElement(_.a,null),c.a.createElement(k.a,{basic:"very",unstackable:!0},c.a.createElement(k.a.Body,null,l)))},U=t(575),P=(t(501),function(e){var a=e.match,t=Object(n.useContext)(y),r=t.loading,l=t.getContact,o=t.contact;return Object(n.useEffect)(function(){l(a.params.id)},[a.params.id]),c.a.createElement(U.a,{className:"contact-profile",loading:r},c.a.createElement("div",{className:"profile-header"},c.a.createElement("div",{className:"profile-pic"}),c.a.createElement("div",{className:"profile-name"},o.fullname),c.a.createElement("div",{className:"profile-address"},o.address)))}),D=(t(260),m.a.Header),M=m.a.Sider,I=m.a.Content,B=m.a.Footer;var L=function(e){e.match;var a=Object(n.useState)(!1),t=Object(s.a)(a,2),r=t[0],l=t[1],o=Object(n.useState)(!1),E=Object(s.a)(o,2),f=E[0],h=E[1];function v(){h(window.innerWidth<=576)}return Object(n.useEffect)(function(){return v(),window.addEventListener("resize",v),function(){return window.removeEventListener("resize",v)}}),c.a.createElement(m.a,{style:{minHeight:"100vh"}},c.a.createElement(M,{collapsible:!0,collapsed:r,onCollapse:function(){l(!r)},theme:"light",width:"235px",breakpoint:"md",collapsedWidth:f?0:80},c.a.createElement(i.b,{to:"/"},c.a.createElement("div",{className:"app-brand"},c.a.createElement("div",{className:"app-brand__logo"},c.a.createElement(d.a,{name:"address book outline",size:"big"})),c.a.createElement("div",{className:"app-brand__title"},c.a.createElement("h3",null,"\xa0 \xa0 Contacts")))),c.a.createElement("div",{className:"app-link "},c.a.createElement(i.b,{to:"/new-contact"},c.a.createElement("div",{className:"app-link__item margin-bottom"},c.a.createElement("span",{className:"app-link__item-icon"},c.a.createElement(d.a,{name:"add",color:"blue"}))," \xa0 \xa0",c.a.createElement("span",{className:"app-link__item-description"},c.a.createElement(p.a,{className:"new-contact__btn",content:"New Contact"})))),c.a.createElement(i.b,{to:"/"},c.a.createElement("div",{className:"app-link__item"},c.a.createElement("span",{className:"app-link__item-icon"},c.a.createElement(d.a,{name:"list"}))," \xa0 \xa0",c.a.createElement("span",{className:"app-link__item-description"},"All contacts"))),c.a.createElement("div",{className:"app-link__item"},c.a.createElement("span",{className:"app-link__item-icon"},c.a.createElement(d.a,{name:"undo alternate"}))," \xa0 \xa0",c.a.createElement("span",{className:"app-link__item-description"},"Frequently contacted")),c.a.createElement("div",{className:"app-link__item"},c.a.createElement("span",{className:"app-link__item-icon"},c.a.createElement(d.a,{name:"star"}))," \xa0 \xa0",c.a.createElement("span",{className:"app-link__item-description"},"Starred contacts")))),c.a.createElement(m.a,null,c.a.createElement(D,{style:{padding:0,backgroundColor:"#ffffff",borderBottom:"1px solid #edeeee"},theme:"light"},c.a.createElement(O,null)),c.a.createElement(I,null,c.a.createElement("div",{style:{background:"#fff",minHeight:360}},c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",component:R,exact:!0}),c.a.createElement(u.a,{path:"/profile/:id",component:P}),c.a.createElement(u.a,{path:"/new-contact",render:function(e){return c.a.createElement(j,Object.assign({},e,{contactId:"meeeee"}))}}),c.a.createElement(u.a,{path:"/edit-contact/:id",component:T})))),c.a.createElement(B,{style:{textAlign:"center"}},"Ant Design \xa92018 Created by Ant UED")))},q=t(193);t(535);var G=function(){var e=Object(n.useContext)(y),a=e.errorMessage,t=e.successMessage,r=e.clearErrors;return Object(n.useEffect)(function(){var e=function(e,a){return q.b[a](e,{onClose:function(){return r()}})};a&&e(a,"error"),t&&e(t,"success")},[a,t]),c.a.createElement("div",null,c.a.createElement(q.a,null))},Q="GET_CONTACTS_REQUEST",z="GET_CONTACTS_SUCCESS",W="GET_CONTACTS_FAILURE",H="GET_CONTACT_REQUEST",Z="GET_CONTACT_SUCCESS",J="UPDATE_CONTACT_REQUEST",$="UPDATE_CONTACT_SUCCESS",K="UPDATE_CONTACT_FAILURE",V="ADD_CONTACT_REQUEST",X="ADD_CONTACT_SUCCESS",Y="ADD_CONTACT_FAILURE",ee="DELETE_CONTACT_REQUEST",ae="DELETE_CONTACT_SUCCESS",te="DELETE_CONTACT_FAILURE",ne="CLEAR_ERRORS",ce={contacts:[],contact:{nothing:"for you"},loading:!1,errorMessage:null,successMessage:null,deleteSuccess:!1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case Q:return Object(o.a)({},e,{loading:!0});case z:return Object(o.a)({},e,{contacts:a.payload.data,loading:!1});case W:return Object(o.a)({},e,{loading:!1,errorMessage:a.error.message});case H:return Object(o.a)({},e,{loading:!0});case Z:return Object(o.a)({},e,{contact:a.payload.data,loading:!1});case J:return Object(o.a)({},e,{loading:!0});case $:return Object(o.a)({},e,{contact:a.payload.data,successMessage:a.payload.message,loading:!1});case K:return Object(o.a)({},e,{errorMessage:a.payload.message,loading:!1});case V:return Object(o.a)({},e,{loading:!0});case X:return Object(o.a)({},e,{successMessage:a.payload.message,loading:!1});case Y:return Object(o.a)({},e,{errorMessage:a.error.message,loading:!1});case ee:return Object(o.a)({},e,{loading:!0});case ae:return Object(o.a)({},e,{successMessage:a.payload.message,deleteSuccess:!0,loading:!1});case te:return Object(o.a)({},e,{errorMessage:a.error.message,loading:!1});case ne:return Object(o.a)({},e,{errorMessage:null,successMessage:null});default:return e}},le=t(37),oe=t.n(le),se=t(84),ie=t(306),ue=t.n(ie).a.create({headers:{"Content-Type":"application/json"}});ue.defaults.baseURL="https://contacts-registry.herokuapp.com/";var me=ue,de=t(307),pe=t.n(de),Ee=function(e){return Object(se.a)(oe.a.mark(function a(){var t;return oe.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e({type:Q}),a.prev=1,a.next=4,me.get("/contacts");case 4:t=a.sent,e({type:z,payload:t.data}),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),e({type:W,error:a.t0}),console.log("error: ",a.t0);case 12:case"end":return a.stop()}},a,null,[[1,8]])}))},fe=function(e){return function(){var a=Object(se.a)(oe.a.mark(function a(t){var n;return oe.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e({type:H}),a.prev=1,a.next=4,me.get("/contacts/".concat(t));case 4:n=a.sent,e({type:Z,payload:n.data}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),console.log(a.t0);case 11:case"end":return a.stop()}},a,null,[[1,8]])}));return function(e){return a.apply(this,arguments)}}()},he=function(e){return function(){var a=Object(se.a)(oe.a.mark(function a(t){var n;return oe.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e({type:J}),a.prev=1,a.next=4,me.patch("/contacts/".concat(t._id),Object(o.a)({},pe.a.omit(t,["_id"])));case 4:n=a.sent,e({type:$,payload:n.data}),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),e({type:K,error:a.t0}),console.log(a.t0);case 12:case"end":return a.stop()}},a,null,[[1,8]])}));return function(e){return a.apply(this,arguments)}}()},ve=function(e){return function(){var a=Object(se.a)(oe.a.mark(function a(t){var n;return oe.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e({type:V}),a.prev=1,a.next=4,me.post("/contacts",Object(o.a)({},t));case 4:"error"===(n=a.sent).status?e({type:Y,error:n.errors}):e({type:X,payload:n.data}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),e({type:Y,error:a.t0});case 11:case"end":return a.stop()}},a,null,[[1,8]])}));return function(e){return a.apply(this,arguments)}}()},ge=function(e){return function(){var a=Object(se.a)(oe.a.mark(function a(t){var n;return oe.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e({type:ee}),a.prev=1,a.next=4,me.delete("/contacts/".concat(t));case 4:n=a.sent,e({type:ae,payload:n.data}),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),e({type:te,error:a.t0}),console.log(a.t0);case 12:case"end":return a.stop()}},a,null,[[1,8]])}));return function(e){return a.apply(this,arguments)}}()},Ce=function(e){return function(){e({type:ne})}};t(555);var be=function(){var e=Object(n.useReducer)(re,ce),a=Object(s.a)(e,2),t=a[0],r=a[1];return c.a.createElement(y.Provider,{value:Object(o.a)({},t,{getContacts:Ee(r),getContact:fe(r),clearErrors:Ce(r),updateContact:he(r),addContact:ve(r),deleteContact:ge(r)})},c.a.createElement(G,null),c.a.createElement(i.a,{basename:"/"},c.a.createElement(u.a,{path:"/",component:L})))};t(556),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[320,1,2]]]);
//# sourceMappingURL=main.d58034d8.chunk.js.map
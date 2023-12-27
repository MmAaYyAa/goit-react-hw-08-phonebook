"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[227],{3227:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,o,i,a,c,d,l,s,u,p=t(2791),x=t(4420),f=t(9293),m=t(168),b=t(2978),h=b.ZP.div(r||(r=(0,m.Z)([" \ndisplay: flex;\n justify-content: space-between;\nalign-items: center;\nbackground-color: transparent;\nfont-size: 18px;\npadding: 15px 0 15px 12px; \nmargin-bottom: 5px;\nmargin-left: 12px;"]))),g=b.ZP.li(o||(o=(0,m.Z)(["\n\nmin-width: 300px;\ncolor: #004445;\nlist-style: none;"]))),v=b.ZP.button(i||(i=(0,m.Z)(["\n    display: block;\n    width: 80px;\n    padding: 4px 10px;\n    background-color : #3baea0;\n    color: #475053;\n    border-radius: 3px;\n    border: 1px solid #ddeedf;\n    &:hover {\n      outline: none;\n      border: 2px solid #61b390;\n      cursor: pointer;\n      background-color: #61d2b4;\n      color: white;}"]))),Z=t(3329),j=function(n){var e=n.contact,t=(0,x.I0)();return(0,Z.jsxs)(h,{children:[(0,Z.jsxs)(g,{children:[e.name,": ",e.number]}),(0,Z.jsx)(v,{type:"button",onClick:function(){return t((0,f._f)(e.id))},children:"Delete"})]})},w=function(n){return n.contacts.contacts},y=function(n){return n.filter.filter},k=function(n){return n.contacts.isLoading},P=function(n){return n.contacts.error},C=function(){var n=(0,x.v9)(w),e=function(n,e){if(e)return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}(n,(0,x.v9)(y));return(0,Z.jsx)("div",{children:(null!==e&&void 0!==e?e:n).map((function(n){return(0,Z.jsx)(j,{contact:n},n.id)}))})},z=t(9439),L=(0,b.ZP)("form")((function(){return{display:"flex",flexDirection:"column",miWwidth:"100%",width:"300px",padding:"15px 0 15px 12px",marginBottom:"30px",marginLeft:"12px",fontSize:"18px",fontWeight:"500",color:"#004445"}})),S=(0,b.ZP)("input")((function(){return{width:"100%",display:"flex",flexDirection:"column",padding:"8px 16px",marginTop:"8px",marginBottom:"24px",border:"1px solid #b6cdbd",borderRadius:"4px",color:"#8787a3","&:focus":{outline:"none",border:"2px solid #61b390"}}})),_=(0,b.ZP)("button")((function(){return{display:"block",width:"140px",padding:" 8px 6px",fontSize:"14px",color:"#475053",backgroundColor:"#3baea0",border:"1px solid #ddeedf",borderRadius:"4px","&:hover":{outline:"none",border:"2px solid #61b390",cursor:"pointer",backgroundColor:"#61d2b4",color:"white"}}})),A=(0,b.ZP)("h1")((function(){return{fontSize:"26px",marginLeft:"12px",color:"#004445"}})),D=function(){var n=(0,p.useState)(""),e=(0,z.Z)(n,2),t=e[0],r=e[1],o=(0,p.useState)(""),i=(0,z.Z)(o,2),a=i[0],c=i[1],d=(0,x.v9)(w),l=(0,x.I0)(),s=function(n){"name"===n.target.name&&r(n.target.value.trim()),"number"===n.target.name&&c(n.target.value.trim())};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(A,{children:"Phonebook"}),(0,Z.jsxs)(L,{onSubmit:function(n){n.preventDefault();var e={name:t,number:a};if(d.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()})))return alert("".concat(e.name," is already in contacts"));l((0,f.el)(e)),r(""),c("")},children:[(0,Z.jsxs)("label",{children:["Name",(0,Z.jsx)(S,{onChange:s,type:"text",name:"name",placeholder:"Enter name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0})]}),(0,Z.jsxs)("label",{children:["Number",(0,Z.jsx)(S,{onChange:s,type:"tel",name:"number",placeholder:"Enter phone number",value:a,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",required:!0})]}),(0,Z.jsx)(_,{type:"submit",children:"Add contact"})]})]})},E=t(6895),F=b.ZP.h3(a||(a=(0,m.Z)([" \n color: #004445;\n font-size: 24px;\nfont-weight: 500px;\nmargin-left: 12px;"]))),I=b.ZP.div(c||(c=(0,m.Z)(["\ndisplay: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: 50px;\n  width: 100%;\n  min-width: 300px;\n  gap: 10px;\n  width: 300px;\n  font-size: 12px;"]))),q=b.ZP.label(d||(d=(0,m.Z)(["\n  font-size: 16px;\n  color: #004445;"]))),B=b.ZP.input(l||(l=(0,m.Z)(["\n   width: 300px;\n  border-radius: 4px;\n  border: 1px solid #b6cdbd;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 400;\n  margin-bottom: 30px;\n  color: #8787a3;\n  &:focus {\n      outline: none;\n      border: 2px solid #61b390;\n    }"]))),N=function(){var n=(0,x.v9)(y).filter,e=(0,x.I0)();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(F,{children:"Contacts"}),(0,Z.jsxs)(I,{children:[(0,Z.jsx)(q,{children:"Find contacts by name"}),(0,Z.jsx)(B,{type:"text",onChange:function(n){var t=n.target.value;e((0,E.x)(t))},value:n,placeholder:"Search contacts..."})]})]})},R=b.ZP.div(s||(s=(0,m.Z)(["\npadding: 20px 0 20px 0;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  color: #010101;"]))),W=b.ZP.p(u||(u=(0,m.Z)(["\n  color: #f23557;"]))),O=t(3579);function T(){var n=(0,x.I0)(),e=(0,x.v9)(k),t=(0,x.v9)(P);return(0,p.useEffect)((function(){n((0,f.yF)())}),[n]),(0,Z.jsxs)(R,{children:[(0,Z.jsx)(D,{}),(0,Z.jsx)(N,{}),e&&(0,Z.jsx)(O.Z,{}),t&&(0,Z.jsxs)(W,{children:["Oops... Error: ",t]}),(0,Z.jsx)(C,{})]})}}}]);
//# sourceMappingURL=227.d552ac41.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[653],{1653:function(e,n,r){r.r(n),r.d(n,{default:function(){return s}});var t=r(2791),c=r(9434),i=r(6338),u=r(184),a=function(){var e=(0,c.I0)();return(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Add contact"}),(0,u.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=n.currentTarget.elements,t=r.contactName.value,c=r.contactNumber.value;e((0,i.uK)({name:t,number:c})),n.currentTarget.reset()},children:[(0,u.jsxs)("label",{children:[(0,u.jsx)("span",{children:"Name:"}),(0,u.jsx)("input",{type:"text",required:!0,minLength:3,name:"contactName"})]}),(0,u.jsxs)("label",{children:[(0,u.jsx)("span",{children:"Number:"}),(0,u.jsx)("input",{type:"text",required:!0,minLength:3,name:"contactNumber"})]}),(0,u.jsx)("button",{children:"Add contact"})]})]})},s=function(){var e=(0,c.I0)(),n=(0,c.v9)((function(e){return e.user.userData})),r=(0,c.v9)((function(e){return e.phonebook.contacts})),s=(0,c.v9)((function(e){return e.phonebook.error}));(0,t.useEffect)((function(){n&&e((0,i.VC)())}),[e,n]);var o=Array.isArray(r)&&r.length>0,l=Array.isArray(r)&&0===r.length;return(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"contacts"}),(0,u.jsx)(a,{}),s&&(0,u.jsx)("p",{children:s}),(0,u.jsx)("ul",{children:o&&r.map((function(n){return(0,u.jsxs)("li",{children:[(0,u.jsx)("h3",{children:n.name}),(0,u.jsxs)("p",{children:[n.number," ",(0,u.jsx)("button",{onClick:function(){return r=n.id,void e((0,i.GK)(r));var r},children:"\xd7"})]})]},n.id)}))}),l&&(0,u.jsx)("h2",{children:"Theare no contacts in your list"})]})}}}]);
//# sourceMappingURL=653.d93800dc.chunk.js.map
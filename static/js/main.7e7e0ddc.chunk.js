(this["webpackJsonphw-03-phonebook"]=this["webpackJsonphw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__2SC5N",input:"Filter_input__1WqOg"}},19:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),i=(n(19),n(14)),s=n(4),l=n(5),u=n(7),d=n(6),b=n(2),m=n(10),h=n.n(m),j=n(0);var p=function(t){var e=t.value,n=t.onChange,a=Object(b.a)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{className:h.a.label,htmlFor:a,children:"Find contacts by name"}),Object(j.jsx)("input",{className:h.a.input,id:a,value:e,onChange:n})]})},f=n(13),O=n(11),C=n(3),v=n.n(C),g=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).nameInputId=Object(b.a)(),t.phoneInpudId=Object(b.a)(),t.state={name:"",number:""},t.hanldeChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.coincidence(t.state.name.toLowerCase())||(t.props.onSubmit(t.state.name,t.state.number),t.setState({name:"",number:""}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("form",{className:v.a.form,autoComplete:"off",onSubmit:this.handleSubmit,children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{className:v.a.label,htmlFor:this.nameInputId,children:"Name"}),Object(j.jsx)(O.DebounceInput,{className:v.a.input,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:this.nameInputId,value:this.state.name,debounceTimeout:300,onChange:this.hanldeChange}),Object(j.jsx)("label",{className:v.a.label,htmlFor:this.phoneInpudId,children:"Number"}),Object(j.jsx)(O.DebounceInput,{className:v.a.input,type:"tel",name:"number",id:this.phoneInpudId,value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,debounceTimeout:300,onChange:this.hanldeChange}),Object(j.jsx)("button",{className:v.a.button,type:"submit",children:"Add contact"})]})})})}}]),n}(a.Component);var x=function(t){var e=t.children;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h1",{children:e})})},_=n(8),S=n.n(_);var F=function(t){var e=t.contacts,n=t.deleteContact;return Object(j.jsx)("ul",{className:S.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:S.a.item,children:[Object(j.jsx)("span",{children:a}),": ",Object(j.jsx)("span",{children:c}),Object(j.jsx)("button",{className:S.a.button,type:"button",id:e,onClick:n,children:"Delete"})]},e)}))})},I=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:Object(b.a)(),name:e,number:n};t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(i.a)(e))}}))},t.deleteContact=function(e){var n=e.currentTarget.id;t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.handleCoincidence=function(e){if(t.state.contacts.find((function(t){return t.name.toLowerCase()===e})))return alert("".concat(e," is alredy in contacts")),!0},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x,{children:"Phonebook"}),Object(j.jsx)(g,{onSubmit:this.addContact,coincidence:this.handleCoincidence}),Object(j.jsx)(x,{children:"Contacts"}),Object(j.jsx)(p,{value:t,onChange:this.changeFilter}),Object(j.jsx)(F,{contacts:e,deleteContact:this.deleteContact})]})}}]),n}(a.Component);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={form:"ContactForm_form__2zD5G",button:"ContactForm_button__1Jpkd",label:"ContactForm_label__3jNfK",input:"ContactForm_input__1VZ7R"}},8:function(t,e,n){t.exports={list:"ContactList_list__16sau",item:"ContactList_item__30cEB",button:"ContactList_button__15JZ_"}}},[[24,1,2]]]);
//# sourceMappingURL=main.7e7e0ddc.chunk.js.map
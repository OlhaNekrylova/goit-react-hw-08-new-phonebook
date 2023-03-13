"use strict";(self.webpackChunkgoit_react_hw_08_new_phonebook=self.webpackChunkgoit_react_hw_08_new_phonebook||[]).push([[681],{5681:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var r=t(9434),a=t(5036),u="NOT_FOUND";var i=function(e,n){return e===n};function o(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?i:r,o=t.maxSize,c=void 0===o?1:o,s=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),f=1===c?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:u},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return u}return{get:r,put:function(n,a){r(n)===u&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,l);function p(){var n=f.get(arguments);if(n===u){if(n=e.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return p.clearCache=function(){return f.clear()},p}function c(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function s(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var u,i=0,o={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(o=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=o,f=l.memoizeOptions,p=void 0===f?t:f,d=Array.isArray(p)?p:[p],m=c(r),v=e.apply(void 0,[function(){return i++,s.apply(null,arguments)}].concat(d)),h=e((function(){for(var e=[],n=m.length,t=0;t<n;t++)e.push(m[t].apply(null,arguments));return u=v.apply(null,e)}));return Object.assign(h,{resultFunc:s,memoizedResultFunc:v,dependencies:m,lastResult:function(){return u},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return a}var l=s(o),f=function(e){return e.contacts.items},p=function(e){return e.filter},d=l([f,p],(function(e,n){return n?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):e})),m="ContactForm_form__nXUDe",v="ContactForm_label__0MtWF",h="ContactForm_input__++7Rw",_="ContactForm_button__aavNL",y=t(184),b=function(){var e=(0,r.v9)(f),n=(0,r.I0)();return(0,y.jsxs)("form",{className:m,onSubmit:function(t){t.preventDefault();var r=t.currentTarget,u={name:r.elements.name.value,number:r.elements.number.value};!!e.find((function(e){return e.name.toLowerCase()===u.name.toLowerCase()}))?alert("".concat(u.name," is already in contacts.")):(n((0,a.v6)(u)),r.reset())},children:[(0,y.jsxs)("label",{className:v,children:["Name",(0,y.jsx)("input",{className:h,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,y.jsxs)("label",{className:v,children:["Number",(0,y.jsx)("input",{className:h,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,y.jsx)("button",{className:_,type:"submit",children:"Add contact"})]})},x=t(2791),j="ContactList_list__w6thP",C="ContactList_item__0aVR0",g="ContactList_info__KHl4K",w="ContactList_button__6lZ5J",N=function(){var e=(0,r.I0)();(0,x.useEffect)((function(){e((0,a.CL)())}),[e]);var n=(0,r.v9)(d);return(0,y.jsx)("ul",{className:j,children:n.map((function(n){var t=n.id,r=n.name,u=n.number;return(0,y.jsxs)("li",{className:C,children:[(0,y.jsxs)("p",{className:g,children:[r,": ",u]}),(0,y.jsx)("button",{className:w,type:"button",onClick:function(){return function(n){e((0,a.in)(n))}(t)},children:"Delete"})]},t)}))})};N.defaultProps={items:[]};var k=N,F=t(5653),A="Filter_filterLabel__HwuTE",L="Filter_filterInput__LOSid",z=function(){var e=(0,r.v9)(p),n=(0,r.I0)();return(0,y.jsxs)("label",{className:A,children:["Find contacts by name",(0,y.jsx)("input",{className:L,type:"text",value:e,onChange:function(e){var t=e.target;n((0,F.T)(t.value))},required:!0})]})},E={text:"MyContacts_text__88sVP"},P=function(){return(0,y.jsxs)("div",{children:[(0,y.jsx)("h1",{children:"Phonebook"}),(0,y.jsxs)("div",{className:E.wrapper,children:[(0,y.jsx)("div",{className:E.block,children:(0,y.jsx)(b,{})}),(0,y.jsxs)("div",{className:E.block,children:[(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)(z,{}),(0,y.jsx)(k,{})]})]})]})},q="ContactsPage_visuallyHidden__fmrPK",O=function(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h1",{className:q,children:"Contacts page"}),(0,y.jsx)(P,{})]})}}}]);
//# sourceMappingURL=681.91bbb8b3.chunk.js.map
(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports={footer:"Footer_footer__1w0lV"}},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),l=(n(19),n(5)),s=n(2),i=(n(20),n(21),n(0));var r=function(e){var t=e.Date.getFullYear(),n=e.Date.toLocaleString("en-US",{month:"long"}),a=e.Date.toLocaleString("en-US",{day:"2-digit"});return Object(i.jsxs)("div",{className:"expense-date",children:[Object(i.jsx)("div",{className:"expense-date__month",children:n}),Object(i.jsx)("div",{className:"expense-date__year",children:t}),Object(i.jsx)("div",{className:"expense-date__day",children:a})]})},o=n(1);n(23),n(24);var j=function(e){var t="card "+e.className;return Object(i.jsx)("div",{className:t,children:e.children})};var u=function(e){var t=e.Date,n=Object(o.useState)(e.title),a=Object(s.a)(n,1)[0],c=e.amount;return Object(i.jsx)("li",{children:Object(i.jsxs)(j,{className:"expense-item",children:[Object(i.jsx)("div",{className:"item",children:Object(i.jsx)(r,{Date:t})}),Object(i.jsxs)("div",{className:"expense-item__description",children:[Object(i.jsx)("h2",{children:a}),Object(i.jsxs)("div",{className:"expense-item__price",children:["$",c]})]})]})})},d=function(e){return 0===e.data.length?Object(i.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(i.jsx)("ul",{className:"expenses-list",children:e.data.map((function(e){return Object(i.jsx)(u,{title:e.title,amount:e.amount,Date:e.date},e.id)}))})},b=(n(25),function(e){return Object(i.jsx)("div",{className:"expenses-filter",children:Object(i.jsxs)("div",{className:"expenses-filter__control",children:[Object(i.jsx)("label",{children:"Filter by year"}),Object(i.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeDate(t.target.value)},children:[Object(i.jsx)("option",{value:"All",children:"All"}),Object(i.jsx)("option",{value:"2022",children:"2022"}),Object(i.jsx)("option",{value:"2021",children:"2021"}),Object(i.jsx)("option",{value:"2020",children:"2020"}),Object(i.jsx)("option",{value:"2019",children:"2019"})]})]})})}),x=n(9),O=(n(26),n(27),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(i.jsxs)("div",{className:"chart-bar",children:[Object(i.jsx)("div",{className:"chart-bar__inner",children:Object(i.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(i.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),h=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(i.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(i.jsx)(O,{value:e.value,maxValue:n,label:e.label},e.label)}))})},v=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.dataPoints);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(i.jsx)(h,{dataPoints:n})};n(28);var m=function(e){var t=Object(o.useState)("All"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.data.filter((function(e){return"All"==a||e.date.getFullYear()==a?e:void 0}));return Object(i.jsxs)(j,{className:"expenses",children:[Object(i.jsx)(b,{selected:a,onChangeDate:function(e){c(e)}}),Object(i.jsx)(v,{dataPoints:l}),Object(i.jsx)(d,{data:l})]})},p=n(6),f=(n(29),n(30),function(e){var t=Object(o.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(o.useState)(""),r=Object(s.a)(l,2),j=r[0],u=r[1],d=Object(o.useState)(""),b=Object(s.a)(d,2),x=b[0],O=b[1],h=Object(o.useState)("closed"),v=Object(s.a)(h,2),m=v[0],p=v[1],f=function(){"closed"==m?p("opened"):(p("closed"),O(""),u(""),c(""))};return"closed"==m?Object(i.jsx)("div",{className:"new-expense__actions",style:{textAlign:"center"},children:Object(i.jsx)("button",{onClick:f,children:"Add New Expense"})}):Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+x,date:new Date(j)};e.onSubmitHandler(n),O(""),u(""),c(""),f()},children:[Object(i.jsxs)("div",{className:"new-expense__controls",children:[Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Title"}),Object(i.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Amount"}),Object(i.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:x,onChange:function(e){O(e.target.value)}})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Date"}),Object(i.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:j,onChange:function(e){u(e.target.value)}})]})]}),Object(i.jsx)("div",{className:"new-expense__actions",style:{float:"right"},children:Object(i.jsx)("button",{type:"submit",children:"Add Expense"})}),Object(i.jsx)("div",{className:"new-expense__actions",children:Object(i.jsx)("button",{onClick:f,children:"Cancel"})})]})}),_=function(e){return Object(i.jsx)("div",{className:"new-expense",children:Object(i.jsx)(f,{onSubmitHandler:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.round(100*Math.random()).toString()});e.onDataReceive(n)}})})},N=n(10),g=n.n(N),w=function(){return Object(i.jsx)("div",{className:g.a.footer,children:Object(i.jsxs)("h3",{children:["Created by :"," ",Object(i.jsx)("a",{href:"https://www.linkedin.com/in/cavinkumaran1257/",target:"_blank",children:"Cavinkumaran.M"})]})})},y=[{amount:94.12,date:new Date(2020,7,14),id:"001",title:"Toilet Paper"},{id:"002",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"003",title:"Car Insurance",amount:294.67,date:new Date(2020,2,28)},{id:"004",title:"New Desk (Wooden)",amount:450,date:new Date(2022,5,12)}];var D=function(){var e=Object(o.useState)(y),t=Object(s.a)(e,2),n=t[0],a=t[1];return document.title="Expense Manager",Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{style:{textAlign:"center",color:"white"},children:"Expense Manager"}),Object(i.jsx)(_,{onDataReceive:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(i.jsx)(m,{data:n}),Object(i.jsx)(w,{})]})};c.a.createRoot(document.getElementById("root")).render(Object(i.jsx)(D,{}))}],[[31,1,2]]]);
//# sourceMappingURL=main.1e1c2f74.chunk.js.map
(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(18),o=a.n(s),r=(a(25),a(11)),l=a(20),i=(a(26),a(8)),b=a(0);function d(e){return Object(b.jsx)("div",{className:"fixed-top",children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})})]}),Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})}d.defaultProps={};var j=function(e){var t=e.todo,a=e.OnDelete;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"py-3",children:[Object(b.jsx)("h1",{children:t.srn}),Object(b.jsx)("p",{children:t.desc}),Object(b.jsx)("p",{children:t.work}),Object(b.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){a(t)},children:"Delete"})]}),Object(b.jsx)("hr",{})]})},u=function(e){return Object(b.jsxs)("div",{className:"container my-5",children:[Object(b.jsx)("h4",{className:"text-center my-3",children:"Todo List"}),0===e.todos.length?"No todos to display    ":e.todos.map((function(t){return Object(b.jsx)(j,{todo:t,OnDelete:e.OnDelete},t.srn)}))]})},m=function(){return Object(b.jsx)("footer",{className:"bg-dark text-light",style:{position:"fixed",width:"100%",bottom:"0vh"},children:Object(b.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyTodosList.com"})})},h=function(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)(""),l=Object(r.a)(o,2),i=l[0],d=l[1];return Object(b.jsxs)("div",{className:"container my-3 py-4",children:[Object(b.jsx)("h3",{className:"my-4",children:"Add a Todo"}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c&&i?(e.addTodo(c,i),s(""),d("")):alert("Description or Work cannot be Blank")},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Description"}),Object(b.jsx)("input",{type:"text",value:c,onChange:function(e){return s(e.target.value)},className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"work",className:"form-label",children:"Work"}),Object(b.jsx)("input",{type:"text",value:i,onChange:function(e){return d(e.target.value)},className:"form-control",id:"exampleInputPassword1"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-s btn-success",children:"Add into List"})]})]})},x=function(){return console.log("In about page"),Object(b.jsx)("div",{children:Object(b.jsx)("h2",{className:"container my-3 py-5",children:"This is my about page !!!"})})},O=a(2);var p=function(){var e;e=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[{srn:1,desc:"Go to place 1",work:"Buy from place 1"},{srn:2,desc:"Go to place 2",work:"Buy from place 2"},{srn:3,desc:"Go to place 3",work:"Buy from place 3"}];var t=Object(n.useState)(e),a=Object(r.a)(t,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(d,{title:"MyTodosList"}),Object(b.jsxs)(O.c,{children:[Object(b.jsxs)(O.a,{exact:!0,path:"/",children:[Object(b.jsx)(h,{addTodo:function(e,t){console.log("I am adding this todo",e,t);var a={srn:(0===c.length?0:Math.max.apply(Math,c.map((function(e){return e.srn}))))+1,desc:e,work:t};console.log(a),s([].concat(Object(l.a)(c),[a]))}}),Object(b.jsx)(u,{todos:c,OnDelete:function(e){console.log("I deleting this todo ",e),s(c.filter((function(t){return t!==e})))}})]}),Object(b.jsx)(O.a,{exact:!0,path:"/about",children:Object(b.jsx)(x,{})})]}),Object(b.jsx)(m,{})]})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.5fc51960.chunk.js.map
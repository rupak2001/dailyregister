(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,function(e,t,s){},function(e,t,s){},,,,,,function(e,t,s){},,function(e,t,s){},,function(e,t,s){},function(e){e.exports=JSON.parse('[[{"class_name":"English-lab","class_code":"HU-291","S_Time":10,"E_Time":12,"Status":"yet to start"},{"class_name":"Mechanics","class_code":"ME-201","S_Time":12,"E_Time":1,"Status":"yet to start"},{"class_name":"Maths","class_code":"M-201","S_Time":1,"E_Time":2,"Status":"yet to start"},{"class_name":"Chemistry","class_code":"CH-201","S_Time":3,"E_Time":4,"Status":"yet to start"},{"class_name":"Mechanical Lab/Chemistry Lab","class_code":"ME-291/CH-291","S_Time":4,"E_Time":6,"Status":"yet to start"}],[{"class_name":{"b":"Mechanical Lab","a":"Chemistry Lab"},"class_code":{"b":"ME-291","a":"CH-291"},"S_Time":11,"E_Time":1,"Status":"yet to start"},{"class_name":"Mechanics","class_code":"ME-201","S_Time":1,"E_Time":2,"Status":"yet to start"},{"class_name":"Electrical","class_code":"EE-201","S_Time":3,"E_Time":4,"Status":"yet to start"},{"class_name":"Maths","class_code":"M-201","S_Time":4,"E_Time":5,"Status":"yet to start"},{"class_name":"Computer","class_code":"CS-201","S_Time":5,"E_Time":6,"Status":"yet to start"}],[{"class_name":"Electrical","class_code":"EE-201","S_Time":11,"E_Time":12,"Status":"yet to start"},{"class_name":"Mechanics","class_code":"ME-201","S_Time":12,"E_Time":1,"Status":"yet to start"},{"class_name":"Computer","class_code":"CS-201","S_Time":1,"E_Time":2,"Status":"yet to start"},{"class_name":"Chemistry","class_code":"CH-201","S_Time":3,"E_Time":4,"Status":"yet to start"},{"class_name":"Maths","class_code":"M-201","S_Time":6,"E_Time":7,"Status":"yet to start"}],[{"class_name":"Maths","class_code":"M-201","S_Time":11,"E_Time":12,"Status":"yet to start"},{"class_name":"Chemistry","class_code":"CH-201","S_Time":12,"E_Time":1,"Status":"yet to start"},{"class_name":"Electrical","class_code":"EE-201","S_Time":1,"E_Time":2,"Status":"yet to start"},{"class_name":"Computer","class_code":"CS-201","S_Time":3,"E_Time":4,"Status":"yet to start"},{"class_name":{"a":"Computer","b":"Electrical"},"class_code":{"a":"CS-291","b":"EE-291"},"S_Time":4,"E_Time":6,"Status":"yet to start"}],[{"class_name":"Computer","class_code":"CS-201","S_Time":11,"E_Time":12,"Status":"yet to start"},{"class_name":"Maths","class_code":"M-201","S_Time":12,"E_Time":1,"Status":"yet to start"},{"class_name":"Chemistry","class_code":"CH-201","S_Time":1,"E_Time":2,"Status":"yet to start"},{"class_name":"Electrical","class_code":"EE-201","S_Time":3,"E_Time":4,"Status":"yet to start"},{"class_name":{"b":"Computer","a":"Electrical"},"class_code":{"b":"CS-291","a":"EE-291"},"S_Time":4,"E_Time":6,"Status":"yet to start"}]]')},function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),n=s(9),i=s.n(n),l=(s(14),s(4)),r=s.n(l),o=s(5),d=s(3),m=(s(16),s(7),s(0));var u=function(){return Object(m.jsx)("div",{className:"div0",children:Object(m.jsxs)("div",{className:"div2",children:[Object(m.jsxs)("span",{className:"span3",children:[Object(m.jsx)("p",{className:"p3",children:"EMAIL"}),Object(m.jsx)("input",{type:"text",className:"inp3",placeholder:"enter email_id",id:"email"})]}),Object(m.jsxs)("span",{className:"span4",children:[Object(m.jsx)("p",{className:"p4",children:"PASSWORD"}),Object(m.jsx)("input",{type:"password",className:"inp4",placeholder:"enter Password",id:"pass"})]}),Object(m.jsxs)("div",{className:"div3",children:[Object(m.jsx)("button",{className:"but1",id:"loginbut",children:"LOGIN"}),Object(m.jsx)("p",{id:"loginp1"}),Object(m.jsx)("a",{className:"a1",href:"http://www.google.com",children:"sign in with google"})]})]})})},j=s(1),b=s.n(j);var h=function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),s=t[0],c=t[1],n=function(){var e={name:document.getElementById("name").value,email:document.getElementById("email_id").value,phone_no:document.getElementById("ph_no").value,password:document.getElementById("pass").value};return console.log(e.phone_no),e},i=function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b()("#sign_but").text("loading..."),t=document.getElementById("email_id").value,e.next=4,fetch("https://daily-register-app.herokuapp.com/find_user/"+t).then((function(e){return e.json()})).then(function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=6;break}return e.next=3,fetch("https://daily-register-app.herokuapp.com/logup",{method:"POST",body:JSON.stringify(n()),headers:{"Content-Type":"application/json"}}).then(c(Object(m.jsx)("p",{className:"new_user",children:"successfully signed up, please log in"})));case 3:b()("#sign_but").text("SIGN-UP"),e.next=7;break;case 6:1===t.length&&(c((function(){return Object(m.jsx)("p",{className:"ex_user",children:"you already have an account.Please log-in"})})),b()("#sign_but").text("SIGN-UP"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"div0",children:Object(m.jsxs)("div",{className:"div2",children:[Object(m.jsxs)("span",{className:"span1",children:[Object(m.jsx)("p",{className:"p1",children:"NAME"}),Object(m.jsx)("input",{type:"text",className:"inp1",placeholder:"enter name",id:"name"})]}),Object(m.jsxs)("span",{className:"span2",children:[Object(m.jsx)("p",{className:"p2",children:"PHONE NO"}),Object(m.jsx)("input",{type:"text",className:"inp2",placeholder:"enter phone_no.",id:"ph_no"})]}),Object(m.jsxs)("span",{className:"span3",children:[Object(m.jsx)("p",{className:"p3",children:"EMAIL"}),Object(m.jsx)("input",{type:"text",className:"inp3",placeholder:"enter email_id",id:"email_id"})]}),Object(m.jsxs)("span",{className:"span4",children:[Object(m.jsx)("p",{className:"p4",children:"PASSWORD"}),Object(m.jsx)("input",{type:"password",className:"inp4",placeholder:"enter Password",id:"pass"})]}),Object(m.jsxs)("div",{className:"div3",children:[Object(m.jsx)("button",{className:"but1",id:"sign_but",onClick:function(){i()},children:"SIGN-UP"}),s,Object(m.jsx)("a",{className:"a1",href:"http://www.google.com",children:"sign in with google"})]})]})})},p=!0;var _=function(){var e=Object(a.useState)((function(){return Object(m.jsx)(u,{})})),t=Object(d.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)("SIGN-UP"),i=Object(d.a)(n,2),l=i[0],r=i[1],o=Object(a.useState)("LOGIN"),j=Object(d.a)(o,2),b=j[0],_=j[1];return Object(m.jsx)("div",{className:"divn",children:Object(m.jsxs)("div",{className:"div1",children:[Object(m.jsxs)("p",{children:["REGISTER ",b]}),Object(m.jsx)("button",{className:"d1b1",onClick:function(){!0===p?(p=!1,c((function(){return Object(m.jsx)(h,{})})),r("LOGIN"),_("SIGN-UP")):!1===p&&(p=!0,c(Object(m.jsx)(u,{})),r("SIGN-UP"),_("LOGIN"))},children:l}),s]})})};s(8);var O=function(){return Object(m.jsxs)("div",{id:"sb",className:"#",children:[Object(m.jsx)("h1",{className:"sbh1",children:"Welcome"}),Object(m.jsx)("button",{className:"sbb1",children:"SCHEDULE"}),Object(m.jsx)("button",{className:"sbb2",children:"STATS"}),Object(m.jsx)("button",{className:"sbb3",children:"UPDATE-SCHEDULE"}),Object(m.jsx)("button",{className:"sbb4",children:"UPDATE-INFO"})]})},x=(s(18),s(19));var S=function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(null),i=Object(d.a)(n,2),l=i[0],r=i[1],o=function(){return(new Date).getDay()};return Object(a.useEffect)((function(){if(r(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][o()]),0!==o()&&6!==o()){var e=x[o()-1].map((function(e){return Object(m.jsxs)("tr",{className:"tr1",children:[Object(m.jsx)("th",{children:e.class_name}),Object(m.jsx)("th",{children:e.class_code}),Object(m.jsx)("th",{children:e.S_Time}),Object(m.jsx)("th",{children:e.E_Time}),Object(m.jsx)("th",{children:e.Status})]})}));c(e)}else c(Object(m.jsx)("h1",{style:{color:"red",backgroundColor:"aqua"},children:"CHUTTI K DIN YAHA KYA KAAM!!! CHAL NIKALL"}))}),[]),Object(m.jsx)("div",{className:"routd0",children:Object(m.jsx)("span",{className:"routs0",children:Object(m.jsxs)("table",{className:"routtab0",children:[Object(m.jsxs)("thead",{children:[Object(m.jsx)("tr",{children:Object(m.jsx)("th",{className:"day_finder",children:l})}),Object(m.jsxs)("tr",{className:"tr1",children:[Object(m.jsx)("th",{children:"SUBJECT"}),Object(m.jsx)("th",{children:"SUBJECT-CODE"}),Object(m.jsx)("th",{children:"S-TIME"}),Object(m.jsx)("th",{children:"E-TIME"}),Object(m.jsx)("th",{children:"ATTENDENCE STATUS"})]})]}),Object(m.jsx)("tbody",{children:s})]})})})};var E=function(){var e=!0;return b()((function(){b()("#sb").hide(),b()(".headinp0").click((function(){!0===e?(b()("#sb").slideDown(200),b()(".headinp0").css("transform","rotate(90deg)"),e=!1):(b()("#sb").slideUp(200),b()(".headinp0").css("transform","rotate(180deg)"),e=!0)}))})),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"headd0",children:[Object(m.jsx)("input",{className:"headinp0",type:"image",src:"https://cdn.iconscout.com/icon/free/png-256/global-navigation-bar-1174857.png",alt:"drop-down menu icon"}),Object(m.jsx)("p",{className:"headp0",children:"Register"}),Object(m.jsx)("button",{className:"headb0",children:"SIGN-OUT"})]}),Object(m.jsx)(O,{}),Object(m.jsx)(S,{})]})};var N=function(){var e=Object(a.useState)(Object(m.jsx)(_,{})),t=Object(d.a)(e,2),s=t[0],c=t[1];return b()((function(){b()("#loginbut").click(Object(o.a)(r.a.mark((function e(){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b()("#loginbut").text("loading..."),t=document.getElementById("email").value,s=document.getElementById("pass").value,e.next=5,fetch("https://daily-register-app.herokuapp.com/log_user/"+t).then((function(e){return e.json()})).then((function(e){e.length>0&&s===e[0].password?(b()("#loginbut").text("LOGIN"),document.getElementById("pass").value=null,c(Object(m.jsx)(E,{}))):e.length>0&&s!==e[0].password?(document.getElementById("pass").value=null,b()("#loginbut").text("LOGIN"),b()("#loginp1").text("incorrect password")):0===e.length&&(b()("#loginbut").text("LOGIN"),document.getElementById("pass").value=null,b()("#loginp1").text("no user found. please sign-up"))}));case 5:case"end":return e.stop()}}),e)}))))})),Object(m.jsx)("div",{className:"App",children:s})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.fd5bac0e.chunk.js.map
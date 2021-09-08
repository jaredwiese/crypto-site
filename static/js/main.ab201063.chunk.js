(this["webpackJsonpcrypto-frontend"]=this["webpackJsonpcrypto-frontend"]||[]).push([[0],{27:function(e,t){},33:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(24),r=a.n(s),i=(a(33),a(10)),o=a(3),j=a(4),l=a.p+"static/media/logo.4b49975d.jpg",b=a(0),h=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){null!==localStorage.getItem("token")&&n(!0)}),[]),Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav",children:[Object(b.jsxs)("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top",children:[Object(b.jsx)("span",{className:"d-block d-lg-none",children:"CRYPTOGRAPHY"}),Object(b.jsx)("span",{className:"d-none d-lg-block",children:Object(b.jsx)("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:l,alt:"..."})})]}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link js-scroll-trigger",href:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link js-scroll-trigger",href:"/caesar",children:"Caesar Cipher"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link js-scroll-trigger",href:"/affine",children:"Affine Cipher"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link js-scroll-trigger",href:"/substitution",children:"Substitution Cipher"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link js-scroll-trigger",href:"/transposition",children:"Transposition Cipher"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link js-scroll-trigger",href:"/vigenere",children:"Vigenere Cipher"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link js-scroll-trigger"})}),!0===a?Object(b.jsxs)(c.Fragment,{children:[" ",Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link js-scroll-trigger",href:"/dashboard",children:"Account Dashboard"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link js-scroll-trigger",href:"/logout",children:"Log Out"})})]}):Object(b.jsxs)(c.Fragment,{children:[" ",Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link js-scroll-trigger",href:"/login",children:"Login"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link js-scroll-trigger",href:"/signup",children:"Sign up"})})]})]})})]})},d=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)("section",{className:"resume-section",id:"about",children:Object(b.jsxs)("div",{className:"resume-section-content",children:[Object(b.jsxs)("h1",{className:"mb-0",children:["CRYPTO",Object(b.jsx)("span",{className:"text-primary",children:"GRAPHY"})]}),Object(b.jsxs)("p",{className:"lead mb-5",children:['"Cryptography, or cryptology, is the practice and study of techniques for secure communication in the presence of adversarial behavior. More generally, cryptography is about constructing and analyzing protocols that prevent third parties or the public from reading private messages; various aspects in information security such as data confidentiality, data integrity, authentication, and non-repudiation are central to modern cryptography." ',Object(b.jsx)("a",{href:"https://en.wikipedia.org/wiki/Cryptography",children:"-Wikipedia"})]}),Object(b.jsxs)("div",{className:"social-icons",children:[Object(b.jsx)("a",{className:"social-icon",href:"https://www.linkedin.com/in/jaredwiese/",children:Object(b.jsx)("i",{className:"fab fa-linkedin-in"})}),Object(b.jsx)("a",{className:"social-icon",href:"https://github.com/jaredwiese",children:Object(b.jsx)("i",{className:"fab fa-github"})})]})]})}),Object(b.jsx)("hr",{className:"m-0"})]})})},u=function(){return fetch("https://cryptoapi-cp.herokuapp.com/accounts/auth/user/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()}))},p=function(e){return fetch("https://cryptoapi-cp.herokuapp.com/accounts/auth/user/secrets/".concat(e,"/"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()}))},O=function(e){return fetch("https://cryptoapi-cp.herokuapp.com/accounts/auth/user/secrets/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))},body:JSON.stringify(e)}).then((function(e){return e.json()}))},m=function(e,t){return fetch("https://cryptoapi-cp.herokuapp.com/accounts/auth/user/secrets/".concat(e,"/"),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))},body:JSON.stringify(t)}).then((function(e){return e.json()}))},x=function(e){return console.log("delectSecretByID called",e),fetch("https://cryptoapi-cp.herokuapp.com/accounts/auth/user/secrets/".concat(e,"/"),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}})},g=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(j.a)(s,2),i=r[0],o=r[1],l=Object(c.useState)(!1),h=Object(j.a)(l,2),d=h[0],u=h[1],p=Object(c.useState)(!0),O=Object(j.a)(p,2),m=O[0],x=O[1];Object(c.useEffect)((function(){null!==localStorage.getItem("token")?window.location.replace("http://localhost:3000/dashboard"):x(!1)}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),!1===m&&Object(b.jsx)("h2",{children:"\u2002 Login"}),!0===d&&Object(b.jsx)("h3",{children:"Cannot log in with provided credentials"}),!1===m&&Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){return fetch("https://cryptoapi-cp.herokuapp.com/accounts/auth/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}({email:a,password:i}).then((function(e){e.key?(localStorage.clear(),localStorage.setItem("token",e.key),window.location.replace("http://localhost:3000/dashboard")):(n(""),o(""),localStorage.clear(),u(!0))}))},children:[Object(b.jsx)("br",{}),"\u2003\u2002",Object(b.jsx)("label",{htmlFor:"email",children:"Email address:"})," ",Object(b.jsx)("br",{}),"\u2003\u2002",Object(b.jsx)("input",{name:"email",type:"email",value:a,required:!0,onChange:function(e){return n(e.target.value)}})," ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"\u2003\u2002",Object(b.jsx)("label",{htmlFor:"password",children:"Password:"})," ",Object(b.jsx)("br",{}),"\u2003\u2002",Object(b.jsx)("input",{name:"password",type:"password",value:i,required:!0,onChange:function(e){return o(e.target.value)}})," ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"\u2003\u2002",Object(b.jsx)("input",{type:"submit",value:"Login"})]})]})},f=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(j.a)(s,2),i=r[0],o=r[1],l=Object(c.useState)(""),h=Object(j.a)(l,2),d=h[0],u=h[1],p=Object(c.useState)(!1),O=Object(j.a)(p,2),m=O[0],x=O[1],g=Object(c.useState)(!0),f=Object(j.a)(g,2),y=f[0],v=f[1];Object(c.useEffect)((function(){null!==localStorage.getItem("token")?window.location.replace("http://localhost:3000/dashboard"):v(!1)}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),!1===y&&Object(b.jsx)("h2",{children:"\u2002 Signup"}),!0===m&&Object(b.jsx)("h2",{children:"\u2002 Cannot signup with provided credentials"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){return fetch("https://cryptoapi-cp.herokuapp.com/accounts/auth/register/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}({email:a,password1:i,password2:d}).then((function(e){e.key?(localStorage.clear(),localStorage.setItem("token",e.key),window.location.replace("http://localhost:3000/dashboard")):(n(""),o(""),u(""),localStorage.clear(),x(!0))}))},children:[Object(b.jsx)("br",{}),"\u2003\u2002",Object(b.jsx)("label",{htmlFor:"email",children:"Email address:"})," ",Object(b.jsx)("br",{}),"\u2003\u2002",Object(b.jsx)("input",{name:"email",type:"email",value:a,onChange:function(e){return n(e.target.value)},required:!0})," ",Object(b.jsx)("br",{}),"\u2003\u2002",Object(b.jsx)("label",{htmlFor:"password1",children:"Password:"})," ",Object(b.jsx)("br",{}),"\u2003\u2002",Object(b.jsx)("input",{name:"password1",type:"password",value:i,onChange:function(e){return o(e.target.value)},required:!0})," ",Object(b.jsx)("br",{}),"\u2003\u2002",Object(b.jsx)("label",{htmlFor:"password2",children:"Confirm password:"})," ",Object(b.jsx)("br",{}),"\u2003\u2002",Object(b.jsx)("input",{name:"password2",type:"password",value:d,onChange:function(e){return u(e.target.value)},required:!0})," ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"\u2003\u2002",Object(b.jsx)("input",{type:"submit",value:"Signup"})]})]})},y=function(){var e=Object(c.useState)(!0),t=Object(j.a)(e,2),a=t[0],n=t[1];Object(c.useEffect)((function(){null==localStorage.getItem("token")?window.location.replace("http://localhost:3000/login"):n(!1)}),[]);return Object(b.jsx)("div",{children:!1===a&&Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{children:"\u2002 Are you sure you want to logout?"}),Object(b.jsx)("br",{}),"\u2003",Object(b.jsx)("input",{type:"button",value:"Logout",onClick:function(e){e.preventDefault(),fetch("https://cryptoapi-cp.herokuapp.com/accounts/auth/logout/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.clear(),window.location.replace("http://localhost:3000/login")}))}})]})})},v=a(18),k=a(5),S=a(6),C=a(8),w=a(7),_=a(47),N=a(48),E=a(45),T=a(46),I=function(e){Object(C.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(k.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={secrets:[]},e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;u().then((function(t){e.setState({secrets:Array.from(t)})}))}},{key:"render",value:function(){var e=this.props,t=e.secret_id,a=e.message_name,c=e.cipher_text,n=e.decrypt_key;return Object(b.jsxs)("div",{children:[Object(b.jsx)(E.a,{children:Object(b.jsx)(i.b,{to:"/dashboard/secrets/".concat(t),children:a})}),Object(b.jsx)(T.a,{children:c}),Object(b.jsx)(T.a,{children:n})]})}}]),a}(c.Component),D=function(e){Object(C.a)(a,e);var t=Object(w.a)(a);function a(){return Object(k.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"render",value:function(){var e=this.props.secrets;return Object(b.jsx)(_.a,{children:e.map((function(e){return Object(b.jsx)(N.a,{children:Object(b.jsx)(I,Object(v.a)(Object(v.a)({},e),{},{id:e.secret_id}))},e.secret_id)}))})}}]),a}(c.Component),A=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)([]),o=Object(j.a)(r,2),l=o[0],h=o[1],d=Object(c.useState)(!0),p=Object(j.a)(d,2),O=p[0],m=p[1];return Object(c.useEffect)((function(){null===localStorage.getItem("token")?window.location.replace("http://localhost:3000/login"):(u().then((function(e){m(!1),s(e.username)})),fetch("https://cryptoapi-cp.herokuapp.com/accounts/auth/user/secrets/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){m(!1),h(e)})))}),[]),Object(b.jsx)("div",{children:!1===O&&Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)("br",{}),Object(b.jsx)("h2",{children:"\u2002\u2002 User Dashboard"}),Object(b.jsx)("br",{}),Object(b.jsxs)("h2",{children:["\u2002\u2002 Hello ",n,"!"]}),Object(b.jsx)("br",{}),Object(b.jsxs)("h3",{children:["\u2003\u2002 ",Object(b.jsx)(i.b,{to:"/dashboard/secrets/add",children:"New Secret +"})]}),Object(b.jsx)("br",{}),"\u2002",Object(b.jsx)(D,{secrets:l})]})})},F=a(23),P=function(e){Object(C.a)(a,e);var t=Object(w.a)(a);function a(){return Object(k.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"button",children:["\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003",Object(b.jsx)("button",{type:"button",class:"btn-primary buttonStyle",onClick:this.props.handleClick,children:this.props.children})]})}}]),a}(c.Component),R=function(e){Object(C.a)(a,e);var t=Object(w.a)(a);function a(){return Object(k.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"encrypt",value:function(e,t){for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ",c="abcdefghijklmnopqrstuvwxyz",n="",s=0,r=0;r<e.length;r++)a.includes(e[r])&&a.indexOf(e[r])+t<26?(s=a.indexOf(e[r]),n+=a[s+t]):a.includes(e[r])&&a.indexOf(e[r])+t>=26?(s=a.indexOf(e[r]),n+=a[s+t-26]):c.includes(e[r])&&c.indexOf(e[r])+t<26?(s=c.indexOf(e[r]),n+=c[s+t]):c.includes(e[r])&&c.indexOf(e[r])+t>=26?(s=c.indexOf(e[r]),n+=c[s+t-26]):n+=e[r];return n}},{key:"decrypt",value:function(e,t){for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ",c="abcdefghijklmnopqrstuvwxyz",n="",s=0,r=0;r<e.length;r++)console.log("a",c.indexOf("a")),console.log("shift",t),console.log("index",c.indexOf(e[r])),a.includes(e[r])&&a.indexOf(e[r])+t>-1?(s=a.indexOf(e[r]),n+=a[s+t]):a.includes(e[r])&&a.indexOf(e[r])+t<=-1?(s=a.indexOf(e[r]),n+=a[s+t+26]):c.includes(e[r])&&c.indexOf(e[r])+t>-1?(s=c.indexOf(e[r]),n+=c[s+t]):c.includes(e[r])&&c.indexOf(e[r])+t<=-1?(s=c.indexOf(e[r]),n+=c[s+t+26]):n+=e[r];return n}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("h3",{children:["\u2003\u2003\u2003\u2003\u2003 Plain Text",Object(b.jsx)("br",{})]}),Object(b.jsxs)("h5",{children:["\u2003  ",Object(b.jsx)("textarea",{id:"p",name:"p",rows:"4",cols:"50",defaultValue:"attack at dawn"})]}),"\u2003\u2003\u2003\u2003\u2003",Object(b.jsxs)("h5",{children:[Object(b.jsxs)(P,{handleClick:function(){var t=document.getElementById("p").value,a=Number(document.getElementById("s").value);document.getElementById("c").value=e.encrypt(t,a)},children:["Encrypt",Object(b.jsx)(F.a,{})]}),"\u2003\u2003 \u2003",Object(b.jsxs)("h5",{children:["\u2003\u2003\u2003\u2003\u2003\u2003 shift = ",Object(b.jsx)("input",{id:"s",name:"key",size:"10",defaultValue:"13",type:"text"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]}),Object(b.jsxs)(P,{handleClick:function(){var t=document.getElementById("c").value,a=-Number(document.getElementById("s").value);document.getElementById("p").value=e.decrypt(t,a),console.log(a)},children:["Decrypt",Object(b.jsx)(F.b,{})]}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("h3",{children:["\u2003\u2003\u2003\u2003\u2003 Cipher Text",Object(b.jsx)("br",{})]}),Object(b.jsxs)("h5",{children:["\u2003 ",Object(b.jsx)("textarea",{id:"c",name:"c",rows:"4",cols:"50"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("section",{className:"cipher-section",id:"cipher",children:Object(b.jsxs)("div",{className:"cipher-section-content",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("h1",{className:"mb-0",children:["CAESAR",Object(b.jsx)("span",{className:"text-primary",children:"CIPHER"})]}),Object(b.jsxs)("p",{className:"lead mb-5",children:["\"In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.\" ",Object(b.jsx)("a",{href:"https://en.wikipedia.org/wiki/Caesar_cipher",children:"-Wikipedia"})]})]})})]})}}]),a}(c.Component),M=a(27),B=a.n(M),z=function(e){Object(C.a)(a,e);var t=Object(w.a)(a);function a(){return Object(k.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"render",value:function(){var e=this.props,t=e.secret_id,a=e.message_name,c=e.cipher_text,n=e.decrypt_key;return Object(b.jsxs)("div",{children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("h2",{children:["\u2002",a]}),Object(b.jsx)("br",{}),Object(b.jsxs)("h4",{children:["\u2003",c]}),Object(b.jsx)("br",{}),Object(b.jsxs)("h4",{children:["\u2003",n]}),Object(b.jsx)("br",{}),Object(b.jsxs)("h5",{children:["\u2003",Object(b.jsx)(i.b,{to:"/dashboard/secrets/".concat(t,"/edit"),children:"Edit"})," \u2003\u2003 ",Object(b.jsx)(i.b,{to:"/dashboard/secrets/".concat(t,"/delete"),children:"   Delete   "})]})]})}}]),a}(c.Component),L=function(e){Object(C.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(k.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={secret:null,id:e.props.match.params.secretID},e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;p(this.state.id).then((function(t){e.setState({secret:t})}))}},{key:"render",value:function(){return Object(b.jsx)("div",{children:this.state.secret?Object(b.jsx)(z,Object(v.a)({},this.state.secret)):Object(b.jsx)("span",{children:"404: Secret Not Found"})})}}]),a}(c.Component),Y=a(13),q=a.n(Y),G=a(17),H=function(e){Object(C.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(k.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={message_name:"",id:e.props.match.params.secretID,message:""},e.handleDelete=function(){var t=Object(G.a)(q.a.mark((function t(a){var c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,x(e.props.match.params.secretID);case 3:c=t.sent,console.log(c),c.error?e.setState({message:c.error.message}):e.setState({message:"Secret Deleted"},(function(){console.log("secret deleted",e.state.message),window.location.replace("http://localhost:3000/dashboard")}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;p(this.state.id).then((function(t){e.setState({secret:t,message_name:t.message_name})}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("br",{}),Object(b.jsxs)("h2",{children:["\u2002 Are you sure you want to delete ",this.state.message_name,"?"]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),this.state.message&&Object(b.jsxs)("h3",{children:["\u2002\u2002",this.state.message]}),!this.state.message&&Object(b.jsxs)(c.Fragment,{children:["\u2002\u2002",Object(b.jsx)(i.b,{to:"/dashboard/secrets/".concat(this.state.id),children:Object(b.jsx)("button",{children:" Cancel "})}),"\u2002\u2002",Object(b.jsx)("input",{type:"button",name:"Delete",value:"Delete Forever",onClick:this.handleDelete})]})]})}}]),a}(c.Component),J=function(e){Object(C.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(k.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={message_name:"",cipher_text:"",decrypt_key:"",message:""},e.handleChange=function(t){var a=t.target.name,c=t.target.value;"message_name"===a?e.setState({message_name:c}):"cipher_text"===a?e.setState({cipher_text:c}):e.setState({decrypt_key:c})},e.handleSubmit=function(){var t=Object(G.a)(q.a.mark((function t(a){var c,n;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),c={message_name:e.state.message_name,cipher_text:e.state.cipher_text,decrypt_key:e.state.decrypt_key},t.next=4,m(e.props.match.params.secretID,c);case 4:n=t.sent,console.log(n),n.error?e.setState({message:n.error.message}):e.setState({message:"".concat(n.message_name," updated")});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;p(this.props.match.params.secretID).then((function(t){console.log("SecretPage",t),e.setState({secret:t,message_name:t.message_name,cipher_text:t.cipher_text,decrypt_key:t.decrypt_key,message:t.message})}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h2",{children:["\u2002 Edit ",this.state.message_name]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),this.state.message&&Object(b.jsxs)("h3",{children:["\u2002\u2002 ",this.state.message]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:["\u2003\u2003",Object(b.jsx)("label",{htmlFor:"message_name",children:"MESSAGE NAME:"}),Object(b.jsx)("br",{}),"\u2003\u2003",Object(b.jsx)("input",{onChange:this.handleChange,type:"text",name:"message_name",defaultValue:this.state.message_name}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"\u2003\u2003",Object(b.jsx)("label",{htmlFor:"cipher_text",children:"CIPHER TEXT:"}),Object(b.jsx)("br",{}),"\u2003\u2003",Object(b.jsx)("input",{onChange:this.handleChange,type:"text",name:"cipher_text",defaultValue:this.state.cipher_text}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"\u2003\u2003",Object(b.jsx)("label",{htmlFor:"decrypt_key",children:"DECRYPTION KEY:"}),Object(b.jsx)("br",{}),"\u2003\u2003",Object(b.jsx)("input",{onChange:this.handleChange,type:"text",name:"decrypt_key",defaultValue:this.state.decrypt_key}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"\u2003\u2003",Object(b.jsx)("input",{type:"submit",value:"Update"}),Object(b.jsx)("br",{})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"\u2003\u2003",Object(b.jsx)(i.b,{to:"/dashboard/secrets/".concat(this.props.match.params.secretID),children:Object(b.jsx)("button",{children:" Cancel "})})]})}}]),a}(c.Component),V=function(e){Object(C.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(k.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={message_name:"",cipher_text:"",decrypt_key:"",message:""},e.handleChange=function(t){var a=t.target.name,c=t.target.value;"message_name"===a?e.setState({message_name:c}):"cipher_text"===a?e.setState({cipher_text:c}):e.setState({decrypt_key:c})},e.handleSubmit=function(){var t=Object(G.a)(q.a.mark((function t(a){var c,n;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),c={message_name:e.state.message_name,cipher_text:e.state.cipher_text,decrypt_key:e.state.decrypt_key},t.next=4,O(c);case 4:n=t.sent,console.log(n),n.error?e.setState({message:n.error.message}):e.setState({message:"".concat(n.message_name," submitted")});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(S.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"\u2002Add New Secret Message"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),this.state.message&&Object(b.jsxs)("h3",{children:["\u2002\u2002",this.state.message]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:["\u2002\u2002",Object(b.jsx)("label",{htmlFor:"message_name",children:"MESSAGE NAME:"}),Object(b.jsx)("br",{}),"\u2002\u2002",Object(b.jsx)("input",{onChange:this.handleChange,type:"text",name:"message_name",value:this.state.message_name}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"\u2002\u2002",Object(b.jsx)("label",{htmlFor:"cipher_text",children:"CIPHER TEXT:"}),Object(b.jsx)("br",{}),"\u2002\u2002",Object(b.jsx)("input",{onChange:this.handleChange,type:"text",name:"cipher_text",value:this.state.cipher_text}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"\u2002\u2002",Object(b.jsx)("label",{htmlFor:"decrypt_key",children:"DECRYPTION KEY:"}),Object(b.jsx)("br",{}),"\u2002\u2002",Object(b.jsx)("input",{onChange:this.handleChange,type:"text",name:"decrypt_key",value:this.state.decrypt_key}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"\u2002\u2002",Object(b.jsx)("input",{type:"submit",value:"Submit"}),Object(b.jsx)("br",{})]})]})}}]),a}(c.Component),U=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",component:d}),Object(b.jsx)(o.a,{exact:!0,path:"/caesar",component:R}),Object(b.jsx)(o.a,{exact:!0,path:"/affine",component:B.a}),Object(b.jsx)(o.a,{exact:!0,path:"/login",component:g}),Object(b.jsx)(o.a,{exact:!0,path:"/signup",component:f}),Object(b.jsx)(o.a,{exact:!0,path:"/logout",component:y}),Object(b.jsx)(o.a,{exact:!0,path:"/dashboard",component:A}),Object(b.jsx)(o.a,{exact:!0,path:"/dashboard/secrets/add",component:V}),Object(b.jsx)(o.a,{exact:!0,path:"/dashboard/secrets/:secretID",component:L}),Object(b.jsx)(o.a,{exact:!0,path:"/dashboard/secrets/:secretID/edit",component:J}),Object(b.jsx)(o.a,{exact:!0,path:"/dashboard/secrets/:secretID/delete",component:H})]})]})})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(U,{})}),document.getElementById("root")),K()}},[[44,1,2]]]);
//# sourceMappingURL=main.ab201063.chunk.js.map
(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(601),o=t.n(r),i=t(314),l=t.n(i)()(o());l.push([e.id,"* {\n    padding: 0;\n    margin: 0;\n}\nbody {\n    min-height: 100dvh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding: 25px;\n    background-color: whitesmoke;\n    border-radius: 8px;\n}\n\n\nform > div {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#cancel {\n    margin-bottom: 5px;\n}\nbutton {\n    padding: 8px;\n    width: 90%;\n}\n\ninput {\n    font-size: 1.3rem;\n}\nspan{\n    display: flex;\n}\n\n.condition {\n    color: red;\n    font-size: 30px;\n}\n\ninput:invalid {\n    background-color: rgb(255, 202, 202);\n    border-color: red;\n}\n\ninput:valid {\n    background-color: rgb(202, 255, 206);\n    border-color: green;\n}\n\n.error {\n    \n    width: 264px;\n    font-weight: 600;\n    font-size: 90%;\n    color: white;\n    background-color: #900;\n    border-radius: 0 0 5px 5px;\n    box-sizing: border-box;\n  }\n\n#confirm:hover {\n    background-color: green ;\n    color: white;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n#cancel:hover {\n    background-color: red ;\n    color: white;\n    font-weight: 600;\n    cursor: pointer;\n  }",""]);const a=l},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(l[s]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&l[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},l=[],a=0;a<e.length;a++){var s=e[a],c=r.base?s[0]+r.base:s[0],u=i[c]||0,d="".concat(c," ").concat(u);i[c]=u+1;var m=t(d),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(g);else{var p=o(g,r);r.byIndex=a,n.splice(a,0,{identifier:d,updater:p,references:1})}l.push(d)}return l}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var l=0;l<i.length;l++){var a=t(i[l]);n[a].references--}for(var s=r(e,o),c=0;c<i.length;c++){var u=t(i[c]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),i=t(659),l=t.n(i),a=t(56),s=t.n(a),c=t(540),u=t.n(c),d=t(113),m=t.n(d),g=t(208),p={};p.styleTagTransform=m(),p.setAttributes=s(),p.insert=l().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=u(),n()(g.A,p),g.A&&g.A.locals&&g.A.locals;const[x,v,f,h,y]=[...document.querySelectorAll("input")],b=document.querySelector("#cancel"),E={country:[/\d/,"4"],ZIP:["5"],email:["^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$","8"],password:["^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,32}$","8"],confrimPassword:["^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,32}$","8"]};function S(){const e=document.getElementsByClassName("error")[0];x.value.length<+E.country[1]&&x.value.length>0?(e.textContent=`Shortest country name is 4 characters. You are at ${x.value.length}.`,x.setCustomValidity("Too short."),x.nextElementSibling.innerHTML="&#x2717;",x.nextElementSibling.style.color="red"):E.country[0].test(x.value)?(e.textContent="A country cannot contain numbers in its name.",x.setCustomValidity("Invalid Input."),x.nextElementSibling.innerHTML="&#x2717;",x.nextElementSibling.style.color="red"):(e.textContent="",x.value.length>0?(x.setCustomValidity(""),x.nextElementSibling.innerHTML="&#10003;",x.nextElementSibling.style.color="green"):(x.nextElementSibling.innerHTML="&#x2717;",x.nextElementSibling.style.color="red"))}function C(){const e=document.getElementsByClassName("error")[1];v.value.length<+E.ZIP[0]&&v.value.length>0?(e.textContent=`Shortest ZIP is 5 characters. You are at ${v.value.length}.`,v.setCustomValidity("Too short."),v.nextElementSibling.innerHTML="&#x2717;",v.nextElementSibling.style.color="red"):(e.textContent="",v.value.length>0?(v.setCustomValidity(""),v.nextElementSibling.innerHTML="&#10003;",v.nextElementSibling.style.color="green"):(v.nextElementSibling.innerHTML="&#x2717;",v.nextElementSibling.style.color="red"))}function w(){const e=document.getElementsByClassName("error")[2];f.value.length<+E.email[1]&&f.value.length>0?(e.textContent=`Email must be at least 8 characters. You are at ${f.value.length}.`,f.setCustomValidity("Too short."),f.nextElementSibling.innerHTML="&#x2717;",f.nextElementSibling.style.color="red"):!RegExp(E.email[0]).test(f.value)&&f.value.length>0?(e.textContent="Thats not an email bitch.(ex: youAre@gay.cum)",f.setCustomValidity("Not an email."),f.nextElementSibling.innerHTML="&#x2717;",f.nextElementSibling.style.color="red"):(e.textContent="",f.value.length>0?(f.setCustomValidity(""),f.nextElementSibling.innerHTML="&#10003;",f.nextElementSibling.style.color="green"):(f.nextElementSibling.innerHTML="&#x2717;",f.nextElementSibling.style.color="red"))}function T(){const e=document.getElementsByClassName("error")[3];h.value.length<+E.password[1]&&h.value.length>0?(e.textContent=`Your password must be at least 8 characters and 32 at most. You are at ${h.value.length}.`,h.setCustomValidity("Password too short."),h.nextElementSibling.innerHTML="&#x2717;",h.nextElementSibling.style.color="red"):h.value.length>32?(e.textContent=`Your password must be at least 8 characters and 32 at most. You are at ${h.value.length}.`,h.setCustomValidity("Password too long."),h.nextElementSibling.innerHTML="&#x2717;",h.nextElementSibling.style.color="red"):!RegExp(E.password[0]).test(h.value)&&h.value.length>0?(e.textContent="Your password must have at least 1 letter, 1 number and 1 special character. ",h.setCustomValidity("Invalid Input."),h.nextElementSibling.innerHTML="&#x2717;",h.nextElementSibling.style.color="red"):(e.textContent="",h.value.length>0?(h.setCustomValidity(""),h.nextElementSibling.innerHTML="&#10003;",h.nextElementSibling.style.color="green"):(h.nextElementSibling.innerHTML="&#x2717;",h.nextElementSibling.style.color="red")),L()}function L(){const e=document.getElementsByClassName("error")[4];y.value!==h.value&&y.value.length>0?(e.textContent="Passwords do not match!",y.setCustomValidity("Passwords do not match."),y.nextElementSibling.innerHTML="&#x2717;",y.nextElementSibling.style.color="red"):y.value.length>=8?(y.setCustomValidity(""),y.nextElementSibling.innerHTML="&#10003;",y.nextElementSibling.style.color="green",e.textContent=""):(y.nextElementSibling.innerHTML="&#x2717;",y.nextElementSibling.style.color="red",e.textContent="")}x.addEventListener("input",S),v.addEventListener("input",C),f.addEventListener("input",w),h.addEventListener("input",T),y.addEventListener("input",L),window.onload=()=>{S(),C(),w(),T(),L()},b.addEventListener("click",(()=>{document.querySelector("form").reset(),S(),C(),w(),T(),L()}))})()})();
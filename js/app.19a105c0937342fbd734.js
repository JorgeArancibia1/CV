!function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://JorgeArancibia1.github.io/CV/",a(a.s=7)}([function(e,t,a){e.exports=a(2)(0)},function(e){e.exports=JSON.parse('{"info":[{"id":1,"icon":"fas fa-user","title":"DATOS PERSONALES","items":[{"item":"Fecha de nacimiento:","content":"15/02/1995"},{"item":"Estado Civil:","content":"Soltero."},{"item":"Nacionlidad:","content":"Chilena."}]},{"id":2,"icon":"fas fa-phone-alt","title":"CONTACTO","items":[{"item":"Comuna:","content":"Puente Alto."},{"item":"Celular:","content":"(+56)9 356 439 91"},{"item":"Correo:","content":"jorge.arancibia.jeal@gmail.com"}]},{"id":3,"icon":"fas fa-award","title":"HABILIDADES","items":[{"item":"Dominio de Inglés:","content":"Básico."},{"item":"Lenguajes:","content":"HTML, CSS, Bootstrap, JavaScript, React.js, Java SE, GIT, My SQL."},{"item":"Sistemas:","content":"Mac y Linux(Debian)."}]},{"id":4,"icon":"fas fa-child","title":"PRESENTACIÓN","items":[{"content":"Software developer, Ingeniero en mecánica automotriz y actualmente estudiante de la carrera Analista programador de INACAP. Capacitado para trabajar como desarrollador web, con aspiración a perfeccionar mis conocimientos principalmente en el área frontend. Me considero un apasionado por la programación y busco oportunidades para seguir creciendo en el área."}]},{"id":5,"icon":"fas fa-university","title":"ESTUDIOS PROFESIONALES","items":[{"item":"2019","content":"Centro de formación técnica INACAP - Analista programador."},{"item":"2014-2017","content":"Instituto profesional DUOC UC - Ingeniero en mecánica automotriz."}]},{"id":6,"icon":"fas fa-briefcase","title":"EXPERIENCIA LABORAL","items":[{"item":"2019","content":"Pasante - Sáltala by HC Partners."},{"item":"","content":"Mi labor consistía en el desarrollo de una página web con React.js para la empresa junto a un equipo de personas."}]},{"id":7,"icon":"fas fa-paperclip","title":"CERTIFICACIONES","items":[{"item":"2019","content":"Curso de Webpack"},{"item":"2019","content":"Curso de React Router"},{"item":"2019","content":"Curso de React.JS"},{"item":"2019","content":"Curso de SQL y MySQL"},{"item":"2019","content":"Curso de animaciones para la web"},{"item":"2019","content":"Curso de Bootstrap"},{"item":"2019","content":"Curso de Responsive Design"},{"item":"2019","content":"Curso de CSS Grid Layout"},{"item":"2019","content":"Curso de JQuery a JavaScript"},{"item":"2019","content":"Curso de Programación funcional en JavaScript"},{"item":"2019","content":"Curso de HTML y CSS"},{"item":"2019","content":"Curso de Fundamentos de JavaScript"},{"item":"2018","content":"Curso profesional de Git y Github"},{"item":"2018","content":"Curso de desarrollo Web online"},{"item":"2018","content":"Curso de Fundamentos de Bases de Datos"},{"item":"2018","content":"Curso de Algoritmos con C"},{"item":"2018","content":"Curso de Java Avanzado SE"},{"item":"2018","content":"Curso Básico de Java SE"},{"item":"2018","content":"Fundamentos de Ingeniería de software"},{"item":"2018","content":"Curso de redes de internet"},{"item":"2018","content":"Introducción a Terminal y línea de comandos"},{"item":"2018","content":"Curso gratis de programación Básica"},{"item":"2018","content":"Curso de Fundamentos de Electricidad y Electrónica"}]}]}')},function(e,t){e.exports=modules},function(e,t,a){e.exports=a(2)(4)},function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),c=a.n(r),i=(a(5),a.p,function(){return o.a.createElement("section",{className:"container-fluid m-auto p-0"},o.a.createElement("div",{className:"row pt-3 pb-2 mx-auto"},o.a.createElement("div",{className:"avatar d-inline-block rounded-circle mx-auto shadow"})))}),l=function(){return o.a.createElement("section",{className:"container-fluid m-auto p-0"},o.a.createElement(i,null),o.a.createElement("h1",{className:"text-center"},"Jorge Eduardo ",o.a.createElement("p",null," Arancibia Leiva")))},m=function(e){return o.a.createElement("article",{className:"mt-3"},o.a.createElement("section",{className:"d-flex"},o.a.createElement("span",{className:"ml-4 pl-2"},o.a.createElement("i",{className:e.icon})),o.a.createElement("h5",{className:"ml-4 font-weight-bold"},e.title)),o.a.createElement("section",{className:"overflow-hidden"},e.items.map((function(e,t){return o.a.createElement("dl",{className:"d-flex ml-3 pl-2 mt-3 row",key:t},o.a.createElement("dt",null,e.item),o.a.createElement("dd",{className:"text-justify col-11 pl-2 pr-3"},e.content))}))),!e.hidden&&o.a.createElement("div",{className:"line mx-auto my-4"}))},s=function(e){return o.a.createElement("div",{className:"mt-5"},o.a.createElement(m,e.data.info[0]))},u=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,e.data.info[3]))},d=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,e.data.info[4]))},f=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,e.data.info[1]))},p=a(4),E=a.n(p),C=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,E()({},e.data.info[2],{hidden:!0})))},x=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,e.data.info[5]))},N=function(e){return o.a.createElement("article",{className:"d-flex flex-wrap"},o.a.createElement("section",{className:"d-flex flex-wrap"},o.a.createElement("span",{className:"ml-4 pl-2"},o.a.createElement("i",{className:e.icon})),e.space?o.a.createElement("h5",{className:"ml-4 mt-4"},e.title):o.a.createElement("h5",{className:"ml-4 font-weight-bold"},e.title)),o.a.createElement("section",{className:"flex-wrap d-flex min articleBox mt-4"},e.items.map((function(e,t){return o.a.createElement("dl",{className:"d-flex ml-3 pl-2 mt-3 row box",key:t},o.a.createElement("dt",null,e.item),o.a.createElement("dd",{className:"col-11 pl-2 pr-3"},e.content))}))))},g=function(e){return o.a.createElement("div",{className:"d-flex flex-sm-nowrap flex-md-nowrap flex-lg-nowrap certificationBox"},o.a.createElement(N,e.data.info[6]))},S=a(1),b=function(){return o.a.createElement("div",{className:"container-fluid d-flex flex-wrap p-0"},o.a.createElement("section",{className:"mx-auto px-0 col-12 col-sm-12 col-md col-lG col-xl"},o.a.createElement(l,null),o.a.createElement(s,{data:S}),o.a.createElement(f,{data:S}),o.a.createElement(C,{data:S})),o.a.createElement("section",{className:"mx-0 px-0 col-12 col-sm-12 col-md col-lg col-xl"},o.a.createElement(u,{data:S}),o.a.createElement(d,{data:S}),o.a.createElement(x,{data:S}),o.a.createElement(g,{data:S})))};a(6);c.a.render(o.a.createElement(b,null),document.getElementById("app"))}]);
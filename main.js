!function(){"use strict";var e,r={20752:function(e,r,t){t(28594),t(35666);var n=t(73935),a=t(39704),o=t(30797),c=t(97779),i=t(78947),u=t(51436);i.vI.add(u.kwI,u.Y9i,u.g$q,u.KtF,u.r6l,u.wn1,u.LM3,u.$aW);var s=t(67294),l=t(43433),f=t(69209),d=t(67814),p=t(70885),v=t(45697),h=t.n(v),x=t(85893);function y(e){var r=e.dataImport,t=(0,s.useRef)(),n=(0,s.useCallback)((function(){t.current&&t.current.click()}),[t]),a=(0,s.useCallback)((function(e){var t=(0,p.Z)(e.target.files,1)[0],n=new FileReader;n.onloadend=function(e){var t=e.target.result,n=JSON.parse(t);n&&r(n)},n.readAsText(t)}),[r]);return(0,x.jsxs)(s.Fragment,{children:[(0,x.jsx)("input",{type:"file",ref:t,onChange:a,className:"d-none"}),(0,x.jsxs)(f.Z.Link,{onClick:n,children:[(0,x.jsx)(d.G,{icon:"file-download",fixedWidth:!0})," Import..."]})]})}y.propTypes={dataImport:h().func.isRequired};var j=t(42982),b=t(4942);function m(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return O(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==t.return||t.return()}finally{if(i)throw o}}}}function O(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var w=t(62748);function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function A(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){(0,b.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var k=function(e,r){var t,n={},a=m(r);try{for(a.s();!(t=a.n()).done;){var o=t.value;n[o]="".concat(e,"/").concat(o)}}catch(e){a.e(e)}finally{a.f()}return n}("application",["APP_INIT","DATA_CLEAR","DATA_EXPORT","DATA_IMPORT","DATA_LOAD","DATA_SAVE","ROW_ADD","ROW_REMOVE","ROW_REORDER","ROW_UPDATE"]),D=function(){return{type:k.APP_INIT}},I=function(){return{type:k.DATA_CLEAR}},C=function(){return{type:k.DATA_EXPORT}},E=function(e){return{type:k.DATA_IMPORT,data:e}},_=function(){return{type:k.DATA_LOAD}},R=function(){return{type:k.DATA_SAVE}},S=function(e){return{type:k.ROW_ADD,row:e}},T=function(e){return{type:k.ROW_REMOVE,id:e}},P=function(e){var r=e.oldIndex,t=e.newIndex;return{type:k.ROW_REORDER,newIndex:t,oldIndex:r}},Z=function(e,r,t){return{type:k.ROW_UPDATE,id:e,field:r,value:t}},W={data:[]};function N(){var e=(0,a.I0)();return(0,x.jsxs)(l.Z,{bg:"primary",variant:"dark",expand:"lg",children:[(0,x.jsx)(l.Z.Brand,{className:"mx-4",children:"Noted Notes"}),(0,x.jsx)(l.Z.Toggle,{}),(0,x.jsx)(l.Z.Collapse,{children:(0,x.jsxs)(f.Z,{children:[(0,x.jsxs)(f.Z.Link,{onClick:function(){return e(_())},children:[(0,x.jsx)(d.G,{icon:"spinner",fixedWidth:!0})," Load"]}),(0,x.jsxs)(f.Z.Link,{onClick:function(){return e(R())},children:[(0,x.jsx)(d.G,{icon:"save",fixedWidth:!0})," Save"]}),(0,x.jsx)(y,{dataImport:function(r){return e(E(r))}}),(0,x.jsxs)(f.Z.Link,{onClick:function(){return e(C())},children:[(0,x.jsx)(d.G,{icon:"file-download",fixedWidth:!0})," Export"]}),(0,x.jsxs)(f.Z.Link,{onClick:function(){return e(I())},children:[(0,x.jsx)(d.G,{icon:"trash",fixedWidth:!0})," Clear"]})]})})]})}var L=t(75147),M=t(95742),U=t(47480),q=t(77104),F=t(17833);function G(){var e=(0,a.I0)(),r=(0,s.useState)(""),t=(0,p.Z)(r,2),n=t[0],o=t[1],c=(0,s.useState)(""),i=(0,p.Z)(c,2),u=i[0],l=i[1],f=(0,s.useCallback)((function(){e(S({flavor:n,id:(0,U.x0)(),notes:u})),o(""),l("")}),[e,n,u,o,l]),v=(0,s.useCallback)((function(e){var r=e.target.value;return o(r)}),[o]),h=(0,s.useCallback)((function(e){var r=e.target.value;return l(r)}),[l]);return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{}),(0,x.jsx)("td",{className:"text-center",children:(0,x.jsx)(q.Z,{variant:"success",onClick:f,children:(0,x.jsx)(d.G,{icon:"plus-circle"})})}),(0,x.jsx)("td",{children:(0,x.jsx)(F.Z.Control,{type:"text",value:n,onChange:v})}),(0,x.jsx)("td",{children:(0,x.jsx)(F.Z.Control,{as:"textarea",value:u,onChange:h,rows:1})})]})}var V=t(34051),z=t(31555);function $(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return J(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return J(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==t.return||t.return()}finally{if(i)throw o}}}}function J(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var X=(0,M.W6)((function(){return(0,x.jsx)(d.G,{icon:"grip-vertical",className:"nn-note-row-handle"})})),Y=["https://www.bullcityflavors.com/search.php?section=product&search_query=","https://flavorjungle.com/pages/search-results-page?q=","https://www.diyvaporsupply.com/search.php?section=product&search_query=","https://www.chefsflavours.co.uk/search?type=product,page,collection&q=","https://nomnomz.co.uk/?product_cat=&post_type=product&s="];function B(e){var r=e.flavor,t=e.id,n=e.notes,o=e.ordinal,c=(0,a.I0)(),i=(0,s.useCallback)((function(e){var r=e.target.value;return c(Z(t,"flavor",r))}),[c,t]),u=(0,s.useCallback)((function(e){var r=e.target.value;return c(Z(t,"notes",r))}),[c,t]),l=(0,s.useCallback)((function(e){var r=e.target.value;if(!parseInt(r,10))return e.preventDefault();c(P({oldIndex:o-1,newIndex:parseInt(r,10)-1}))}),[c,o]),f=(0,s.useCallback)((function(e){return e.target.select()}),[]),p=(0,s.useCallback)((function(){if(r){var e,t=$(Y);try{for(t.s();!(e=t.n()).done;){var n=e.value;window.open("".concat(n).concat(encodeURIComponent(r)))}}catch(e){t.e(e)}finally{t.f()}}}),[r]),v=(0,s.useCallback)((function(){return c(T(t))}),[c,t]);return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:(0,x.jsxs)(V.Z,{className:"g-0",children:[(0,x.jsx)(z.Z,{children:(0,x.jsx)(X,{})}),(0,x.jsx)(z.Z,{children:(0,x.jsx)(F.Z.Control,{className:"nn-note-row-ordinal",onChange:l,onFocus:f,plaintext:!0,type:"text",value:o})})]})}),(0,x.jsxs)("td",{className:"text-center",children:[(0,x.jsx)(q.Z,{onClick:v,title:"Remove",variant:"danger",children:(0,x.jsx)(d.G,{icon:"trash",size:"xs"})})," ",(0,x.jsx)(q.Z,{onClick:function(){return p(r)},title:"Search",variant:"primary",children:(0,x.jsx)(d.G,{icon:"search",size:"xs"})})]}),(0,x.jsx)("td",{children:(0,x.jsx)(F.Z.Control,{onChange:i,type:"text",value:r})}),(0,x.jsx)("td",{children:(0,x.jsx)(F.Z.Control,{as:"textarea",onChange:u,rows:1,value:n})})]})}B.propTypes={flavor:h().string,id:h().string.isRequired,notes:h().string,ordinal:h().number.isRequired};var H=t(20573),K=(0,H.P1)((function(e){return e.application}),(function(e){return e.data}));function Q(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ee(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Q(Object(t),!0).forEach((function(r){(0,b.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var re=(0,M.W8)((function(e){return(0,x.jsx)(B,ee({},e))})),te=(0,M.JN)((function(e){var r=e.rows;return(0,x.jsx)("tbody",{children:r.map((function(e,r){return(0,s.createElement)(re,ee(ee({},e),{},{index:r,key:e.id,ordinal:r+1}))}))})}));function ne(){var e=(0,a.I0)(),r=(0,a.v9)(K),t=(0,s.useCallback)((function(r){var t=r.oldIndex,n=r.newIndex;return e(P({oldIndex:t,newIndex:n}))}),[e]);return(0,x.jsxs)(L.Z,{className:"nn-note-table",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{className:"text-end",children:"Order"}),(0,x.jsx)("th",{className:"text-center",children:"Action"}),(0,x.jsx)("th",{children:"Flavor name"}),(0,x.jsx)("th",{children:"Notes"})]})}),(0,x.jsx)(te,{hideSortableGhost:!0,onSortEnd:t,rows:r,useDragHandle:!0}),(0,x.jsx)("tfoot",{children:(0,x.jsx)(G,{})})]})}function ae(){var e=(0,a.I0)();return(0,s.useEffect)((function(){e(D())}),[e]),(0,x.jsxs)(s.Fragment,{children:[(0,x.jsx)(N,{}),(0,x.jsx)(ne,{})]})}var oe=t(87757),ce=t.n(oe),ie=t(34857),ue=t(35823),se=t.n(ue);function le(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return fe(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return fe(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==t.return||t.return()}finally{if(i)throw o}}}}function fe(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var de=ce().mark(me),pe=ce().mark(Oe),ve=ce().mark(we),he=ce().mark(ge),xe=ce().mark(Ae),ye=ce().mark(ke),je=ce().mark(Ie),be=function(){var e=JSON.parse(localStorage.getItem("appData"));if(e&&Array.isArray(e))return e};function me(){var e;return ce().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,ie.Ys)(K);case 2:e=r.sent,se()(JSON.stringify(e),"export.json");case 4:case"end":return r.stop()}}),de)}function Oe(){var e,r,t,n,a;return ce().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e=be(),o.next=3,(0,ie.Ys)(K);case 3:if(r=o.sent,e&&(!r||!r.length||confirm("Are you SURE you want to replace the current data?"))){o.next=6;break}return o.abrupt("return");case 6:return o.next=8,(0,ie.gz)(I());case 8:t=le(e),o.prev=9,t.s();case 11:if((n=t.n()).done){o.next=17;break}return a=n.value,o.next=15,(0,ie.gz)(S(a));case 15:o.next=11;break;case 17:o.next=22;break;case 19:o.prev=19,o.t0=o.catch(9),t.e(o.t0);case 22:return o.prev=22,t.f(),o.finish(22);case 25:case"end":return o.stop()}}),pe,null,[[9,19,22,25]])}function we(){var e,r,t;return ce().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,ie.Ys)(K);case 2:if(e=n.sent,r=be(),e&&(!r||confirm("Are you SURE you want to overwrite currently saved data?"))){n.next=6;break}return n.abrupt("return");case 6:t=JSON.stringify(e),localStorage.setItem("appData",t);case 8:case"end":return n.stop()}}),ve)}function ge(){return ce().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,ie.Fm)(k.DATA_EXPORT,me);case 2:case"end":return e.stop()}}),he)}function Ae(){return ce().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,ie.Fm)(k.DATA_LOAD,Oe);case 2:case"end":return e.stop()}}),xe)}function ke(){return ce().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,ie.Fm)(k.DATA_SAVE,we);case 2:case"end":return e.stop()}}),ye)}var De={exportDataWatcher:ge,loadDataWatcher:Ae,saveDataWatcher:ke};function Ie(){return ce().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,ie.$6)(Object.values(De).map((function(e){return e()})));case 2:case"end":return e.stop()}}),je)}var Ce=ce().mark(Ee);function Ee(){return ce().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,ie.rM)(Ie);case 2:case"end":return e.stop()}}),Ce)}var _e=(0,c.UY)({application:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(r.type){case k.DATA_CLEAR:return A(A({},e),{},{data:[]});case k.DATA_IMPORT:return A(A({},e),{},{data:r.data});case k.ROW_ADD:return A(A({},e),{},{data:[].concat((0,j.Z)(e.data),[r.row])});case k.ROW_REMOVE:return A(A({},e),{},{data:e.data.filter((function(e){return e.id!==r.id}))});case k.ROW_REORDER:return A(A({},e),{},{data:(0,w.q)(e.data,r.oldIndex,r.newIndex)});case k.ROW_UPDATE:return A(A({},e),{},{data:e.data.map((function(e){return e.id!==r.id?e:A(A({},e),{},(0,b.Z)({},r.field,r.value))}))});default:return e}}}),Re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.qC,Se=(0,o.ZP)(),Te=Re((0,c.md)(Se)),Pe=(0,c.MT)(_e,{},Te);Se.run(Ee),n.render((0,x.jsx)(a.zt,{store:Pe,children:(0,x.jsx)(ae,{})}),document.getElementById("root"))}},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var o=t[e]={exports:{}};return r[e](o,o.exports,n),o.exports}n.m=r,e=[],n.O=function(r,t,a,o){if(!t){var c=1/0;for(l=0;l<e.length;l++){t=e[l][0],a=e[l][1],o=e[l][2];for(var i=!0,u=0;u<t.length;u++)(!1&o||c>=o)&&Object.keys(n.O).every((function(e){return n.O[e](t[u])}))?t.splice(u--,1):(i=!1,o<c&&(c=o));if(i){e.splice(l--,1);var s=a();void 0!==s&&(r=s)}}return r}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[t,a,o]},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,{a:r}),r},n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={179:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var a,o,c=t[0],i=t[1],u=t[2],s=0;if(c.some((function(r){return 0!==e[r]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(u)var l=u(n)}for(r&&r(t);s<c.length;s++)o=c[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},t=self.webpackChunknoted_notes=self.webpackChunknoted_notes||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var a=n.O(void 0,[270,736],(function(){return n(20752)}));a=n.O(a)}();
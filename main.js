!function(e){function t(t){for(var a,i,c=t[0],l=t[1],u=t[2],s=0,p=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(d&&d(t);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={0:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;o.push([480,2,1]),n()}({466:function(e,t,n){},476:function(e,t,n){},477:function(e,t,n){},478:function(e,t,n){},480:function(e,t,n){"use strict";n.r(t);n(230),n(204);var a=n(0),r=n.n(a),o=n(56),i=n.n(o),c=n(68),l=n(228),u=n(229),d=n(28),s=n(98),p=n(70);s.b.add(p.a,p.b,p.c,p.d,p.e,p.f,p.g);n(466);var f=n(44),h=n.n(f),v=n(45),m=n.n(v),E=n(46),O=n.n(E),b=n(47),y=n.n(b),R=n(48),g=n.n(R),C=n(29),w=n.n(C),A=n(2),k=n.n(A),x=n(486),j=n(487),D=n(49),_=n(209),I=n.n(_),T=n(34),S=n.n(T),P=function(e){function t(e){var n;return h()(this,t),(n=O()(this,y()(t).call(this,e))).importRef=r.a.createRef(),n.handleImportClick=n.handleImportClick.bind(S()(n)),n.handleImportChange=n.handleImportChange.bind(S()(n)),n}return g()(t,e),m()(t,[{key:"handleImportClick",value:function(){this.importRef.current&&this.importRef.current.click()}},{key:"handleImportChange",value:function(e){var t=this.props.dataImport,n=I()(e.target.files,1)[0],a=new FileReader;a.onloadend=function(e){var n=e.target.result,a=JSON.parse(n);a&&t(a)},a.readAsText(n)}},{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("input",{type:"file",ref:this.importRef,onChange:this.handleImportChange,className:"d-none"}),r.a.createElement(j.a.Link,{onClick:this.handleImportClick},r.a.createElement(D.a,{icon:"file-download",fixedWidth:!0})," Import..."))}}]),t}(a.Component);w()(P,"propTypes",{dataImport:k.a.func.isRequired});var N=n(215),q=n.n(N);var W=n(216),L=n.n(W);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e,t){var n={},a=!0,r=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var l=i.value;n[l]="".concat(e,"/").concat(l)}}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}("application",["APP_INIT","DATA_CLEAR","DATA_EXPORT","DATA_IMPORT","DATA_LOAD","DATA_SAVE","ROW_ADD","ROW_REMOVE","ROW_REORDER","ROW_UPDATE"]),V={appInit:function(){return{type:U.APP_INIT}},dataClear:function(){return{type:U.DATA_CLEAR}},dataExport:function(){return{type:U.DATA_EXPORT}},dataImport:function(e){return{type:U.DATA_IMPORT,data:e}},dataLoad:function(){return{type:U.DATA_LOAD}},dataSave:function(){return{type:U.DATA_SAVE}},rowAdd:function(e){return{type:U.ROW_ADD,row:e}},rowRemove:function(e){return{type:U.ROW_REMOVE,id:e}},rowReorder:function(e){var t=e.oldIndex,n=e.newIndex;return{type:U.ROW_REORDER,newIndex:n,oldIndex:t}},rowUpdate:function(e,t,n){return{type:U.ROW_UPDATE,id:e,field:t,value:n}}},J={data:[]},X=function(e){function t(){return h()(this,t),O()(this,y()(t).apply(this,arguments))}return g()(t,e),m()(t,[{key:"render",value:function(){var e=this.props.actions;return r.a.createElement(x.a,null,r.a.createElement(x.a.Brand,null,"Noted Notes"),r.a.createElement(x.a.Collapse,null,r.a.createElement(j.a,null,r.a.createElement(j.a.Link,{onClick:e.dataLoad},r.a.createElement(D.a,{icon:"spinner",fixedWidth:!0})," Load"),r.a.createElement(j.a.Link,{onClick:e.dataSave},r.a.createElement(D.a,{icon:"save",fixedWidth:!0})," Save"),r.a.createElement(P,{dataImport:e.dataImport}),r.a.createElement(j.a.Link,{onClick:e.dataExport},r.a.createElement(D.a,{icon:"file-download",fixedWidth:!0})," Export"),r.a.createElement(j.a.Link,{onClick:e.dataClear},r.a.createElement(D.a,{icon:"trash",fixedWidth:!0})," Clear"))))}}]),t}(a.Component);w()(X,"propTypes",{actions:k.a.shape({dataClear:k.a.func.isRequired,dataExport:k.a.func.isRequired,dataImport:k.a.func.isRequired,dataLoad:k.a.func.isRequired,dataSave:k.a.func.isRequired}).isRequired});var B=Object(c.b)(null,(function(e){return{actions:Object(d.b)(V,e)}}))(X),G=n(220),z=n.n(G),H=n(484),K=n(99),Q=(n(476),n(221)),Y=n.n(Q),Z=n(482),$=n(485),ee=(n(477),function(e){function t(e){var n;return h()(this,t),(n=O()(this,y()(t).call(this,e))).handleAddClick=n.handleAddClick.bind(S()(n)),n.handleFlavorChange=n.handleFlavorChange.bind(S()(n)),n.handleNotesChange=n.handleNotesChange.bind(S()(n)),n.state={flavor:"",notes:""},n}return g()(t,e),m()(t,[{key:"handleAddClick",value:function(){var e=this.state,t=e.flavor,n=e.notes;(0,this.props.onAdd)({flavor:t,id:Y()(),notes:n}),this.setState({flavor:"",notes:""})}},{key:"handleFlavorChange",value:function(e){var t=e.target.value;this.setState({flavor:t})}},{key:"handleNotesChange",value:function(e){var t=e.target.value;this.setState({notes:t})}},{key:"render",value:function(){var e=this.state,t=e.flavor,n=e.notes;return r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",{className:"nn-add-row-actions"},r.a.createElement(Z.a,{variant:"success",onClick:this.handleAddClick},r.a.createElement(D.a,{icon:"plus-circle"}))),r.a.createElement("td",null,r.a.createElement($.a.Control,{type:"text",value:t,onChange:this.handleFlavorChange})),r.a.createElement("td",null,r.a.createElement($.a.Control,{type:"text",value:n,onChange:this.handleNotesChange})))}}]),t}(a.Component));w()(ee,"propTypes",{onAdd:k.a.func.isRequired});var te=n(483),ne=n(222),ae=(n(478),Object(K.c)((function(){return r.a.createElement(D.a,{icon:"grip-vertical",className:"nn-note-row-handle"})}))),re=function(e){function t(e){var n;return h()(this,t),(n=O()(this,y()(t).call(this,e))).handleFlavorChange=n.handleFlavorChange.bind(S()(n)),n.handleNotesChange=n.handleNotesChange.bind(S()(n)),n.handleOrdinalChange=n.handleOrdinalChange.bind(S()(n)),n.handleRemoveClick=n.handleRemoveClick.bind(S()(n)),n}return g()(t,e),m()(t,[{key:"handleFlavorChange",value:function(e){var t=this.props,n=t.id;(0,t.onChange)(n,"flavor",e.target.value)}},{key:"handleNotesChange",value:function(e){var t=this.props,n=t.id;(0,t.onChange)(n,"notes",e.target.value)}},{key:"handleOrdinalChange",value:function(e){var t=this.props,n=t.id,a=t.onReorder,r=e.target.value;if(!Number.parseInt(r,10))return e.preventDefault();a(n,r)}},{key:"handleOrdinalFocus",value:function(e){e.target.select()}},{key:"handleRemoveClick",value:function(){var e=this.props,t=e.id;(0,e.onRemove)(t)}},{key:"render",value:function(){var e=this.props,t=e.flavor,n=e.notes,a=e.ordinal;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(te.a,{noGutters:!0},r.a.createElement(ne.a,null,r.a.createElement(ae,null)),r.a.createElement(ne.a,null,r.a.createElement($.a.Control,{className:"nn-note-row-ordinal",onFocus:this.handleOrdinalFocus,onChange:this.handleOrdinalChange,plaintext:!0,type:"text",value:a})))),r.a.createElement("td",{className:"nn-note-row-actions"},r.a.createElement(Z.a,{size:"sm",variant:"danger",onClick:this.handleRemoveClick},r.a.createElement(D.a,{icon:"trash"}))),r.a.createElement("td",null,r.a.createElement($.a.Control,{onChange:this.handleFlavorChange,type:"text",value:t})),r.a.createElement("td",null,r.a.createElement($.a.Control,{onChange:this.handleNotesChange,type:"text",value:n})))}}]),t}(a.Component);w()(re,"propTypes",{flavor:k.a.string,id:k.a.string.isRequired,notes:k.a.string,onChange:k.a.func.isRequired,onRemove:k.a.func.isRequired,onReorder:k.a.func.isRequired,ordinal:k.a.number.isRequired});var oe=n(223),ie=function(){return"appData"},ce=Object(oe.a)((function(e){return e.application}),(function(e){return e.data})),le=Object(K.b)((function(e){return r.a.createElement(re,e)})),ue=Object(K.a)((function(e){var t=e.rows,n=e.onChange,a=e.onRemove,o=e.onReorder;return r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement(le,z()({},e,{index:t,key:e.id,onChange:n,onRemove:a,onReorder:o,ordinal:t+1}))})))})),de=function(e){function t(e){var n;return h()(this,t),(n=O()(this,y()(t).call(this,e))).handleReorder=n.handleReorder.bind(S()(n)),n}return g()(t,e),m()(t,[{key:"handleReorder",value:function(e,t){var n=this.props,a=n.actions,r=n.data.findIndex((function(t){return t.id===e}));a.rowReorder({oldIndex:r,newIndex:t})}},{key:"render",value:function(){var e=this.props,t=e.actions,n=e.data;return r.a.createElement(H.a,{className:"nn-note-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Order"),r.a.createElement("th",null,"Action"),r.a.createElement("th",null,"Flavor name"),r.a.createElement("th",null,"Notes"))),r.a.createElement(ue,{hideSortableGhost:!0,onChange:t.rowUpdate,onRemove:t.rowRemove,onReorder:this.handleReorder,onSortEnd:t.rowReorder,rows:n,useDragHandle:!0}),r.a.createElement("tfoot",null,r.a.createElement(ee,{onAdd:t.rowAdd})))}}]),t}(a.Component);w()(de,"propTypes",{actions:k.a.shape({rowAdd:k.a.func.isRequired,rowRemove:k.a.func.isRequired,rowReorder:k.a.func.isRequired,rowUpdate:k.a.func.isRequired}).isRequired,data:k.a.arrayOf(k.a.object).isRequired}),w()(de,"defaultProps",{data:[]});var se=Object(c.b)((function(e){return{data:ce(e)}}),(function(e){return{actions:Object(d.b)(V,e)}}))(de),pe=function(e){function t(){return h()(this,t),O()(this,y()(t).apply(this,arguments))}return g()(t,e),m()(t,[{key:"componentDidMount",value:function(){this.props.actions.appInit()}},{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(B,null),r.a.createElement(se,null))}}]),t}(a.Component);w()(pe,"propTypes",{actions:k.a.shape({appInit:k.a.func.isRequired}).isRequired});var fe=Object(c.b)(null,(function(e){return{actions:Object(d.b)(V,e)}}))(pe),he=n(24),ve=n.n(he),me=n(51),Ee=n(224),Oe=n.n(Ee),be=ve.a.mark(xe),ye=ve.a.mark(je),Re=ve.a.mark(De),ge=ve.a.mark(_e),Ce=ve.a.mark(Ie),we=ve.a.mark(Te),Ae=ve.a.mark(Pe),ke=function(){var e=JSON.parse(localStorage.getItem(ie()));if(e&&Array.isArray(e))return e};function xe(){var e;return ve.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(me.d)(ce);case 2:e=t.sent,Oe()(JSON.stringify(e),"export.json");case 4:case"end":return t.stop()}}),be)}function je(){var e,t,n,a,r,o,i,c;return ve.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return e=ke(),l.next=3,Object(me.d)(ce);case 3:if(t=l.sent,e&&(!t||!t.length||confirm("Are you SURE you want to replace the current data?"))){l.next=6;break}return l.abrupt("return");case 6:return l.next=8,Object(me.c)(V.dataClear());case 8:n=!0,a=!1,r=void 0,l.prev=11,o=e[Symbol.iterator]();case 13:if(n=(i=o.next()).done){l.next=20;break}return c=i.value,l.next=17,Object(me.c)(V.rowAdd(c));case 17:n=!0,l.next=13;break;case 20:l.next=26;break;case 22:l.prev=22,l.t0=l.catch(11),a=!0,r=l.t0;case 26:l.prev=26,l.prev=27,n||null==o.return||o.return();case 29:if(l.prev=29,!a){l.next=32;break}throw r;case 32:return l.finish(29);case 33:return l.finish(26);case 34:case"end":return l.stop()}}),ye,null,[[11,22,26,34],[27,,29,33]])}function De(){var e,t,n;return ve.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(me.d)(ce);case 2:if(e=a.sent,t=ke(),e&&(!t||confirm("Are you SURE you want to overwrite currently saved data?"))){a.next=6;break}return a.abrupt("return");case 6:n=JSON.stringify(e),localStorage.setItem(ie(),n);case 8:case"end":return a.stop()}}),Re)}function _e(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.e)(U.DATA_EXPORT,xe);case 2:case"end":return e.stop()}}),ge)}function Ie(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.e)(U.DATA_LOAD,je);case 2:case"end":return e.stop()}}),Ce)}function Te(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.e)(U.DATA_SAVE,De);case 2:case"end":return e.stop()}}),we)}var Se={exportDataWatcher:_e,loadDataWatcher:Ie,saveDataWatcher:Te};function Pe(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.a)(Object.values(Se).map((function(e){return e()})));case 2:case"end":return e.stop()}}),Ae)}var Ne=ve.a.mark(qe);function qe(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.b)(Pe);case 2:case"end":return e.stop()}}),Ne)}var We=Object(d.c)({application:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case U.DATA_CLEAR:return M({},e,{data:[]});case U.DATA_IMPORT:return M({},e,{data:t.data});case U.ROW_ADD:return M({},e,{data:[].concat(q()(e.data),[t.row])});case U.ROW_REMOVE:return M({},e,{data:e.data.filter((function(e){return e.id!==t.id}))});case U.ROW_REORDER:return M({},e,{data:L()(e.data,t.oldIndex,t.newIndex)});case U.ROW_UPDATE:return M({},e,{data:e.data.map((function(e){return e.id!==t.id?e:M({},e,w()({},t.field,t.value))}))});default:return e}}});n.d(t,"store",(function(){return Ue}));var Le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,Fe=Object(l.a)(),Me=Le(Object(d.a)(Fe)),Ue=Object(d.e)(We,{},Me);Fe.run(qe),i.a.render(r.a.createElement(u.a,null,r.a.createElement(c.a,{store:Ue},r.a.createElement(fe,null))),document.getElementById("root"));t.default=fe}});
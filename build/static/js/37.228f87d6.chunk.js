"use strict";(self.webpackChunk_jifflenow_selfserve=self.webpackChunk_jifflenow_selfserve||[]).push([[37],{19397:function(e,t,r){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}function a(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}function c(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}r.d(t,{Z:function(){return u}});var u=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(r,e);var t=a(r);function r(){return o(this,r),t.apply(this,arguments)}return r}(r(30969).Component)},94198:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(30969),o=r(58409),i=r(88650),a=r(55483);function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(l){o=!0,i=l}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v(e);if(t){var o=v(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function h(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(h,e);var t,r,c,f=d(h);function h(){var e;b(this,h);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return g(m(e=f.call.apply(f,[this].concat(r))),"state",{isFocusVisible:!1}),g(m(e),"handleFocus",(function(t){(0,a.E)(t)&&e.setState({isFocusVisible:!0})})),g(m(e),"handleBlur",(function(t){!1!==e.state.isFocusVisible&&e.setState({isFocusVisible:!1})})),e}return t=h,(r=[{key:"render",value:function(){var e=this,t=this.props,r=t.overrides,c=void 0===r?{}:r,f=t.children,b=t.data,p=t.divider,y=t.horizontalScrollWidth,d=t.sortColumn,h=t.sortOrder,m=void 0===h?"ASC":h,v=t.onSort,g=t.isLoading,j=t.loadingMessage,w=t.emptyMessage,S=t.size,O=s(t,["overrides","children","data","divider","horizontalScrollWidth","sortColumn","sortOrder","onSort","isLoading","loadingMessage","emptyMessage","size"]),E=u((0,i.jb)(c.Root,o.Fp),2),$=E[0],C=E[1],_=u((0,i.jb)(c.Table,o.k6),2),T=_[0],k=_[1],P=u((0,i.jb)(c.TableHead,o.UT),2),R=P[0],x=P[1],A=u((0,i.jb)(c.TableHeadRow,o.Ht),2),I=A[0],F=A[1],M=u((0,i.jb)(c.TableHeadCell,o.EU),2),B=M[0],D=M[1],H=u((0,i.jb)(c.TableHeadCellSortable,o.ec),2),L=H[0],z=H[1],V=u((0,i.jb)(c.TableBody,o.JX),2),U=V[0],Z=V[1],K=u((0,i.jb)(c.TableBodyRow,o.bM),2),N=K[0],W=K[1],q=u((0,i.jb)(c.TableBodyCell,o.l5),2),J=q[0],X=q[1],G=u((0,i.jb)(c.TableLoadingMessage,o.b3),2),Q=G[0],Y=G[1],ee=u((0,i.jb)(c.TableEmptyMessage,o.lx),2),te=ee[0],re=ee[1],ne=u((0,i.jb)(c.SortAscIcon,o.lL),2),oe=ne[0],ie=ne[1],ae=u((0,i.jb)(c.SortDescIcon,o.qL),2),ce=ae[0],le=ae[1],ue=u((0,i.jb)(c.SortNoneIcon,o.Kh),2),fe=ue[0],se=ue[1],be=n.Children.toArray(f).filter(Boolean).map((function(e){return e.props})),pe=!g&&0===b.length,ye=!g&&!pe;return n.createElement($,l({"data-baseweb":"table-builder-semantic",$divider:p},C,O),n.createElement(T,l({$width:y},k,{onBlur:(0,a.Z5)(k,this.handleBlur),onFocus:(0,a.Ah)(k,this.handleFocus)}),n.createElement(R,x,n.createElement(I,F,be.map((function(t,r){return function(e,t,r){var o=e.overrides||{};if(!e.sortable){var a=u((0,i.jb)(o.TableHeadCell,B),2),c=a[0],f=a[1];return n.createElement(c,l({key:t,$col:e,$colIndex:t,$divider:p,$size:S},D,f),e.header)}var s=u((0,i.jb)(o.TableHeadCellSortable,L),2),b=s[0],y=s[1],h=null,g="not sorted";switch(e.id===d&&m){case"ASC":h=n.createElement(oe,l({"aria-hidden":!0,role:"presentation"},ie)),g="ascending sorting";break;case"DESC":h=n.createElement(ce,l({"aria-hidden":!0,role:"presentation"},le)),g="descending sorting";break;default:h=n.createElement(fe,l({"aria-hidden":!0,role:"presentation"},se))}return n.createElement(b,l({key:t,$col:e,$colIndex:t,$divider:p,role:"button",tabIndex:"0","aria-label":"".concat(e.tableHeadAriaLabel||e.header,", ").concat(g),$isFocusVisible:r,onClick:function(){return v&&v(e.id)},onKeyDown:function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),v&&v(e.id))}},z,y),e.header,h)}(t,r,e.state.isFocusVisible)})))),n.createElement(U,Z,g&&n.createElement("tr",null,n.createElement("td",{colSpan:be.length},n.createElement(Q,Y,"function"===typeof j?j():j))),pe&&w&&n.createElement("tr",null,n.createElement("td",{colSpan:be.length},n.createElement(te,re,"function"===typeof w?w():w))),ye&&b.map((function(e,t){return n.createElement(N,l({key:t,$divider:p,$row:e,$rowIndex:t},W),be.map((function(r,o){return function(e,t,r,o){var a=e.overrides||{},c=u((0,i.jb)(a.TableBodyCell,J),2),f=c[0],s=c[1];return n.createElement(f,l({key:t,$col:e,$colIndex:t,$divider:p,$row:r,$rowIndex:o,$isNumeric:e.numeric,$size:S},X,s),e.children(r,o))}(r,o,e,t)})))})))))}}])&&p(t.prototype,r),c&&p(t,c),h}(n.Component);g(j,"defaultProps",{data:[],loadingMessage:"Loading..."})}}]);
//# sourceMappingURL=37.228f87d6.chunk.js.map
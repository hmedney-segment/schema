(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[695],{1993:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events",function(){return t(6655)}])},6655:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return d},default:function(){return b}});var r=t(5893),o=t(3393),u=t(1163);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function l(e){var n=e.collectionName,t=e.events,l=i(e,["collectionName","events"]),s=(0,u.useRouter)();return(0,r.jsxs)(o.n9L,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}({},l,{children:[(0,r.jsx)("h4",{children:n}),(0,r.jsx)("ul",{children:t.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)(o.rUS,{href:"",onClick:(n="/events/".concat(e._slug),function(e){return e.preventDefault(),s.push(n),!1}),children:e.title})},e._slug);var n}))})]}))}var s=t(7294);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function f(e,n){return f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},f(e,n)}var p=function(e){var n,t;function r(){return e.apply(this,arguments)||this}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,f(n,t);var o=r.prototype;return o.getColumns=function(){var e=this.props,n=e.children,t=e.columnsCount,r=Array.from({length:t},(function(){return[]}));return s.Children.forEach(n,(function(e,n){e&&s.isValidElement(e)&&r[n%t].push(e)})),r},o.renderColumns=function(){var e=this.props.gutter;return this.getColumns().map((function(n,t){return s.createElement("div",{key:t,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:e}},n.map((function(e){return e})))}))},o.render=function(){var e=this.props,n=e.gutter,t=e.className,r=e.style;return s.createElement("div",{style:a({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:n},r),className:t},this.renderColumns())},r}(s.Component);p.propTypes={},p.defaultProps={columnsCount:3,gutter:"0",className:null,style:{}};var m=p,v=function(){var e=function(){var e=(0,s.useState)(!1),n=e[0],t=e[1];return(0,s.useEffect)((function(){t(!0)}),[]),n}(),n=(0,s.useState)(0),t=n[0],r=n[1],o=(0,s.useCallback)((function(){e&&r(window.innerWidth)}),[e]);return(0,s.useEffect)((function(){if(e)return window.addEventListener("resize",o),o(),function(){return window.removeEventListener("resize",o)}}),[e,o]),t},h=function(e){var n=e.columnsCountBreakPoints,t=e.children,r=e.className,o=e.style,u=v(),c=(0,s.useMemo)((function(){var e=Object.keys(n).sort((function(e,n){return e-n})),t=e.length>0?n[e[0]]:1;return e.forEach((function(e){e<u&&(t=n[e])})),t}),[u,n]);return s.createElement("div",{className:r,style:o},s.Children.map(t,(function(e,n){return s.cloneElement(e,{key:n,columnsCount:c})})))};h.propTypes={},h.defaultProps={columnsCountBreakPoints:{350:1,750:2,900:3},className:null,style:null};var y=m,d=!0;function b(e){var n=e.collections;return(0,r.jsx)("div",{children:(0,r.jsx)(y,{columnsCount:3,gutter:"5",children:n.map((function(e){var n=e.collectionName,t=e.events;return(0,r.jsx)(l,{collectionName:n,events:t,className:"m-3"},n)}))})})}}},function(e){e.O(0,[774,888,179],(function(){return n=1993,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
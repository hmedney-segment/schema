(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9943)}])},9943:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return p},default:function(){return g}});var r=t(5893),s=t(3393),i=t(7294),c=t(1296),u=t.n(c),o=t(1163),l=t(8453),a=t.n(l);function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function h(e){var n=e.events,t=(0,o.useRouter)();return(0,r.jsx)(s.iA_,{children:(0,r.jsx)(s.RMI,{children:n.map((function(e){return(0,r.jsxs)(s.SCH,{style:{cursor:"pointer"},onMouseDown:function(e){return e.preventDefault()},onClick:(n="/events/".concat(e._slug),function(e){return e.preventDefault(),t.push(n),!1}),children:[(0,r.jsx)(s.pj1,{children:(0,r.jsx)("strong",{children:e.title})}),(0,r.jsx)(s.pj1,{children:e.description})]},e.title);var n}))})})}function j(e){var n=e.onSearch,t=(0,i.useState)(),c=t[0],o=t[1],l=(0,i.useMemo)((function(){return u()(n,300)}),[n]);return(0,r.jsx)("div",{children:(0,r.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(c)},children:(0,r.jsx)(s.olm,{onChange:function(e){var n=e.target.value,t=null==n||""===n.trim()?null:n.trim();o(t),l(t)},labelText:"Search"})})})}function v(e){var n=e.searchIndex,t=e.searchString,s=e.events,i=n.search(t,{expand:!0}).map((function(e){return s.find((function(n){return n.title===e.ref}))}));return(0,r.jsx)(h,{events:i})}function x(e){var n=e.events,t=d(e,["events"]),s=(0,i.useState)(),c=s[0],u=s[1],o=(0,i.useState)(),l=o[0],h=o[1],x=(0,i.useMemo)((function(){console.log("Adding ".concat(n.length," events to Elasticlunr.js index..."));var e=a()();return e.addField("title"),e.addField("description"),e.setRef("title"),n.forEach((function(n){return e.addDoc(n)})),e}),[n]);return(0,r.jsxs)("div",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){f(e,n,t[n])}))}return e}({},t,{onFocus:function(){return h(!0)},onBlur:function(){return h(!1)},children:[(0,r.jsx)("div",{children:(0,r.jsx)(j,{onSearch:u})}),l&&c&&(0,r.jsx)(v,{searchIndex:x,searchString:c,events:n})]}))}var p=!0;function g(e){var n=e.events;return(0,r.jsx)("div",{style:{marginTop:"200px"},children:(0,r.jsxs)(s.rjZ,{className:"",children:[(0,r.jsx)(s.sgG,{lg:3}),(0,r.jsxs)(s.sgG,{lg:10,className:"text-center",children:[(0,r.jsx)("h1",{children:"Schema Docs"}),(0,r.jsxs)("p",{children:["This is a demo site showing generated documentation for Segment events.",(0,r.jsx)("br",{}),"The site is regenerated whenever a Pull Request is merged to ",(0,r.jsx)("code",{children:"main"})," in the"," ",(0,r.jsx)(s.rUS,{href:"https://github.com/hmedney-segment/schema",children:"schema repo"}),"."]}),(0,r.jsx)(x,{events:n,className:"mt-5"})]}),(0,r.jsx)(s.sgG,{lg:3})]})})}}},function(e){e.O(0,[528,774,888,179],(function(){return n=5728,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
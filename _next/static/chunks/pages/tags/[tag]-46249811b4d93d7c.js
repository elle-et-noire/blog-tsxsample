(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{5417:function(t,e,r){"use strict";r.d(e,{d:function(){return i}});var n=r(1664),c=r(5893),s=function(){return(0,c.jsx)(n.default,{href:"/",children:(0,c.jsx)("a",{className:"font-semibold",children:"Home"})})},i=function(){return(0,c.jsx)(s,{})}},6285:function(t,e,r){"use strict";r.d(e,{$:function(){return l}});var n=r(2809),c=r(1163),s=r(1664),i=r(5893),o=function(t){return(0,i.jsx)("ul",{className:t.className,children:t.tags.map((function(e){return(0,i.jsx)("li",{className:"mb-1 inline-block",children:(0,i.jsx)(s.default,{href:"/tags/".concat(e),children:(0,i.jsxs)("a",{className:t.linkClass(e),children:[(0,i.jsx)("span",{className:"text-xs text-gray-400 tracking-widest",children:"#"}),e]})})},e)}))})};function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=function(t){var e=(0,c.useRouter)();return(0,i.jsx)(o,u(u({},t),{},{linkClass:function(r){var n="mr-4";return t.decoration&&e.query.tag===r&&(n+=" text-purple-400"),n}}))}},2684:function(t,e,r){"use strict";r.d(e,{T:function(){return l}});var n=r(2809),c=r(8700),s=r(9008),i=r(5893),o=function(t){return(0,i.jsxs)("div",{children:[(0,i.jsx)(s.default,{children:(0,i.jsx)("title",{children:t.title})}),t.children]})};function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=function(t){var e=""===t.title?c.iC:"".concat(t.title," \xb7 ").concat(c.iC);return(0,i.jsx)(o,u(u({},t),{},{title:e}))}},8668:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return d},default:function(){return p}});var n=r(9008),c=r(1664),s=r(1163),i=r(5417),o=r(6285),a=r(8700),u=r(2684),l=r(8170),f=r(5893),d=!0;function p(t){var e,r=(null===(e=(0,s.useRouter)().query.tag)||void 0===e?void 0:e.toString())||"";return(0,f.jsxs)(u.T,{title:r,children:[(0,f.jsx)("h2",{children:"Tags"}),(0,f.jsxs)(n.default,{children:[(0,f.jsx)("meta",{name:"description",content:a.PB}),(0,f.jsx)("meta",{property:"og:title",content:"".concat(r," \uff65 ").concat(a.iC)}),(0,f.jsx)("meta",{property:"og:description",content:a.PB}),(0,f.jsx)("meta",{property:"og:url",content:"".concat(a.FX,"tags/").concat(r)})]}),(0,f.jsx)(o.$,{tags:t.tags,className:"mb-8",decoration:!0}),(0,f.jsxs)("h2",{children:["Posts ",(0,f.jsx)("span",{className:"text-xs text-gray-400 tracking-widest",children:"#"}),(0,f.jsx)("span",{className:"text-sm text-purple-400",children:r})]}),(0,f.jsx)("ul",{children:t.posts.map((function(t){return(0,f.jsxs)("li",{className:"mb-6",children:[(0,f.jsx)("div",{className:"text-xs italic text-gray-400",children:(0,l.p)(t.date)}),(0,f.jsx)(c.default,{href:"/".concat(t.year,"/").concat(t.month,"/").concat(t.slug),children:(0,f.jsx)("a",{className:"font-semibold",children:t.title})})]},t.slug)}))}),(0,f.jsx)("p",{className:"mt-16 text-center",children:(0,f.jsx)(i.d,{})})]})}},8170:function(t,e,r){"use strict";r.d(e,{p:function(){return n}});var n=function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"short",day:"2-digit"})}},4414:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[tag]",function(){return r(8668)}])},1163:function(t,e,r){t.exports=r(9898)}},function(t){t.O(0,[774,888,179],(function(){return e=4414,t(t.s=e);var e}));var e=t.O();_N_E=e}]);
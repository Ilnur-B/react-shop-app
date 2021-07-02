(this["webpackJsonpshop-app"]=this["webpackJsonpshop-app"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(7),i=c.n(r),s=(c(13),c(14),c(0)),l=function(){return Object(s.jsx)("nav",{className:" purple lighten-2",children:Object(s.jsx)("div",{className:"nav-wrapper",children:Object(s.jsx)("a",{href:"/",className:"brand-logo",children:"Shop-App"})})})},o=function(){return Object(s.jsx)("footer",{className:"page-footer  purple lighten-2",children:Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"/",children:"Shop App"})]})})})},d=c(8),j=c(2),u=c(3),m=function(){return Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"indeterminate"})})},b=function(e){var t=e.id,c=e.name,n=e.description,a=e.price,r=e.full_background,i=e.addToBasket,l=void 0===i?Function.prototype:i;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("img",{src:r})}),Object(s.jsxs)("div",{className:"card-content ",children:[Object(s.jsx)("p",{className:"card-title",children:c}),Object(s.jsx)("p",{className:"info",children:n})]}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{className:"btn",onClick:function(){return l({name:c,id:t,price:a})},children:"\u043a\u0443\u043f\u0438\u0442\u044c"}),Object(s.jsx)("span",{className:"card-title right",children:a})]})]})},O=function(e){var t=e.goods,c=void 0===t?[]:t,n=e.addToBasket,a=void 0===n?Function.prototype:n;return c.length?Object(s.jsx)("div",{className:"card-lists",children:c.map((function(e){return Object(s.jsx)(b,Object(j.a)(Object(j.a)({},e),{},{addToBasket:a}),e.id)}))}):Object(s.jsx)("h3",{children:"Nothing"})},h=function(e){var t=e.quantity,c=void 0===t?0:t,n=e.handleBasketShow;return Object(s.jsxs)("span",{className:"cart purple lighten-2",onClick:n,children:[Object(s.jsx)("i",{className:"material-icons cart-material-icons  white-text",children:"shopping_cart"}),c?Object(s.jsx)("span",{className:"quantity",children:c}):null]})},f=function(e){var t=e.id,c=e.name,n=e.quantity,a=e.price,r=e.deleteFromBasket,i=e.incrementOrderItem,l=e.decrementOrderItem;return Object(s.jsxs)("li",{className:"collection-item",children:[c,"   ",Object(s.jsx)("i",{className:"material-icons basket-quatnt-icons",onClick:function(){return i(t)},children:"add"}),n,Object(s.jsx)("i",{className:"material-icons basket-quatnt-icons",onClick:function(){return l(t)},children:"remove"}),"   ","= ",a*n,Object(s.jsx)("span",{className:"secondary-content",children:Object(s.jsx)("i",{className:"material-icons",onClick:function(){return r(t)},children:"close"})})]})},p=function(e){var t=e.order,c=e.handleBasketShow,a=e.deleteFromBasket,r=e.incrementOrderItem,i=e.decrementOrderItem,l=t.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(s.jsx)("div",{className:"basket ",children:Object(s.jsxs)("ul",{className:"collection with-header  ",children:[Object(s.jsxs)("li",{className:"collection-item active",children:[Object(s.jsx)("span",{className:"secondary-content",children:Object(s.jsx)("i",{onClick:c,className:"material-icons",children:"close"})}),Object(s.jsx)("h6",{children:"\u041a\u041e\u0420\u0417\u0418\u041d\u0410"})]}),t.length?t.map((function(e){return Object(n.createElement)(f,Object(j.a)(Object(j.a)({},e),{},{key:e.id,deleteFromBasket:a,decrementOrderItem:i,incrementOrderItem:r}))})):Object(s.jsx)("li",{className:"collection-item",children:"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442"}),Object(s.jsx)("li",{className:"collection-item active",children:Object(s.jsxs)("h6",{children:["\u0438\u0442\u043e\u0433 ",l," \u0440\u0443\u0431."]})})]})})},x=function(e){var t=e.name,c=e.deleteAlertName;return Object(n.useEffect)((function(){var e=setTimeout(c,3e3);return function(){return clearTimeout(e)}}),[t]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast",children:[t," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"]})})},v=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!0),i=Object(u.a)(r,2),l=i[0],o=i[1],b=Object(n.useState)([]),f=Object(u.a)(b,2),v=f[0],N=f[1],g=Object(n.useState)(!1),k=Object(u.a)(g,2),y=k[0],q=k[1],B=Object(n.useState)(""),S=Object(u.a)(B,2),w=S[0],I=S[1],C=function(){q(!y)};return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=ru",{headers:{Authorization:"ede32f29-478e5126-d2fd8ad0-ccdeac27"}}).then((function(e){return e.json()})).then((function(e){e.featured&&a(e.featured),o(!1)}))}),[]),Object(s.jsxs)("main",{children:[l?Object(s.jsx)(m,{}):Object(s.jsx)(O,{goods:c,addToBasket:function(e){var t=v.findIndex((function(t){return t.id===e.id}));if(t<0){var c=Object(j.a)(Object(j.a)({},e),{},{quantity:1});N([].concat(Object(d.a)(v),[c]))}else{var n=v.map((function(e,c){return t===c?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e}));N(n)}I(e.name)}}),Object(s.jsx)(h,{handleBasketShow:C,quantity:v.length}),y?Object(s.jsx)(p,{handleBasketShow:C,order:v,deleteFromBasket:function(e){var t=v.filter((function(t){return t.id!==e}));N(t)},incrementOrderItem:function(e){var t=v.map((function(t){if(t.id===e){var c=t.quantity+1;return Object(j.a)(Object(j.a)({},t),{},{quantity:c})}return t}));N(t)},decrementOrderItem:function(e){var t=v.map((function(t){if(t.id===e){var c=t.quantity-1;return Object(j.a)(Object(j.a)({},t),{},{quantity:c>=0?c:0})}return t}));N(t)}}):null,w?Object(s.jsx)(x,{name:w,deleteAlertName:function(){I("")}}):null]})};var N=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(l,{}),Object(s.jsx)(v,{}),Object(s.jsx)(o,{})]})};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.71414208.chunk.js.map
!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var o=a("bpxeT"),i=a("2TvXO"),c=a("4Nugj"),s=(o=a("bpxeT"),i=a("2TvXO"),a("6JpON"));function u(e){return l.apply(this,arguments)}function l(){return l=e(o)(e(i).mark((function t(n){var r;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(s).Loading.dots("Please wait"),r=function(){var t=e(o)(e(i).mark((function t(n){var r,a;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://books-backend.p.goit.global/books/category?category=".concat(n));case 2:return r=t.sent,t.next=5,r.json();case 5:return a=t.sent,e(s).Loading.remove(),t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t.prev=2,e(s).Loading.remove(),t.abrupt("return",r(n));case 7:t.prev=7,t.t0=t.catch(2),e(s).Loading.remove(),e(s).Notify.failure("Something went wrong. Please try again"),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,7]])}))),l.apply(this,arguments)}c=a("4Nugj");var d=a("3zcse");function p(e){return'\n      <ul class="category-books-list">\n        '.concat(e.map((function(e){return'\n            <li class="books-list-item">\n              '.concat((0,d.createBookMarkup)(e),"\n            </li>\n          ")})).join(""),"\n      </ul>\n    ")}var f=(0,c.default)().renderingContainer;function v(e){var t=p(e);f.innerHTML=t}var g=(0,(c=a("4Nugj")).default)(),h=g.scrollToTopButton,b=g.toTopTarget;function y(e){window.scroll({top:0,behavior:"smooth"})}new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?h.classList.add("hidden"):h.classList.remove("hidden")}))})).observe(b),h.addEventListener("click",y);var w=(0,(c=a("4Nugj")).default)().mainTitle;function m(e){var t=e.split(" ").slice(0,-1).join(" "),n=e.split(" "),r=n[n.length-1];w.innerHTML="".concat(t,' <span class="main-title--last-word-static">').concat(r,"</span>")}function x(){return(x=e(o)(e(i).mark((function t(n){var r,a,o,c,s,l,d,p,f,g;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.target.classList.contains("see-more-btn")){e.next=2;break}return e.abrupt("return");case 2:return r=n.target.dataset.id,e.next=5,u(r);case 5:for(a=e.sent,m(r),o=document.querySelectorAll(".category-btn"),c=document.querySelector(".active-category"),s=!0,l=!1,d=void 0,e.prev=10,p=o[Symbol.iterator]();!(s=(f=p.next()).done);s=!0)(g=f.value).dataset.id===r&&g.classList.add("active-category");e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),l=!0,d=e.t0;case 18:e.prev=18,e.prev=19,s||null==p.return||p.return();case 21:if(e.prev=21,!l){e.next=24;break}throw d;case 24:return e.finish(21);case 25:return e.finish(18);case 26:c.classList.remove("active-category"),v(a),y();case 29:case"end":return e.stop()}}),t,null,[[10,14,18,26],[19,,21,25]])})))).apply(this,arguments)}(0,c.default)().categoryContainerEl.addEventListener("click",(function(e){return x.apply(this,arguments)}))}();
//# sourceMappingURL=index.5e4ecd93.js.map
!function(){"use strict";function r(r,n){(null==n||n>r.length)&&(n=r.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=r[t];return e}function n(n){return function(n){if(Array.isArray(n))return r(n)}(n)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(n)||function(n,t){if(n){if("string"===typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var t=[];function e(r,o,l){console.log(n(t));var i=function(r){var n=function(r){for(var n=0;n<3;n++){var t=r[n],e=r[n+3],o=r[n+6];if(1==t&&1==e&&1==o)return[!0,!0];if(0==t&&0==e&&0==o)return[!0,!1]}return[!1,!1]}(r),t=function(r){for(var n=0;n<7;n+=3){var t=r[n],e=r[n+1],o=r[n+2];if(1==t&&1==e&&1==o)return[!0,!0];if(0==t&&0==e&&0==o)return[!0,!1]}return[!1,!1]}(r),e=function(r){var n=r[0],t=r[4],e=r[8];return 1==n&&1==t&&1==e?[!0,!0]:(r[6],r[2],0==n&&0==t&&0==e?[!0,!1]:[!1,!1])}(r);return n[0]?n[1]?[!0,1]:[!0,-1]:t[0]?t[1]?[!0,1]:[!0,-1]:e[0]?e[1]?[!0,1]:[!0,-1]:[!1,0]}(r);if(0==o||1==i[0])return console.log("end"),i[1];if(l)a=9,u(r,!1).forEach((function(r){if(!t.includes(r)){t.push(r);var n=e(r,o-1,!1);n>a&&(a=n)}}));else{var a=-9;u(r,!0).forEach((function(r){if(!t.includes(r)){t.push(r);var n=e(r,o-1,!0);n>a&&(a=n)}}))}}function o(r,t,e){var o=n(e);return o[t]=!!r,o}function u(r,n){for(var t=[],e=0;e<r.length;e++)null==r[e]&&t.push(o(n,e,r));return t}self.onmessage=function(r){postMessage(69),t=[],e([null,null,null,null,null,null,null,null,null],8,!1)}}(),_N_E={};
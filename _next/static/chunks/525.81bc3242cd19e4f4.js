!function(){"use strict";function n(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}function r(r){return function(r){if(Array.isArray(r))return n(r)}(r)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(r)||function(r,t){if(r){if("string"===typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var t=[[null,null,null,null,null,null,null,null,null]],e=0;function l(n,r,u){var i=function(n){var r=function(n){for(var r=0;r<3;r++){var t=n[r],e=n[r+3],l=n[r+6];if(1==t&&1==e&&1==l)return[!0,!0];if(0==t&&0==e&&0==l)return[!0,!1]}return[!1,!1]}(n),t=function(n){for(var r=0;r<7;r+=3){var t=n[r],e=n[r+1],l=n[r+2];if(1==t&&1==e&&1==l)return[!0,!0];if(0==t&&0==e&&0==l)return[!0,!1]}return[!1,!1]}(n),e=function(n){var r=n[0],t=n[4],e=n[8];return 1==r&&1==t&&1==e?[!0,!0]:0==r&&0==t&&0==e?[!0,!1]:(n[6],n[2],1==r&&1==t&&1==e?[!0,!0]:0==r&&0==t&&0==e?[!0,!1]:[!1,!1])}(n);return r[0]?r[1]?[!0,1]:[!0,-1]:t[0]?t[1]?[!0,1]:[!0,-1]:e[0]?e[1]?[!0,1]:[!0,-1]:[!1,0]}(n);if(0==r||1==i[0])return 1==i[0]&&(console.log("Winner player : ".concat(i[1])),console.log(n),e++,console.log(e)),i[1];if(u)a=9,o(n,!1).forEach((function(n){if(!t.some((function(r){return r.equals(n)}))){t.push(n);var e=l(n,r-1,!1);e<a&&(a=e)}}));else{var a=-9;o(n,!0).forEach((function(n){if(!t.some((function(r){return r.equals(n)}))){t.push(n);var e=l(n,r-1,!0);e>a&&(a=e)}}))}}function u(n,t,e){var l=r(e);return l[t]=n,l}function o(n,r){for(var t=[],e=0;e<n.length;e++)null==n[e]&&t.push(u(r,e,n));return t}function i(n,r){return null!=r&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r}Array.prototype.equals&&console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."),Array.prototype.equals=function(n){if(!n)return!1;if(this.length!=n.length)return!1;for(var r=0,t=this.length;r<t;r++)if(i(this[r],Array)&&i(n[r],Array)){if(!this[r].equals(n[r]))return!1}else if(this[r]!=n[r])return!1;return!0},self.onmessage=function(n){postMessage(69),t=[[null,null,null,null,null,null,null,null,null]],l([null,null,null,null,null,null,null,null,null],8,!1)}}(),_N_E={};
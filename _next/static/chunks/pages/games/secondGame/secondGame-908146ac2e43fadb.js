(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[476],{6382:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/secondGame/secondGame",function(){return t(8384)}])},8384:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return b}});var o=t(5893),i=t(7294),r=t(9477);t(9365);function a(){return new r.Kj0(new r.nvb(4,4,4),new r.YBo({color:3487029}))}function u(n){var e=function(){var n=new r.ZAu,e=new r.Kj0(new r.nvb(.5,3,1),new r.YBo({color:16118768}));e.rotation.z=45*Math.PI/180,n.add(e);var t=new r.Kj0(new r.nvb(.5,3,1),new r.YBo({color:16118768}));return t.rotation.z=135*Math.PI/180,n.add(t),n}();e.position.z=3,n.add(e)}function l(n){var e=new r.Kj0(new r.Cne(1.2,1.6-1.2,6,6),new r.YBo({color:16118768}));e.position.z=3,n.add(e)}function c(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var s=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.board=[null,null,null,null,null,null,null,null,null],this.blocks=[],this.playerTurn=!0,this.AIBusy=!1}var e,o,i;return e=n,(o=[{key:"reset",value:function(){this.board=[null,null,null,null,null,null,null,null,null]}},{key:"setNode",value:function(n,e){this.board[n]=e}},{key:"AICallback",value:function(n){this.AIBusy=!1,console.log(n),this.board[n]=!1,l(this.blocks[n]),this.playerTurn=!0}},{key:"startAI",value:function(n){var e=this;this.AIBusy=!0;var o=new Worker(new URL(t.p+t.u(525),t.b));o.postMessage(n),o.onmessage=function(n){e.AICallback(n.data)}}},{key:"generateVirtualBoard",value:function(){}},{key:"userClickBox",value:function(n){var e=this;this.blocks.forEach((function(t,o){t.uuid==n.uuid&&(e.board[o]=!0)})),u(n)}},{key:"handleUserinput",value:function(n){this.playerTurn&&(this.userClickBox(n),this.playerTurn=!1,this.generateVirtualBoard(),this.startAI(this.board))}}])&&c(e.prototype,o),i&&c(e,i),n}(),d=new r.iMs,f=new r.FM8,v=new s;function h(n){var e=document.getElementById("secondGame"),t=e.getBoundingClientRect();f.x=(n.clientX-t.left)/e.clientWidth*2-1,f.y=-(n.clientY-t.top)/e.clientHeight*2+1}function m(n){var e=d.intersectObjects(v.blocks,!1);e[0]&&v.handleUserinput(e[0].object)}function w(){var n=function(){var n=new r.xsS,e=new r.Mig(16777215,.8);n.add(e);var t=new r.Ox3(4095,1);return t.position.set(100,-300,400),n.add(t),n}(),e=new r.cPb(45,1.8,1,1e3);e.position.set(5,5,20),e.lookAt(5,5,0);var t=new r.CP7({antialias:!0});t.setSize(window.innerWidth,window.innerHeight),document.getElementById("secondGame").appendChild(t.domElement);var o=function(){for(var n=new r.ZAu,e=0;e<3;e++)for(var t=0;t<3;t++){var o=a();o.position.x=5*t,o.position.y=5*e,n.add(o)}return n}();v.blocks=o.children,n.add(o);var i=function(){requestAnimationFrame(i);var n=document.getElementById("secondGame").clientHeight,e=document.getElementById("secondGame").clientWidth;t.setSize(e,n)};i();var u=function(){requestAnimationFrame(u),d.setFromCamera(f,e);var o=d.intersectObjects(v.blocks,!1);!function(n,e){for(var t=0;t<e.length;t++)e[t].object.material.color.set(16711680);for(var o=n.filter((function(n){return!e.some((function(e){return e.object.uuid==n.uuid}))})),i=0;i<o.length;i++)o[i].material.color.set(3487029)}(v.blocks,o),t.render(n,e)};u()}var b=function(){return(0,i.useEffect)((function(){document.getElementById("secondGame").addEventListener("pointermove",h),document.getElementById("secondGame"),addEventListener("click",m),w()})),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"This is a tick tack toe game i made in three js"}),(0,o.jsx)("div",{id:"secondGame"})]})}}},function(n){n.O(0,[737,365,774,888,179],(function(){return e=6382,n(n.s=e);var e}));var e=n.O();_N_E=e}]);
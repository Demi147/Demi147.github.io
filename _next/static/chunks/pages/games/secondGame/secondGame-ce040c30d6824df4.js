(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[476],{6382:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/secondGame/secondGame",function(){return t(8229)}])},8229:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var o=t(5893),i=t(7294),r=t(9477);t(9365);function a(){return new r.Kj0(new r.nvb(4,4,4),new r.YBo({color:3487029}))}function c(e){var n=function(){var e=new r.ZAu,n=new r.Kj0(new r.nvb(.5,3,1),new r.YBo({color:16118768}));n.rotation.z=45*Math.PI/180,e.add(n);var t=new r.Kj0(new r.nvb(.5,3,1),new r.YBo({color:16118768}));return t.rotation.z=135*Math.PI/180,e.add(t),e}();n.position.z=3,e.add(n)}var d=[],s=new r.iMs,u=new r.FM8;function l(e){var n=document.getElementById("secondGame"),t=n.getBoundingClientRect();u.x=(e.clientX-t.left)/n.clientWidth*2-1,u.y=-(e.clientY-t.top)/n.clientHeight*2+1}function m(e){var n=s.intersectObjects(d,!1);c(n[0].object)}function f(){var e=function(){var e=new r.xsS,n=new r.Mig(16777215,.8);e.add(n);var t=new r.Ox3(4095,1);return t.position.set(100,-300,400),e.add(t),e}(),n=new r.cPb(45,1.8,1,1e3);n.position.set(5,5,20),n.lookAt(5,5,0);var t=new r.CP7({antialias:!0});t.setSize(window.innerWidth,window.innerHeight),document.getElementById("secondGame").appendChild(t.domElement);var o=function(){for(var e=new r.ZAu,n=0;n<3;n++)for(var t=0;t<3;t++){var o=a();o.position.x=5*t,o.position.y=5*n,e.add(o)}return e}();d=o.children,e.add(o);var i=function(){requestAnimationFrame(i);var e=document.getElementById("secondGame").clientHeight,n=document.getElementById("secondGame").clientWidth;t.setSize(n,e)};i();var c=function(){requestAnimationFrame(c),s.setFromCamera(u,n);var o=s.intersectObjects(d,!1);!function(e,n){for(var t=0;t<n.length;t++)n[t].object.material.color.set(16711680);for(var o=e.filter((function(e){return!n.some((function(n){return n.object.uuid==e.uuid}))})),i=0;i<o.length;i++)o[i].material.color.set(3487029)}(d,o),t.render(e,n)};c()}var v=function(){return(0,i.useEffect)((function(){document.getElementById("secondGame").addEventListener("pointermove",l),document.getElementById("secondGame"),addEventListener("click",m),f();var e=new Worker(new URL(t.p+t.u(525),t.b));e.postMessage("test"),e.onmessage=function(e){console.log(e.data)}})),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"This is a tick tack toe game i made in three js"}),(0,o.jsx)("div",{id:"secondGame"})]})}}},function(e){e.O(0,[737,365,774,888,179],(function(){return n=6382,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
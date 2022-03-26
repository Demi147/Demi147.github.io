import { React, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as TICK from "../../../shared/lib/tickTackToe/tickTackToe";

//Global vars
var blocks = [];
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointerMove(event) {
  var temp = document.getElementById("secondGame");
  var rect = temp.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / temp.clientWidth) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / temp.clientHeight) * 2 + 1;
}

function onload() {
  // === THREE.JS CODE START ===
  var scene = TICK.createScene();

  const aspectRatio = 1.8;
  const cameraWidth = 50;
  const cameraHeight = cameraWidth / aspectRatio;

  var camera = new THREE.PerspectiveCamera(
    45,
    cameraWidth / cameraHeight,
    1,
    1000
  );

  camera.position.set(5, 5, 20);
  camera.lookAt(5, 5, 0);

  var renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("secondGame").appendChild(renderer.domElement);

  var background = TICK.generateBackGround();
  blocks = background.children;
  scene.add(background);

  for (let index = 0; index < 3; index++) {
    const element = blocks[index];
    TICK.addOToBlock(element);
  }
  for (let index = 3; index < 6; index++) {
    const element = blocks[index];
    TICK.addXToBlock(element);
  }

  var resizeLoop = function () {
    requestAnimationFrame(resizeLoop);
    var y = document.getElementById("secondGame").clientHeight;
    var x = document.getElementById("secondGame").clientWidth;
    renderer.setSize(x, y);
  };
  resizeLoop();

  var cameraLoop = function () {
    requestAnimationFrame(cameraLoop);

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(blocks, false);
    TICK.hoverEffect(blocks, intersects);

    renderer.render(scene, camera);
  };
  cameraLoop();
}

function setupEvents() {
  document
    .getElementById("secondGame")
    .addEventListener("pointermove", onPointerMove);
}

function SecondGame() {
  useEffect(() => {
    setupEvents();
    onload();

    // var worker = new Worker(
    //   new URL("../../../shared/lib/tickTackToe/AI.worker.js", import.meta.url)
    // );
    // worker.postMessage("test");
    // worker.onmessage = function (e) {
    //   console.log(e.data);
    // };
  });

  return (
    <div>
      <p>This is a tick tack toe game i made in three js</p>
      <div id="secondGame"></div>
    </div>
  );
}

export default SecondGame;

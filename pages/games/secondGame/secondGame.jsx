import React from "react";
import { useEffect } from "react/cjs/react.development";
import * as THREE from "three";
import { generateCar } from "../../../shared/lib/helperMethods";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as TICK from "../../../shared/lib/tickTackToe/tickTackToe";

function onload() {
  // === THREE.JS CODE START ===
  var scene = new THREE.Scene();

  //lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xfff, 1);
  directionalLight.position.set(100, -300, 400);
  scene.add(directionalLight);

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

  // var geometry = new THREE.BoxGeometry(1, 1, 1);
  // var material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
  // var cube = new THREE.Mesh(geometry, material);
  // scene.add(cube);
  scene.add(TICK.generateBackGround());
  var resizeLoop = function () {
    requestAnimationFrame(resizeLoop);
    var y = document.getElementById("secondGame").clientHeight;
    var x = document.getElementById("secondGame").clientWidth;
    renderer.setSize(x, y);
  };
  resizeLoop();

  var cameraLoop = function () {
    requestAnimationFrame(cameraLoop);
    renderer.render(scene, camera);
  };
  cameraLoop();
}

function SecondGame() {
  useEffect(() => {
    onload();
  });

  return (
    <div>
      <p>This is a tick tack toe game i made in three js</p>
      <div id="secondGame"></div>
    </div>
  );
}

export default SecondGame;

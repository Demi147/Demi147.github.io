import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { generateCar } from "../../../shared/lib/helperMethods";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class FirstGame extends Component {
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();

    //lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xfff, 1);
    directionalLight.position.set(100, -300, 400);
    scene.add(directionalLight);

    const aspectRatio = 1.8;
    const cameraWidth = 150;
    const cameraHeight = cameraWidth / aspectRatio;

    var camera = new THREE.OrthographicCamera(
      cameraWidth / -2,
      cameraWidth / 2,
      cameraHeight / 2,
      cameraHeight / -2,
      0,
      1000
    );

    camera.position.set(200, -200, 300);
    camera.up.set(0, 0, 1);

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("firstThingy").appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    // var geometry = new THREE.BoxGeometry(1, 1, 1);
    // var material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
    // var cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);
    var x = generateCar();
    x.position.set(0, 0, -20);
    scene.add(x);

    var resizeLoop = function () {
      requestAnimationFrame(resizeLoop);
      var y = document.getElementById("firstThingy").clientHeight;
      var x = document.getElementById("firstThingy").clientWidth;
      renderer.setSize(x, y);
    };
    resizeLoop();

    var animate = function () {
      requestAnimationFrame(animate);
      x.rotation.z += 0.01;
    };
    animate();

    var cameraLoop = function () {
      requestAnimationFrame(cameraLoop);
      renderer.render(scene, camera);
      controls.update();
    };
    cameraLoop();
  }
  render() {
    return (
      <div>
        <p>Use the mouse butons to navigate the object</p>
        <p>left mouse button to chance view</p>
        <p>right mouse button to move object</p>
        <p>scroll wheel to zoom</p>
        <div id="firstThingy"></div>
      </div>
    );
  }
}

export default FirstGame;

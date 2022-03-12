import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { generateCar } from "../../lib/firstGameLib/helperMethods";

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

    const aspectRatio = window.innerWidth / window.innerHeight;
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
    camera.lookAt(0, 0, 0);

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // var geometry = new THREE.BoxGeometry(1, 1, 1);
    // var material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
    // var cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);
    var x = generateCar();
    x.position.set(0, 0, 0);
    scene.add(x);

    var animate = function () {
      requestAnimationFrame(animate);
      x.rotation.z += 0.01;
    };
    animate();

    var cameraLoop = function () {
      requestAnimationFrame(cameraLoop);
      renderer.render(scene, camera);
    };
    cameraLoop();
  }
  render() {
    return <div />;
  }
}

export default FirstGame;

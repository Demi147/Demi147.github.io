import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

class FirstGame extends Component {
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();

    //lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xfff, 0.8);
    directionalLight.position.set(100, -300, 400);
    scene.add(directionalLight);

    const aspectRatio = window.innerWidth / window.innerHeight;
    const cameraWidth = 20;
    const cameraHeight = cameraWidth / aspectRatio;

    var camera = new THREE.OrthographicCamera(
      cameraWidth / -2,
      cameraWidth / 2,
      cameraHeight / 2,
      cameraHeight / -2,
      1,
      1000
    );

    camera.position.set(20, -20, 30);
    camera.up.set(0, 0, 1);
    camera.lookAt(0, 0, 0);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshNormalMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
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

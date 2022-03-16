import * as THREE from "three";
import * as AI from "./ticktacToeAI";

export function generateBackGround() {
  let background = new THREE.Group();

  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      var block = generateBlock();
      block.position.x = x * 5;
      block.position.y = y * 5;
      background.add(block);
    }
  }
  console.log(background);
  return background;
}

export function generateBlock() {
  const block = new THREE.Mesh(
    new THREE.BoxBufferGeometry(4, 4, 4),
    new THREE.MeshLambertMaterial({ color: 0x353535 })
  );
  return block;
}

export function createScene() {
  var scene = new THREE.Scene();

  //lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xfff, 1);
  directionalLight.position.set(100, -300, 400);
  scene.add(directionalLight);

  return scene;
}

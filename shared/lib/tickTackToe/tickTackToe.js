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

export function generateX() {
  let x = new THREE.Group();

  const block1 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.5, 3, 1),
    new THREE.MeshLambertMaterial({ color: 0xf5f3f0 })
  );
  block1.rotation.z = (45 * Math.PI) / 180;
  x.add(block1);

  const block2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.5, 3, 1),
    new THREE.MeshLambertMaterial({ color: 0xf5f3f0 })
  );
  block2.rotation.z = (135 * Math.PI) / 180;
  x.add(block2);

  return x;
}

export function generateO() {
  var size = 1.2;
  const O = new THREE.Mesh(
    new THREE.TorusBufferGeometry(size, 1.6 - size, 6, 6),
    new THREE.MeshLambertMaterial({ color: 0xf5f3f0 })
  );

  return O;
}

export function addXToBlock(object) {
  var x = generateX();
  x.position.z = 3;
  object.add(x);
}

export function addOToBlock(object) {
  var O = generateO();
  O.position.z = 3;
  object.add(O);
}

function checkIntersects() {}

export function hoverEffect(board, intersects) {
  for (let i = 0; i < intersects.length; i++) {
    intersects[i].object.material.color.set(0xff0000);
  }
  debugger;
  board.forEach((q) => {
    intersects.forEach((w) => {
      if (w.uuid == q.uuid) {
        console.log("a");
      }
    });
  });

  var others = board.filter(
    (q) => !intersects.some((w) => w.object.uuid == q.uuid)
  );
  console.log(others);

  for (let index = 0; index < others.length; index++) {
    const element = others[index];
    element.material.color.set(0x353535);
  }
}

import * as THREE from "three";

export function generateBackGround() {
  let background = new THREE.Group();

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
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

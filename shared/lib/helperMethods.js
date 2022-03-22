import * as THREE from "three";

export function generateCar() {
  let car = new THREE.Group();

  const backWheels = generateWheel();
  backWheels.position.z = 6;
  backWheels.position.x = -18;
  car.add(backWheels);

  const frontWheels = generateWheel();
  frontWheels.position.z = 6;
  frontWheels.position.x = 18;
  car.add(frontWheels);

  const main = new THREE.Mesh(
    new THREE.BoxBufferGeometry(60, 30, 10),
    new THREE.MeshLambertMaterial({ color: 0x3bff00 })
  );
  main.position.z = 10;
  car.add(main);

  const cabin = new THREE.Mesh(
    new THREE.BoxBufferGeometry(33, 24, 12),
    new THREE.MeshLambertMaterial({ color: 0xffffff })
  );
  cabin.position.z = 20;
  car.add(cabin);

  return car;
}

export function generateWheel() {
  const wheels = new THREE.Mesh(
    new THREE.BoxBufferGeometry(12, 33, 12),
    new THREE.MeshLambertMaterial({ color: 0x353535 })
  );
  return wheels;
}

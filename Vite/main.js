
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const canvas = document.getElementById('canvas');

// 1. create the scene

const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');
// 2. create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
scene.add(camera);

//3. Create add the object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0x468585 , emissive: 0x468585});
const dodecahedron = new THREE.Mesh(geometry, material);


const box_geometry = new THREE.BoxGeometry(2, 0.1, 2);
const box_material = new THREE.MeshBasicMaterial({ color: 0xb4b4b3});
const box = new THREE.Mesh(box_geometry, box_material);
// box.position.x = -3;
box.position.y = -1.5;
scene.add(dodecahedron);
scene.add(box);

//4. add ligthing to scene
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);
//5. render the scene

const render = new THREE.WebGLRenderer({canvas});
render.setSize(window.innerWidth, window.innerHeight);
render.setPixelRatio(window.devicePixelRatio);

// 6. Add orbititControls to scene

const controls = new OrbitControls(camera, render.domElement);
controls.enableDamping = true ;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// 7. animate the scene
function animate () {
  requestAnimationFrame(animate);
  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;
  box.rotation.x += 0.005;
  box.rotation.y += 0.005;
  // controls.update();
  render.render(scene, camera);
}

//8. Handle window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  render.setSize(window.innerWidth, window.innerHeight);
});

animate();
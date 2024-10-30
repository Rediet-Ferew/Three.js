import * as THREE from 'three';

// 1. Create a Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xF0F0F0); // Hex format without quotes

// 2. Add the Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Create and add cube Object
const geometry = new THREE.ConeGeometry();

const material = new THREE.MeshStandardMaterial({ color: '#468585', emissive: '#468585' });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 4. Add Lighting
const light = new THREE.DirectionalLight(0x9CDBA6, 1);
light.position.set(5, 5, 5).normalize();
scene.add(light);

// 5. Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// 7. Animate the scene

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);

}


// Start the animation loop
animate();

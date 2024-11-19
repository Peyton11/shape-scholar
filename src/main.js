// Peyton Gardner
// main.js

// Uncomment the following line for local development:
// import * as THREE from 'three';

// Uncomment the following line for production. This is required to view in browsers:
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

import { createCube } from "./shapes/cube.js";

// Create the scene
let scene = new THREE.Scene();

// Background
scene.background = new THREE.Color(0.53, 0.81, 0.92);

// Directional light
const light = new THREE.DirectionalLight(0xFFFFFF, 1);
light.position.set(5, 5, 5);
scene.add(light);

// Ambient light
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Camera
const aspect = window.innerWidth / window.innerHeight;
let camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
camera.position.x = 0;
camera.position.y = 2;
camera.position.z = 10;
camera.lookAt(0, 0, 0);

// Renderer
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Shape flags
// Basic 3D shapes
let isCubeActive = false;
let isSphereActive = false;
let isCylinderActive = false;
let isConeActive = false;
let isRectangularPrismActive = false;
let isPyramidActive = false;

// Intermediate shapes
let isTriangularPrismActive = false;
let isHexagonalPrismActive = false;
let isPentagonalPrismActive = false;
let isEllipsoidActive = false;
let isTorusActive = false;
let isOctahedronActive = false;
let isTetrahedronActive = false;

// Advanced or composite shapes
let isDodecahedronActive = false;
let isIcosahedronActive = false;
let isFrustrumActive = false;
let isBipyramidActive = false;
let isCupolaActive = false;
let isAntiprismActive = false;

// Custom creative shapes
let isStarActive = false;
let isHeartActive = false;
let isCrescentActive = false;
let isSpiralActive = false;

// Animation loop
function animate() {
    console.log("TODO");
}

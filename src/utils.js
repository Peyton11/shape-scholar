// Peyton Gardner
// src/utils.js

// Uncomment the following line for local development:
// import * as THREE from 'three';

// Uncomment the following line for production. This is required to view in browsers:
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

// Enable Phong shading
export function enablePhongShading(activeShape) {
    activeShape.material = new THREE.MeshPhongMaterial({color: 0x808080, shininess: 100, specular: 0xFFFFFF});
}

// Disable Phong shading
export function disablePhongShading(activeShape) {
    activeShape.material = new THREE.MeshStandardMaterial({color: 0x808080});
}

// Peyton Gardner
// src/shapes/cube.js

// Uncomment the following line for local development:
// import * as THREE from 'three';

// Uncomment the following line for production. This is required to view in browsers:
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

export function createCube() {
    let geometry = new THREE.BoxGeometry(2, 2, 2);
    let material = new THREE.MeshStandardMaterial({color: 0x808080});
    let cube = new THREE.Mesh(geometry, material);
    return cube;
}

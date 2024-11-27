// Peyton Gardner
// threejs/shapes/nonagonal-prism.js

// Uncomment the following line for local development:
// import * as THREE from 'three';

// Uncomment the following line for production. This is required to view in browsers:
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

export function createNonagonalPrism() {
    const radius = 2;
    const height = 3;

    const geometry = new THREE.CylinderGeometry(radius, radius, height, 9);
    const material = new THREE.MeshBasicMaterial({ color: 0x808080});
    const nonagonalPrism = new THREE.Mesh(geometry, material);

    return nonagonalPrism;
}

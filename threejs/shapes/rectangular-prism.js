// Peyton Gardner
// threejs/shapes/rectangular-prism.js

// Uncomment the following line for local development:
// import * as THREE from 'three';

// Uncomment the following line for production. This is required to view in browsers:
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

export function createRectangularPrism() {

    let geometry = new THREE.BoxGeometry(5, 3, 3);
    let material = new THREE.MeshStandardMaterial({color: 0x808080});
    let rectangularPrism = new THREE.Mesh(geometry, material);

    return rectangularPrism;
}

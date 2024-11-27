// Peyton Gardner
// threejs/shapes/torus.js

// Uncomment the following line for local development:
// import * as THREE from 'three';

// Uncomment the following line for production. This is required to view in browsers:
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

export function createTorus() {

    const geometry = new THREE.TorusGeometry(2, 0.5);
    const material = new THREE.MeshBasicMaterial({color: 0x808080});
    const torus = new THREE.Mesh(geometry, material);

    return torus;
}

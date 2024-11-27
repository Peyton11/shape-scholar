// Peyton Gardner
// threejs/shapes/cylinder.js

// Uncomment the following line for local development:
// import * as THREE from 'three';

// Uncomment the following line for production. This is required to view in browsers:
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

export function createCylinder() {

    let geometry = new THREE.CylinderGeometry(1.5, 1.5, 4);
    let material = new THREE.MeshStandardMaterial({color: 0x808080});
    let cylinder = new THREE.Mesh(geometry, material);

    return cylinder;
}

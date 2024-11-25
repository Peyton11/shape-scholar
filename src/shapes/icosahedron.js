// Peyton Gardner
// src/shapes/icosahedron.js

// Uncomment the following line for local development:
// import * as THREE from 'three';

// Uncomment the following line for production. This is required to view in browsers:
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

export function createIcosahedron() {

    const radius = 2;

    // Create dodecahedron geometry with a specified radius
    const geometry = new THREE.IcosahedronGeometry(radius);

    // Create a basic material for the dodecahedron
    const material = new THREE.MeshBasicMaterial({color: 0x808080});

    // Create the mesh by combining the geometry and material
    const icosahedron = new THREE.Mesh(geometry, material);

    return icosahedron;
}

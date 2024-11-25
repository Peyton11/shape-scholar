// Peyton Gardner
// src/shapes/frustrum.js

// Uncomment the following line for local development:
// import * as THREE from 'three';

// Uncomment the following line for production. This is required to view in browsers:
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

export function createFrustrum() {

    const topRadius = 1;
    const bottomRadius = 2;
    const height = 2;
    const radialSegments = 100;

    // Create the frustum by using two cones with top and bottom radii
    const geometry = new THREE.CylinderGeometry(topRadius, bottomRadius, height, radialSegments, 1, false);

    // Create a material for the frustum
    const material = new THREE.MeshBasicMaterial({color: 0x808080});

    // Create the mesh by combining the geometry and material
    const frustum = new THREE.Mesh(geometry, material);

    return frustum;
}

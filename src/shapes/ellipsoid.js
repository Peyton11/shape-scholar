// Peyton Gardner
// src/shapes/ellipsoid.js

// Uncomment the following line for local development:
// import * as THREE from 'three';

// Uncomment the following line for production. This is required to view in browsers:
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

export function createEllipsoid() {

    const radiusX = 2;
    const radiusY = 3;
    const radiusZ = 2;

    // Create a sphere geometry with a low radius and a high segment count for smoothness
    const geometry = new THREE.SphereGeometry(1, 32, 32); // Unit sphere

    // Scale the geometry to stretch it into an ellipsoid
    geometry.scale(radiusX, radiusY, radiusZ);

    // Create a material for the ellipsoid
    const material = new THREE.MeshBasicMaterial({color: 0x808080});

    // Create the mesh
    const ellipsoid = new THREE.Mesh(geometry, material);

    return ellipsoid;
}

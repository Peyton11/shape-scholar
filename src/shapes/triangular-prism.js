// Peyton Gardner
// src/shapes/triangular-prism.js

// Uncomment the following line for local development:
// import * as THREE from 'three';

// Uncomment the following line for production. This is required to view in browsers:
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

export function createTriangularPrism() {

    // Define the vertices for the triangular prism
    const vertices = new Float32Array([
        // Triangle 1 (base)
        0, 1, 0,    // A (top vertex)
        -1, -1, 0,  // B (bottom-left vertex)
        1, -1, 0,   // C (bottom-right vertex)

        // Triangle 2 (top)
        0, 1, 2,    // D (top vertex of the back)
        -1, -1, 2,  // E (bottom-left vertex of the back)
        1, -1, 2,   // F (bottom-right vertex of the back)

        // Side faces (connecting the edges of the triangles)
        // AB to DE
        0, 1, 0,    // A
        0, 1, 2,    // D

        // BC to EF
        1, -1, 0,   // C
        1, -1, 2,   // F

        // CA to DF
        -1, -1, 0,  // B
        -1, -1, 2,  // E
    ]);

    // Define the indices (faces) of the triangular prism
    const indices = [
        // Base Triangle (front face)
        0, 1, 2,

        // Top Triangle (back face)
        3, 4, 5,

        // Side face (left rectangle)
        0, 1, 4,
        0, 4, 3,

        // Side face (right rectangle)
        1, 2, 5,
        1, 5, 4,

        // Side face (bottom rectangle)
        2, 0, 3,
        2, 3, 5
    ];

    // Create the geometry from the vertices and faces
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setIndex(indices);

    // Define the material for the prism (double-sided to avoid face culling)
    const material = new THREE.MeshPhongMaterial({color: 0x808080, flatShading: true, side: THREE.DoubleSide});

    // Create the mesh from the geometry and material
    const triangularPrism = new THREE.Mesh(geometry, material);

    return triangularPrism;
}

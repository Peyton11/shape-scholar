// Peyton Gardner
// src/shapes/pyramid.js

// Uncomment the following line for local development:
// import * as THREE from 'three';

// Uncomment the following line for production. This is required to view in browsers:
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

export function createPyramid() {

    const baseSize = 2;
    const height = 5;

    // Create an array to hold the vertices of the pyramid
    const vertices = [
        // Base vertices
        -baseSize, 0, -baseSize,  // v0
        baseSize, 0, -baseSize,  // v1
        baseSize, 0,  baseSize,  // v2
        -baseSize, 0,  baseSize,  // v3
        // Apex vertex
        0, height, 0            // v4
    ];

    // Create an array to hold the faces (triangles)
    const indices = [
        // Side faces
        0, 1, 4, // Front face
        1, 2, 4, // Right face
        2, 3, 4, // Back face
        3, 0, 4, // Left face

        // Base faces (two triangles)
        0, 1, 2, // Bottom face (first triangle)
        0, 2, 3  // Bottom face (second triangle)
    ];

    // Create BufferGeometry
    const geometry = new THREE.BufferGeometry();

    // Convert the vertices into a Float32Array and set as the geometry's position attribute
    const positions = new Float32Array(vertices);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Set the indices (faces) for the geometry
    geometry.setIndex(indices);

    // Compute normals for the lighting to work correctly
    geometry.computeVertexNormals();

    // Create the material and mesh
    const material = new THREE.MeshStandardMaterial({color: 0x808080, flatShading: true, side: THREE.DoubleSide});
    const pyramid = new THREE.Mesh(geometry, material);

    pyramid.position.set(0, -2, 0);

    return pyramid;
}

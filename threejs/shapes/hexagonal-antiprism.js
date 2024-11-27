// Peyton Gardner
// threejs/shapes/hexagonal-antiprism.js

// Uncomment the following line for local development:
// import * as THREE from 'three';

// Uncomment the following line for production. This is required to view in browsers:
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

export function createHexagonalAntiprism() {

    const radius = 3;
    const height = 3;

    const geometry = new THREE.BufferGeometry();

    // Number of sides (hexagonal)
    const sides = 6;

    // Arrays to hold vertex positions and face indices
    const positions = [];
    const indices = [];

    // Create the vertices for the top and bottom faces
    const topVertices = [];
    const bottomVertices = [];

    for (let i = 0; i < sides; i++) {
        const angle = (i * Math.PI * 2) / sides;

        // Calculate the x and z positions for the top and bottom faces
        const xTop = Math.cos(angle) * radius;
        const zTop = Math.sin(angle) * radius;
        const xBottom = Math.cos(angle + Math.PI / sides) * radius;
        const zBottom = Math.sin(angle + Math.PI / sides) * radius;

        // Top face vertex
        positions.push(xTop, height / 2, zTop);
        topVertices.push(positions.length / 3 - 1); // Store index

        // Bottom face vertex
        positions.push(xBottom, -height / 2, zBottom);
        bottomVertices.push(positions.length / 3 - 1); // Store index
    }

    // Add the center points for the top and bottom faces
    positions.push(0, height / 2, 0);  // Top center
    positions.push(0, -height / 2, 0); // Bottom center
    const topCenterIndex = positions.length / 3 - 2;
    const bottomCenterIndex = positions.length / 3 - 1;

    // Create the side faces (connecting the top and bottom vertices)
    for (let i = 0; i < sides; i++) {
        const next = (i + 1) % sides;

        // Side faces: connect the top and bottom faces
        indices.push(topVertices[i], topVertices[next], bottomVertices[next]);
        indices.push(topVertices[i], bottomVertices[next], bottomVertices[i]);
    }

    // Create the top and bottom faces (connecting to the center)
    for (let i = 0; i < sides; i++) {
        const next = (i + 1) % sides;

        // Top center face
        indices.push(topVertices[i], topVertices[next], topCenterIndex);

        // Bottom center face
        indices.push(bottomVertices[next], bottomVertices[i], bottomCenterIndex);
    }

    // Set the positions and indices for the geometry
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setIndex(indices);

    // Compute normals for lighting
    geometry.computeVertexNormals();

    // Create a material for the antiprism with double-sided rendering
    const material = new THREE.MeshBasicMaterial({color: 0x808080, side: THREE.DoubleSide });

    // Create the mesh by combining the geometry and material
    const antiprism = new THREE.Mesh(geometry, material);

    return antiprism;
}

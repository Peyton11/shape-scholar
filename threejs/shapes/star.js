// Peyton Gardner
// threejs/shapes/star.js

// Uncomment the following line for local development:
// import * as THREE from 'three';

// Uncomment the following line for production. This is required to view in browsers:
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

export function createStar() {

    // Define the star shape
    let shape = new THREE.Shape();

    let outerRadius = 1;
    let innerRadius = 0.4;
    let numPoints = 5;

    // Create the points for the star
    for (let i = 0; i < numPoints * 2; i++) {
        let angle = (i * Math.PI) / numPoints;
        let radius = i % 2 === 0 ? outerRadius : innerRadius;
        let x = Math.cos(angle) * radius;
        let y = Math.sin(angle) * radius;

        if (i === 0) {
            shape.moveTo(x, y);
        } else {
            shape.lineTo(x, y);
        }
    }

    shape.closePath(); // Close the path to make the shape complete

    // Define the extrusion settings
    let extrudeSettings = {
        depth: 0.5,   // Set the depth to create a 3D shape
        bevelEnabled: true, // Add bevel for a smoother edge
        bevelThickness: 0.1, // Thickness of the bevel
        bevelSize: 0.2, // Size of the bevel
        bevelOffset: 0, // Offset of the bevel from the edge
        bevelSegments: 3 // Number of segments in the bevel
    };

    // Create the geometry with extrusion
    let geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

    // Create a material for the star (can be MeshBasicMaterial, MeshStandardMaterial, etc.)
    let material = new THREE.MeshBasicMaterial({color: 0x808080, side: THREE.DoubleSide});

    // Create a mesh with the geometry and material
    let star = new THREE.Mesh(geometry, material);

    star.scale.set(2, 2, 2);

    return star;
}

// Peyton Gardner
// src/shapes/heart.js

// Uncomment the following line for local development:
// import * as THREE from 'three';

// Uncomment the following line for production. This is required to view in browsers:
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

export function createHeart() {

    let heartShape = new THREE.Shape();
    heartShape.moveTo(5, 5);
    heartShape.bezierCurveTo(5, 5, 4, 0, 0, 0);
    heartShape.bezierCurveTo(-6, 0, -6, 7, -6, 7);
    heartShape.bezierCurveTo(-6, 11, -3, 15.4, 5, 19);
    heartShape.bezierCurveTo(12, 15.4, 16, 11, 16, 7);
    heartShape.bezierCurveTo(16, 7, 16, 0, 10, 0);
    heartShape.bezierCurveTo(7, 0, 5, 5, 5, 5);

    // Extrude the shape to give it depth
    let extrudeSettings = {depth: 2};
    let geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);

    let material = new THREE.MeshBasicMaterial({color: 0x808080});
    let heart = new THREE.Mesh(geometry, material);
    heart.scale.set(0.25, -0.25, 0.25);
    heart.position.set(-1, 2, 0);

    return heart;
}

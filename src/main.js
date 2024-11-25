// Peyton Gardner
// src/main.js

// Uncomment the following line for local development:
// import * as THREE from 'three';

// Uncomment the following line for production. This is required to view in browsers:
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

import { createCube } from "./shapes/cube.js";
import { createSphere } from "./shapes/sphere.js";
import { createCylinder } from "./shapes/cylinder.js";
import { createCone } from "./shapes/cone.js"
import { createRectangularPrism } from "./shapes/rectangular-prism.js";
import { createPyramid } from "./shapes/pyramid.js";
import { createHeart } from "./shapes/heart.js";
import { createStar } from "./shapes/star.js";
import { createTriangularPrism } from "./shapes/triangular-prism.js";
import { createHexagonalPrism } from "./shapes/hexagonal-prism.js";
import { createPentagonalPrism } from "./shapes/pentagonal-prism.js";
import { createHeptagonalPrism } from "./shapes/heptagonal-prism.js";
import { createOctagonalPrism } from "./shapes/octagonal-prism.js";
import { createNonagonalPrism } from "./shapes/nonagonal-prism.js";
import { createEllipsoid } from "./shapes/ellipsoid.js";
import { createTorus } from "./shapes/torus.js";
import { createOctahedron } from "./shapes/octahedron.js";
import { createTetrahedron } from "./shapes/tetrahedron.js";
import { enablePhongShading, disablePhongShading } from "./utils.js";

// Create the scene
let scene = new THREE.Scene();

// Background
scene.background = new THREE.Color("#87CFEB");

// Directional light
const light = new THREE.DirectionalLight(0xFFFFFF, 1);
light.position.set(5, 5, 5);
scene.add(light);

// Ambient light
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Camera
const aspect = window.innerWidth / window.innerHeight;
let camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
camera.position.x = 0;
camera.position.y = 2;
camera.position.z = 10;
camera.lookAt(0, 0, 0);

// Renderer
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create each shape
let cube = createCube();
let sphere = createSphere();
let cylinder = createCylinder();
let cone = createCone();
let rectangularPrism = createRectangularPrism();
let pyramid = createPyramid();
let heart = createHeart();
let star = createStar();
let triangularPrism = createTriangularPrism();
let pentagonalPrism = createPentagonalPrism();
let hexagonalPrism = createHexagonalPrism();
let heptagonalPrism = createHeptagonalPrism();
let octagonalPrism = createOctagonalPrism();
let nonagonalPrism = createNonagonalPrism();
let ellipsoid = createEllipsoid();
let torus = createTorus();
let octahedron = createOctahedron();
let tetrahedron = createTetrahedron();

// Only one shape is allowed at once
let activeShape = cube;
scene.add(activeShape);
renderer.render(scene, camera);

// Flags to control states
let spinningForward = false;
let spinningBackward = false;
let spinningUpward = false;
let spinningDownward = false;

// Animation loop
function animate() {

    if (spinningForward) {
        activeShape.rotation.y += 0.01;
    } else if (spinningBackward) {
        activeShape.rotation.y -= 0.01
    } else if (spinningUpward) {
        activeShape.rotation.x -= 0.01;
    } else if (spinningDownward) {
        activeShape.rotation.x += 0.01;
    }

    renderer.render(scene, camera);
}

// View flag
let view = "standard";

// Handle "Change View" Button
let changeViewButton = document.getElementById("change-view-button");
changeViewButton.addEventListener("click", function() {

    console.log("\"Change View\" button was pressed");

    // Change to isometric view
    if (view === "standard") {
        view = "isometric";
        console.log("Changed to Isometric view");
        const distance = 8;
        camera.position.x = distance * Math.cos(Math.PI / 4);
        camera.position.y = distance;
        camera.position.z = distance * Math.sin(Math.PI / 4);
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);

        // Change to standard view
    } else if (view === "isometric") {
        view = "standard";
        console.log("Changed to Standard view");
        camera.position.x = 0;
        camera.position.y = 2;
        camera.position.z = 10;
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
    }
})

// Handle "Ctrl + v" key bind to change view
document.addEventListener("keydown", function(event) {

    if (event.ctrlKey && (event.key === 'v' || event.key === 'V')) {
        event.preventDefault();
        console.log("\"Ctrl + v\" was pressed");

        // Change to isometric view
        if (view === "standard") {
            view = "isometric";
            console.log("Changed to Isometric view");
            const distance = 8;
            camera.position.x = distance * Math.cos(Math.PI / 4);
            camera.position.y = distance;
            camera.position.z = distance * Math.sin(Math.PI / 4);
            camera.lookAt(0, 0, 0);
            renderer.render(scene, camera);

            // Change to standard view
        } else if (view === "isometric") {
            view = "standard";
            console.log("Changed to Standard view");
            camera.position.x = 0;
            camera.position.y = 2;
            camera.position.z = 10;
            camera.lookAt(0, 0, 0);
            renderer.render(scene, camera);
        }
    }
})

// Shading flag
let shading = false;

// Handle "Toggle Shading" Button
let toggleShadingButton = document.getElementById("toggle-shading-button");
toggleShadingButton.addEventListener("click", function() {

    console.log("\"Toggle Shading\" button was clicked");
    console.log("Shading toggled");

    if (shading === true) {
        shading = false;
        disablePhongShading(activeShape);
    } else {
        shading = true;
        enablePhongShading(activeShape);
    }
    renderer.render(scene, camera);
})

// Handle "Ctrl + X" key bind to toggle shading
document.addEventListener("keydown", function(event) {

    if (event.ctrlKey && (event.key === 'x' || event.key === 'X')) {
        event.preventDefault();
        console.log("\"Ctrl + x\" was pressed");
        console.log("Textures toggled");

        // Switch to untextured robot
        if (shading === true) {
            shading = false;
            disablePhongShading(activeShape);
        } else {
            shading = true;
            enablePhongShading(activeShape);
        }
        renderer.render(scene, camera);
    }
})

// Add event listener to control spinning using WASD
document.addEventListener("keydown", function(event) {

    // Start spin forward when 'd' is pressed
    if (event.key === 'd' || event.key === 'D') {
        spinningForward = true;
        spinningBackward = false;
        spinningUpward = false;
        spinningDownward = false;
        console.log("'s' key was pressed down");
    }
    // Start spin backward when 'a' is pressed
    else if (event.key === 'a' || event.key === 'A') {
        spinningForward = false;
        spinningBackward = true;
        spinningUpward = false;
        spinningDownward = false;
        console.log("'a' key was pressed down");
    }
    // Start spin upward when 'w' is pressed
    else if (event.key === 'w' || event.key === 'W') {
        spinningForward = false;
        spinningBackward = false;
        spinningUpward = true;
        spinningDownward = false;
        console.log("'w' key was pressed down");
    }
    // Start spin backward when 's' is pressed
    else if (event.key === 's' || event.key === 'S') {
        spinningForward = false;
        spinningBackward = false;
        spinningUpward = false;
        spinningDownward = true;
        console.log("'s' key was pressed down");
    }
});

// Stop spinning when WASD is released
document.addEventListener("keyup", function(event) {

    if (event.key === 'd' || event.key === 'D') {
        spinningForward = false;
        console.log("Spin forward stopped");
    } else if (event.key === 'a' || event.key === 'A') {
        spinningBackward = false;
        console.log("Spin backward stopped");
    } else if (event.key === 'w' || event.key === 'W') {
        spinningUpward = false;
        console.log("Spin upward stopped");
    } else if (event.key === 's' || event.key === 'S') {
        spinningDownward = false;
        console.log("Spin downward stopped");
    }
});

// Handle "Spin Forward" button
let spinForwardButton = document.getElementById("spin-forward-button");
spinForwardButton.addEventListener("click", function() {

    console.log("\"Spin Forward\" button was clicked");

    if (spinningForward === false)
        spinningForward = true;
    else
        spinningForward = false;

    // Stop other spin animations
    if (spinningBackward === true || spinningUpward === true || spinningDownward === true) {
        spinningBackward = false;
        spinningUpward = false;
        spinningDownward = false;
    }
})

// Handle "Spin Backward" button
let spinBackwardButton = document.getElementById("spin-backward-button");
spinBackwardButton.addEventListener("click", function() {

    console.log("\"Spin Backward\" button was clicked");

    if (spinningBackward === false)
        spinningBackward = true;
    else
        spinningBackward = false;

    // Stop other spin animations
    if (spinningForward === true || spinningUpward === true || spinningDownward === true) {
        spinningForward = false;
        spinningUpward = false;
        spinningDownward = false;
    }
})

// Handle "Spin Upward" button
let spinUpwardButton = document.getElementById("spin-upward-button");
spinUpwardButton.addEventListener("click", function() {

    console.log("\"Spin Upward\" button was clicked");

    if (spinningUpward === false)
        spinningUpward = true;
    else
        spinningUpward = false;

    // Stop other spin animations
    if (spinningForward === true || spinningBackward === true || spinningDownward === true) {
        spinningForward = false;
        spinningBackward = false;
        spinningDownward = false;
    }
})

// Handle "Spin Downward" button
let spinDownwardButton = document.getElementById("spin-downward-button");
spinDownwardButton.addEventListener("click", function() {

    console.log("\"Spin Downward\" button was clicked");

    if (spinningDownward === false)
        spinningDownward = true;
    else
        spinningDownward = false;

    // Stop other spin animations
    if (spinningForward === true || spinningBackward === true || spinningUpward === true) {
        spinningForward = false;
        spinningBackward = false;
        spinningUpward = false;
    }
})

renderer.setAnimationLoop(animate);

// Map shape-button IDs for activeShape
const shapeMapping = {
    "cube-button": cube,
    "sphere-button": sphere,
    "cylinder-button": cylinder,
    "cone-button": cone,
    "pyramid-button": pyramid,
    "triangular-prism-button": triangularPrism,
    "rectangular-prism-button": rectangularPrism,
    "pentagonal-prism-button": pentagonalPrism,
    "hexagonal-prism-button": hexagonalPrism,
    "heptagonal-prism-button": heptagonalPrism,
    "octagonal-prism-button": octagonalPrism,
    "nonagonal-prism-button": nonagonalPrism,
    "ellipsoid-button": ellipsoid,
    "torus-button": torus,
    "octahedron-button": octahedron,
    "tetrahedron-button": tetrahedron,
    "dodecahedron": "dodecahedron",
    "icosahedron-button": "icosahedron",
    "frustrum-button": "frustrum",
    "antiprism-button": "antiprism",
    "star-button": star,
    "heart-button": heart,
};

// Map shape-button IDs to modify #current-shape-heading
const shapeMappingHeading = {
    "cube-button": "Cube",
    "sphere-button": "Sphere",
    "cylinder-button": "Cylinder",
    "cone-button": "Cone",
    "pyramid-button": "Pyramid",
    "triangular-prism-button": "Triangular Prism",
    "rectangular-prism-button": "Rectangular Prism",
    "pentagonal-prism-button": "Pentagonal Prism",
    "hexagonal-prism-button": "Hexagonal Prism",
    "heptagonal-prism-button": "Heptagonal Prism",
    "octagonal-prism-button": "Octagonal Prism",
    "nonagonal-prism-button": "Nonogonal Prism",
    "ellipsoid-button": "Ellipsoid",
    "torus-button": "Torus",
    "octahedron-button": "Octahedron",
    "tetrahedron-button": "Tetrahedron",
    "dodecahedron": "Dodecahedron",
    "icosahedron-button": "Icosahedron",
    "frustrum-button": "Frustrum",
    "antiprism-button": "Antiprism",
    "star-button": "Star",
    "heart-button": "Heart",
};

// Control current shape heading
let currentShapeHeading = document.getElementById("current-shape-heading");

// Handle shape buttons when clicked. Change button color and active shape
const shapeButtons = document.querySelectorAll(".shape-button");
shapeButtons.forEach((shapeButton) => {
    shapeButton.addEventListener("click", () => {
        console.log(`${shapeButton.id} was clicked`);

        // Update current shape heading
        currentShapeHeading.textContent = `Current Shape: ${shapeMappingHeading[shapeButton.id]}`;

        // Set all buttons to red
        shapeButtons.forEach((button) => {
            button.style.background = "#D94E4E";
        });

        // Set the clicked button to green
        shapeButton.style.background = "#4CAF50";

        // Update active shape
        const newShape = shapeMapping[shapeButton.id];
        if (activeShape) {
            scene.remove(activeShape);
        }
        activeShape = newShape;
        scene.add(activeShape);

        renderer.render(scene, camera);
    });
});

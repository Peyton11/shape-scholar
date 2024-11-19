// Peyton Gardner
// index.js

// Flag to toggle menu
let menu = false;

// Get button ids
let changeViewButton = document.getElementById("change-view-button");
let toggleTexturesButton = document.getElementById("toggle-textures-button");
let spinForwardButton = document.getElementById("spin-forward-button");
let spinBackwardButton = document.getElementById("spin-backward-button");
let jumpButton = document.getElementById("jump-button");
let showKeybindsButton = document.getElementById("show-keybinds-button");

// Keybinds list
let keybindList = document.getElementById("keybind-list");

// Toggle menu when the "Toggle Menu" button is clicked
let toggleMenuButton = document.getElementById("toggle-menu-button");
toggleMenuButton.addEventListener("click", function() {

    console.log("\"Toggle Menu\" was clicked");

    if (menu === true) {
        changeViewButton.style.visibility = "hidden";
        toggleTexturesButton.style.visibility = "hidden";
        spinForwardButton.style.visibility = "hidden";
        spinBackwardButton.style.visibility = "hidden";
        jumpButton.style.visibility = "hidden";
        showKeybindsButton.style.visibility = "hidden";
        keybindList.style.visibility = "hidden";
        menu = false;
    } else {
        changeViewButton.style.visibility = "visible";
        toggleTexturesButton.style.visibility = "visible";
        spinForwardButton.style.visibility = "visible";
        spinBackwardButton.style.visibility = "visible";
        jumpButton.style.visibility = "visible";
        showKeybindsButton.style.visibility = "visible";
        menu = true;
    }
})

// Flag to show keybinds
let keybinds = false;

// Show keybinds when the "Show Keybinds" button is clicked
showKeybindsButton.addEventListener("click", function() {
    console.log("\"Show Keybinds\" button was clicked");

    if (keybinds === true) {
        keybindList.style.visibility = "hidden";
        keybinds = false;
    } else {
        keybindList.style.visibility = "visible";
        keybinds = true;
    }
})
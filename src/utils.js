// Peyton Gardner
// src/utils.js

// Toggles all values in an object to false
export function setAllFalse(object) {

    for (let key in object) {
        object[key] = false;
    }
}

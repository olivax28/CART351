/**
 * Fortune
 * Olivia Axiuk and Julia Axiuk

* https://p5js.org/
 */

"use strict";






const fortuneText = [
    "Fortune 01 has a random fill",
    "Fortune 02 has a random fill",
    "Fortune 03 has a random fill",
    "Fortune 04 has a random fill"
]


// function preload() {
//     //load story mode dialogue data

//     enemySprite = loadImage("assets/images/enemyShip.png");

//     titleScreenIMG = loadImage("assets/images/titleScreen.png");
//     soundFormats("mp3");
//     shootSound = loadSound("assets/sounds/8bit_shoot.mp3");
// }


let state = "fortune"

/**
 * creates the canvas
*/
function setup() {
    createCanvas(1080, 720);
}


/**
 * drawws black background and sets the states
*/
function draw() {
    background(0, 0, 0);

    if (state === "fortune") {
        fortune();
    }
}

function fortune() {
    background(0, 250, 0);
}


















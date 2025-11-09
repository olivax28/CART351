/**
 * Fortune
 * Olivia Axiuk and Julia Axiuk

* https://p5js.org/
 */

"use strict";


const fortuneText = [
    "Fortune 01 has a random fill",
    "Fortune 01 has two lines",
    "This is the start of Fortune 02",
    "Fortune 02 has a random fill",
    "Fortune 03 has a random fill",
    "Fortune 03 has three lines",
    "End pf Fortune 03"
]

let speechBox = {
    x: 50,
    y: 150,
    width: 300,
    height: 80,
    padding: 20,
    fontSize: 18
};

let dialogueIndex = 0;


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
        showFortune(fortuneText);

    }
}

function fortune() {
    background(59, 13, 79);
    //select random fortune on a click

}

function mouseClicked() {
    if (state === "fortune") {
        dialogueIndex++;
    }
}



function showFortune(dialogue) {

    // The background box
    push();
    fill(0);
    stroke(255);
    strokeWeight(3);
    rect(speechBox.x, speechBox.y, speechBox.width, speechBox.height);
    pop();

    //the dialogue itself
    push();
    fill(255);
    textSize(18);
    text(dialogue[dialogueIndex], speechBox.x + speechBox.padding, speechBox.y + speechBox.padding, speechBox.width - 2 * speechBox.padding, speechBox.height - 2 * speechBox.padding);
    pop();
}













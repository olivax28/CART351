/**
 * Fortune
 * Olivia Axiuk and Julia Axiuk

* https://p5js.org/
 */

"use strict";


const fortuneText01 = [
    "Fortune 01 has a random fill",
    "Fortune 01 has two lines"

]

const fortuneText02 = [
    "This is the start of Fortune 02",
    "Fortune 02 has a random fill"
]
const fortuneText03 = [
    "Fortune 03 has a random fill",
    "Fortune 03 has three lines",
    "End of Fortune 03"
]
let speechBox = {
    x: 350,
    y: 300,
    width: 400,
    height: 100,
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


// let state = "fortune"

let state = "start"


let nameToSave = ""

let birthYear = ""

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
        showFortune(fortuneText01);

    }

    if (state === "start") {
        start();


    }
}


function start() {
    displayInfo(`Name: ${nameToSave} Birthday: ${birthYear}`, width / 2, height / 2 + 20);
    // sendData({ id: nameToSave, score: score });

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



//check key press
function keyPressed(e) {
    // console.log("key");
    console.log(e);
    keyCode = e.keyCode;

    // save user name
    if (state === "start") {
        //check if is lower /uppercase letter
        if (
            (e.keyCode >= 65 && e.keyCode <= 90) ||
            (e.keyCode >= 97 && e.keyCode <= 122)
        ) {
            nameToSave += key;

        }
        // user finished
        else if (e.keyCode === 13) {
            state = "fortune"
        }

    }

}


function displayInfo(infoText, x, y) {
    push();
    fill("#ee53fcff");
    textSize(30);
    textAlign(CENTER);
    text(infoText.toUpperCase(), x, y);
    pop();
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













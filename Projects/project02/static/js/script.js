/**
 * Fortune
 * Olivia Axiuk and Julia Axiuk

* https://p5js.org/
 */

"use strict";



const fortuneText01 = [
    "Luck awaits you in the near future",
    "But having an open mind is required to accept it",
    "But not too open, you need to keep your brain in!"

]

const fortuneText02 = [
    "A strong heart and a sure soul",
    "Is the best guidance one can have...",
    "Google maps is pretty good too."
]
const fortuneText03 = [
    "Treading off the beaten path...",
    "You find yourself alone, but free...",
    "Something lovely waits for thee...",
    "A delicious brioche with some tea..."
]
const fortuneText04 = [
    "Things may not always be so black and white",
    "There are other really good colors too",
    "A red scarf will make you more visible in the snow."
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


let finalFortune = undefined;





function preload() {
    //load story mode dialogue data
    BG_Image = loadImage("static/images/BG_Stars.png");
    // soundFormats("mp3");
    // shootSound = loadSound("assets/sounds/8bit_shoot.mp3");
}


// let state = "fortune"

let state = "start"

let inputState = "name"

let nameToSave = ""

let birthYear = ""

let resetTextName = ""

let resetTextyear = ""

let resetIndex = 0

let BG_Image = undefined
/**
 * creates the canvas
*/
function setup() {
    let canvas = createCanvas(1080, 720);
    canvas.parent("p5Container"); // Attach the canvas to the div with id 'p5Container'
}


/**
 * drawws black background and sets the states
*/
function draw() {
    background(0, 0, 0);

    if (state === "fortune") {
        fortune();


    }

    if (state === "start") {
        start();


    }
}


function start() {
    displayInfo(`Name: ${nameToSave} Birth Year: ${birthYear}`, width / 2, height / 2 + 20);


}

function fortune() {
    background(59, 13, 79);
    imageMode(CENTER);
    image(BG_Image, width / 2, height / 2);
    showFortune(finalFortune);
    //select random fortune on a click

}

//check key press
function keyPressed(e) {
    // console.log("key");
    console.log(e);
    keyCode = e.keyCode;

    // save user name
    if (state === "start") {
        //check if is lower /uppercase letter
        if (inputState === "name") {

            if ((e.keyCode >= 65 && e.keyCode <= 90) ||
                (e.keyCode >= 97 && e.keyCode <= 122)) {
                nameToSave += key;
            }

            if (e.keyCode === 13) {
                inputState = "bday"
            }

        }

        else if (inputState === "bday") {
            console.log(birthYear)
            if (birthYear.length >= 2 && e.keyCode !== 13) {
                state = "fortune"
                calcFortune();
                sendData({ name: nameToSave, birthdate: birthYear, fortune: finalFortune });
            }

            else if (e.keyCode >= 48 && e.keyCode <= 58) {
                birthYear += key;
            }

            else if (e.keyCode === 13) {
                state = "fortune"
                calcFortune();
                sendData({ name: nameToSave, birthdate: birthYear, fortune: finalFortune });



            }


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



function calcFortune() {
    const chance = parseInt(birthYear) / 100
    //inspired by probability sketch from the p5 documentation (concidentally by Pippin Barr)
    // Very rare! 1% of the time!
    if (chance < 0.01) {
        finalFortune = fortuneText01;
    }
    // Between 0.01 and 0.21 means this one is 20% of the time
    else if (chance < 0.21) {
        finalFortune = fortuneText02;
    }
    // Between 0.21 and 0.51 means this one is 30% of the time
    else if (chance < 0.51) {
        finalFortune = fortuneText03
    }
    // Between 0.51 and 1.0 means this one is 49% of the time
    else {
        finalFortune = fortuneText04
    }
    console.log(chance)

    // So, we have put a value into drop based on probabilities!
}


function mouseClicked() {
    if (state === "fortune") {
        dialogueIndex++;
        if (dialogueIndex === finalFortune.length) {
            console.log(finalFortune.length)
            reset();
        }
    }

}

function reset() {
    state = "start"
    inputState = "name"
    nameToSave = resetTextName
    birthYear = resetTextyear
    dialogueIndex = resetIndex

}


// * function to send data to server can use JavaScrip if not in p5 function ex:outside draw*/
async function sendData(gameData) {
    const queryParams = new URLSearchParams(gameData).toString();
    console.log(queryParams);
    //build the url -end point
    const url = `/postDataFetch?${queryParams}`;
    try {
        let res = await fetch(url);
        let resJSON = await res.json();
        console.log(resJSON);
        document.querySelector("#name").innerHTML = gameData.name
        document.querySelector("#birthyear").innerHTML = gameData.birthdate
        document.querySelector("#text").innerHTML = gameData.fortune
        let newDiv = document.createElement("div")
        newDiv.innerHTML = "Name:" + " " + gameData.name + " " + "Birth Year:" + " " + gameData.birthdate + " " + "Fortune:" + " " + gameData.fortune
        document.querySelector("#resultcards").appendChild(newDiv)
        newDiv.classList.add("histfortune")
    } catch (err) {
        console.log(err);
    }
}











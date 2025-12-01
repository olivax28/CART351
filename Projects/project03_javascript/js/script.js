/**
 * Desktop
 * Olivia Axiuk and Julia Axiuk

* https://p5js.org/
 */

"use strict";


// const fortuneText01 = [
//     "Fortune 01 has a random fill",
//     "Fortune 01 has two lines"

// ]

// const fortuneText02 = [
//     "This is the start of Fortune 02",
//     "Fortune 02 has a random fill"
// ]
// const fortuneText03 = [
//     "Fortune 03 has a random fill",
//     "Fortune 03 has three lines",
//     "End of Fortune 03"
// ]
// const fortuneText04 = [
//     "Fortune 04 has a random fill",
//     "Fortune 04 has three lines",
//     "End of Fortune 04"
// ]
// let speechBox = {
//     x: 350,
//     y: 300,
//     width: 400,
//     height: 100,
//     padding: 20,
//     fontSize: 18
// };

// let dialogueIndex = 0;


// let finalFortune = undefined;

let desktopIMG = undefined

const IconTrash = {
    x: 10,
    y: 400,
    w: 50,
    h: 50,
    fill: "#25eeccff",
    state: "trashbin"

}


const IconComputer = {
    x: 10,
    y: 150,
    w: 50,
    h: 50,
    fill: "#36ee25ff",
    state: "myComputer"

}



const backButton = {
    x: 500,
    y: 150,
    w: 50,
    h: 50,
    fill: "#6b25eeff",
    state: "desktop"

}


let fishes = [];


// const fish01 = {
//     x: 0,
//     y: 200, // Will be random
//     size: 50,
//     // secondSize: 30,
//     // centerSize: 15,
//     speed: 1.5,
//     mainFill: "#cb0000",
//     // secondFill: "#FFFFFF"
// };


let numOfFish = 5



function preload() {
    //load images
    desktopIMG = loadImage("assets/desktop.png");
    soundFormats("mp3");
    // shootSound = loadSound("assets/sounds/8bit_shoot.mp3");
}


// let state = "fortune"

let state = "myComputer"

// let inputState = "name"

// let nameToSave = ""

// let birthYear = ""

/**
 * creates the canvas
*/
function setup() {
    createCanvas(1280, 1024);
    addFish();
}


/**
 * drawws black background and sets the states
*/
function draw() {
    background(0, 0, 0);


    if (state === "desktop") {
        desktop();


    }

    if (state === "trashbin") {
        trashBin();


    }

    if (state === "myComputer") {
        myComputer();


    }

    console.log(state)
}


function desktop() {
    background(50, 0, 0);
    push();
    imageMode(CENTER);
    image(desktopIMG, width / 2, height / 2);
    pop();
    iconPick(IconTrash)
    drawselect(IconTrash)
    iconPick(IconComputer)
    drawselect(IconComputer)

    // displayInfo(`Name: ${nameToSave} Birth Year: ${birthYear}`, width / 2, height / 2 + 20);
    // sendData({ name: nameToSave, birthdate:  });

}


function drawselect(icon) {
    // push();
    // // textAlign(RIGHT, TOP);
    // // textFont('Courier New');
    // // textSize(100);
    // fill(icon.fill);
    // text(scoreText, width, 0);
    // pop();
    push();
    noStroke();
    fill(icon.fill);
    rect(icon.x, icon.y, icon.w, icon.h);
    pop();

}


function trashBin() {
    background(50, 0, 0);
    iconPick(backButton)
    drawselect(backButton)


}



function myComputer() {
    background(0, 100, 200);

    for (let i of fishes) {
        drawFish(i);
        animateFish(i);
    }
    // drawFish(fish01)
    // animateFish(fish01)

}



function createfish() {

    const fish01 = {
        x: 0,
        x: random(0, width),
        size: 50,
        // secondSize: 30,
        // centerSize: 15,
        speed: 1.5,
        mainFill: "#cb0000",
        // secondFill: "#FFFFFF"
    };

    return fish01
}

// draws the fish for My Computer
function drawFish(fish) {
    push();
    noStroke();
    fill(fish.mainFill);
    ellipse(fish.x, fish.y, fish.size);
    pop();
    push();
    noStroke();
}


function animateFish(fish) {
    // Move the target
    fish.x += fish.speed;
    // Handle the target going off the canvas
    if (fish.x > width) {
        resetFish(fish);
    }
}


function resetFish(fish) {
    fish.x = 0;
    fish.y = random(0, 300);
}


// detects the overlap of the mouse over the title box 
function iconPick(icon) {
    if (state === "desktop" || state === "trashbin") {
        const mouseIconOverlap = mouseX > icon.x &&
            mouseX < icon.x + icon.w &&
            mouseY > icon.y &&
            mouseY < icon.y + icon.h;

        if (mouseIconOverlap && mouseIsPressed) {
            state = icon.state
        }
    }
}



function addFish() {

    for (let i = 0; i < numOfFish; i++) {
        const fish = createfish();
        fishes.push(fish);

        console.log("fish created")

    }

}

// NOTE to have the back button working in all the states, we can add that into the state object and factor it into iconPick

// function fortune() {
//     background(59, 13, 79);
//     showFortune(finalFortune);
//     //select random fortune on a click

// }

// function mouseClicked() {
//     if (state === "fortune") {
//         dialogueIndex++;
//     }

// }

// //check key press
// function keyPressed(e) {
//     // console.log("key");
//     console.log(e);
//     keyCode = e.keyCode;

//     // save user name
//     if (state === "start") {
//         //check if is lower /uppercase letter
//         if (inputState === "name") {

//             if ((e.keyCode >= 65 && e.keyCode <= 90) ||
//                 (e.keyCode >= 97 && e.keyCode <= 122)) {
//                 nameToSave += key;
//             }

//             if (e.keyCode === 13) {
//                 inputState = "bday"
//             }

//         }

//         else if (inputState === "bday") {
//             console.log(birthYear)
//             if (birthYear.length >= 2 && e.keyCode !== 13) {
//                 state = "fortune"
//                 calcFortune();
//             }

//             else if (e.keyCode >= 48 && e.keyCode <= 58) {
//                 console.log("tesat")
//                 console.log(key)
//                 birthYear += key;
//             }

//             else if (e.keyCode === 13) {
//                 state = "fortune"
//                 calcFortune();
//             }

//         }


//     }

// }



// function displayInfo(infoText, x, y) {
//     push();
//     fill("#ee53fcff");
//     textSize(30);
//     textAlign(CENTER);
//     text(infoText.toUpperCase(), x, y);
//     pop();
// }



// function showFortune(dialogue) {

//     // The background box
//     push();
//     fill(0);
//     stroke(255);
//     strokeWeight(3);
//     rect(speechBox.x, speechBox.y, speechBox.width, speechBox.height);
//     pop();

//     //the dialogue itself
//     push();
//     fill(255);
//     textSize(18);
//     text(dialogue[dialogueIndex], speechBox.x + speechBox.padding, speechBox.y + speechBox.padding, speechBox.width - 2 * speechBox.padding, speechBox.height - 2 * speechBox.padding);
//     pop();
// }



// function calcFortune() {
//     const chance = parseInt(birthYear) / 100
//     //inspired by probability sketch from the p5 documentation (concidentally by Pippin Barr)
//     // Very rare! 1% of the time!
//     if (chance < 0.01) {
//         finalFortune = fortuneText01;
//     }
//     // Between 0.01 and 0.21 means this one is 20% of the time
//     else if (chance < 0.21) {
//         finalFortune = fortuneText02;
//     }
//     // Between 0.21 and 0.51 means this one is 30% of the time
//     else if (chance < 0.51) {
//         finalFortune = fortuneText03
//     }
//     // Between 0.51 and 1.0 means this one is 49% of the time
//     else {
//         finalFortune = fortuneText04
//     }
//     console.log(chance)

//     // So, we have put a value into drop based on probabilities!
// }














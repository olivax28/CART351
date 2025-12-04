/**
 * Desktop
 * Olivia Axiuk and Julia Axiuk

* https://p5js.org/
 */




"use strict";


//   /******************* RUN QUERY***************************  */
async function runQuery() {
    // // //build the url -end point
    const url = '/senddatatoP5';

    let res = await fetch(url);
    resJSON = await res.json();
    console.log(resJSON.data);
    addFish(resJSON.data.length);

    //   state = "welcome";
    state = "welcome";
    // return resJSON

}

let desktopIMG = undefined

const IconTrash = {
    x: 10,
    y: 400,
    w: 50,
    h: 50,
    fill: "#25eeccff",
    state: "trashbin"

}

let resJSON = undefined


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

const WChildhood = {
    x: 500,
    y: 150,
    w: 50,
    h: 50,
    fill: "#6b25eeff",
    catr: "childhood"

}
const WGood = {
    x: 300,
    y: 150,
    w: 50,
    h: 50,
    fill: "#25ee65ff",
    catr: "Good"

}
const Wbad = {
    x: 200,
    y: 150,
    w: 50,
    h: 50,
    fill: "#ee25a8ff",
    catr: "Bad"

}



let fishes = [];



let numOfFish = 5



function preload() {
    //load images
    desktopIMG = loadImage("./static/assets/desktop.png");
    soundFormats("mp3");


    // shootSound = loadSound("assets/sounds/8bit_shoot.mp3");
}


// let state = "fortune"

let state = "loading"

let inputState = "name"

let nameToSave = ""

let enteredMemory = ""
let memoryType = ""



/**
 * creates the canvas
*/
function setup() {
    createCanvas(1280, 1024);
    runQuery();
    //  canvas.parent("p5Container"); // Attach the canvas to the div with id 'p5Container'
    // addFish();
}


/**
 * drawws black background and sets the states
*/
function draw() {
    background(0, 0, 0);

    if (state === "welcome") {
        welcomePage();


    }
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



function welcomePage() {
    background(200, 200, 0);

    displayInfo(`Name: ${nameToSave} Memory: ${enteredMemory}`, width / 2, height / 2 + 20);
    // sendData({ name: nameToSave, birthdate: birthYear});
    Wdrawselect(WChildhood);
    Wdrawselect(WGood);
    Wdrawselect(Wbad);
    wIconPick(WChildhood);
    wIconPick(Wbad);
    wIconPick(WGood);

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
function Wdrawselect(welcomeIcon) {
    // push();
    // // textAlign(RIGHT, TOP);
    // // textFont('Courier New');
    // // textSize(100);
    // fill(icon.fill);
    // text(scoreText, width, 0);
    // pop();
    push();
    noStroke();
    fill(welcomeIcon.fill);
    rect(welcomeIcon.x, welcomeIcon.y, welcomeIcon.w, welcomeIcon.h);
    pop();

}


function trashBin() {
    background(50, 0, 0);
    iconPick(backButton);
    drawselect(backButton);
    drawBadEye();


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

function displayInfo(infoText, x, y) {
    push();
    fill("#ee53fcff");
    textSize(30);
    textAlign(CENTER);
    text(infoText.toUpperCase(), x, y);
    pop();
}


function createfish() {

    const fish01 = {
        x: random(-5, 0),
        y: random(0, height),
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
function wIconPick(welcomeIcon) {
    if (state === "welcome") {
        const mouseIconOverlap = mouseX > welcomeIcon.x &&
            mouseX < welcomeIcon.x + welcomeIcon.w &&
            mouseY > welcomeIcon.y &&
            mouseY < welcomeIcon.y + welcomeIcon.h;

        if (mouseIconOverlap && mouseIsPressed) {
            memoryType = welcomeIcon.catr
        }
        // sendData({ catr: welcomeIcon.catr});
    }
}



function addFish(fishNum) {

    console.log(fishNum)
    for (let i = 0; i < fishNum; i++) {
        const fish = createfish();
        fishes.push(fish);
        console.log("fish created")

    }

}




function drawBadEye() {
    // the base code for the eye was found and modified from p5.js.org by user koolaid krusade
    let centerX = width / 2;
    let centerY = height / 2;

    let d = 300;

    let x1 = map(mouseX, 0, width, centerX - d / 6, centerX + d / 6,);
    let y = map(mouseY, 0, height, centerY - d / 6, centerY + d / 6,);


    // Eye balls
    fill("#ffffffff");
    ellipse(width / 2, height / 2, 400, 200);

    // Pupil
    fill("#000000ff");
    circle(x1, y, 150);

}

// NOTE to have the back button working in all the states, we can add that into the state object and factor it into iconPick


//check key press
function keyPressed(e) {
    // console.log("key");
    console.log(e);
    keyCode = e.keyCode;

    // save user name
    if (state === "welcome") {
        //check if is lower /uppercase letter
        if (inputState === "name") {

            if ((e.keyCode >= 65 && e.keyCode <= 90) ||
                (e.keyCode >= 97 && e.keyCode <= 122)) {
                nameToSave += key;
            }

            if (e.keyCode === 13) {
                inputState = "memory"
            }

        }

        else if (inputState === "memory") {

            if (enteredMemory.length >= 100 && e.keyCode !== 13) {
                state = "desktop"

                sendData({ name: nameToSave, memory: enteredMemory, type: memoryType });

            }

            else if ((e.keyCode >= 65 && e.keyCode <= 90) ||
                (e.keyCode >= 97 && e.keyCode <= 122)) {

                enteredMemory += key;
            }

            else if (e.keyCode === 13) {
                state = "desktop"
                sendData({ name: nameToSave, memory: enteredMemory, type: memoryType });

            }

        }


    }

}

async function sendData(gameData) {
    const queryParams = new URLSearchParams(gameData).toString();
    console.log(queryParams);
    //build the url -end point
    const url = `/getDataFromP5?${queryParams}`;
    try {
        let res = await fetch(url);
        let resJSON = await res.json();
        console.log(resJSON);
        console.log("gameDataSent");
    } catch (err) {
        console.log(err);
    }
}












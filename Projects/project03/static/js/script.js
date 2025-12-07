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
    addTV(resJSON.data.length);
    // determineFishText();

    //   state = "welcome";
    state = "welcome";
    // return resJSON

}



const IconTrash = {
    x: 10,
    y: 400,
    w: 50,
    h: 50,
    fill: "#25eeccff",
    state: "trashbin"

}
let fishBlurb = {
    x: undefined,
    y: undefined,
    text: undefined,
    width: undefined,
    length: undefined

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
    x: 350,
    y: 300,
    w: 50,
    h: 50,
    fill: "#6b25eeff",
    catr: "childhood"

}
const WGood = {
    x: 450,
    y: 300,
    w: 50,
    h: 50,
    fill: "#25ee65ff",
    catr: "Good"

}
const Wbad = {
    x: 550,
    y: 300,
    w: 50,
    h: 50,
    fill: "#ee25a8ff",
    catr: "Bad"

}


//arrays dfined for the data visualizations
let fishes = [];
let TVs = [];


let fishtext = undefined

let fishcolor = undefined

let fishSprite = undefined
let desktopIMG = undefined
let lionFishIMG = undefined
let clownFishIMG = undefined
let blueFishIMG = undefined
let fishBG = undefined
let fishLamp = undefined
let tvSPRITE = undefined

function preload() {
    //load images
    desktopIMG = loadImage("./static/assets/desktop.png");
    lionFishIMG = loadImage("./static/assets/lionfish.png");
    clownFishIMG = loadImage("./static/assets/clownfish.png");
    blueFishIMG = loadImage("./static/assets/bluefish.png");
    fishBG = loadImage("./static/assets/fish_bg.png");
    fishLamp = loadImage("./static/assets/fish_lamp.png");
    soundFormats("mp3");
    tvSPRITE = loadImage("./static/assets/tv_sprite.png");

    // shootSound = loadSound("assets/sounds/8bit_shoot.mp3");
}


// let state = "fortune"

let state = "loading"

let inputState = "name"

let nameToSave = ""

let enteredMemory = ""
let memoryType = ""

let infoBox = {
    width: 100,
    height: 50,
    padding: 5,
    fontSize: 18
};

/**
 * creates the canvas
*/
function setup() {
    createCanvas(1024, 768);
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
    background(250, 250, 250);

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

    for (let i of TVs) {
        drawTv(i);
    }
    drawBadEye();
    iconPick(backButton);
    drawselect(backButton);


}



function myComputer() {
    background(0, 100, 200);
    push();
    imageMode(CENTER);
    image(fishBG, width / 2, height / 2 - 50);
    pop();

    for (let i of fishes) {
        drawFish(i);
        animateFish(i);
    }
    push();
    imageMode(CENTER);
    image(fishLamp, width / 2, height / 2);
    pop();
    // drawFish(fish01)
    // animateFish(fish01)

}

function displayInfo(infoText, x, y) {
    push();
    fill("#53b0fcff");
    textSize(30);
    textAlign(CENTER);
    text(infoText.toUpperCase(), x, y);
    pop();
}


//NEW SABINE
function defineFish(incomingFishSprite, incomingtype) {

    const fish01 = {
        x: random(-5, 0),
        y: random(0, height),
        size: 50,
        speed: random(0.5, 2),
        fishSprite: incomingFishSprite,
        fishtext: incomingtype
    };

    return fish01
}



function defineTV() {

    const tvOBJ = {
        x: random(0, width - 100),
        y: random(0, height),
        w: 50,
        h: 50,
        color: "#1e1bd4ff",
        // tvScreen: incomingScreen
    };

    return tvOBJ
}


// draws the fish for My Computer
function drawFish(fish) {
    push();
    noStroke();
    fill("#598fe0ff");
    rect(fish.x + 10, fish.y - 20, infoBox.width, 20);
    pop();
    push();
    noStroke();
    push();
    noStroke();
    fill("#d42222ff");
    rect(fish.x + 100, fish.y - 20, 10, 20);
    pop();
    push();
    noStroke();
    // fill(fishcolor);
    // ellipse(fish.x, fish.y, fish.size);
    //SABINE ADDED
    image(fish.fishSprite, fish.x, fish.y);
    push();
    // console.log(resJSON.data[1].name)
    push();
    noStroke();
    fill("#f1e6b1ff");
    rect(fish.x + 10, fish.y - 15, infoBox.width, infoBox.height);
    // rect(fish.x, fish.y + 10, fish.fishtext.length * 5, 20);
    textAlign(CENTER);
    textFont('Courier New');
    textSize(10);
    fill("#000000ff");
    //SABINE ADDED
    // text(fish.fishtext, fish.x + 10, fish.y + 10, 20, 50);
    text(fish.fishtext, fish.x + 10 + infoBox.padding, fish.y - 15 + infoBox.padding, infoBox.width - 2 * infoBox.padding, infoBox.height - 2 * infoBox.padding);
    pop();


}

function drawTv(TV) {
    push();
    noStroke();
    fill("#598fe0ff");
    image(tvSPRITE, TV.x, TV.y);
    pop();


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
    fish.x = -5;
    fish.y = random(0, height);
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

    }
}



function addFish(fishNum) {

    // console.log(fishNum)
    for (let i = 0; i < fishNum; i++) {
        // console.log(resJSON.data[1].name)

        //SABINE HERE  - you want to add the fish text and fish Sprite to the fish object
        let fishSPRITE = determineFishText(resJSON.data[i])
        //now give the fish text and sprite to be a part of the fish object
        const fish = defineFish(fishSPRITE, resJSON.data[i].memory);
        fishes.push(fish);
        console.log("fish created")
    }

}

function addTV(TVnum) {
    for (let i = 0; i < TVnum; i++) {
        // console.log(resJSON.data[1].name)
        console.log(resJSON.data[i].type)
        console.log(i)
        //SABINE HERE  - you want to add the fish text and fish Sprite to the fish object
        // let tvSPRITE = determineTVimage(resJSON.data[i])
        //now give the fish text and sprite to be a part of the fish object
        // const TV = defineTV(tvSPRITE, resJSON.data[i].type);
        const TV = defineTV();
        if (resJSON.data[i].type === "Bad") {
            TVs.push(TV);
            console.log("TV created")
        }

    }

}


// perhaps rename - as one really just determines the sprite
function determineFishText(dataforAFISH) {
    //let fishNum = resJSON.data.length
    //NO NEED
    // console.log(dataforAFISH)
    fishtext = dataforAFISH.type
    if (fishtext == "Bad") {
        fishSprite = lionFishIMG
    }
    else if (fishtext == "Good") {
        fishSprite = blueFishIMG
    }
    else if (fishtext == "childhood") {
        fishSprite = clownFishIMG
    }
    //you need a default case cause sometimes you have no type in your data
    else {
        fishSprite = blueFishIMG

    }

    return fishSprite;

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
                (e.keyCode >= 97 && e.keyCode <= 122) || (e.keyCode == 32)) {

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












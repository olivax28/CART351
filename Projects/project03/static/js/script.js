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
    addPerson(resJSON.data.length);
    // determineFishSprite();

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


const IconMedia = {
    x: 200,
    y: 150,
    w: 50,
    h: 50,
    fill: "#ff00b3ff",
    state: "mediaplayer"

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
let people = [];


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
let tvScreen = undefined
let PersonSprite = undefined
let mediaPlayerIMG = undefined

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
    tvScreen = loadImage("./static/assets/staticGIF.gif")
    PersonSprite = loadImage("./static/assets/PersonSprite.png")
    mediaPlayerIMG = loadImage("./static/assets/mediaplayerIMG.png")

    // shootSound = loadSound("assets/sounds/8bit_shoot.mp3");
}


// let state = "fortune"

let state = "loading"

let inputState = "name"

let nameToSave = ""

let enteredMemory = ""
let memoryType = ""
let IncomingName = ""

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
    if (state === "mediaplayer") {
        mediaPlayer();

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
    iconPick(IconTrash);
    drawselect(IconTrash);
    iconPick(IconComputer);
    drawselect(IconComputer);
    iconPick(IconMedia);
    drawselect(IconMedia);
}


function drawselect(icon) {
    push();
    noStroke();
    fill(icon.fill);
    rect(icon.x, icon.y, icon.w, icon.h);
    pop();

}
function Wdrawselect(welcomeIcon) {
    push();
    noStroke();
    fill(welcomeIcon.fill);
    rect(welcomeIcon.x, welcomeIcon.y, welcomeIcon.w, welcomeIcon.h);
    pop();
}


function trashBin() {
    background(0, 0, 0);

    for (let i of TVs) {
        drawTv(i);
        TVpick(i);
    }
    drawBadEye();
    iconPick(backButton);
    drawselect(backButton);



}

function mediaPlayer() {
    background(0, 50, 25);

    for (let i of people) {
        drawPerson(i);
        animatePerson(i);
        determinePersonSprite(i);
        // animatePerson(i);
    }
    push();
    imageMode(CENTER);
    image(mediaPlayerIMG, width / 2, height / 2);
    pop();
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



function defineTV(incomingTVtext) {

    const tvOBJ = {
        x: random(0, width - 100),
        y: random(0, height),
        w: 200,
        h: 200,
        color: "#1e1bd4ff",
        tvtext: incomingTVtext

    };

    return tvOBJ
}

function definePerson(IncomingName, IncomingType) {

    const PersonOBJ = {
        x: -5,
        y: 50,
        w: 100,
        h: 100,
        color: "#1e1bd4ff",
        PersonName: IncomingName,
        PersonType: IncomingType,
        avatar: PersonSprite,
        speed: random(0.5, 1.5)

    };

    return PersonOBJ
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

    //SABINE ADDED
    image(fish.fishSprite, fish.x, fish.y);
    push();
    push();
    noStroke();
    fill("#f1e6b1ff");
    rect(fish.x + 10, fish.y - 15, infoBox.width, infoBox.height);

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
    image(tvScreen, TV.x, TV.y);
    pop();
    push();
    noStroke();
    fill("#598fe0ff");
    // image(tvSPRITE, TV.x, TV.y);
    tvScreen.resize(250, 0);
    image(tvSPRITE, TV.x - 70, TV.y - 50);
    pop();


}

// let personAvatar = undefined

function drawPerson(Person) {
    // let personAvatar = PersonSprite
    // push();
    // noStroke();
    // fill("#d42222ff");
    // rect(Person.x, Person.y, Person.w, Person.h);
    // pop();
    push();
    noStroke();
    fill("#598fe0ff");
    PersonSprite.resize(100, 0)
    image(Person.avatar, Person.x, Person.y);
    pop();
    push();
    // fill("#f1e6b1ff");
    // rect(Person.x, Person.y + 50, infoBox.width, infoBox.height);
    textAlign(CENTER);
    textFont('Courier New');
    textSize(15);
    fill("#ffffffff");
    text(Person.PersonName, Person.x + 50, Person.y + 120);
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

function animatePerson(Person) {
    // Move the target
    Person.x += Person.speed;
    // Handle the target going off the canvas
    if (Person.x > width) {
        resetPersonX(Person);
    }
    if (Person.y > height) {
        resetPersonY(Person);
    }
}



function resetPersonX(Person) {
    Person.x = -5;
    Person.y += 200;
}


function resetPersonY(Person) {
    Person.x = -5;
    Person.y = 50;
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

function TVpick(TV) {
    // console.log(resJSON)
    for (TV of TVs) {
        console.log(TV)
        const mouseTVoverlap = mouseX > TV.x &&
            mouseX < TV.x + TV.w &&
            mouseY > TV.y &&
            mouseY < TV.y + TV.h;
        if (mouseTVoverlap && mouseIsPressed) {
            console.log("clicked")
            pupilFill = "#26002bff"
            pupilText = TV.tvtext

        }
    }
}

function addFish(fishNum) {

    // console.log(fishNum)
    for (let i = 0; i < fishNum; i++) {
        // console.log(resJSON.data[1].name)

        //SABINE HERE  - you want to add the fish text and fish Sprite to the fish object
        let fishSPRITE = determineFishSprite(resJSON.data[i])
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
        // only pushes a TV to the TVs array if the memory asscoiated is bad
        const TV = defineTV(resJSON.data[i].memory);
        if (resJSON.data[i].type === "Bad") {
            TVs.push(TV);
            console.log("TV created")
        }

    }

}

function addPerson(PersonNum) {

    // console.log(fishNum)
    for (let i = 0; i < PersonNum; i++) {
        const Person = definePerson(resJSON.data[i].name, resJSON.data[i].type);
        people.push(Person);
        console.log("Person created")
    }

}



// perhaps rename - as one really just determines the sprite
function determineFishSprite(dataforAFISH) {
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

// changes the person sprite on click depending on the type of memory
function determinePersonSprite(Person) {
    for (Person of people) {
        const mouseAvataroverlap = mouseX > Person.x &&
            mouseX < Person.x + Person.w &&
            mouseY > Person.y &&
            mouseY < Person.y + Person.h;

        if (mouseAvataroverlap && mouseIsPressed && Person.PersonType == "Bad") {
            Person.avatar = lionFishIMG

        }
        if (mouseAvataroverlap && mouseIsPressed && Person.PersonType == "Good") {
            Person.avatar = blueFishIMG

        }
        if (mouseAvataroverlap && mouseIsPressed && Person.PersonType == "Childhood") {
            Person.avatar = clownFishIMG

        }
    }
}





let pupilFill = "#000000ff"
let pupilText = "Memory"

function drawBadEye() {
    // the base code for the eye was found and modified from p5.js.org by user koolaid krusade
    let centerX = width / 2;
    let centerY = height / 2;
    let d = 300;
    let x1 = map(mouseX, 0, width, centerX - d / 6, centerX + d / 6,);
    let y = map(mouseY, 0, height, centerY - d / 6, centerY + d / 6,);
    // Eye ball
    fill("#ffffffff");
    ellipse(width / 2, height / 2, 400, 200);
    // Pupil
    push();
    fill(pupilFill);
    circle(x1, y, 150);
    textAlign(CENTER);
    textFont('Courier New');
    textSize(15);
    fill("#be2accff");
    text(pupilText, x1 - 30, y - 20, infoBox.width, infoBox.height);
    pop();
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












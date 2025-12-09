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
    // console.log(resJSON.data);
    //creates the fish, tv, and people once based on the amount of data in the mongo JSON
    addFish(resJSON.data.length);
    addTV(resJSON.data.length);
    addPerson(resJSON.data.length);
    state = "welcome";
    // return resJSON

}





let fishBlurb = {
    x: undefined,
    y: undefined,
    text: undefined,
    width: undefined,
    length: undefined

}
// variable defining the result from the fetch request
let resJSON = undefined

// defining hitbox and state of the desktop icons
const IconTrash = {
    x: 700,
    y: 200,
    w: 200,
    h: 200,
    fill: "#25eeccff",
    state: "trashbin"

}

const IconComputer = {
    x: 400,
    y: 200,
    w: 200,
    h: 200,
    fill: "#36ee25ff",
    state: "myComputer"

}


const IconMedia = {
    x: 100,
    y: 200,
    w: 200,
    h: 200,
    fill: "#ff00b3ff",
    state: "mediaplayer"

}

const backButton = {
    x: 910,
    y: 20,
    w: 50,
    h: 50,
    fill: "#6b25eeff",
    state: "desktop"

}



// defining hitbox and memory types for the welcome state folders

const WChildhood = {
    x: 350,
    y: 525,
    w: 80,
    h: 90,
    fill: "#6b25eeff",
    catr: "childhood"

}
const WGood = {
    x: 480,
    y: 525,
    w: 80,
    h: 90,
    fill: "#25ee65ff",
    catr: "Good"

}
const Wbad = {
    x: 590,
    y: 525,
    w: 80,
    h: 90,
    fill: "#ee25a8ff",
    catr: "Bad"

}


//arrays dfined for the data visualizations
let fishes = [];
let TVs = [];
let people = [];

// sprites 
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
let mediaplayerBG = undefined
let personSpriteChildhood = undefined
let personSpriteHappy = undefined
let personSpriteBad = undefined
let welcomeBG = undefined
let myComputerIcon = undefined
let trashbinIcon = undefined
let mediaplayerIcon = undefined
let backButtonIMG = undefined
let eyeIMG = undefined

//sounds

let static01 = undefined
let bubbles = undefined
let enterstatic = undefined
let startup = undefined
let error = undefined



function preload() {
    //load images
    desktopIMG = loadImage("./static/assets/desktop.png");
    lionFishIMG = loadImage("./static/assets/lionfish.png");
    clownFishIMG = loadImage("./static/assets/clownfish.png");
    blueFishIMG = loadImage("./static/assets/bluefish.png");
    fishBG = loadImage("./static/assets/fish_bg.png");
    fishLamp = loadImage("./static/assets/fish_lamp.png");
    soundFormats("WAV");
    tvSPRITE = loadImage("./static/assets/tv_sprite.png");
    tvScreen = loadImage("./static/assets/staticGIF.gif")
    PersonSprite = loadImage("./static/assets/PersonSprite.png")
    mediaPlayerIMG = loadImage("./static/assets/mediaplayerIMG.png")
    mediaplayerBG = loadImage("./static/assets/aeroBG.png")
    personSpriteChildhood = loadImage("./static/assets/flowerSprite.png")
    personSpriteHappy = loadImage("./static/assets/PersonSpriteHappy.png")
    personSpriteBad = loadImage("./static/assets/errorSprite.png")
    welcomeBG = loadImage("./static/assets/introPageBG.png")
    myComputerIcon = loadImage("./static/assets/mycomputerICON.png")
    trashbinIcon = loadImage("./static/assets/trashbinICON.png")
    mediaplayerIcon = loadImage("./static/assets/mediaplayerICON.png")
    backButtonIMG = loadImage("./static/assets/backButton.png")
    eyeIMG = loadImage("./static/assets/eye.png")
    // sounds
    static01 = loadSound("./static/assets/static");
    bubbles = loadSound("./static/assets/bubbles");
    enterstatic = loadSound("./static/assets/enter_static");
    startup = loadSound("./static/assets/startup");
    error = loadSound("./static/assets/error01");

}

/// initial states for visualisations and info input

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

// intiial page, takes user input

function welcomePage() {
    background(250, 250, 250);
    push();
    imageMode(CENTER);
    image(welcomeBG, width / 2, height / 2);
    pop();
    displayInfo(`Name: ${nameToSave} Memory: ${enteredMemory}`, width / 2, height / 2 + 50);

    wIconPick(WChildhood);
    wIconPick(Wbad);
    wIconPick(WGood);

}



// first state after a user enters their information, icons lead to the visualisations
function desktop() {
    background(50, 0, 0);
    push();
    imageMode(CENTER);
    image(desktopIMG, width / 2, height / 2);
    pop();
    iconPick(IconTrash);
    drawselectDesktop(IconTrash, trashbinIcon)
    iconPick(IconComputer);
    drawselectDesktop(IconComputer, myComputerIcon)
    iconPick(IconMedia);
    drawselectDesktop(IconMedia, mediaplayerIcon)
    push();
    textAlign(CENTER);
    textFont('Courier New');
    textSize(20);
    fill("#ffffffff");
    text("Welcome. Choose a way of acessing the stored memories.", width / 2, 500);
    pop();
}

//base function for icons
function drawselect(icon, iconIMG) {
    push();
    noStroke();
    iconIMG.resize(70, 0)
    image(iconIMG, icon.x - 10, icon.y - 10);
    pop();

}

// base function for drawing the desktop icons
function drawselectDesktop(icon, iconIMG) {
    push();
    imageMode(CENTER);
    image(iconIMG, icon.x + 100, icon.y + 100);
    pop();
    push();
    noStroke();
    pop();

}

// base function for drawing the welcome page  icons (memory type folders)
function Wdrawselect(welcomeIcon) {
    push();
    noStroke();
    fill(welcomeIcon.fill);
    rect(welcomeIcon.x, welcomeIcon.y, welcomeIcon.w, welcomeIcon.h);
    pop();
}

// the trahsbin visualisaton
function trashBin() {
    background(0, 0, 0);

    for (let i of TVs) {
        drawTv(i);
        TVpick(i);
    }
    drawBadEye();
    iconPick(backButton);
    drawselect(backButton, backButtonIMG);
}

//meidaplyer visualisation
function mediaPlayer() {
    background(0, 50, 25);
    push();
    imageMode(CENTER);
    image(mediaplayerBG, width / 2, height / 2 + 70);
    pop();
    for (let i of people) {
        drawPerson(i);
        animatePerson(i);
        determinePersonSprite(i);

    }
    push();
    imageMode(CENTER);
    image(mediaPlayerIMG, width / 2, height / 2);
    pop();
    iconPick(backButton);
    drawselect(backButton, backButtonIMG);
}

// the fish visualisation
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
    iconPick(backButton);
    drawselect(backButton, backButtonIMG);

}

function displayInfo(infoText, x, y) {
    push();
    fill("#5f6870ff");
    textSize(20);
    textAlign(CENTER);
    text(infoText.toUpperCase(), x, y);
    pop();
}


//NEW SABINE
//defines the fish OBJ
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


//defines the TV obj
function defineTV(incomingTVtext) {

    const tvOBJ = {
        x: random(0, width - 200),
        y: random(100, height - 300),
        w: 200,
        h: 200,
        color: "#1e1bd4ff",
        tvtext: incomingTVtext

    };

    return tvOBJ
}

//defines the user representation for the media player
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

//draws the TVs for the trashbin
function drawTv(TV) {
    push();
    noStroke();
    fill("#598fe0ff");
    image(tvScreen, TV.x, TV.y);
    pop();
    push();
    noStroke();
    fill("#598fe0ff");
    tvScreen.resize(250, 0);
    image(tvSPRITE, TV.x - 70, TV.y - 50);
    pop();


}


//draws the sprites for the users in media player
function drawPerson(Person) {
    push();
    noStroke();
    fill("#598fe0ff");
    PersonSprite.resize(100, 0)
    image(Person.avatar, Person.x, Person.y);
    pop();
    push();
    textAlign(CENTER);
    textFont('Courier New');
    textSize(15);
    fill("#ffffffff");
    text(Person.PersonName, Person.x + 50, Person.y + 120);
    pop();


}

function animateFish(fish) {
    // Move the fish
    fish.x += fish.speed;
    // Handle the fish  going off the canvas
    if (fish.x > width) {
        resetFish(fish);
    }
}

function animatePerson(Person) {
    // Move the person
    Person.x += Person.speed;
    // Handle the person going off the canvas, resets to the top when reaching the bottom
    if (Person.x > width) {
        resetPersonX(Person);
    }
    if (Person.y > height) {
        resetPersonY(Person);
    }
}


//functions for resetting the user sprite animation in the media player
function resetPersonX(Person) {
    Person.x = -5;
    Person.y += 200;
}


function resetPersonY(Person) {
    Person.x = -5;
    Person.y = 50;
}

//resets the fish in the aquarium
function resetFish(fish) {
    fish.x = -5;
    fish.y = random(0, height);
}


// detects the overlap of the mouse over the different icons (and plays a sound!)
function iconPick(icon) {
    if (state === "desktop" || state === "trashbin" || state === "myComputer" || state == "mediaplayer") {
        const mouseIconOverlap = mouseX > icon.x &&
            mouseX < icon.x + icon.w &&
            mouseY > icon.y &&
            mouseY < icon.y + icon.h;

        if (mouseIconOverlap && mouseIsPressed) {
            state = icon.state
        }
        if (mouseIconOverlap && mouseIsPressed && state == "myComputer") {
            bubbles.play();
        }
        if (mouseIconOverlap && mouseIsPressed && state == "trashbin") {
            enterstatic.play();
        }
    }

}

//assigns a category to the memory 
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

//handles the text represented on the eye when clicking a computer
function TVpick(TV) {
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
            static01.play();

        }
    }
}

// adds a fish to the array and also uses JSON data to determine what sprite the fish have 
function addFish(fishNum) {

    for (let i = 0; i < fishNum; i++) {

        //SABINE HERE  - you want to add the fish text and fish Sprite to the fish object
        let fishSPRITE = determineFishSprite(resJSON.data[i])
        //now give the fish text and sprite to be a part of the fish object
        const fish = defineFish(fishSPRITE, resJSON.data[i].memory);
        fishes.push(fish);
        console.log("fish created")
    }

}

//adds TVs to the TVs array
function addTV(TVnum) {
    for (let i = 0; i < TVnum; i++) {

        // only pushes a TV to the TVs array if the memory asscoiated is bad
        const TV = defineTV(resJSON.data[i].memory);
        if (resJSON.data[i].type === "Bad") {
            TVs.push(TV);
            console.log("TV created")
        }

    }

}

//adds a user sprite to the people array, retrieves the name and memory type from the JSON
function addPerson(PersonNum) {
    for (let i = 0; i < PersonNum; i++) {
        const Person = definePerson(resJSON.data[i].name, resJSON.data[i].type);
        people.push(Person);
        console.log("Person created")
    }

}



// Assigns text to the fish textbox and also determines their sprite based on the type of memory
function determineFishSprite(dataforAFISH) {
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
            Person.avatar = personSpriteBad

        }
        if (mouseAvataroverlap && mouseIsPressed && Person.PersonType == "Good") {
            Person.avatar = personSpriteHappy
            error.play()
        }
        if (mouseAvataroverlap && mouseIsPressed && Person.PersonType == "childhood") {
            Person.avatar = personSpriteChildhood

        }
    }
}





let pupilFill = "#000000ff"
let pupilText = "Memory"

function drawBadEye() {
    // the base code for the eye was found and modified from p5.js.org by user koolaid krusade
    let centerX = width / 2;
    let centerY = height / 2;
    let d = 200;
    let x1 = map(mouseX, 0, width, centerX - d / 6, centerX + d / 6,);
    let y = map(mouseY, 0, height, centerY - d / 6, centerY + d / 6,);
    // Eye ball
    push();
    imageMode(CENTER);
    image(eyeIMG, width / 2, height / 2);
    pop();
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
                startup.play()
                state = "desktop"
                sendData({ name: nameToSave, memory: enteredMemory, type: memoryType });
                //sends data to Mongo if the length of the input exceeds 100

            }

            else if ((e.keyCode >= 65 && e.keyCode <= 90) ||
                (e.keyCode >= 97 && e.keyCode <= 122) || (e.keyCode == 32)) {

                enteredMemory += key;
            }

            else if (e.keyCode === 13) {
                startup.play()
                state = "desktop"
                sendData({ name: nameToSave, memory: enteredMemory, type: memoryType });
                //sends data to Mongo if the user presses enter
            }

        }


    }

}

//sends data to Mongo DB
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












/* PLEASE DO NOT CHANGE THIS FRAMEWORK ....
the get requests are all implemented and working ... 
so there is no need to alter ANY of the existing code: 
rather you just ADD your own ... */

window.onload = function () {
  document.querySelector("#queryChoice").selectedIndex = 0;
  //create once :)
  let description = document.querySelector("#Ex4_title");
  //array to hold the dataPoints
  let dataPoints = [];

  // /**** GeT THE DATA initially :: default view *******/
  // /*** no need to change this one  **/
  runQueryDefault("onload");

  /***** Get the data from drop down selection ****/
  let querySelectDropDown = document.querySelector("#queryChoice");

  querySelectDropDown.onchange = function () {
    console.log(this.value);
    let copyVal = this.value;
    console.log(copyVal);
    runQuery(copyVal);
  };

  /******************* RUN QUERY***************************  */
  async function runQuery(queryPath) {
    // // //build the url -end point
    const url = `/${queryPath}`;
    try {
      let res = await fetch(url);
      let resJSON = await res.json();
      // console.log(resJSON);

      //reset the
      document.querySelector("#childOne").innerHTML = "";
      description.textContent = "";
      document.querySelector("#parent-wrapper").style.background =
        "rgba(51,102,255,.2)";

      switch (queryPath) {
        case "default": {
          displayAsDefault(resJSON);
          break;
        }
        case "one": {
          //sabine done
          displayInCirclularPattern(resJSON);
          break;
        }
        case "two": {
          //sabine done
          displayByGroups(resJSON, "weather", "eventName");
          break;
        }
        /***** TO DO FOR EXERCISE 4 *************************
         ** 1: Once you have implemented the mongodb query in server.py,
         ** you will receive it from the get request (THE FETCH HAS ALREADY BEEN IMPLEMENTED:: SEE ABOVE) 
         ** and will automatically will enter into the correct select case
         **  - based on the value that the user chose from the drop down list...)
         ** You need to design and call a custom display function FOR EACH query that you construct ...
         ** 4 queries - I want 4 UNIQUE display functions - you can use the ones I created
         ** as inspiration ONLY - DO NOT just copy and change colors ... experiment, explore, change ...
         ** you can create your own custom objects - but NO images, video or sound... (will get 0).
         ** bonus: if your visualizations(s) are interactive or animate.
         ****/
        case "three": {
          displaypattern03(resJSON);

          console.log("three")
          // TODO
          break;
        }
        case "four": {
          display04(resJSON);
          console.log("four")
          // TODO
          break;
        }

        case "five": {
          console.log("five")
          display05(resJSON)
          // TODO
          break;
        }
        case "six": {
          console.log("six")
          display06(resJSON)
          // TODO
          break;
        }
        default: {
          console.log("default case");
          break;
        }
      } //switch
    } catch (err) {
      console.log(err);
    }
  }
  //will make a get request for the data ...

  /******************* RUN DEFAULT QUERY***************************  */
  async function runQueryDefault(queryPath) {
    // // //build the url -end point
    const url = `/${queryPath}`;
    try {
      let res = await fetch(url);
      let resJSON = await res.json();
      console.log(resJSON);
      displayAsDefault(resJSON);
    } catch (err) {
      console.log(err);
    }
  }
  /*******************DISPLAY AS GROUP****************************/

  function displayByGroups(resultObj, propOne, propTwo) {
    dataPoints = [];
    let finalHeight = 0;
    //order by WEATHER and Have the event names as the color  ....

    //set background of parent ... for fun ..
    document.querySelector("#parent-wrapper").style.background =
      "rgba(51, 153, 102,1)";
    description.textContent = "BY WEATHER AND ALSO HAVE EVENT NAMES {COLOR}";
    description.style.color = "rgb(179, 230, 204)";

    let coloredEvents = {};
    let resultSet = resultObj.results;

    //reget
    let possibleEvents = resultObj.events;
    let possibleColors = [
      "rgb(198, 236, 217)",
      "rgb(179, 230, 204)",
      "rgb(159, 223, 190)",
      "rgb(140, 217, 177)",
      "rgb(121, 210, 164)",
      "rgb(102, 204, 151)",
      "rgb(83, 198, 138)",
      "rgb(64, 191, 125)",
      "rgb(255, 204, 179)",
      "rgb(255, 170, 128)",
      "rgb(255, 153, 102)",
      "rgb(255, 136, 77)",
      "rgb(255, 119, 51)",
      "rgb(255, 102, 26)",
      "rgb(255, 85, 0)",
      "rgb(230, 77, 0)",
      "rgb(204, 68, 0)",
    ];

    for (let i = 0; i < possibleColors.length; i++) {
      coloredEvents[possibleEvents[i]] = possibleColors[i];
    }

    let offsetX = 20;
    let offsetY = 150;
    // find the weather of the first one ...
    let currentGroup = resultSet[0][propOne];
    console.log(currentGroup);
    let xPos = offsetX;
    let yPos = offsetY;

    for (let i = 0; i < resultSet.length - 1; i++) {
      dataPoints.push(
        new myDataPoint(
          resultSet[i].dataId,
          resultSet[i].day,
          resultSet[i].weather,
          resultSet[i].start_mood,
          resultSet[i].after_mood,
          resultSet[i].after_mood_strength,
          resultSet[i].event_affect_strength,
          resultSet[i].event_name,
          //map to the EVENT ...
          coloredEvents[resultSet[i].event_name],
          //last parameter is where should this go...
          document.querySelector("#childOne"),
          //which css style///
          "point_two"
        )
      );

      /** check if we have changed group ***/
      if (resultSet[i][propOne] !== currentGroup) {
        //update
        currentGroup = resultSet[i][propOne];
        offsetX += 150;
        offsetY = 150;
        xPos = offsetX;
        yPos = offsetY;
      }
      // if not just keep on....
      else {
        if (i % 10 === 0 && i !== 0) {
          xPos = offsetX;
          yPos = yPos + 15;
        } else {
          xPos = xPos + 15;
        }
      } //end outer else

      dataPoints[i].update(xPos, yPos);
      finalHeight = yPos;
    } //for

    document.querySelector("#childOne").style.height = `${finalHeight + 20}px`;
  } //function

  /*****************DISPLAY IN CIRCUlAR PATTERN:: <ONE>******************************/
  function displayInCirclularPattern(resultOBj) {
    console.log(resultOBj)
    //reset
    dataPoints = [];
    let xPos = 0;
    let yPos = 0;
    //for circle drawing
    let angle = 0;
    let centerX = window.innerWidth / 2;
    let centerY = 350;

    let scalar = 300;
    let yHeight = Math.cos(angle) * scalar + centerY;

    let resultSet = resultOBj.results;
    let coloredMoods = {};

    let possibleMoods = resultOBj.moods;
    let possibleColors = [
      "rgba(0, 64, 255,.5)",
      "rgba(26, 83, 255,.5)",
      "rgba(51, 102, 255,.7)",
      "rgba(51, 102, 255,.4)",
      "rgba(77, 121,255,.6)",
      "rgba(102, 140, 255,.6)",
      "rgba(128, 159, 255,.4)",
      "rgba(153, 179, 255,.3)",
      "rgba(179, 198, 255,.6)",
      "rgba(204, 217, 255,.4)",
    ];

    for (let i = 0; i < possibleMoods.length; i++) {
      coloredMoods[possibleMoods[i]] = possibleColors[i];
    }

    //set background of parent ... for fun ..
    document.querySelector("#parent-wrapper").style.background =
      "rgba(0, 26, 102,1)";
    description.textContent = "BY AFTER MOOD";
    description.style.color = "rgba(0, 64, 255,.5)";

    for (let i = 0; i < resultSet.length - 1; i++) {
      console.log(resultSet)
      dataPoints.push(
        new myDataPoint(
          resultSet[i].dataId,
          resultSet[i].day,
          resultSet[i].weather,
          resultSet[i].start_mood,
          resultSet[i].after_mood,
          resultSet[i].after_mood_strength,
          resultSet[i].event_affect_strength,
          resultSet[i].event_name,
          //map to the day ...
          coloredMoods[resultSet[i].after_mood],
          //last parameter is where should this go...
          document.querySelector("#childOne"),
          //which css style///
          "point_two"
        ),
        // console.log(coloredMoods)
      );
      /*** circle drawing ***/
      xPos = Math.sin(angle) * scalar + centerX;
      yPos = Math.cos(angle) * scalar + centerY;
      angle += 0.13;

      if (angle > 2 * Math.PI) {
        angle = 0;
        scalar -= 20;
      }
      dataPoints[i].update(xPos, yPos);
    } //for

    document.querySelector("#childOne").style.height = `${yHeight}px`;
  } //function

  /*****************DISPLAY AS DEFAULT GRID :: AT ONLOAD ******************************/
  function displayAsDefault(resultOBj) {
    //reset
    dataPoints = [];
    let xPos = 0;
    let yPos = 0;
    const NUM_COLS = 50;
    const CELL_SIZE = 20;
    let coloredDays = {};
    let resultSet = resultOBj.results;
    possibleDays = resultOBj.days;
    /*
  1: get the array of days (the second entry in the resultOBj)
  2: for each possible day (7)  - create a key value pair -> day: color and put in the
  coloredDays object
  */
    console.log(possibleDays);
    let possibleColors = [
      "rgb(255, 102, 153)",
      "rgb(255, 77, 136)",
      "rgb(255, 51, 119)",
      "rgb(255, 26, 102)",
      "rgb(255, 0, 85)",
      "rgb(255, 0, 85)",
      "rgb(255, 0, 85)",
    ];

    for (let i = 0; i < possibleDays.length; i++) {
      coloredDays[possibleDays[i]] = possibleColors[i];
    }
    /* for through each result
    1: create a new MyDataPoint object and pass the properties from the db result entry to the object constructor
    2: set the color using the coloredDays object associated with the resultSet[i].day
    3:  put into the dataPoints array.
    **/
    //set background of parent ... for fun ..
    document.querySelector("#parent-wrapper").style.background =
      "rgba(255,0,0,.4)";
    description.textContent = "DEfAULT CASE";
    description.style.color = "rgb(255, 0, 85)";

    //last  element is the helper array...
    for (let i = 0; i < resultSet.length - 1; i++) {
      dataPoints.push(
        new myDataPoint(
          resultSet[i].dataId,
          resultSet[i].day,
          resultSet[i].weather,
          resultSet[i].start_mood,
          resultSet[i].after_mood,
          resultSet[i].after_mood_strength,
          resultSet[i].event_affect_strength,
          resultSet[i].evnet_name,
          //map to the day ...
          coloredDays[resultSet[i].day],
          //last parameter is where should this go...
          document.querySelector("#childOne"),
          //which css style///
          "point"
        )
      );

      /** this code is rather brittle - but does the job for now .. draw a grid of data points ..
//*** drawing a grid ****/
      if (i % NUM_COLS === 0) {
        //reset x and inc y (go to next row)
        xPos = 0;
        yPos += CELL_SIZE;
      } else {
        //just move along in the column
        xPos += CELL_SIZE;
      }
      //update the position of the data point...
      dataPoints[i].update(xPos, yPos);
    } //for
    document.querySelector("#childOne").style.height = `${yPos + CELL_SIZE}px`;
  } //function

  /***********************************************/
  //********************************PAGE 03 DISPLAY************************************


  function displaypattern03(resultOBj) {
    //reset
    AnimDataPoints = [];
    let xPos = 0;
    let yPos = 0;

    let resultSet = resultOBj.results;
    let coloredMoods = {};

    let possibleMoods = resultOBj.moods;
    // console.log(resultOBj.moods)

    let possibleColors = [
      "rgba(233, 76, 76, 1)",
      "rgba(255, 247, 199, 1)",
      "rgba(136, 159, 226, 1)",
      "rgba(255, 196, 0, 1)",
    ];

    document.querySelector("#parent-wrapper").style.background =
      "rgba(243, 190, 15, 1)";
    description.textContent = "BY POSITIVE MOOD";
    description.style.color = "rgba(255, 255, 255, 1)";

    for (let i = 0; i < possibleMoods.length; i++) {
      coloredMoods[possibleMoods[i]] = possibleColors[i];
      console.log(resultOBj)
    }



    let outputDiv = document.getElementById("parent-wrapper");
    let bounds = outputDiv.getBoundingClientRect();
    for (let i = 0; i < resultSet.length; i++) {
      // console.log(resultSet)
      AnimDataPoints.push(
        new myDataPoint(
          resultSet[i].dataId,
          resultSet[i].day,
          resultSet[i].weather,
          resultSet[i].start_mood,
          resultSet[i].after_mood,
          resultSet[i].after_mood_strength,
          resultSet[i].event_affect_strength,
          resultSet[i].event_name,
          //map to the day ...
          coloredMoods[resultSet[i].after_mood],
          //last parameter is where should this go...
          document.querySelector("#childOne"),
          //which css style///
          "point_two",
          Math.floor(Math.random() * 2) + 1,
          Math.floor(Math.random() * 5) + 1,
        ),
      );

      xPos = Math.random() * bounds.width,
        yPos = Math.random() * (bounds.height),
        AnimDataPoints[i].update(xPos, yPos);
      // console.log(xPos, yPos)
    }





    function checkBounds(p) {

      if (parseInt(p.container.style.left) > bounds.width) {
        //console.log(bounds.width);
        p.speedX *= -1;


      }
      else if (parseInt(p.container.style.left) < 0) {
        p.speedX *= -1;

      }

      if (parseInt(p.container.style.top) > bounds.height) {
        p.speedY *= -1;

      }
      else if (parseInt(p.container.style.top) < 0) {
        p.speedY *= -1;
      }


    }

    function animate() {

      console.log("animate")
      for (let i = 0; i < AnimDataPoints.length; i++) {


        // dataPoints[i].xPos =
        let newX = parseInt(AnimDataPoints[i].container.style.left) + AnimDataPoints[i].speedX;

        //   dataPoints[i].y =
        let newY = parseInt(AnimDataPoints[i].container.style.top) - AnimDataPoints[i].speedY;

        AnimDataPoints[i].update(newX, newY)

        checkBounds(AnimDataPoints[i]);

      }
      pointsAnim = window.requestAnimationFrame(animate);

    }

    window.requestAnimationFrame(animate);
  }
  /*****************DISPLAY 04*****************************/

  function display04(resultOBj) {
    //reset
    dataPoints = [];
    let xPos = 0;
    let yPos = 0;

    let resultSet = resultOBj.results;


    chosencolor = undefined

    document.querySelector("#parent-wrapper").style.background =
      "rgba(136, 25, 130, 1)";
    description.textContent = "BY EVENT NAME";
    description.style.color = "rgba(255, 255, 255, 1)";

    // for (let i = 0; i < possibleMoods.length; i++) {
    //   coloredMoods[possibleMoods[i]] = possibleColors[i];
    //   console.log(resultOBj)
    // }


    for (let i = 0; i < resultSet.length; i++) {
      // console.log(resultSet)
      dataPoints.push(
        new myDataPoint(
          resultSet[i].dataId,
          resultSet[i].day,
          resultSet[i].weather,
          resultSet[i].start_mood,
          resultSet[i].after_mood,
          resultSet[i].after_mood_strength,
          resultSet[i].event_affect_strength,
          resultSet[i].event_name,
          //map to the day ...
          chosencolor,
          //last parameter is where should this go...
          document.querySelector("#childOne"),
          //which css style///
          "point_two"
        ),
      );
      // following IF statements organzes the chosen datapoints containgna specific event name into groups and compares them to the rest of the leftover possible events

      if (dataPoints[i].event_name == "sunbathing in the desert") {
        xPos = 100 + Math.random() * 100,
          yPos = 100 + Math.random() * 100,
          dataPoints[i].update(xPos, yPos);
        // dataPoints[i].chosencolor = "rgba(233, 76, 76, 1)"
        // console.log[i].chosencolor

      }
      // console.log(dataPoints[i].event_name)
      if (dataPoints[i].event_name == "watching rain fall though the window") {
        xPos = 250 + Math.random() * 100,
          yPos = 250 + Math.random() * 100,
          dataPoints[i].update(xPos, yPos);
        // dataPoints[i].chosencolor = "rgba(76, 233, 97, 1)"

      }

      if (dataPoints[i].event_name == "dining with sibling") {
        xPos = 300 + Math.random() * 100,
          yPos = 300 + Math.random() * 100,
          dataPoints[i].update(xPos, yPos);
        // dataPoints[i].chosencolor = "rgba(189, 18, 166, 1)"

      }

      if (dataPoints[i].event_name == "whistling in the wind") {
        xPos = 300 + Math.random() * 100,
          yPos = 100 + Math.random() * 100,
          dataPoints[i].update(xPos, yPos);
        // dataPoints[i].chosencolor = "rgba(110, 76, 233, 1)"

      }

      if (dataPoints[i].event_name !== "whistling in the wind" && dataPoints[i].event_name !== "dining with sibling" && dataPoints[i].event_name !== "watching rain fall though the window" && dataPoints[i].event_name !== "sunbathing in the desert") {
        xPos = 600 + Math.random() * 500,
          yPos = 10 + Math.random() * 500,
          dataPoints[i].update(xPos, yPos);
        // dataPoints[i].chosencolor = "rgba(233, 76, 76, 1)"

      }

    }
  }
  //********************************PAGE 05 DISPLAY************************************

  function display05(resultOBj) {
    bandPoints = [];

    let resultSet = resultOBj.results;



    // console.log(resultSet)

    document.querySelector("#parent-wrapper").style.background =
      "rgba(135, 211, 145, 1)";
    description.textContent = " By event affect strength"
    description.style.color = "rgba(255, 255, 255, 1)";

    let outputDiv = document.getElementById("parent-wrapper");
    let bounds = outputDiv.getBoundingClientRect();
    console.log(resultSet.length)
    for (let i = 0; i < resultSet.length; i++) {
      // console.log(resultSet)
      bandPoints.push(
        new myDataPoint(
          resultSet[i].dataId,
          resultSet[i].day,
          resultSet[i].weather,
          resultSet[i].start_mood,
          resultSet[i].after_mood,
          resultSet[i].after_mood_strength,
          resultSet[i].event_affect_strength,
          resultSet[i].event_name,
          //color
          "rgba(233, 76, 76, 1)",
          //last parameter is where should this go...
          document.querySelector("#childOne"),
          //which css style///
          "point_two",
          resultSet[i].event_affect_strength,
          0
        ),

      );

      // console.log(bandPoints[i].event_affect_strength)

      xPos = i / 2 + 10
      // console.log(xPos)
      yPos = bandPoints[i].event_affect_strength * 10,
        bandPoints[i].update(xPos, yPos);


    }

    function checkBounds02(p) {

      if (parseInt(p.container.style.left) > bounds.width) {
        // console.log(p.container.style.left)
        console.log(bounds.width);
        p.speedX *= -1;




      }
      else if (parseInt(p.container.style.left) < 0) {
        p.speedX *= -1;

      }

      if (parseInt(p.container.style.top) > bounds.height) {
        p.speedY *= -1;

      }
      else if (parseInt(p.container.style.top) < 0) {
        p.speedY *= -1;
      }


    }
    function animateBands() {

      //console.log("animate")
      for (let i = 0; i < bandPoints.length; i++) {
        // dataPoints[i].xPos =
        let newX = parseInt(bandPoints[i].container.style.left) + bandPoints[i].speedX;

        //   dataPoints[i].y =
        let newY = parseInt(bandPoints[i].container.style.top) + bandPoints[i].speedY;

        bandPoints[i].update(newX, newY)

        checkBounds02(bandPoints[i]);

      }
      pointsAnim = window.requestAnimationFrame(animateBands);

    }
    window.requestAnimationFrame(animateBands);


  }

  // *******************display 06***************************

  function display06(resultOBj) {
    dataPoints = [];

    let resultSet = resultOBj.results;
    let outputDiv = document.getElementById("parent-wrapper");
    let bounds = outputDiv.getBoundingClientRect();

    document.querySelector("#parent-wrapper").style.background =
      "rgba(117, 48, 206, 1)";
    description.textContent = " By Negative mood"
    description.style.color = "rgba(255, 255, 255, 1)";

    // let outputDiv = document.getElementById("parent-wrapper");
    // let bounds = outputDiv.getBoundingClientRect();

    console.log(resultSet.length)
    for (let i = 0; i < resultSet.length; i++) {
      // console.log(resultSet)
      dataPoints.push(
        new myDataPoint(
          resultSet[i].dataId,
          resultSet[i].day,
          resultSet[i].weather,
          resultSet[i].start_mood,
          resultSet[i].after_mood,
          resultSet[i].after_mood_strength,
          resultSet[i].event_affect_strength,
          resultSet[i].event_name,
          //map to the day ...
          "rgba(128, 168, 255, 1)",
          //last parameter is where should this go...
          document.querySelector("#childOne"),
          //which css style///
          "point_two",
          2,
          0
        ),


      );
      //separates points by postitive and negative mood
      if (dataPoints[i].start_mood == "sad" || dataPoints[i].start_mood == "angry" || dataPoints[i].start_mood == "neutral" || dataPoints[i].start_mood == "anxious" || dataPoints[i].start_mood == "moody" || dataPoints[i].start_mood == "hurt") {
        xPos = 600 + Math.random() * 500,
          yPos = 10 + Math.random() * 500,
          dataPoints[i].update(xPos, yPos);
        dataPoints[i].speedX = 2


      }

      else {
        xPos = 20 + Math.random() * 500,
          yPos = 10 + Math.random() * 500,
          dataPoints[i].update(xPos, yPos);
        dataPoints[i].speedX = 0


      }

    }
    function checkBounds02(p) {

      if (parseInt(p.container.style.left) > bounds.width) {
        // console.log(p.container.style.left)
        console.log(bounds.width);
        p.speedX *= -1;
      }
      else if (parseInt(p.container.style.left) < 0) {
        p.speedX *= -1;

      }

      if (parseInt(p.container.style.top) > bounds.height) {
        p.speedY *= -1;

      }
      else if (parseInt(p.container.style.top) < 0) {
        p.speedY *= -1;
      }


    }
    function animateData() {

      //console.log("animate")
      for (let i = 0; i < dataPoints.length; i++) {
        // dataPoints[i].xPos =
        let newX = parseInt(dataPoints[i].container.style.left) + dataPoints[i].speedX;

        //   dataPoints[i].y =
        let newY = parseInt(dataPoints[i].container.style.top) + dataPoints[i].speedY;

        dataPoints[i].update(newX, newY)

        checkBounds02(dataPoints[i]);

      }
      pointsAnim = window.requestAnimationFrame(animateData);

    }
    window.requestAnimationFrame(animateData);
  }
  //function
};

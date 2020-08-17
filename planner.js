var theHourInput, toDoInput, hoursNum;
var toDo  = [];
var scheduledItems = [];
var hoursCounter = 0;
var toDoCounter = 0;

function setup() {
  createCanvas(625, 750);
  background(239, 201, 175);
  
  textSize(12);
  fill(16, 76, 145);
  textFont("Lucida Console");
  
  // to do
  text("What are your objectives for today? (total 5 items, write blank if to fill)", 20, 30);
  
  toDoInput = createInput();
  toDoInput.position(20, 75);

  var toDoAdd = createButton("Enter");
  var addButtonX = toDoInput.x + toDoInput.width + 5;
  toDoAdd.position(addButtonX, toDoInput.y);
  toDoAdd.mousePressed(collectToDoData);
  
  
  //schedule
  hoursNum = 1;
  hourTextPos = 200 
  text("Hour " + hoursNum, 20, hourTextPos);
  
  theHourInput = createInput();
  theHourInput.position(20, 205);
  
  var hourButton = createButton("Enter");
  var hourButtonX = theHourInput.x + theHourInput.width + 5;
  hourButton.position(hourButtonX, theHourInput.y);
  hourButton.mousePressed(collectScheduleData);
}

function collectToDoData() {
  if (toDo.length < 5) {
    toDo.push(toDoInput.value());
    console.log(toDo);
  } else {
    toDoCounter++;
  }
  
  printToDoData();
}
function printToDoData() {
  if (toDoCounter > 0) {
    yPos = 75;
    item = 1; 
    for (let i = 0; i < toDo.length; i ++) {
      var t = "Item #" + item + ": " + toDo[i]; 
      fill(31, 138, 192);
      text(t, 20, yPos);
      yPos += 20;
      item++;
    }
  }
  fill(16, 76, 145);
}

function collectScheduleData() {
  if (scheduledItems.length < 8) {
    scheduledItems.push(theHourInput.value());
    if (hoursNum < 8) { 
      hourTitleReset(1);  
    } else {
      hourTitleReset(0);
    }
  } else {
    hoursCounter++;
  }
  printScheduleData();
}

function printScheduleData() {
  if (hoursCounter > 0) {
    yPos = 245;
    timeOne = 9;
    timeTwo = 10;
    for (let i = 0; i < scheduledItems.length; i++) {
        var t = "From " + timeOne + " to " + timeTwo + ", be doing " + scheduledItems[i];
        fill(31, 138, 192);
        text(t, 20, yPos);
        yPos += 20;
        timeOne++;
        if (timeOne > 12) {
          timeOne = 1;
        }
        timeTwo++;
        if (timeTwo > 12) {
          timeTwo = 1;
        }
    }
  }
}

function hourTitleReset(num) {
  if (num == 1) {
    hoursNum++;
    clear();
    background(239, 201, 175);
    text("What are the things you have to do today? (total 5 items, write blank if to fill)", 20, 30);
    printToDoData();
    text("Hour " + hoursNum, 20, 200);
  } else {
    clear();
    background(239, 201, 175);
    text("What are the things you have to do today? (total 5 items, write blank if to fill)", 20, 30);
    printToDoData();
    text("done, click enter one more time", 20, 200);
  }
}

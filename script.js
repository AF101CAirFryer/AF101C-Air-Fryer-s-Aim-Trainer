let instructionsClosed = false //declaring custom variables
let scoreStatus = 1
let hitTarget = false

const ESC = 27 //declaring custom constants
const SPACE_BUTTON = 32

function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(60)
  coolWallPaper = loadImage("84248.png")  //loading various background images
  wowYouHitTwenty = loadImage("shutterstock_114802408.webp")
  wowYouHitForty = loadImage("earth-from-space-nasa.jpg")
  wowYouHitSixty = loadImage("milky-way-2_3x2.webp")
  wowYouHitEighty = loadImage("darkflow.jpg")
  noLife = loadImage("nolifenerd.jpeg")
  healthWarning = loadImage("infinite_hallway__speedpainting__by_robertcopper_dbh5i3b-fullview.jpg")
  
  targetX = random(width) //declaring the coordinates of the target to be random
  targetY = random(height)
}


function draw() {
  instructions(); //calling the instructions screen
  if (instructionsClosed){
    noCursor() //calling noCursor to make cursor invisible
    image(coolWallPaper, 0, 0, width, height)
    scoreCounter(); //calling the score counter
    drawTarget(); //calling the generation of the target
    drawCrosshair(); //calling the generation fo the crosshair
  }
  if (keyIsDown(ESC)){ //if escape is pressed the instructoins reappear
    recallInstructions()
  }
  backgroundChanger()
  waterMark();  //calling function o constatnly keep my name displayed in the corner
}

function waterMark() { //function to constantly display my name in the corner
  textAlign(RIGHT, BOTTOM)
  fill(155)
  stroke(155)
  strokeWeight(1)
  textSize(20)
  text("Carter Pokora", width, height)
}

function instructions() { //function to generate the instructions screen
  background(0, 0, 0);
  stroke(255, 255, 255)
  fill(255, 255, 255)
  textAlign(CENTER, CENTER)
  textSize(12)
  text("Randomly placed circles will appear on your screen, click on them to increase your score", width/2, height /2 - 100)
  text("Clicking somewhere other than on the circle will decrease your score", width/2, height/2 - 50)
  text("Double click to reset the score counter", width/2, height/2)
  text("click to begin", width/2, height/2 + 100)
  text("Press Escape to return to this screen", width/2, height/2 + 50)
}

function drawCrosshair() { //function to draw crosshair
  stroke(0, 255, 0)
  strokeWeight(3)
  line(mouseX - 5, mouseY, mouseX - 10, mouseY)
  line(mouseX + 5, mouseY, mouseX + 10, mouseY)
  line(mouseX, mouseY - 5, mouseX, mouseY - 10)
  line(mouseX, mouseY + 5, mouseX, mouseY + 10)
}

function drawTarget() { //function to draw the target
  stroke(0, 255, 255)
  fill(0, 255, 255)
  ellipse(targetX, targetY, 40)
    
}

function scoreCounter(){ //function to draw the score counter
  fill(255, 255, 255);
  stroke(255,255,255);
  textSize(width/25)
  text(scoreStatus, width/2, height/2);
}

function hitReg() { //hit registration function
  if (targetX-20 <= mouseX && mouseX <= targetX+20 && targetY-20 <= mouseY && mouseY <= targetY+20){ // if mouseX and mouseY are within a 40x40 box surrounding the circle when hitReg() is called, the score counts up. hitReg() is only called when the mouse is clicked
    scoreStatus += 1
    scoreCounter()
    
  targetX = random(width) //target moves to new random location
  targetY = random(height)
  }else{ //if the mouse is not within this box the score counts down
    scoreStatus -= 1
    scoreCounter()

    targetX = random(width) //target moves to new random location
    targetY = random(height)
  }
}

function recallInstructions(){ //function to recall instructions
  instructionsClosed = false
  instructions()
}
       
function mousePressed(){ //function to close instructions
  instructionsClosed = true
}

function mouseClicked(){ //when the mouse is clicked it call function "hitReg()"
  hitReg()
}

function resetScoreCounter(){ //function to reset the score counter
  scoreStatus = 0
  scoreCounter();
}

function doubleClicked() { //when the mouse is double clicked the score counter is reset
  resetScoreCounter();
  print(true)
}


function backgroundChanger(){ //function that causes the background to change every 20 points
  if (scoreStatus >= 20 && scoreStatus <= 39){
    image(wowYouHitTwenty, 0, 0, width, height)
    scoreCounter()
    drawTarget()
    drawCrosshair()
  } else if(scoreStatus >= 40 && scoreStatus <= 59){
    image(wowYouHitForty, 0, 0, width, height)
    scoreCounter()
    drawTarget()
    drawCrosshair()
  } else if (scoreStatus >= 60 && scoreStatus <= 79){
    image(wowYouHitSixty, 0, 0, width, height)
    scoreCounter()
    drawTarget()
    drawCrosshair()
  } else if(scoreStatus >= 80 && scoreStatus <= 99){
    image(wowYouHitEighty, 0, 0, width, height)
    scoreCounter()
    drawTarget()
    drawCrosshair()
  } else if (scoreStatus >= 100 && scoreStatus <= 109) {
    image(noLife, 0, 0, width, height)
    scoreCounter()
    fill(0)
    text("why are you still here", width/2, height/2 - 100)
    drawTarget()
    drawCrosshair()
  } else if (scoreStatus >= 110) {
    image(healthWarning, 0, 0, width, height)
    scoreCounter()
    fill(0)
    text("For your own health, please get off this game", width/2, height/2 - 100)
    drawTarget()
    drawCrosshair()
  }
}
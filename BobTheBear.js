//draw = function() {

// lined paper look
var drawPaper = function () {
    background(255, 255, 247);
    stroke(173, 222, 237);

    for(var i = 0; i < 20; i++){
        var lineY = 20 + (i * 20);
        line (0, lineY, 400, lineY);
    }
};

drawPaper();

//title
fill(8, 0, 0);
textFont(createFont("cursive"));
text("Bob the Bear.", 10, 17);

//play button
fill(255, 0, 0);
rect(150, 1, 60, 30);
fill(21, 40, 77);
text("Play", 170, 20);

//character
var drawCharacter = function (x) {
    var yCharacter = 300;
    
    //stick
    stroke(191, 153, 2);
    strokeWeight(19);
    line(x, yCharacter, x, 400);
    
    //paper
    noStroke();
    fill(232, 227, 227);
    ellipse(x, yCharacter - 20, 100, 150);
    
    //stick person
    strokeWeight(1);
    stroke(26, 2, 2);
    ellipse(x, yCharacter - 40, 40, 45);
    line(x, yCharacter-20, x, yCharacter + 20);
    line(x, yCharacter + 20, x + 15, yCharacter + 38);
    line(x, yCharacter + 20, x - 15, yCharacter + 35);
    line(x + 25, yCharacter, x - 30, yCharacter);
    ellipse (x - 8, yCharacter - 45, 10, 10);
    ellipse (x + 8, yCharacter - 45, 10, 10);
    line(x - 8, yCharacter - 25, x + 8, yCharacter - 25);
};

//bear
var drawBear = function (x) {
    var yBear = 300;
    
    //stick
    stroke(191, 153, 2);
    strokeWeight(19);
    line(x, yBear, x, 400);
    
    //bigger paper
    noStroke();
    fill(232, 227, 227);
    ellipse(x, yBear - 20, 130, 180);
    
    //bear
    stroke(0, 0, 0);
    strokeWeight(1);
    //ears
    ellipse(x + 20, yBear - 80, 20, 20);
    ellipse(x - 20, yBear - 80, 20, 20);
    //body
    ellipse(x, yBear, 60, 80);
    //head and face
    ellipse(x, yBear - 60, 50, 50);
    ellipse(x + 7, yBear - 65, 12, 12);
    ellipse(x - 7, yBear - 65, 12, 12);
    ellipse(x, yBear - 53, 16, 16);
    //limbs
    ellipse(x + 10, yBear + 50, 20, 40);
    ellipse(x - 10, yBear + 50, 20, 40);
    ellipse(x - 40, yBear - 18, 40, 20);
    ellipse(x + 40, yBear - 18, 40, 20);
};

//continue button
var drawContinue = function(){
   fill(255, 0, 0);
    rect(250, 50, 60, 30);
    fill(21, 40, 77);
    text("Continue", 255, 70);
};

//number buttons
var drawButtons = function() {
    fill(37, 45, 128);
    rect(0, 40, 20, 20);
    rect(20, 40, 20, 20);
    rect(40, 40, 20, 20);
    rect(60, 40, 20, 20);
    rect(80, 40, 20, 20);
    rect(100, 40, 20, 20);
    rect(120, 40, 20, 20);
    rect(140, 40, 20, 20);
    rect(160, 40, 20, 20);
    rect(180, 40, 20, 20);
    fill(237, 230, 230);
    text("1",7,55);
    text("2", 27, 55);
    text("3", 47, 55);
    text("4", 67, 55);
    text("5", 87, 55);
    text("6", 107, 55);
    text("7", 127, 55);
    text("8",147, 55);
    text("9", 167, 55);
    text("10", 184, 55);
};

var numberChosen;
var randomNumber = random(0,10);

//movement
draw = function() {
    
    mouseClicked = function () {
        var j = 0;
        var k = 400;
        while (j < 120){
            drawPaper();
            drawCharacter(j);
            drawBear(400 - j);
            j = j + 0.5;
        }
        fill(0, 0, 0);
        text("Bob is hungry, how much food do you want to give Bob?", 10,12);
        drawButtons ();
        
        if (mouseY > 40 && mouseY < 60) {
            if (mouseX > 0 && mouseX < 20){
                fill(8, 0, 0);
                text("You feed Bob 1 food.", 10, 75);
                numberChosen = 1;
                drawContinue();
            } else if (mouseX > 20 && mouseX < 40){
                fill(0, 0, 0);
                text("You feed Bob 2 Foods.", 10, 75);
                numberChosen = 2;
                drawContinue();
            }  else if (mouseX > 40 && mouseX < 60){
                fill(0, 0, 0);
                text("You feed Bob 3 Foods.", 10, 75);
                numberChosen = 3;
                drawContinue();
            } else if (mouseX > 60 && mouseX < 80){
                fill(0, 0, 0);
                text("You feed Bob 4 Foods.", 10, 75);
                numberChosen = 4;
                drawContinue();
            } else if (mouseX > 80 && mouseX < 100){
                fill(0, 0, 0);
                text("You feed Bob 5 Foods.", 10, 75);
                numberChosen = 5;
                drawContinue();
            } else if (mouseX > 100 && mouseX < 120){
                fill(0, 0, 0);
                text("You feed Bob 6 Foods.", 10, 75);
                numberChosen = 6;
                drawContinue();
            } else if (mouseX > 120 && mouseX < 140){
                fill(0, 0, 0);
                text("You feed Bob 7 Foods.", 10, 75);
                numberChosen = 7;
                drawContinue();
            } else if (mouseX > 140 && mouseX < 160){
                fill(0, 0, 0);
                text("You feed Bob 8 Foods.", 10, 75);
                numberChosen = 8;
                drawContinue();
            } else if (mouseX > 160 && mouseX < 180){
                fill(0, 0, 0);
                text("You feed Bob 9 Foods.", 10, 75);
                numberChosen = 9;
                drawContinue();
            } else if (mouseX > 180 && mouseX < 200){
                fill(0, 0, 0);
                text("You feed Bob 10 Foods.", 10, 75);
                numberChosen = 10;
                drawContinue();
            }
        }
        
        if(mouseX > 250 && mouseX < 300 && mouseY > 50 && mouseY < 100){
            drawPaper();
            drawCharacter(120);
            drawBear(280);
            if (numberChosen < randomNumber){
                fill(0, 0, 0);
                text("Not enough food, Bob eats you.", 10, 75);
            }
            if (numberChosen === randomNumber){}
            if (numberChosen > randomNumber){
                fill(0, 0, 0);
                text("Too much food, Bob eats you.", 10, 75);
            }
        }
    };
    
   
};

//question
//input
//eaten
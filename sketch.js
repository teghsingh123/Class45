var x, xImg;
var o, oImg;
var board,boardImg;

var box1,box2,box3,box4,box5,box6,box7,box8,box9
var box10,box11,box12,box13,box14,box15,box16,box17,box18;

var PLAYER1TURN = 1;
var PLAYER2TURN = 2;
var END = 0;
var gameState = PLAYER2TURN;

function preload() {
  xImg = loadImage("x.png");
  oImg = loadImage("O.png");
  boardImg = loadImage("board.png");
}

function setup() {
  createCanvas(800,400);
  
  board = createSprite(400,400);
  board.addImage(boardImg);
  board.scale = 1.7;

  box1 = createSprite(50,100);
  box2 = createSprite(175,100);

  }



function draw() {
  background(255,255,255); 
  if(mousePressedOver(box1)&&gameState){
    if(gameState === PLAYER1TURN){
      box1.addImage(xImg);
      box1.scale = 0.5
    }
    else{
      box1.addImage(oImg);
      box1.scale = 0.25;
      gameState = PLAYER1TURN;
    }
  } 

  if(mousePressedOver(box2)){
    if(gameState === PLAYER1TURN){
      box2.addImage(xImg);
      box2.scale = 0.5
    }
    else{
      box2.addImage(oImg);
      box2.scale = 0.25;
    }
  } 

  drawSprites();
}

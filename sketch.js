var obstacle;

function preload() {
  playerImage = loadAnimation("Images/player.jpeg");
  squareImage = loadImage("Images/square.png");
  triangleImage = loadImage("Images/triangle.png");
  bgImage = loadImage("Images/bg.jpg");
  playerSpin = loadAnimation("Images/player3.png","Images/player4.png",
  "Images/player2.png","Images/player1.png","Images/player5.png",
  "Images/player.jpeg")
}

function setup() {
  createCanvas(1400,700);

  bg = createSprite(700, 350, 1400, 700);
  bg.addImage(bgImage);
  bg.scale = 1.1;

  invisibleground = createSprite(700, 400, 1400, 10);
  invisibleground.visible = false;

  player = createSprite(50, 300, 40, 40);
 player.addAnimation("still",playerImage);
 player.addAnimation("spinning",playerSpin);
  player.scale = 0.4
  
  obstacleGroup = new Group();

}

function draw() {
  background(255,255,255);  

  if(keyDown("space")){
    player.changeAnimation("spinning",playerSpin);
    player.velocityY = -10;    
  } 
  
  if(player.isTouching(invisibleground)){
    player.changeAnimation("still",playerImage);
  }
  

  //add gravity
  player.velocityY = player.velocityY + 0.8;

  player.collide(invisibleground);


  drawSprites();

}
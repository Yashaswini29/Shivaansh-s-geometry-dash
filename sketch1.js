const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Render = Matter.Render;

var world, engine;
var obstacle;

function preload() {
  playerImage = loadImage("Images/player.jpeg");
  squareImage = loadImage("Images/square.png");
  triangleImage = loadImage("Images/triangle.png");
  bgImage = loadImage("Images/bg.jpg");
}

function setup() {
  createCanvas(1400,700);

  engine = Engine.create();
  world = engine.world;

  //bg = createSprite(700, 350, 1400, 700);
  //bg.addImage(bgImage);
  //bg.scale = 1.1;

  rectMode(CENTER);

  invisibleground = Bodies.rectangle(700, 400, 1400, 10, {isStatic : true});
  World.add(world, invisibleground);

  var options = {
      density: 1,
      friction: 1
  }
  player = Bodies.rectangle(50, 300, 40, 40, options);
  World.add(world, player);
  


  obstacleGroup = new Group();

  /*
  var render = Render.create({ element:document.body, engine:engine, options:{ width:1400, height:700, wireframes:false } });
  Render.run(render);
  */
}

function draw() {
  background(bgImage);  

  Engine.update(engine);


  //add gravity
  //player.velocityY = player.velocityY + 0.8;

  //player.collide(invisibleground);



  //drawSprites();
  
  /*
  if(frameCount === 10){
    obstacle = new Obstacle(1000, 300, 30, 30, triangleImage);
    //obstacle.body.velocity.x = -8;
    
  }
  */


  push()
  angleMode(RADIANS);
  translate(player.position.x,player.position.y)
  rotate(player.angle)
  imageMode(CENTER);
  image(playerImage, 0, 0, 40, 40);
  pop()

  //obstacle.display();

}

function keyPressed(){

if(keyCode === 32){
Matter.Body.applyForce(player, player.position, {x:0, y:-60});
  Matter.Body.setAngularVelocity( player, Math.PI/30)
  Matter.Body.setPosition(player,{x:50,y:350})

}

}
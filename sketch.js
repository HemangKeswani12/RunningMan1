var man, man_running, edges;
var groundImage;

function preload(){
  man_running = loadAnimation("run1.png","run2.png","run3.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  man = createSprite(50,160,20,50);
  man.addAnimation("running", man_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  man.scale = 0.5;
  man.x = 50
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(man.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    man.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(edges[3])
  drawSprites();
}
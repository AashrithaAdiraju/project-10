
var shipI;
var seaI;
var ship;
var sea;

function preload(){
  seaI = loadImage("sea.png");
  shipI = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(-300,200);
  sea.addImage(seaI);
  sea.scale = .5
  sea.velocityX = 1
  print(sea.width);
  if (sea.x > 0){
    sea.x = sea.width/2;
  }

  ship = createSprite(150, 200);
  ship.addAnimation("shipI",shipI);
  ship.scale = .3
}

function draw() {
  background("blue");

  drawSprites();
}
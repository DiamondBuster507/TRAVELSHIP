var sea, seaImg
var shipImg1, ship


function preload(){
seaImg = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-4.png", "ship-4.png",)
}

function setup(){
  createCanvas(400,400);

  ship = createSprite(100,160,20,50);
  ship.addAnimation("moving", shipImg1);
  ship.scale = 0.3;

  sea = createSprite(200,180,400,20);
  sea.addImage("sea",seaImg);
  sea.scale = 0.5;
  if (sea.x=0){
    sea.x=sea.width/2;

  }
  
  

}

function draw() {
  background("blue");

  ship.depth=sea.depth
  ship.depth = ship.depth+1
  drawSprites();
}


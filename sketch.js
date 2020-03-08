 var fixed;
 var moving;
 function setup() {
  createCanvas(800,400);
 
  
  fixed =createSprite(400, 10, 50, 50);
  moving= createSprite(400,380,70,30);
fixed.shapeColor="white";
moving.shapeColor="white";
fixed.debug=true;
moving.debug=true;
fixed.velocityY=+3;
moving.velocityY=-3;

}

function draw() {
  background(0,0,0);  
 // ob1.x=World.mouseX;
  //ob1.y=World.mouseY;
  
  if(isTouching(moving,fixed)){
    fixed.shapeColor="green";
moving.shapeColor="green";
  }
  else{
    fixed.shapeColor="white";
moving.shapeColor="white";
  }
  bounceOff(moving,fixed);
  drawSprites();
}

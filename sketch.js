var bullet,wall,speed,weight,thickness,damage;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = "white";
  speed = random(223,321);
  bullet.velocityX = speed;
  wall = createSprite(1500,200,60,height / 2);
  weight = random(30,52);
  thickness = random(22,83);
  damage = ((0.5*weight*speed*speed)/(thickness*thickness*thickness));
}

function draw() {
  background("black");  
  if(collided(bullet,wall)) {
     bullet.velocityX = 0;
     if(damage < 10) {
        wall.shapeColor = "green";
     }
     if(damage > 10) {
        wall.shapeColor = "red";
     }
  }
  drawSprites();
}
function collided(lBullet,lWall) {
   bulletRightEdge = lBullet.x + lBullet.width;
   wallLeftEdge = lWall.x;
   if(bulletRightEdge >= wallLeftEdge) {
      return true;
   }
   return false;
}
var ground 
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey = createSprite(50,350,10,10)
  monkey.addAnimation("monkey",monkey_running)
monkey.scale=0.1
  obstacleGroup=new Group()
  bananaGroup=new Group()
  ground = createSprite(200,370,400,5)

}


function draw() {
background("green") 
  drawSprites()
  spawnBanana()
  spawnObstacle()
  monkey.collide(ground)
  if(keyDown("space")){
    monkey.velocityY=-3
  }
  monkey.velocityY=monkey.velocityY+0.5
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.destroyEach()
    bananaGroup.destroyEach()
  }
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,320));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    
    //add each cloud to the group
    //bananaGroup.add(banana);
    
    bananaGroup.add(banana)
  }
  
}
function spawnObstacle(){
  if (frameCount % 60===0){
  var obstacle = createSprite(600,360,40,10)
  //obstacle.y = math.round(random(80,120));
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX = -3;
    
    
    obstacleGroup.add(obstacle)
    obstacle.lifetime = 200;
  }
  
}




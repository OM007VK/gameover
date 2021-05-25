var score= 0;

var dog,bone,bone2;
var dogImg,boneImg,boneImg2,stoneImg;
var ground, Ground;
var game, gameImg;

function preload(){
  gameImg = loadImage("gameover.jpg");
  dogImg = loadImage("dog.png");
  boneImg = loadImage("bone.png");
  boneImg2 = loadImage("bone2.png");
  stoneImg = loadImage("stone.png");
}

function setup() {
  createCanvas(600, 200);

  game = createSprite(300,100);
  game.addImage(gameImg);
  game.scale = 0.9;
  
  stone = createSprite(50,180,20,50);
  stone.addImage(stoneImg);
  stone.scale = 0.02;

  bone = createSprite(50,180,20,50);
  bone.addImage(boneImg);
  bone.scale =0.1;

  bone2 = createSprite(50,180,20,50);
  bone2.addImage(boneImg2);
  bone2.scale =0.1;

  dog = createSprite(550,170,20,50);
  dog.addImage(dogImg);
  dog.scale =0.3;
  
  ground = createSprite(200,200,1000,20);
  ground.shapeColor="brown";
  
  Ground = createSprite(200,200,1000,10);
  Ground.visible = false;
  
}

function draw() {
  background(200);

  textSize(15)
  fill("black")
  text("Make the Dog Eat the Bone And Don't Let The Stone Hit The Dog",138,38);
  textSize(25)
  fill("black")
  text("________________________________",135,38);

  game.visible = false;

  textSize(23);
  fill("black")
  text("Score: " + score,15,40);
  
   bone.velocityX= 8;
   bone2.velocityX= 5;
   stone.velocityX= 10;
     
   if(keyDown("space")) 
    {
      dog.velocityY = -10;
    }
    dog.velocityY = dog.velocityY + 0.8;
  
    if (ground.x > 390){
      ground.x = ground.width/2;
    }
    //textSize(20)
    //fill ("black")
    //text(mouseX + "," + mouseY, mouseX,mouseY)

    drawSprites();
  
    dog.collide(Ground);

    if (stone.x > 600)
    {
      score = score + 5;
      stone.x=-50;
      game.visible = false;
    }
    
    if (bone.x > 600)
    {
      if(keyDown("space")) 
    {
      dog.velocityY = 0;
    textSize(20);
    // fill("white")
    // text("GAME OVER",300,100);
    }
    dog.visible = false;
    bone2.visible = false;
    bone.visible = false;
    stone.visible = false;
    ground.shapeColor="black";

    textSize(20)
    fill("black")
    text("GAME OVER",250,105);

     textSize(999);
     fill("black")
     text("__",0,-140);
     textSize(999);
     fill("black")
     text("__",0,-0);
    }

    if(bone.isTouching(dog))
    {
    score = score + 1;
    bone.x=-50;
    game.visible = false;
    }

    if(bone2.isTouching(dog))
    {
    score = score + 5;
    bone2.x=-50;
    game.visible = false;
    }

    if(stone.isTouching(dog))
    {
    score = score - 10;
    stone.x=-50;
    game.visible = false;
    }

    if (stone.x < -49)
    {
      gameImg.visible = false;
    }
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
boy=loadImage("boy.png")
}

function setup() {
  createCanvas(1300, 600);
  


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(width/2,600,width,20)
tree=new Tree(1050,580)
mango1=new Mango(1100,100,30)
mango2=new Mango(1170,130,30)
mango3=new Mango(1010,140,30)
mango4=new Mango(1000,70,30)
mango5=new Mango(1100,70,30)
mango6=new Mango(1000,230,30)
mango7=new Mango(900,230,40)
mango8=new Mango(1140,150,40)
mango9=new Mango(900,160,40)
mango10=new Mango(1200,200,40)
stone=new Stone(235,420,30)
launcher=new Launcher(stone.body,{x:235,y:420})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  text("Press Space To Get Second Chance",50,50)
  image(boy,200,340,200,300)
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone.display();
  launcher.display();
  detectollision(stone,mango1)
  detectollision(stone,mango2)
  detectollision(stone,mango3)
  detectollision(stone,mango4)
  detectollision(stone,mango5)
  detectollision(stone,mango6)
  detectollision(stone,mango7)
  detectollision(stone,mango8)
  detectollision(stone,mango9)
  detectollision(stone,mango10)
  
  
}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  //}
}
function mouseReleased(){
  //if (gameState!=="launched"){
     launcher.fly()
  //}
}

function keyPressed(){
  if (keyCode===32){
    Matter.Body.setPosition(stone.body, {x: 235 , y: 420});
    launcher.attach(stone.body)
  }

}
function detectollision(istone,imango){
mangoBodyPosition=imango.body.position
stoneBodyPosition=istone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=imango.r+istone.r){
  Matter.Body.setStatic(imango.body,false)

}
}



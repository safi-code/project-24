
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var leftSide,rightSide,bottom,paper;
var ground1;
var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


ground1 = new Ground(400,680,800,20);
leftSide = new Dustbin(550,620,20,100);
rightSide = new Dustbin(670,620,20,100);
bottom = new Dustbin(610,660,100,20);
paper = new Paper(100,600,10);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground1.display();
  
 leftSide.display();
 rightSide.display();
 bottom.display();
 paper.display();
 drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
	}
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ball1,ball2,ball3,ball4,ball5
var roof1,roof2,roof3,roof4,roof5
var rope1,rope2,rope3,rope4,rope5
function preload()
{

}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	
	world = engine.world;

	//Create the Bodies Here.
ball1 = new Ball(450,450,100)
ball2 = new Ball(550,450,100)
ball3 = new Ball(650,450,100)
ball4 = new Ball(750,450,100)
ball5 = new Ball(850,450,100)
roof1 = new Roof(450,150,100,20)
roof2 = new Roof(550,150,100,20)
roof3 = new Roof(650,150,100,20)
roof4 = new Roof(750,150,100,20)
roof5 = new Roof(850,150,100,20)
rope1 = new Rope(ball1.body,roof1.body)
rope2 = new Rope(ball2.body,roof2.body)
rope3 = new Rope(ball3.body,roof3.body)
rope4 = new Rope(ball4.body,roof4.body)
rope5 = new Rope(ball5.body,roof5.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display()  
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  roof1.display()
  roof2.display()
  roof3.display()
  roof4.display()
  roof5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    

  }
}






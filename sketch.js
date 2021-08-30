
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5,mango6,mango8,mango9,mango10,ground,tree,boy;
var ground;
var rope, stone;
function preload(){
	tree = loadImage("tree.png");
	boy = loadImage("Pluckingmangoes/boy.png")
}

function setup() {
	createCanvas(1000, 800);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	mango1 = new Mango(600,400,30);
	mango2 = new Mango(620,300,30);
	mango3 = new Mango(650,350,30);
	mango4 = new Mango(500,330,30);
	mango5 = new Mango(700,340,30);
	mango6 = new Mango(720,300,30);
	mango7 = new Mango(750,230,30);
	mango8 = new Mango(800,340,30);
	mango9 = new Mango(720,400,30);
	mango10 = new Mango(850,350,30);

	ground=new Ground(500,796,2000,5);

	stone = new Stone(95,690,50,50);

	rope = new Rope(stone.body,{x:135,y:690});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  Engine.update(engine);

  image(tree,300,120,700,700);
  image(boy,100,630,200,220);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

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
  ground.display();
  stone.display();
  rope.display();
  
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === 32){
		rope.attach(stone.body);
	}

}

function mouseDragged(){
	Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	rope.throw();
}

function detectCollision(o1,o2){

	var o1pos = o1.body.position
	var o2pos = o2.body.position

	var distance= dist(o1pos.x,o1pos.y,o2pos.x,o2pos.y);

	if(distance<=100){
		Matter.Body.setStatic(o2.body,false);
	}
}

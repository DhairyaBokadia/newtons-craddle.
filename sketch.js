
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	ground=new Ground(200,690,10000,20);
	craddle=new Ground(390,350,80,30);
	craddle2=new Ground(460,350,80,30);
	craddle1=new Ground(570,350,50,30);

	ball1=new Ball(400,600);
	ball2=new Ball(380,600);
	ball3=new Ball(420,600);

	rope=new Thread(ball1.body,craddle1.body);
	rope1=new Thread(ball2.body,craddle.body);
	rope2=new Thread(ball3.body,craddle2.body);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  Engine.update(engine);

  ground.display();
  ball1.display()
  ball2.display()
  ball3.display()

  craddle.display()
  craddle2.display()
  craddle1.display()

  rope.display();
  rope2.display();
  rope1.display();
  
  
  drawSprites();
 
}




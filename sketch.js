const Constraint=Matter.Constraint;
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

	//Create the Bodies Here.
	roof=new ground(350,0);
   bobObject1=new bob(250,500); 
   bobObject2=new bob(300,500); 
   bobObject3=new bob(350,500); 
   bobObject4=new bob(400,500); 
   bobObject5=new bob(450,500); 

   rope1=new rope(bobObject1.body,roof.body,-50*2,0);
   rope2=new rope(bobObject2.body,roof.body,-50,0);
   rope3=new rope(bobObject3.body,roof.body,0,0);
   rope4=new rope(bobObject4.body,roof.body,50,0);
   rope5=new rope(bobObject5.body,roof.body,50*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

roof.display();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-20,y:-10});


	}
	}

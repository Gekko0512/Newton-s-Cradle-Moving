
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var engine,world;

function setup() {
	createCanvas(displayWidth,displayHeight);
	//Create the Bodies Here.

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);


	
	roof  = new Roof(320,200,450,50);
    
	bob1 = new Bob(400,500,40);
	
	bob2 = new Bob(470,500,40);
	
    bob3 = new Bob(540,500,40);
	
    bob4 = new Bob(610,500,40);
	
    bob5 = new Bob(680,500,40);



	rope1 = new Rope(bob1.body,roof.body,75,0);
	
	
	rope2 = new Rope(bob2.body,roof.body,145,0);
	

	rope3 = new Rope(bob3.body,roof.body,215,0);
	

	rope4 = new Rope(bob4.body,roof.body,285,0);
	

	rope5 = new Rope(bob5.body,roof.body,355,0);
  
  
	
  
}


function draw() {
  createCanvas (displayWidth,displayHeight);
  background(255);
 
  textSize(50);
  
  stroke("black");
  strokeWeight(3);
  fill("yellow");
 
  text("Press :-",800,200);
  
  textSize(25);
  text("1 for the 1st bob",800,400);
  text("2 for the 2nd bob",800,500);
  text("3 for the 3rd most bob",800,600);
  text("4 for the 4th most bob",800,700);
  text("5 for the 5th most bob",800,800);
 
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
  

}  
function keyPressed(){
	if(keyCode === 49){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-55,y:-55});
  }
  if(keyCode === 50){
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-55,y:-55});
  }
  if(keyCode === 51){
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-55,y:-55});
  }
  if(keyCode === 52){
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:55,y:55});
  }
  if(keyCode === 53){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:55,y:55});
	}
}





var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,grond,ball1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
    World.add(world, packageBody);
	

	
	

	Engine.run(engine);
	one=new Log(600,470,200)
	grond=new Ground(600,480,1200,50)
	ball1=new Ball(300,420,80)
	
}


function draw() {
  rectMode(CENTER);
  background(0);


  
  
  drawSprites();
 one.display()
 grond.display()
 ball1.display()


if (keyCode== UP_ARROW){
 Matter.body.applyForce(ball1.body,ball1.body.position,{x:85,y:-125})
}


}




//namespacing
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
//namespace
var engine,world,ground, box1,box2,pig1,log1,box3,box4,pig2,log2,log3,log4,box5,bird;
function setup() {
  createCanvas(1200,400);
  engine = Engine.create(); //created our own engine
  world = engine.world;     //created our own world
  var option = {
    isStatic :true
  }
  ground = Bodies.rectangle (200,380,400,10,option); // cretaed bodies inside our own world
  World.add (world,ground);
  
  ground = new Ground(600,380,1200,10);
  box1 = new Box(700,320,70,70); //new keyword is used to create new object from any class.
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810,350)
  log1  = new Log(810,260,300,PI/2)

  box3 = new Box(700,240,70,70); //new keyword is used to create new object from any class.
  box4 = new Box(920,240,70,70);
  pig2 = new Pig(810,220)
  log2  = new Log(810,180,300,PI/2)

  box5 = new Box(810,160,70,70);
  log3  = new Log(760,120,180,PI/7)
  log4  = new Log(870,120,170,-PI/7)
  bird = new Bird(100,100)

}

function draw() {
  background("black");  
  Engine.update ( engine);
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  log3.display();
  log4.display();
  box5.display();
  bird.display();
}
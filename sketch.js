const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,height,400,20);
    box1= new Box(150,350,50,50);
    box2= new Box(250,350,50,50);
    box3= new Box(350,350,50,50);
    box4= new Box(150,300,50,50);
    box5= new Box(250,300,50,50);
    box6= new Box(350,300,50,50);
    box7= new Box(150,250,50,50);
    box8= new Box(250,250,50,50);
    box9= new Box(350,250,50,50);
    
    ball = new Ball(100,100);
}

function draw(){
    background("teal");
    Engine.update(engine);
   ground.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   ball.display();
}
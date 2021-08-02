const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,blower,blowerMouth;
var button;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  blower=new Blower(150,115,220,22);
  blowerMouth= new BlowerMouth(200,98,120,100);
  ball= new Ball(400,160,22,22);
  
  button=createButton("Click to Blow");
  button.position(width/2,height-100);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background("#252324");  

  Engine.update(engine);

  blower.show();
  blowerMouth.show();
  ball.show();

  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}
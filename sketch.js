const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
 
var myEngine,myWorld;
var box;
var ball;
function setup() {
  createCanvas(400,400);
myEngine= Engine.create();
myWorld= myEngine.world;

var box_options= {
  isStatic: true
}
box= Bodies.rectangle(200,380,400,20,box_options);
World.add(myWorld,box);
console.log(box);
var options={
  restitution:1.0
}
ball=Bodies.circle(200,200,20,options)
World.add(myWorld,ball);

}

function draw() {
  Engine.update(myEngine);
  background(0);  
  rectMode(CENTER);
 rect(box.position.x,box.position.y,400,20);
 circle(ball.position.x,ball.position.y,50);
}
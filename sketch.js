const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;
var pig;
var log1;

function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,350,70,70);
    box2 = new Box(920,350,70,70);
    ground = new Ground(600, height, 1200, 20);
    pig = new Pig(810, 360);
    log1 = new Log(810, 300, 300, PI/2);

    box3 = new Box(700,250,70,70);
    box4 = new Box(920,250,70,70);
    pig2 = new Pig(810, 260);
    log2 = new Log(810, 200, 300, PI/2);

    pig3 = new Pig(810, 160);
    log3 = new Log(760, 120, 150, PI/7);
    log4 = new Log(850, 120, 150, -PI/7);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    pig3.display();
    log3.display();
    log4.display();

}
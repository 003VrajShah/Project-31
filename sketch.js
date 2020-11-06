var division1,division2,division3,division4,divition5,divition6,division7,division8;
var plinko,plinko1,plinko2,plinko3;
var particle,particle1,particle2,particle3;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  var division1=new Division(485,800,5,220);
  var divison2=new Division(530,800,5,220);
  var division3=new Division(575,800,5,220);
  var division4=new Division(620,800,5,220);
  var division5=new Division(665,800,5,220);
  var division6=new Division(710,800,5,220);
  var division7=new Division(755,800,5,220);
  var division8=new Division(795,800,5,220);
  for(i=0; i<20; i++){
    plinko=new Plinko(i,230,10);
  }
  
  for(i=0; i<20; i++){
    plinko1=new Plinko(i,300,10);
  }

  for(i=0; i<20; i++){
    plinko2=new Plinko(i,370,10);
  }

  for(i=0; i<20; i++){
    plinko3=new Plinko(i,440,10);
  }

  for(i=0; i<20; i++){
    particle=new Particle(i,220,10);
  }

  for(i=0; i<20; i++){
    particle1=new Particle(i,290,10);
  }

  for(i=0; i<20; i++){
    particle2=new Particle(i,360,10);
  }

  for(i=0; i<20; i++){
    partcle3=new Particle(i,430,10);
  }
  if(frameCount%60 === 0){
    particles.push=new Particle(random(width/2-10,width/2+10),10,10);
  }

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
}
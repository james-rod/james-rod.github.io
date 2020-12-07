// How make a Cat in p5.java

// My global variables named x, y, z,
let x = 100;
let y = 200;
let z = 100;
let catEyesX;
let catEyesY;

let randX = 0;
let randY = 0;
let randColor;

function setup() {
  //create a canvas 400px by 400px
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
 
 
}

function draw() {
  background(220);
  
  translate(randX, randY);
  
  
  catEyesX = map(mouseX, 0, width, -5, 5, 1);
  catEyesY = map(mouseY, 0, height, -5, 5, 1);
  
  
  //set fill to Gray 
  
  fill(51);
  
  
  //draw cat ears
  triangle(x-50,y-10, x-45, y-80, x-20,y-40)
  triangle(x+50,y-10, x+45, y-80, x+20,y-40)
  

  //draw cat head 
  ellipse(x,y, z, z);
  
  triangle(190, height/2, 210, height/2, 200, 220);
  line(200, 220, 200, 230);
  noFill();
  arc(200, 220, 40, 20, 0, PI);
  
  //draw cat eyes
  fill(255);
  ellipse(x-20, y-20, 30,30);
  ellipse(x+20, y-20, 30,30);
  
  
  //draw cat pupils
  
  fill(0);
  ellipse(x-20 + catEyesX, y-20 + catEyesY, 9,9);
  ellipse(x+20 + catEyesX, y-20 + catEyesY, 9,9);
  
  // right whiskers
  line(220, 220, 240, 220);
  line(220, 215, 240, 207);
  line(220, 225, 240, 233);
  
  // left whiskers
  line(180, 220, 160, 220);
  line(180, 215, 160, 207);
  line(180, 225, 160, 233);
  
}

function mousePressed(){
  //background(random(255), random(255), random(255));
  randX = random(-width/2, width/2);
  randY = random(-height/2, height/2);
}
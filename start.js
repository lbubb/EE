// JavaScript Document
function setup(){
	createCanvas(400, 400);

}
var x = 213;
var y = 200;
var c = 213;
var d = 163;
var f = 264;
var g = 213;
var i = 213;
var speed=1;
var e=0.5;
var h = 0.5;
var j = 1;
function draw(){
fill(0, 0, 0);
text("I sure do love stretching in the morning",200,25,200,200);
fill(255, 0, 0);
quad(328,189,351,285,64,288,92,189);
fill(random(0,255), random(0,255), random(0,255));
beginShape();
curveVertex(-29,565);
curveVertex(63,284);
curveVertex(109,232);
curveVertex(148,223);
curveVertex(238,230);
curveVertex(349,285);
curveVertex(205,341);
endShape();
//bed
noStroke();
fill(61, 44, 39);
ellipse(359,198,25,25);
ellipse(54,198,25,25);
rect(45,200,18,275);
rect(349,200,18,281);
rect(63,284,290,156);
stroke(0,0,0);
rect(93,44,21,144);
rect(307,44,21,144);
rect(114,81,193,107);
//person
fill(255, 255, 255);
stroke(0, 0, 0);
line(x,156,213,224);
line(c,190,d,179);
line(f, 175, g, 191);
ellipse(i,132,50,50);
c+=e;
d+=e;
f+=h;
g+=h;
x+=speed;
i+=j;
if(x===270){
    speed=-1;
    e=-0.5;
    h=-0.5;
    j=-1;
}
if(x===130){
    speed=+1;
    e=+0.5;
    h=+0.5;
    j=+1;
}   
}
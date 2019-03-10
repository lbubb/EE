// JavaScript Document
function setup(){
	createCanvas(800, 800);

}
	var x=199;
var y=200;
function draw(){
var c= random(0,255);
var d= random(0,255);
var e= random(0,255);
var f= random(0,225);
var g= random(0,225);
var h= random(0,225);
	ellipse(x,y,random(10,30),random(10,30));   

fill(c,d,e);

if(x<200){
    y+=random(0,10);
}
if(x>200){
    y-=random(0,10);
}
if(y>200){
    x+=random(0,10);
}
if(y<200){
    x-=random(0,10);
}

c+= random(-10,10);
d+= random(-10,10);
e+= random(-10,10);
f+= random(-5,50);
g+= random(-50,50);
h+= random(-50,50);
}
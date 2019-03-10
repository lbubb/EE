// JavaScript Document
function setup(){
	createCanvas(400, 400);

}

var x=100;
var y=100;
var c=100;
var d=100;
var b=200;
var n=200;
var i=400;
var o=400;

function draw(){
	fill(0, 0, 0);
    textSize(30);
    text("The end",250,350,240,200);
    fill(255, 255, 255);
    textSize(20);
    text("What?",254,107,200,200);
    ellipse(200,200,100,100);
    ellipse(200,200,x,y);
    ellipse(168,226,10,10);
    ellipse(220,231,10,10);
    ellipse(200,244,30,10);
    line(c,d,b,n);
    line(y,x,d,c);
    line(x,c,n,x);
    line(d,y,n,x);
    line(d,y,x,y);
    line(c,n,y,x);
    line(n,x,c,y);
    line(o,x,i,n);
    line(i,x,n,o);
    line(d,b,i,x);
    line(c,o,n,b);
    line(x,b,d,o);
    c-=2;
    d+=6;
    b+=2;
    n-=2;
    i+=-3;
    o-=5;
x+=2;
y+=1;

}
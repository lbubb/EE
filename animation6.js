// JavaScript Document

function setup(){
	createCanvas(400, 400);

}
var x=200;
var y=200;
var c=170;
var z=320;

function draw(){
	    rect(c,y+20,150,110);
    ellipse(x,y+120,200,30);
    ellipse(x,y+30,200,30);
    ellipse(x,y+60,200,30);
    ellipse(x,y+90,200,30);
    ellipse(z,y,30,200);
    y+=1;
	fill(0,0,0);
	textSize(20);
	text("Thumbs Up!",50,50,200,200);
}
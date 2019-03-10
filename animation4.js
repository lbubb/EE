// JavaScript Document
function setup(){
	createCanvas(400, 400);

}
var x=600;
var y=600;


function draw(){
	 fill(100, 0, 0);
    textSize(30);
    text("The End", 140, 200);
    ellipse(200,200,x,y);
    x-=1.2;
    y-=1.2;

}
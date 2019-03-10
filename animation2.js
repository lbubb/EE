// JavaScript Document
function setup(){
	createCanvas(400, 400);

}
var x=15;
var y=-11;
fill(0, 0, 0);
textSize(20);
text("No",1,200,100,100);

function draw(){
	fill(0,0,0);
    textSize(20);
    text("No",x,200,100,100);
    text("No",x+20,y+100,100,100);
    text("No",x+60,y+50,100,100);
    text("No",x+100,y+80,100,100);
    text("No",x+160,y+80,100,100);
    text("No",x+10,y+60,100,100);
    text("No",x+100,y+160,100,100);
    text("No",x+1,y+20,100,100);
    text("No",x+30,y+50,100,100);
    text("No",x+20,y+80,100,100);
    text("No",x+20,y+80,100,100);
    text("No",x+170,y+60,100,100);
    text("No",x+20,y+20,100,100);
    text("No",x+30,y+80,100,100);
    text("No",x+50,y+90,100,100);
    text("No",x+20,y+65,100,100);
    text("No",x+100,y+50,100,100);
    x-=-1;
    y+= x;

}
// JavaScript Document
function setup(){
	createCanvas(400, 400);

}
var x=600;
var y=600;

function draw(){
fill(255, 255, 255);
	rect(50,50,300,300);
rect(100,100,200,200);
ellipse(189,246,100,100);
ellipse(166,243,11,25);
ellipse(209,243,11,25);
line(154,223,219,223);
line(154,214,219,213);
line(154,209,219,207);
fill(255, 255, 255);
ellipse(185,271,53,16);
fill(0,0,0);
textSize(20);
text("I am the man who knocks",132,149,200,200);
	textSize(20);
	text("(breaking bad scene)",50,50,200,200);
	ellipse(200,200,x,y);
x-=1;
y-=1;
}	
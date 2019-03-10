// JavaScript Document

function setup(){
	createCanvas(400, 400);

}

var x=200;
var y=200;
var c=200;
var b=200;
var i=200;
var v=200;
var j=225;
var q=100;
var k=50;
function draw(){
  stroke(j,q,k);
line(x,y,c,b);
line(b,i,c,v);
line(v,x,i,c);
line(k,i,c,x);
line(v,j,q,c);
line(q,b,i,x);
line(c+x,j,i,y);
line(j,q,k,x);
line(x,y,v,x);
line(v,i,j,k);
line(i,v,j,x);
line(q,j,k,x);
line(c,x*y,x+v,b);
line(b*q,x,y,j);
line(k,b,c,j);
line(x,c,v,j);
line(q,c,b,i);
line(x,c,y,q);
line(b,i,v,q);
line(i*j+c,q*k-4,x,c+v);
line(x*y*c,q*k*c,c*j+q+k,v+90*k);
line(c,y,x,v);
line(c,x,i,j);
line(x*y,x+y,x,y);
line(j*i,i,k*x+y,v+c*b);
line(i*b,c,x,b*v);
line(b*c+22,c+i*x,c+b+x,j*k);
line(i+22,b-22,x+44,y-10);
line(j*k*v,i*j+b,j,y);
line(j,i,x,y);
line(j*x*y*k*v,v,x,k);
line(q*k*j*v+x,x,y,b*i+k+q);
line(v,i,q,v+i+b+q);
line(q,k,v,x);
line(k*i*j,v+j+50,j*k,y);
line(v,v+40,x+50,x);
line(q+v,q+b,q+x,q+y);
line(q*v*j,j,x,x*v);
line(x,y,k,q);
x-=2;
y+=5;
c-=1;
b+=10;
i-=3;
v+=4;
j+=2;
k+=2;
q+=2;
}
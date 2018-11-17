function preload() {
	soundFormats('mp3');
	bounce = loadSound('bounce.mp3');
  }
function setup() {
	bounce.setVolume(0.5);
	createCanvas(windowWidth, windowHeight);
	
}
var x = 0;
var y = 30;
var aceleracao = 1.09;
var a = 5;
var cor = 0;
function draw() {
	var color = map(y, 0, windowWidth, 0, 255);
	background(color);
	//distance from center of the screen
	fill (cor, 0,0);
  	ellipse (x = x+a, y, 30, 30);
	
	  
	y = y * aceleracao;
	if(x >= windowWidth | x<= 0){
		a = -a;
		
		bounce.play();
	}
	cor = map(y, windowHeight, 0, 0, 255);
	console.log(x);
	if(y > windowHeight-15 | y < 29){
		if(y>100)
		bounce.play();
		aceleracao = 1/aceleracao;
	}
	
	}
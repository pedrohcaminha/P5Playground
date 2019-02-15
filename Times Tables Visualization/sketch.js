let r = 400;
let times =1000;
let mult = 0;
let tax = 0.05;
let red = 0;
let green = 0;
let blue = 0;
let rep = 0;

function setup() {
	 frameRate(10);
	createCanvas(r*2,r*2);
	background(0);
	fill(255);
	ellipse(r, r, r*2, r*2);
}

function draw(){
	background(0);
	fill(255);
	textSize(20);
	text(mult-mult%1, 10, 30);
	ellipse(r, r, r*2, r*2);
	stroke(red,green,blue);
	let x = mult;
	for(let y = 0; y < times; y+=1){
		let angle1 = map(y, 0, times, 0, TWO_PI);
		let angle2 = map((y*mult)%times, 0, times, 0, TWO_PI);
		let x1 = r*cos(angle1) + r;
		let y1 = r*sin(angle1) + r;
		let x2 = r*cos(angle2) + r;
		let y2 = r*sin(angle2) + r;
		line(x1, y1, x2, y2);
	}
	if(mouseIsPressed){
		mult = mult;
	}else{
		mult+=tax;
	}
	rep++;
	if(rep == 1/tax){
		red = random(0, 100);
		green = random(0, 100);
		blue = random(0, 100);
		rep = 0;
		saveFrames('out', 'png', 1, 1, data => {
			print(data);
		  });
	}
}
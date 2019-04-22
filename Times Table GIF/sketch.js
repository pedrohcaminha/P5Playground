let r = 400;
let times =100;
let mult = 1;
let x1 = [];
let x2 = [];
let y1 = [];
let y2 = [];
const totalFrames = 200;
let counter = 0;
let record = false;
function setup() {
	createCanvas(r*2,r*2);
	background(0);
	fill(255);
	// frameRate(5);
	// for(let y = 0; y < times; y+=1){
	// 	let angle1 = map(y, 0, times, 0, TWO_PI);
	// 	let angle2 = map((y*mult)%times, 0, times, 0, TWO_PI);
	// 	let x1_ = r*cos(angle1) + r;
	// 	let y1_ = r*sin(angle1) + r;
	// 	let x2_ = r*cos(angle2) + r;
	// 	let y2_ = r*sin(angle2) + r;
	// 	x1[y] = x1_;
	// 	x2[y] = x2_;
	// 	y1[y] = y1_;
	// 	y2[y] = y2_;
	// }
	
}

function draw(){
	stroke(255);
	translate(width/2, height/2);
	// rotate(radians(frameCount%360));
	rotate(radians(90));
	translate(-width/2, -height/2);
	background(0);
	fill(255);
	if(frameCount%200 == 0){
		mult++;
		for(let y = 0; y < times; y+=1){
			let angle1 = map(y, 0, times, 0, TWO_PI);
			let angle2 = map((y*mult)%times, 0, times, 0, TWO_PI);
			let x1_ = r*cos(angle1) + r;
			let y1_ = r*sin(angle1) + r;
			let x2_ = r*cos(angle2) + r;
			let y2_ = r*sin(angle2) + r;
			x1[y] = x1_;
			x2[y] = x2_;
			y1[y] = y1_;
			y2[y] = y2_;
		}
	}
	let upper;
		if(frameCount%(times*2) > 100){
		 upper = frameCount%(times*2)-times; 
	}else{
		 upper = 0;
	}
	
	for(let i = upper; i < frameCount%(times*2); i ++){
		if(i < x1.length)
		line(x1[i], y1[i], x2[i], y2[i]);
	}
	if (record && frameCount<= 200) {
		save(counter + ".png");
	  }
	
	counter++;
}
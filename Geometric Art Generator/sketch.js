let maxElements;
function Color() {
	return random(0, 255);
}

function Size() {
	return random(0, 800);
}
function setup() {
	createCanvas(random(400, 800), random(400, 800));
	background(Color(),Color(), Color());
	maxElements = random(20,50);
}

function draw() {
	let selector1 = floor(random(1,2));
	if(selector1 == 1){
		noStroke();
	}else{
		stroke(Color(),Color(), Color(), Color());
	}
	if(frameCount <= maxElements){
		fill(Color(),Color(), Color(), Color());
		let selector = floor(random(1,3));
		console.log(selector);
		if(selector == 1){
			rect(Size(), Size(), Size(), Size());
		}else if(selector == 2){
			ellipse(Size(), Size(), Size(), Size());
		}else if(selector == 3){
			line(Size(), Size(), Size(), Size());
		}
	}
}
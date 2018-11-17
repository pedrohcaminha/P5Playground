var mic;
let positionX = [];
let positionY = [];
var n = 400
var sizen = 2000/n;
function setup() {
  createCanvas(2000,1000);
	for(let i = 0; i<n ; i++){
		positionX[i] = sizen*i + 10;
		positionY[i] = 700;
	}
	for(let i = 0; i<n-1; i++){
		stroke(3);
		line(positionX[i], positionY[i], positionX[i+1], positionY[i+1]);
	}
  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(0);

  // Get the overall volume (between 0 and 1.0)
  var vol = 1.5 * mic.getLevel();
	fill(255,0,0);
	h = map(vol ,0,1, 700,200);
	for(let i = n; i>0; i--){
		positionY[i] = positionY[i-1];
	}
	if(h>670){
		h=700;
	}
	positionY[0] = h;

	for(let i = 0; i< n-1; i++){
		stroke(255);
		line(positionX[i], positionY[i], positionX[i+1], positionY[i+1]);
	}

	
}

let size = 30
let positions = []
let loop = 0;
function setup() {
	createCanvas(600, 600)
	background(0)
	stroke(255)
	for(let j = 0; j <= height; j+= size){
		positions[j/] = []
		for(let i = 0; i <= height; i += size){
			if(random(0, 1) > 0.5){
				line(i, j, i+size, j+size)
				positions[i][j] = true
			}else{
				line(i+size, j, i, j+size)
				positions[i][j] = false
			}
		}
	}
}

function draw(){

	loop+=1
	console.log(loop)
	for(let i = 0; i<20; i++){
		fill(0);
		noStroke()
		rect(i*30, loop*30, 30, 30)
		stroke(255);
		if(positions[loop][i] == true){
			
		}else{
			
		}
	}
	if(loop == 20){
		loop = -1
	}
}
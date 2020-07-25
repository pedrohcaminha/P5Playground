function setup (){
    let weight = 400
    let height = 400
    createCanvas(weight, height)
    let danceability = 0.7
    let energy = 0.89
    let acousticness = 0.9
    let key = 0.91
    background(255)
    fill(map(acousticness, 0, 1, 255, 100))
    noStroke()
    colorMode(HSB, 360, 100, 100);
    
    ellipse(weight / 2, height / 2, map(key, 0, 1, 0 + 30 , weight / 2))
    
    drawGradient(width / 2, height / 2, map(energy, 0, 1, 30 , 60));

    fill(255)
    ellipse(weight / 2, height / 2, 10)

}

function draw(){
	noLoop()
}

function drawGradient(x, y, radius) {
    let h = random(0, 360);
    for (let r = radius; r > 0; --r) {
      fill(h, 90, 90);
      ellipse(x, y, r, r);
      h = (h + 1) % 360;
    }
  }


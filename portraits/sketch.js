
let img





function paintStroke(strokeLength, strokeColor, strokeThickness) {
  let stepLength = strokeLength/4.0;
  
  // Determines if the stroke is curved. A straight line is 0.
  let tangent1 = 0;
  let tangent2 = 0;
  
  let odds = random(1.0);
  
  if (odds < 0.7) {
    tangent1 = random(-strokeLength, strokeLength);
    tangent2 = random(-strokeLength, strokeLength);
  } 
  
  // Draw a big stroke
  noFill();
  stroke(strokeColor);
  strokeWeight(strokeThickness);
  curve(tangent1, -stepLength*2, 0, -stepLength, 0, stepLength, tangent2, stepLength*2);
  
  let z = 1;
  
  // Draw stroke's details
  for (let num = strokeThickness; num > 0; num --) {
    let offset = random(-50, 25);
    let newColor = color(red(strokeColor)+offset, green(strokeColor)+offset, blue(strokeColor)+offset, random(100, 255));
    
    stroke(newColor);
    strokeWeight(floor(random(0, 3)));
    curve(tangent1, -stepLength*2, z-strokeThickness/2, -stepLength*random(0.9, 1.1), z-strokeThickness/2, stepLength*random(0.9, 1.1), tangent2, stepLength*2);
    
    z += 1;
  }
}

function preload() {
  img = loadImage('a.png')
}

function setup(){
  createCanvas(1000, 1000);
  pixelDensity(1);
  // image(img, 0, 0)
  img.loadPixels()
  // console.log(img)
  // console.log(pixels[1])

  background(255)

  // noLoop()
}


function draw() {
  translate(width/2, height/2);
  
  let index = 0;
  
  for (let y = 0; y < img.height; y+=1) {
    for (let x = 0; x < img.width; x+=1) {
      let odds = floor(random(20000));
      
      if (odds < 1) {
        // let pixelColor = img.pixels[index]
        let pixelColor = color(img.pixels[index], img.pixels[index+1], img.pixels[index + 2], 100);
        
        push();
        translate(x-img.width/2, y-img.height/2);
        rotate(radians(random(-90, 90)));
        
        // Paint by layers from rough strokes to finer details
        if (frameCount < 50) {
          // Big rough strokes
          paintStroke(random(150, 250), pixelColor, floor(random(20, 40)));
        } else if (frameCount < 100) {
          // Thick strokes
          paintStroke(random(75, 125), pixelColor, floor(random(8, 12)));
        } else if (frameCount < 450) {
          // Small strokes
          paintStroke(random(30, 60), pixelColor, floor(random(1, 4)));
        } else if (frameCount < 1000) {
          // Big dots
          paintStroke(random(5, 20), pixelColor, floor(random(5, 15)));
        } else if (frameCount < 1800) {
          // Small dots
          paintStroke(random(1, 10), pixelColor, floor(random(1, 7)));
        }
        
        pop();
      }
      
      index += 4;
    }
  }
  
  if (frameCount > 600) {
    noLoop();
  }
}


function mousePressed() {
  redraw();
}
let dir, x = 750, y = 750, newDir
function setup() {
  dir = floor(random(0, 7))
  createCanvas(1500,1500)
  background(0)
};
function draw() {
  if(random(0, 1) > 0.15){
    if(random(0, 1) > 0.5){
      dir = (dir + 1) % 8
    }else{
      if(dir == 0){
        dir = 8
      }else{
        dir--
      }
    }
  }
  console.log(dir)
  newDir = addDir(dir)
  x += (newDir[0] * 8)
  x = max(min(x,1500),0)
  y += (newDir[1] * 8)
  y = max(min(y,1500),0)

  fill(0)
  stroke(255)
  ellipse(x, y, 40, 40)
};

function addDir(direction){
  newDirectionVector = [0,0]
  if(direction == 0){ //up going clockwise
    newDirectionVector[0] = newDirectionVector[0] -1
    newDirectionVector[1] = newDirectionVector[1] + 0
  }else if(direction == 1){
    newDirectionVector[0] = newDirectionVector[0] -1
    newDirectionVector[1] = newDirectionVector[1] + 1
  }else if(direction == 2){
    newDirectionVector[0] = newDirectionVector[0] + 0
    newDirectionVector[1] = newDirectionVector[1] + 1
  }else if(direction == 3){
    newDirectionVector[0] = newDirectionVector[0] + 1
    newDirectionVector[1] = newDirectionVector[1] + 1
  }else if(direction == 4){
    newDirectionVector[0] = newDirectionVector[0] + 1
    newDirectionVector[1] = newDirectionVector[1] + 0
  }else if(direction == 5){
    newDirectionVector[0] = newDirectionVector[0] + 1
    newDirectionVector[1] = newDirectionVector[1] -1
  }else if(direction == 6){
    newDirectionVector[0] = newDirectionVector[0] + 0
    newDirectionVector[1] = newDirectionVector[1] -1
  }else if(direction == 7){
    newDirectionVector[0] = newDirectionVector[0] -1
    newDirectionVector[1] = newDirectionVector[1] -1
  }
  return newDirectionVector
};


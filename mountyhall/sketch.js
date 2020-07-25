
function door(){
  this.open =  false
  this.prize = false
  this.choosen = false
}


let winA = 0, lossA = 0, winB = 0, lossB = 0;

let doors = [new door(), new door(), new door()];

var setup = function () {
  createCanvas(400, 400);
};

function fillWithPrize(){
  doors = [new door(), new door(), new door()];
  let prize = floor(random(0, 3));
  doors[prize].prize = true;
}

function makeAGuess(){
  let guess = floor(random(0, 3));
  doors[guess].choosen = true;
}

function openDoor(){
    while(true){
      let door = floor(random(0, 3));
      if(!doors[door].choosen && !doors[door].prize){
        doors[door].open = true;
        break
      }
    }
}

function change(){
  if(doors[0].choosen){
    doors[0].choosen = false;
    if(doors[1].open){
      doors[2].choosen = true;
    }else{
      doors[1].choosen = true;
    }
  }else if(doors[1].choosen){
    doors[1].choosen = false;
    if(doors[0].open){
      doors[2].choosen = true;
    }else{
      doors[0].choosen = true;
    }
  }else if(doors[2].choosen){
    doors[0].choosen = false;
    if(doors[1].open){
      doors[0].choosen = true;
    }else{
      doors[1].choosen = true;
    }
  }
}

function checkWinA(){
  for(let i = 0; i < 3; i++){
    if(doors[i].choosen == doors[i].prize && doors[i].prize == true){
      winA++;
      return;
    }
  }
  lossA++;
}
function checkWinB(){
  for(let i = 0; i < 3; i++){
    if(doors[i].choosen == doors[i].prize && doors[i].prize == true){
      winB++;
      return;
    }
  }
  lossB++;
}

var draw = function () {
  background(255)
  for(let i = 0; i < 20; i++){
    fillWithPrize();
    makeAGuess();
    openDoor();
    checkWinA();
    change();
    checkWinB();
  }

  let a = (winB * 100 / (winB+winA));
  text(a, 0, 0, 400, 40)
};

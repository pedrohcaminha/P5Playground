// Distribucao de sorteio entre a e b
// Exemplo, para dado, pode colocar a=1 e b=6
// para moeda, pode colocar a=0 e b=1
// E, faixa 'e a % do gr'afico exibida

//Variaveis importantes
let a = 1;
let b = 10;
let faixa = 1;

//Codigo
let qttd = [];
let red = [];
let iterat = a-b+1;
let string = 0;
function setup(){
  createCanvas(600, 600);
  background(0);
  stroke(255);
  for(let i = a; i <= b; i++){
    qttd[i] = 1;
    red[i] = map(i, a, b, 100, 255);
  }
  
}
function draw(){
  background(0);
  for(let i = 0; i < 100; i++){
    let num = int(random(a, b+1));
    qttd[num]++;
    iterat++;
  }
  // let num = int(random(a, b+1));
  // qttd[num]++;
  // iterat++;
  for(let i = a; i <= b; i++){
    let y = map(qttd[i]/iterat, 1/(b-a+1)-(faixa/100)/2, 1/(b-a+1)+(faixa/100)/2, 590, 280);
    stroke(red[i], 0, 0);
    strokeWeight(2);
    line(11, y, 590, y);
  }
  stroke(0, 255, 0);
  let y = map(1/(b-a+1), 1/(b-a+1)-(faixa/100)/2, 1/(b-a+1)+(faixa/100)/2, 590, 280);
  line(11, y, 590, y);
  strokeWeight(1);
  stroke(0,0,255);
  line(10, 590, 590, 590);
  line(10, 280, 590, 280);
  stroke(255);
  line(10, 10, 10, 590);
  fill(255);
  textSize(20)
  string = str(floor(iterat/1000)).concat(" mil sorteios")
  text(string, 100, 20, 200, 20)
  string = str((1/(b-a+1)).toFixed(5)).concat("% teorico")
  text(string, 100, 40, 200, 80)
  for(let i = a; i <= b; i++){
    // text(floor(qttd[i]/iterat*10000), 100, 60+((i-a)*20), 120, 80);
     string = str((qttd[i]/iterat).toFixed(5)).concat("% = ", str([i]))
     
     text(string, 100, 60+((i-a)*20), 220, 80);
  }
  fill(0);
  rect(360, 20, 230, 240)
  stroke(0,0,255);
  let y1 = map(1/(b-a+1)-(faixa/100)/2,0,1,260,20)
  let y2 = map(1/(b-a+1)+(faixa/100)/2,0,1,260,20)
  fill(0,0,255)
  rect(361, y1, 589-362, y2-y1-1);
}

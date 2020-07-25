//Feito por PEDRO CAMINHA
let y
let arr = []
let quantidade = 0
let tempoTotal = 0
let fract
let largura
let x = 0
let processos
let iterator = 0
let tempos = []
let retorno = []
let txt
let temposParaMedia = 0
let width = 400
let height = 300
function preload() {
	txt = loadStrings("input.txt")
	
}
function setup() {
	createCanvas(windowWidth,windowHeight)

	background(255)

	processos = txt[1].split(" ")
	processos = processos[0]
	fract = txt[0].split(" ")
	fract = fract[0]
	frameRate(map(fract, 0, 30, 6, 1))
	// console.log(txt)
	console.log("PROCESSOS")
	for(let i = 0; i < processos; i++){
		// let tempo = floor(random(1,100))	
		let tempo = int(txt[i+2])
		// console.log(txt[i+2])
		arr[i] = new processo(i, tempo)
		console.log("processo " + str(i) + " tempo " + str(tempo))
		tempoTotal += tempo
		quantidade++
		tempos[i] = tempo
	}

	y = height/quantidade
	translate(200, 200)
}

function draw() {
	translate(200, 200)
	// roundrobin
	largura = arr[(iterator)%quantidade].update()
	// console.log(largura)
	for(let i = 0; i < processos; i++){
		if(i == (iterator)%quantidade){
			arr[i].show(true)
		}else{
			arr[i].show(false)
		}
	}
	x += largura
	// console.log(x)
	iterator++
	// if(x == width){
	// 	console.log("TEMPO DE RETORNO")
	// 	for(let j = 0; j<quantidade; j++){
	// 		console.log(retorno[j])
	// 	}
	// 	console.log("TEMPO DE RETORNO MEDIO")
	// 	console.log(temposParaMedia/quantidade)
	// }
}

class processo {
	constructor(ordem, tempo) {
		// console.log(ordem)
		this.tempo = tempo
		this.ordem = ordem
		this.cor = color(random(0,255), random(0,255),random(0,255))
	}


	update(){
		// if(this.tempo <= fract & this.tempo > 0){
		// 	retorno[this.ordem] = "processo " + str(this.ordem) + " tempo " + str((Math.round(map(x+largura, 0, width, 0, tempoTotal) * 100) / 100))
		// 	temposParaMedia += ((Math.round(map(x+largura, 0, width, 0, tempoTotal) * 100) / 100))
		// } 
		if(this.tempo < fract){
			let a = this.tempo
			this.tempo = 0
			return map(a, 0, fract, 0, ((width)/tempoTotal)*fract)
		}else{
			this.tempo -= fract
			return map(fract, 0, fract, 0, ((width)/tempoTotal)*fract)
		}
		
	}

	show(pintar){
		// noStroke()
		strokeWeight(0.1)
		if (pintar){
			
			fill(this.cor)
			rect(x, y*this.ordem, largura, y)
			// fill(0)
			// text(str(this.tempo+1), x+4, y*this.ordem+20)
			
		}else{
			fill(255)
			rect(x, y*this.ordem, largura, y)
			
		}
		
		// text(str(this.tempo), x, y*this.ordem)
	}
}
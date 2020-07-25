let brain = 0
let points = []

function setup (){
    createCanvas(1000, 1000)
    brain = new Perceptron()
    points = []
    for (let i = 0; i < 100; i++) {
        points[i] = new Point()
    }
}
i = 0
function draw(){
    background(255)
    // frameRate(1)
    // console.log(brain)
    for (let i = 0; i < points.length; i++) {
        points[i].show()
    }
    update(i)
    i = (i + 1) % points.length
    for (let i = 0; i < points.length; i++) {
        let inputs = [points[i].x, points[i].y, points[i].bias]
        let target = points[i].label
        let guess = brain.guess(inputs)
        if(guess == target){
            fill(0, 255, 0)
        }else{
            fill(255, 0, 0)
        }
        ellipse(points[i].px, points[i].py, 10)
    }
    // line(0, height, width, 0)
    line(getPX(-1), getPY(f(-1)), getPX(1), getPY(f(1)))
    line(getPX(-1), getPY(brain.guessY(-1)), getPX(1), getPY(brain.guessY(1)))
    // noLoop()

}

// funcao da linha
function f(x) {
    return 0.89 * x - 0.1
}

function getPX(x) {
    return map(x, -1, 1, 0, width)
}
function getPY(y) {
    return map(y, -1, 1, height, 0)
}

function sign(n) {
    if(n >= 0){
        return(1)
    }else{
        return (-1)
    }    
}

class Perceptron{
    lr = 0.01
    weights = [0,0]
    constructor(){
        for (let i = 0; i < 3; i++) {
            this.weights[i] = random(-1, 1)
        }
    }

    guess(inputs) {
        let sum = 0
        for (let i = 0; i < this.weights.length; i++) {
            sum += inputs[i] * this.weights[i]
        }
        let output = sign(sum)
        return output
    }

    guessY(x){
    //  let m = this.weights[1]/this.weights[0]
    //  let b = this.weights[2]
    //  return ( m * x) + b
    let w0 = this.weights[0]
    let w1 = this.weights[1]
    let w2 = this.weights[2]

    return -(w2/w1) - (w0/w1) * x
    }

    train(inputs, target){
        let guess = this.guess(inputs)
        let error = target-guess
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] +=  error * inputs[i] * this.lr
        }
    }
}

class Point{
    x
    y
    label
    px
    py
    bias
    constructor(){
        this.x = random(-1,1)
        this.y = random(-1,1)
        this.bias = 1
        if(this.y > f(this.x)){
            this.label = 1
        }else{
            this.label = -1
        }
        this.px = getPX(this.x)
        this.py = getPY(this.y)
    }

    show(){
        stroke(0)
        if(this.label == 1){
            fill(255)            
        }else{
            fill(0)
        }
        
        ellipse(this.px, this.py, 20)
    }
}

function update(i) {
    
        let inputs = [points[i].x, points[i].y, points[i].bias]
        let target = points[i].label
        brain.train(inputs, target)
    
}
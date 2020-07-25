function mutate(x) {
    if (random(1) < 0.1) {
      let offset = randomGaussian() * 0.5;
      let newx = x + offset;
      return newx;
    } else {
      return x;
    }
  }

class Bird{

    constructor(brain){
        this.fitness = 0
        this.score = 0

        this.y = height / 2
        this.x = 60
    
        this.size = 32
    
        this.gravity = 0.8
        this.lift = -12
        this.velocity = 0
    
    
        this.color = color(random(0,255), random(0,255), random(0,255))

        if(brain){
            this.brain = brain.copy()
            this.brain.mutate(mutate)
        }else{
            this.brain = new NeuralNetwork(5, 8, 2)
        }
    }

    copy(){
        return new Bird(this.brain)
    }

    show(){
        fill(this.color)
        ellipse(this.x, this.y, this.size, this.size)
    }

    
    think(pipes){
        let closest = null
        let closestD = Infinity
        for (let i = 0; i < pipes.length; i++) {
            let d = pipes[i].x - this.x
            if(d < closestD && d > 0){
                closest = pipes[i]
                closestD = d
            }
            
        }
        
        if (closest != null) {
            let inputs = []
            inputs[0] = map(closest.x, this.x, width, 0, 1)
            inputs[1] = map(closest.top, 0, height, 0, 1)
            inputs[2] = map(closest.bottom, 0, height, 0, 1)
            inputs[3] = map(this.y, 0, height, 0, 1)
            inputs[4] = map(this.velocity, -5, 5, 0, 1)
            let action = this.brain.predict(inputs)
            if (action[1] > action[0]) {
              this.up();
            }
        }
    }
    
    up() {
        this.velocity += this.lift
    }

    bottomTop(){
        return (this.y > height || this.y < 0)
    }

    update(){
        this.velocity += this.gravity
        // this.velocity *= 0.9
        this.y += this.velocity

        this.score++
    }

}
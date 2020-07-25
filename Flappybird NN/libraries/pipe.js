class Pipe{

    constructor(){
        let spacing = 60
        let centery = random(spacing, height - spacing)
        
        this.top = centery - spacing / 2
        this.bottom = height - (centery + spacing / 2)
        this.x = width
        this.w = 40
        this.speed = 6
    }
    
    hits(bird) {
        if(bird.y < this.top || bird.y > height - this.bottom){
            if(bird.x > this.x && bird.x<this.x + this.w){
                return true
            }
        }
        return false
    }

    show(){
        fill(255)
        rect(this.x, 0, this. w, this.top)
        rect(this.x, height - this.bottom, this. w, this.bottom)
    }

    update(){
        this.x -= this.speed
    }

    offscreen(){
        if(this.x < -this.w){
            return true
        }else{
            false
        }
    }

}
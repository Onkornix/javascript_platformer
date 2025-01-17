

class character {
    constructor(mapPos,screenPos,velocity,acceleration) {
        this.mapPos = mapPos
        this.screenPos = screenPos
        this.velocity = velocity
        this.acceleration = acceleration
        this.hitbox = new point(30,30)
    }

    move() {
        let isOutOfBounds = this.screenPos.isOutOfBounds(this.hitbox)
        if ( isOutOfBounds != -1) {
            let wall = isOutOfBounds
            this.velocity.rebound(wall)
            this.acceleration.rebound(wall)
        }
        this.velocity.add(this.acceleration)
        this.screenPos.add(this.velocity)
        console.log(this.screenPos)

    }

    draw() {
        ctx.fillStyle = "white"
        ctx.fillRect(this.screenPos.x,this.screenPos.y,this.hitbox.x,this.hitbox.y)

    }
}

class point {
    constructor(x,y) {
        this.x = x
        this.y = y

        this.prevX = x
        this.prevY = y
    }
    add(point) {
        this.prevX = this.x
        this.prevY = this.y

        this.x = this.x + point.x
        this.y = this.y + point.y
    }
    isOutOfBounds(hitbox) {
        let wall = -1
        if (this.y > 900 || this.y < 0 + hitbox.y) {
            this.y = this.roundPrev()
            wall = 0
        } else if (this.x > 900 - hitbox.x || this.x < 0) {
            this.x = this.roundPrev()
            wall = 1
        }

        return wall
    }
    rebound(wall) {
        switch (wall) {
            case 0: 
                this.y = this.y * -1
                break
            case 1:
                this.x = this.x * -1
                break
            
        }
    
    }
    roundPrev() {
        if (this.prevY > 450 || this.prevX > 450) {
            return 900
        } else {
            return 0
        }
    }
}

let ctx = document.getElementById("awesomeCanvas").getContext("2d")

let WIDTH = 900
let HEIGHT = 800

ctx.canvas.height = HEIGHT
ctx.canvas.width = WIDTH


let player = new character(
    new point(0,0),
    new point(400,600),
    new point(0,0),
    new point(0.1,0.1)
    )
// let player2 = new character(
//     new point(0,0), 
//     new point(0,0),
//     new point(0,0),
//     new point(0,0)
// )

let playerList = [player]

function frame() {
    ctx.clearRect(0,0,WIDTH,HEIGHT)
    drawCharacters()

    player.move()

    

    requestAnimationFrame(frame)
}

function drawCharacters() {
    for (i in playerList) {
        playerList[i].draw()
    }
}




//requestAnimationFrame(frame)

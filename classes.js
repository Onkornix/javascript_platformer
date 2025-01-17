class character {
    constructor() {
        this.position = new position(450,400)
        this.movement = new movement(0,0,0,3)
        this.hitbox = new hitbox(30,30)
    }
    move() {
        this.position.calcNewPos(this)
        console.log(this)
    }
}

class position {
    constructor(x,y) {
        this.x = x
        this.y = y
        
    }
    calcNewPos(character) {
        character.movement.calculateVelocity()

        switch (this.wallCollision(character.hitbox)) {
            case 0: // collide left of right
                character.position.roundX()
                character.movement.velocity.rebound(0)
                break
            case 1: // collide top or bottom
                character.movement.velocity.rebound(1)
                break
        }

        this.x += character.movement.velocity.x
        this.y += character.movement.velocity.y
    }
    wallCollision(hitbox) {
        if (this.x < 0 || this.x > 800 - hitbox.width) {
            return 0 // left or right
        }
        else if (this.y < 0 || this.y > 800 - hitbox.height) {
            return 1 // top or bottom
        } 
        else {
            return 2
        }
    }
    roundY() {
        if (this.x > 750) {
            this.x = 800
        } else if (this.x < 50) {
            this.x = 0
        }
    }
    
}

class hitbox {
    constructor(w,h) {
        this.width = w
        this.height = h
    }
}

class movement {
    constructor(vX,vY,aX,aY) {
        this.velocity = new velocity(vX,vY)
        this.acceleration = new acceleration(aX,aY)
    }

    calculateVelocity() {
        let newVelocity = new velocity(this.velocity.x, this.velocity.y)
        newVelocity.add(this.acceleration)
        newVelocity.terminalVelocity()
        
        this.velocity = newVelocity
    }
}

class velocity {
    constructor(x,y){
        this.x = x
        this.y = y
    }

    add(acceleration) {
        this.x += acceleration.x
        this.y += acceleration.y
    }

    terminalVelocity() {
        const maxX = 20
        const maxY = 20
        let newVList = []
        if (this.x >= Math.abs(maxX)) {
            newVList.push(maxX)
        } else {
            newVList.push(this.x)
        }

        if (this.y >= Math.abs(maxY)) {
            newVList.push(maxY)
        } else {
            newVList.push(this.y)
        }

        this.x = newVList[0]
        this.y = newVList[1]

        return this
    }
    rebound(direction){ // 0 = horiz, 1 = virt
        switch (direction) {
            case 0:
                this.x = this.x * -1
                break
            case 1:
                this.y = this.y * -1
                break
        }
    }
}

class acceleration {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
    rebound() {

    }
}


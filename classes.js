class character {
    constructor(mapPos,screenPos,velocity,acceleration) {
        this.mapPos = mapPos

        this.screenPos = screenPos

        this.velocity = velocity

        this.acceleration = acceleration

        this.hitbox = {
            x: 30, y: 30
        }
    }

    move() {
        this.velocity.add(this.acceleration)
        this.screenPos.add(this.velocity)

    }

    draw() {
        ctx.fillStyle = "white"
        ctx.fillRect(this.screenPos.xForce,this.screenPos.yForce,this.hitbox.x,this.hitbox.y)

    }
}

class pointMovement {
    constructor(x,y) {
        this.xForce = x
        this.yForce = y
    }
    add(vector) {
        this.xForce = this.xForce + vector.xForce
        this.yForce = this.yForce + vector.yForce
        return this
    }
}
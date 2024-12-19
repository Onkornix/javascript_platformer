let ctx = document.getElementById("awesomeCanvas").getContext("2d")

let WIDTH = 900
let HEIGHT = 800

ctx.canvas.height = HEIGHT
ctx.canvas.width = WIDTH


let player = new character(
    new pointMovement(0,0),
    new pointMovement(0,0),
    new pointMovement(0,0),
    new pointMovement(0,2)
    )
let player2 = new character(
    new pointMovement(0,0), 
    new pointMovement(300,0),
    new pointMovement(0,0),
    new pointMovement(1,1)
)

let playerList = [player,player2]

function frame() {
    ctx.clearRect(0,0,WIDTH,HEIGHT)
    drawCharacters()

    player.move()
    player2.move()
    console.log(player.velocity.yForce, player2.velocity.yForce)

    

    requestAnimationFrame(frame)
}

function drawCharacters() {
    for (i in playerList) {
        playerList[i].draw()
    }
}




requestAnimationFrame(frame)

let ctx = document.getElementById("awesomeCanvas").getContext("2d")

let WIDTH = 900
let HEIGHT = 800

ctx.canvas.height = HEIGHT
ctx.canvas.width = WIDTH


let player = new character()
let i = 0
function draw(){
    ctx.clearRect(0,0,WIDTH,HEIGHT)
    player.move()
    ctx.fillStyle = "white"
    ctx.fillRect(player.position.x,player.position.y,30,30)

    if (i == 22) {
        return
    }
    i += 1
    requestAnimationFrame(draw)
    
}

requestAnimationFrame(draw)
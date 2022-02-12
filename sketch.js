var player1, player2
var edges
function setup(){
    createCanvas(1525,750)
    player1 = createSprite(random(10,width-80),random(10,height-80),50,50)
    player1.shapeColor = "gold"
    player1.velocityX = random(-5,5)
    player1.velocityY = random(-5,5)
   
    player2 = createSprite(random(50,width-10),random(50,height-10),50,50)
    player2.shapeColor = "blue"
    player2.velocityX = random(-5,5)
    player2.velocityY = random(-5,5)

    edges = createEdgeSprites()
}   

function draw(){
    background("lightBlue")
    player1.bounceOff(edges)
    player2.bounceOff(edges)
    drawSprites()
}
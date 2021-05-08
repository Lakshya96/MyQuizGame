var database,game,form,player,allPlayers,p1;
var car1,car2,car3,car4,cars,car1Img,car2Img,car3Img,car4Img,trackImg;
var playerCount = 0;
var gameState = 0;
function preload() {
    
}
function setup(){
    createCanvas(600,600);
    database=firebase.database();
    console.log(database);
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("lightBlue");
    if(playerCount===4){
    gameState=1;
    game.update(1);
    }
    if(gameState===1){
        clear();
        game.end();
    }
}
class Game {
    constructor(){
  //player.update
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    }
  
    end(){
      Player.getPlayerInfo();
        background(rgb(255, 245, 63));
        if (allPlayers!=undefined) {
          form.hide1();
        var index=0;
        var y=200;
        for(var plr in allPlayers){
          index = index + 1;
          console.log(plr);
          console.log(allPlayers);
          if (allPlayers[plr].answer==="2") {
            fill("green");
          } else{
            fill("red")
          }
          textSize(20)
          text("Name Answer", 75, 175)
          text(allPlayers[plr].name+" "+allPlayers[plr].answer,75,y);
          y=y+25;
        }
    }
  }
}

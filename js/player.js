class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.answer = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      });
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      });
    }

    getAnswer(){
        var answerIndex="players/player";
        answerIndex.on("value",(data)=>{
            player = data.val();
          });
    }
}
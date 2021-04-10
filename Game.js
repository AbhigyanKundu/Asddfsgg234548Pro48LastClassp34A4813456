class Game {
  constructor(){

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
      var form1 = new Form1()
      form1.display();
      image( backgroundImage,0,0,displayWidth, displayHeight);
    }

 
  }

  play(){
    form1.hide();
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,0,displayWidth, displayHeight);
      

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
       // cars[index-1].x = x;
       // cars[index-1].y = y;

        if (index === player.index){
            form2 = new Form2()
            form2.display();

        //   cars[index - 1].shapeColor = "red";
        //   camera.position.x = displayWidth/2;
        //   camera.position.y = cars[index-1].y;
        }
       
       }

    }

    if(gameState===1){
      form1 .display()
    }


    if(gameState===2){
        form2.display()
      }

      
  //  if(player.distance > 3860){
   //   gameState = 2;
  //  }
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}

// You have left the session am I there?
// no  now run and see, i m reconnecting
// https://whitehatjr.whereby.com/whclass7bbfcc81-a22a-4507-95dc-aac3b5f6d00a

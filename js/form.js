class Form{
    constructor(){
        this.input=createInput("Write Name Here");
        this.input1=createInput("Write Answer's Number Here");
        this.button=createButton("Submit");
        this.resetButton=createButton("Reset")
        this.greeting=createElement('h3');
        this.question1=createElement('h3');
        this.option1=createElement('h3');
        this.option2=createElement('h3');
        this.option3=createElement('h3');
        this.option4=createElement('h3');
    }
    display(){
        var title=createElement('h1');
        title.html("My Quiz Game");
        title.position(200,10);

        this.question1.html("What goes on and on and has an i in the middle?")
        this.question1.position(40,50);
        this.option1.html("1. Infinite");
        this.option1.position(40,70);
        this.option2.html("2. Onion");
        this.option2.position(40,90);
        this.option3.html("3. Infinity");
        this.option3.position(40,110);
        this.option4.html("4. Mount Ireland's Eye");
        this.option4.position(40,130);
        
        this.input.position(300,500);
        this.input1.position(65,500);
        this.button.position(250,550);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.input1.hide();

            this.greeting.html("Waiting for answers...");
            this.greeting.position(170,300);

            player.name=this.input.value();
            player.answer=this.input1.value();

            playerCount=playerCount+1;

            player.index=playerCount;
            
            player.update();

            player.updateCount(playerCount);
        });

        this.resetButton.position(545,575);

        this.resetButton.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
        });
    }
    hide1(){
        this.input.hide();
        this.input1.hide();
        this.button.hide();
        this.greeting.hide();
        this.question1.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
        console.log("hide1");
    }
}
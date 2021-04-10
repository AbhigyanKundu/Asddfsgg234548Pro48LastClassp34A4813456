class Form3 {

    constructor() {
        this.input1 = createInput("Place of stay eg.Navi Mumbai,Koperkhairane");
        this.input2 = createInput("Adress");
        this.input3 = createInput("Phone Number");
    //  this.input = createInput("Name");
   // this.button = createButton('Get Started');// In case of play get started

    //     this.emergency1= createButton('Police Station');
    //     this.emergency2= createButton('Fire Brigade');
    //     this.emergency3= createButton('Ambulance');
    //     this.emergency4= createButton('Resturants');
    //     this.emergency5= createButton('Hospitals');
    //  //   this.greeting = createElement('h2');
       // this.title = createElement('h2');
    }
    display(){

        this.button.mousePressed(()=>{
    //I want to give function that if user presses the emergency1 button input should display   // this.input.hide();
    // Then it should find the police station near the "Place of stay" After pressing emergency1 button
    //Then it should find the Fire station near the "Place of stay" After pressing emergency2 button
    //Then it should find the Petrol Pump near the "Place of stay" After pressing emergency3 button  
    //Then it should find the Resturant near the "Place of stay" After pressing emergency4 button
    // Then it should find the Hospital near the "Place of stay" After pressing emergency5 button       
            this.input1.display();
            this.input2.display();
            this.input3.display();
   
            // this.button.hide();
            // player.name = this.input.value();
            // playerCount+=1;
            // player.index = playerCount;
            // player.update();
            // player.updateCount(playerCount);
            // this.greeting.html("Hello " + player.name)
            // this.greeting.position(displayWidth/2 - 70, displayHeight/4);
          });
          
    }
    
}
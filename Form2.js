class Form2 {

    constructor() {
    //  thisthis.emergency1.display();.input = createInput("Name");
    this.emergency1= createButton('Police Station');
    this.emergency2= createButton('Fire Brigade');
    this.emergency3= createButton('Petrol Pump');
    this.emergency4= createButton('Resturants');
    this.emergency5= createButton('Hospitals');

   // this.button = createButton('Get Started');// In case of play get started

     //   this.greeting = createElement('h2');
    // this.title = createElement('h2');
    }


    display(){
      this.emergency1.position(displayWidth/2 - 50, 100);

      //this.emergency2.display();
      this.emergency2.position(displayWidth/2 - 50,200);

      //this.emergency3.display();
      this.emergency3.position(displayWidth/2 - 50, 300);

     // this.emergency4.display();
      this.emergency4.position(displayWidth/2 - 50, 400);

      //this.emergency5.display();
      this.emergency5.position(displayWidth/2 - 50, 500);


    }
    
}
class Question {

    constructor(){

        this.input = createInput("name");
        this.button = createButton("SUMBIT");
        this.greeting = createElement('h2')
        
    }
    hide(){

        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        
    }

    display(){

        var title = createElement('h2');
        title.html("MY QUIZ");
        title.position(130,10);

        this.input.position(130,160);
        this.button.position(250,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            contestant.name = this.input.value();
            contestantCount+=1;
            contestant.index = playerCount;
            contestant.update();
            contestant.updateCount(contestantCount);
            this.greeting.html("Hello " + contestant.name)
            this.greeting.position(130, 100);
          });
      




    }


















}
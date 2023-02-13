import * as PIXI from 'pixi.js'
import Action from './action';
import Chest from './chest';
import AppDefinitions from './definitions';

export class UI {

    protected container : PIXI.Container;
    public playButton : PIXI.Graphics;
    public chest1 !: Chest;
    public chest2 !: Chest;
    public chest3 !: Chest;
    public chest4 !: Chest;
    public chest5 !: Chest;
    public chest6 !: Chest;
    
    

    constructor(container : PIXI.Container) {
        this.container = container;
        this.playButton = new PIXI.Graphics();
    }



    drawUI(){
        this.drawBackgroundForMainScreen();
        this.drawTexts();
        this.drawPlayButton();
        this.createChests();

    }

    drawBackgroundForMainScreen() {
        let background: PIXI.Graphics = new PIXI.Graphics;
        background.beginFill(0x9C9795);
        background.drawRect(0, 0, 800, 600);
        background.endFill();
        this.container.addChild(background);
    }

    drawTexts() {
        let title = new PIXI.Text('MAIN GAME SCREEN');
        title.anchor.x = 0.5;
        title.position.set(350, 30); //set correct positions later, find best solution for it
        this.container.addChild(title);
    }

    drawPlayButton() {
        // let playButtonImg : PIXI.Sprite = PIXI.Sprite.from('images/playy.png');
        // this.container.addChild(playButtonImg);

        this.playButton = new PIXI.Graphics; //maybe an image but for now it s ok like this for now
        this.playButton.beginFill(0x00FF00);
        this.playButton.drawRect(0, 0, 100, 60);
        this.playButton.endFill();
        this.playButton.position.set(330, 450);

        this.playButton.cursor = 'pointer';
        this.playButton.interactive = true; 

        this.playButton.on(AppDefinitions.CLICK_EVENT, this.onClickPlayButton.bind(this));
       
        this.container.addChild(this.playButton);

    }



    createChests() {
        this.chest1 = new Chest({         // creating all chests
            texture : 'images/logo.png',
            position : { x : 50, y : 30},
            scale : 0.08,
            interactive : false,
            visible : true

        })

        this.chest2 = new Chest({
            texture : 'images/logo.png',
            position : { x : 50, y : 180},
            scale : 0.08,
            interactive : false,
            visible : true
        })

        this.chest3 = new Chest({
            texture : 'images/logo.png',
            position : { x : 50, y : 320},
            scale : 0.08,
            interactive : false,
            visible : true
        })

        this.chest4 = new Chest({
            texture : 'images/logo.png',
            position : { x : 480, y : 30},
            scale : 0.08,
            interactive : false,
            visible : true
        })

        this.chest5 = new Chest({
            texture : 'images/logo.png',
            position : { x : 480, y : 180},
            scale : 0.08,
            interactive : false,
            visible : true
        })

        this.chest6 = new Chest({
            texture : 'images/logo.png',
            position : { x : 480, y : 320},
            scale : 0.08,
            interactive : false,
            visible : true
        })

   
        this.chest1.on(AppDefinitions.CLICK_EVENT, this.onClickChest.bind(this)); //connecting all chests to a click event
        this.chest2.on(AppDefinitions.CLICK_EVENT, this.onClickChest.bind(this));
        this.chest3.on(AppDefinitions.CLICK_EVENT, this.onClickChest.bind(this));
        this.chest4.on(AppDefinitions.CLICK_EVENT, this.onClickChest.bind(this));
        this.chest5.on(AppDefinitions.CLICK_EVENT, this.onClickChest.bind(this));
        this.chest6.on(AppDefinitions.CLICK_EVENT, this.onClickChest.bind(this));

        this.chest1.cursor = 'pointer';  // setting the hand cursor to all chests just for fun :D 
        this.chest2.cursor = 'pointer';
        this.chest3.cursor = 'pointer';
        this.chest4.cursor = 'pointer';
        this.chest5.cursor = 'pointer';
        this.chest6.cursor = 'pointer';

        this.container.addChild(this.chest1, this.chest2, this.chest3, this.chest4, this.chest5, this.chest6); 
    
    }

     onClickPlayButton () {
        console.log('play button clicked');
        this.playButton.interactive = false;
        let action : Action = new Action();
        action.setActivityForChests(this, true);
        
        action.setActivityForChests(this, true);
        action.setVisibilityForChests(this, true);

    

}

     onClickChest() {
        console.log('chest clicked');
        this.playButton.interactive = false; // disables play button

        let action : Action = new Action();
        action.setActivityForChests(this, false); // disables the chests
        action.setVisibilityForChests(this, false); // hides the chests
                                                    // method for the chosen chest to be available

        action.determineWin();
      

        

        // celelalte chesturi tre sa devina inactive. New onClickChest method for every chest or what? think about this
    

    }

     
     

    // asta e in alta clasa
//     
//      if true determine randomly if it's regular win or bonus win 
//     play animation for chosen
//     else false play lose animation
//     displayBonusScreen() mehtod which will hide main game screen and display 
 

   


}
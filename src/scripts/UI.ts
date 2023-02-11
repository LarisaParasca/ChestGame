import * as PIXI from 'pixi.js'
import Chest from './chest';
import AppDefinitions from './definitions';

export class UI {

    protected container : PIXI.Container;
    protected playButton : PIXI.Graphics;
    // protected chest1 : Chest;
    

    constructor(container : PIXI.Container) {
        this.container = container;
       
        this.playButton = new PIXI.Graphics();
        // this.chest1 = new Chest('');
        
    }



    drawUI(){
        console.log("a intrat in draw ui method ");
        this.drawBackgroundForMainScreen();
        this.drawTexts();
        this.drawPlayButton();
        this.drawChests();
    }

    drawBackgroundForMainScreen() {
        console.log("intra in draw bg")
        let background: PIXI.Graphics = new PIXI.Graphics;
        background.beginFill(0x9C9795);
        background.drawRect(0, 0, 800, 600);
        background.endFill();
        this.container.addChild(background);
    }

    drawTexts() {
        console.log("texts are draw");
        let title = new PIXI.Text('MAIN GAME SCREEN');
        title.anchor.x = 0.5;
        title.position.set(350, 30); //set correct positions later, find best solution for it
        this.container.addChild(title);
    }

    drawPlayButton() {
        console.log('play button draw');
        // let playButtonImg : PIXI.Sprite = PIXI.Sprite.from('images/playy.png');
        // this.container.addChild(playButtonImg);

        this.playButton = new PIXI.Graphics; //maybe an image but for now it s ok like this for now
        this.playButton.beginFill(0x00FF00);
        this.playButton.drawRect(0, 0, 100, 60);
        this.playButton.endFill();
        this.playButton.position.set(330, 450);

        this.playButton.cursor = 'pointer';
        this.playButton.interactive = true; 

        this.playButton.on(AppDefinitions.CLICK_EVENT, this.onClickPlayButton);
       
        this.container.addChild(this.playButton);

    }



    drawChests() {
        // this.chest1 = new Chest({
        //     texture : 'images/logo.png',
        //     position : { x : 50, y : 30},
        //     scale : 0.08
        // })

        let chest2 = new Chest({
            texture : 'images/logo.png',
            position : { x : 50, y : 180},
            scale : 0.08
        })

        let chest3 = new Chest({
            texture : 'images/logo.png',
            position : { x : 50, y : 320},
            scale : 0.08
        })

        let chest4 = new Chest({
            texture : 'images/logo.png',
            position : { x : 480, y : 30},
            scale : 0.08
        })

        let chest5 = new Chest({
            texture : 'images/logo.png',
            position : { x : 480, y : 180},
            scale : 0.08
        })

        let chest6 = new Chest({
            texture : 'images/logo.png',
            position : { x : 480, y : 320},
            scale : 0.08
        })

      
        // this.chest1.interactive = true; 
        // chest2.interactive = true; 
        // chest3.interactive = true; 
        // chest4.interactive = true; 
        // chest5.interactive = true; 
        // chest6.interactive = true; 

        // this.chest1.cursor = 'pointer';
        // this.chest1.on("pointerdown", this.onClickChest);

        this.container.addChild( chest2, chest3, chest4, chest5, chest6);
    }


     onClickPlayButton () {
        console.log('play button clicked')
    // butonul sa devina inactiv, chests become clickable
    // 

}

     onClickChest() {

        // this.playButton.interactive = false;
        console.log('chest inactive');
        this.playButton.interactive = false;
        // this.chest1.interactive = false;
        

        // celelalte chesturi tre sa devina inactive. New onClickChest method for every chest or what? think about this
        // method to randmly determine if it's a win 
        // determineWin (); 

    }

    // determineWin(){ asta e in alta clasa
    // some random calculation which return true or false 
    //  if true determine randomly if it's regular win or bonus win 
    // play animation for chosen
    // else false play lose animation
    //displayBonusScreen() mehtod which will hide main game screen and display 
  //  }
    


}
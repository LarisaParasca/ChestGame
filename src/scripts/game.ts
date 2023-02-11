import * as PIXI from 'pixi.js'
import { UI } from './UI';

// create container for main screen. Create instance of UI that creates eveything I need
export class Game {
    protected container: PIXI.Container;
    protected mainScreenContainer : PIXI.Container;
    protected uiElements: UI; //am definit uiElements

    constructor(stage: PIXI.Container) {
        this.container = stage;
        this.mainScreenContainer = new PIXI.Container();
        this.uiElements = new UI(this.mainScreenContainer); //am creat o noua instanta a ui elements
    
    }

    // calling function that initialize the screen
    run() { 
        console.log("intra in run")
        this.drawMainScreen();
    
     
    }

    drawMainScreen() {
        console.log("main screen is draw");
        this.container.addChild(this.mainScreenContainer); // am pus main screen container pe stage
        this.uiElements.drawUI(); // am call uit o functie din noua instanta pe care am creeat o
                                  // practic asa leg game file de UI file, cum faceam in game de la esa
        
    }

    
}
import * as PIXI from 'pixi.js'
import { UI } from './UI';

export class Game {
  protected container: PIXI.Container;
  protected mainScreenContainer: PIXI.Container;
  protected uiElements: UI; 

  constructor(stage: PIXI.Container) {
    this.container = stage; //the stage
    this.mainScreenContainer = new PIXI.Container(); //create new container
    this.uiElements = new UI(this.mainScreenContainer);  // pass as a param of UI this mainScreenScontainer

  }

  run() { //function called in main class
    this.drawMainScreen(); //created another method here because I thought I will add another one something like
    //this.drawOtherScreen();  otherwise it would not make sense
  }

  drawMainScreen() {
    this.container.addChild(this.mainScreenContainer); //adding the mainScreenContainer on stage
    this.uiElements.drawUI(); //calling the starting method from UI
  }
  // mainScreenContainer - create, add on stage, pass as param

}
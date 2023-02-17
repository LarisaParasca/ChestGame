import * as PIXI from 'pixi.js'
import { UI } from './UI';

export class Game {
  protected container: PIXI.Container;
  protected mainScreenContainer: PIXI.Container;
  protected uiElements: UI; 

  constructor(stage: PIXI.Container) {
    this.container = stage;
    this.mainScreenContainer = new PIXI.Container();
    this.uiElements = new UI(this.mainScreenContainer); 

  }

  run() {
    this.drawMainScreen();
  }

  drawMainScreen() {
    this.container.addChild(this.mainScreenContainer); 
    this.uiElements.drawUI(); 
  }

}
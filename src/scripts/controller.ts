import * as PIXI from 'pixi.js'
import Animation from './animation';
import animation from './animation';
import Chest from './chest';
import AppDefinitions from './definitions';
import { UI } from './UI';


export default class Controller {
  constructor() {

  }
  public setActivityForChests(ui: UI, activeState: boolean) {

    ui.chest1.interactive = activeState;
    ui.chest2.interactive = activeState;
    ui.chest3.interactive = activeState;
    ui.chest4.interactive = activeState;
    ui.chest5.interactive = activeState;
    ui.chest6.interactive = activeState;
  }

  setVisibilityForChests(ui: UI, visibleState: boolean, chestNumberToKeepVisible: number = 0) {
    ui.chest1.visible = visibleState;
    ui.chest2.visible = visibleState;
    ui.chest3.visible = visibleState;
    ui.chest4.visible = visibleState;
    ui.chest5.visible = visibleState;
    ui.chest6.visible = visibleState;
    
    // If a chestNumberToKeepVisible was provided, set that chest to be visible
    if (chestNumberToKeepVisible) {
        switch (chestNumberToKeepVisible) {
            case 1: 
                ui.chest1.visible = true;
                break;
            case 2: 
                ui.chest2.visible = true;
                break;
            case 3: 
                ui.chest3.visible = true;
                break;
            case 4: 
                ui.chest4.visible = true;
                break;
            case 5: 
                ui.chest5.visible = true;
                break;
            case 6: 
                ui.chest6.visible = true;
                break;
        }
    }
}

  determineWin() {
    let randomNumber = Math.floor(Math.random() * 2);
    let result = randomNumber === 1;
    let animation = new Animation();
    result ? this.determineWinOrBonus() : animation.playLoseAnimation();
    return result;
  }

  determineWinOrBonus() {
    console.log("chosen chest is a win");
    let randomWin = Math.floor(Math.random() * 2);
    let result = randomWin === 1;
    let animation = new Animation();
    result ? animation.playNormalWinAnimation() : animation.playBonusWinAnimation();
    return result;
  }


  
}
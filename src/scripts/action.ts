import * as PIXI from 'pixi.js'
import Chest from './chest';
import AppDefinitions from './definitions';
import { UI } from './UI';


export default class Action {
     constructor() {

     }

     public setActivityForChests(ui : UI, activeState : boolean) { 
    
        ui.chest1.interactive = activeState;
        ui.chest2.interactive = activeState;
        ui.chest3.interactive = activeState;
        ui.chest4.interactive = activeState;
        ui.chest5.interactive = activeState;
        ui.chest6.interactive = activeState;
    }

    setVisibilityForChests(ui : UI, visibleState : boolean) {
        ui.chest1.visible = visibleState;
        ui.chest2.visible = visibleState;
        ui.chest3.visible = visibleState;
        ui.chest4.visible = visibleState;
        ui.chest5.visible = visibleState;
        ui.chest6.visible = visibleState;
    }

      
    determineWin() {
        let randomNumber = Math.floor(Math.random() * 2);
        let result = randomNumber === 1;
        console.log(result);
        result ? this.determineWinOrBonus() : this.lose() ;
        return result;
     }

     determineWinOrBonus() {
        console.log("chest is winner");
        let randomWin = Math.floor(Math.random() * 2);
        let result = randomWin === 1;
      //   console.log(result);
        result ? this.playNormalWinAnimation(): this.playBonusWinAnimation() ;
        return result;
     }
    
     playNormalWinAnimation(){
      console.log('normal win')
      console.log("plays normal win animation")
     }
  
     playBonusWinAnimation(){
      console.log('bonus win')
      console.log('plays bonus win animation ')
     }
  
    lose() {
      console.log("the chest is a looser");
    }
  


    

}
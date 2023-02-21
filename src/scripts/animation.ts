import * as PIXI from 'pixi.js';




export default class Animation {
    constructor (){
       
    }

    playNormalWinAnimation() {
        console.log('normal win')
        console.log("plays normal win animation")

        // let container = new PIXI.ParticleContainer();

        // for (let i = 0; i < 100; ++i)
        // {
        //     let sprite = PIXI.Sprite.from('images/logo.png');
        //     container.addChild(sprite);
        // }

      }


      playBonusWinAnimation() {
        console.log('bonus win')
        console.log('plays bonus win animation ')
      }
    
      playLoseAnimation() {
        console.log("chosen chest is not a win");
        
      }


}
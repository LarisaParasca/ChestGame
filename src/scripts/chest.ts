import * as PIXI from 'pixi.js';

export default class Chest extends PIXI.Sprite {

     
  
  constructor (config : any) {
    super();

    const { texture, scale, position, interactive, visible } = config;
    // this.config = config;

    
    if (texture) {
      this.texture = PIXI.Texture.from(texture);
    }

    if (this.interactive !== undefined) {
        this.interactive = interactive;
      }

    this.setPosition(position);
    
    if (scale) {
      this.scale.set(scale);
    }
    
    if (scale && scale.x && scale.y) {
      this.scale.set(scale.x, scale.y);
    }


    
    if (visible !== undefined) {
      this.visible = visible;
    }

    
  }

  setPosition = (position : any) => {
    if (position && position.x) {
      this.position.x = position.x;
    }

    if (position && position.y) {
      this.position.y = position.y;
    }
  }
}
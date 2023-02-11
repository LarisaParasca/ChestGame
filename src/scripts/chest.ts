import { UI } from "./UI";
import * as PIXI from 'pixi.js'



export default class Chest extends PIXI.Sprite {
    constructor(params : any){
        super(PIXI.Texture.from(params.texture));
        const { position, scale } = params;
        if (position && position.x) this.position.x = position.x;
        if (position && position.y) this.position.y = position.y;

        if (scale) scale.x && scale.y ? this.scale.set(scale.x, scale.y) : this.scale.set(scale);

        // this.createChest();

    }

    // createChest(x : number, y : number) {
    //     let chest1: PIXI.Graphics = new PIXI.Graphics; //maybe an image but for now it s ok like this for now
    //     chest1.beginFill(0x964B00);
    //     chest1.drawRect(0, 0, 100, 60);
    //     chest1.endFill();
    //     chest1.position.set(x, y);

    //     chest1.cursor = 'pointer';
    //     chest1.interactive = true; 

    // }

    // createChest() {
    //     console.log("blabla")
    // }
} 
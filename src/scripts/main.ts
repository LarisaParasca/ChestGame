// app.ts

import * as PIXI from 'pixi.js'

class Main extends PIXI.Container {
    private _app: PIXI.Application;
    constructor() {
        super();
        this._app = new PIXI.Application();
        this._app.renderer.backgroundColor = 0xAAAAAA;
        document.body.appendChild(this._app.view);
    }
}

const main = new Main();




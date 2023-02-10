import * as PIXI from 'pixi.js'
import AppDefinitions from './definitions';
import { Game } from './game';


interface EngineParams {
    containerId: string,
    canvasW: number,
    canvasH: number,
}

class Engine {
    public container: HTMLElement;
    public loader: PIXI.Loader;
    public renderer: PIXI.Renderer;
    public stage: PIXI.Container;
    public graphics: PIXI.Graphics;

    constructor(params: EngineParams) {
        this.loader = PIXI.Loader.shared;
        this.renderer = PIXI.autoDetectRenderer({
            width: params.canvasW,
            height: params.canvasH,
            antialias: true
        });
        this.stage = new PIXI.Container();
        this.graphics = new PIXI.Graphics();

        this.container = params.containerId ? document.getElementById(params.containerId) || document.body : document.body;
        this.container.appendChild(this.renderer.view);
    } // constructor
} // Engine

const engine = new Engine({
    containerId: 'game',
      canvasW: AppDefinitions.CANVAS_HEIGHT,
       canvasH: AppDefinitions.CANVAS_WIDTH,
    // canvasW: AppDefinitions.CANVAS_WIDTH,
    // canvasH: AppDefinitions.CANVAS_HEIGHT
});

// ==============
// === STATES ===
// ==============

window.onload = load;

function load() {
    create();
} // load

function create() {
    render();
    let game: Game;
    game = new Game(engine.stage);
    game.run()
} // create

function render() {
    requestAnimationFrame(render);
    engine.renderer.render(engine.stage);
} // render
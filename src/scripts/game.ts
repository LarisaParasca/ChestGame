import * as PIXI from 'pixi.js'

export class Game {
    protected container: PIXI.Container;

    // protected animationElements: ShapeAnimation
    // protected animationContainer: PIXI.Container

    // protected uiElements: UI;
    // protected uiContainer: PIXI.Container;

    constructor(stage: PIXI.Container) {
        this.container = stage;
        // this.animationContainer = new PIXI.Container();
        // this.animationElements = new ShapeAnimation(this.animationContainer)

        // this.uiContainer = new PIXI.Container();
        // this.uiElements = new UI(this.uiContainer, this.animationElements);
    }

    /**calling functions that initialize and animate shapes; draw and initialize the UI */
    run() {
        // this.drawAnimation();
        // this.drawUI();
        console.log("gameeeee")
    }

    // /** adding a container in which the elements will be animated */
    // drawAnimation() {
    //     this.container.addChild(this.animationContainer)
    //     this.animationElements.startAnimation();
    // }

    // /** adding a container and calls the function that draws and initializes button */
    // drawUI() {
    //     this.container.addChild(this.uiContainer);
    //     this.uiElements.drawUI();
    // }
}
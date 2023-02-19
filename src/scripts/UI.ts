import * as PIXI from 'pixi.js'
import Chest from './chest';
import Controller from './controller';
import AppDefinitions from './definitions';

export class UI {

  public container: PIXI.Container; // main Containe
  public button: PIXI.Container; // new container for button
  public chest1 !: Chest;
  public chest2 !: Chest;
  public chest3 !: Chest;
  public chest4 !: Chest;
  public chest5 !: Chest;
  public chest6 !: Chest;

  constructor(container: PIXI.Container) {
    this.container = container;
    this.button = new PIXI.Container();
  }

  drawUI() {
    this.drawBackgroundForMainScreen();
    this.drawTexts();
    this.drawPlayButton();
    this.createChests();
  }

  drawBackgroundForMainScreen() {
    let background: PIXI.Graphics = new PIXI.Graphics;
    background.beginFill(0x9C9795);
    background.drawRect(0, 0, 800, 600);
    background.endFill();
    this.container.addChild(background);
  }

  drawTexts() {
    let title = new PIXI.Text('MAIN GAME SCREEN');
    title.anchor.x = 0.5;
    title.position.set(350, 30); //set correct positions later, find best solution for it
    this.container.addChild(title);
  }

  drawPlayButton() {
    let buttonBg = new PIXI.Graphics(); // graphics for green circle
    buttonBg.beginFill(0x00FF00);
    buttonBg.drawCircle(0, 0, 35);
    buttonBg.endFill();
    
    var playTriangle = new PIXI.Graphics();
    playTriangle.lineStyle(2, 0x000000);
    playTriangle.moveTo(0, 0);
    playTriangle.lineTo(25, 25);
    playTriangle.lineTo(0, 50);
    playTriangle.lineTo(0, 0);
    playTriangle.position.set(-5, -24);

    this.button.addChild(buttonBg, playTriangle); //adds the shapes on the button container
    this.button.position.set(360, 490); // set position for button container
   
    this.button.cursor = 'pointer'; 
    this.button.interactive = true;
    this.button.on(AppDefinitions.CLICK_EVENT, this.onClickPlayButton.bind(this)); //connect button to a click event

    this.container.addChild(this.button); //adds the button container on the main container
  }



  createChests() {
    this.chest1 = new Chest({         // creating all chests
      texture: 'images/logo.png',
      position: { x: 50, y: 30 },
      scale: 0.08,
      interactive: false,
      visible: true

    })

    this.chest2 = new Chest({
      texture: 'images/logo.png',
      position: { x: 50, y: 180 },
      scale: 0.08,
      interactive: false,
      visible: true
    })

    this.chest3 = new Chest({
      texture: 'images/logo.png',
      position: { x: 50, y: 320 },
      scale: 0.08,
      interactive: false,
      visible: true
    })

    this.chest4 = new Chest({
      texture: 'images/logo.png',
      position: { x: 480, y: 30 },
      scale: 0.08,
      interactive: false,
      visible: true
    })

    this.chest5 = new Chest({
      texture: 'images/logo.png',
      position: { x: 480, y: 180 },
      scale: 0.08,
      interactive: false,
      visible: true
    })

    this.chest6 = new Chest({
      texture: 'images/logo.png',
      position: { x: 480, y: 320 },
      scale: 0.08,
      interactive: false,
      visible: true
    })

    this.chest1.on(AppDefinitions.CLICK_EVENT, this.onClickChest.bind(this, 1)); //connecting all chests to a click event
    this.chest2.on(AppDefinitions.CLICK_EVENT, this.onClickChest.bind(this, 2));
    this.chest3.on(AppDefinitions.CLICK_EVENT, this.onClickChest.bind(this, 3));
    this.chest4.on(AppDefinitions.CLICK_EVENT, this.onClickChest.bind(this, 4));
    this.chest5.on(AppDefinitions.CLICK_EVENT, this.onClickChest.bind(this, 5));
    this.chest6.on(AppDefinitions.CLICK_EVENT, this.onClickChest.bind(this, 6));

    this.chest1.cursor = 'pointer';  // setting the hand cursor to all chests 
    this.chest2.cursor = 'pointer';
    this.chest3.cursor = 'pointer';
    this.chest4.cursor = 'pointer';
    this.chest5.cursor = 'pointer';
    this.chest6.cursor = 'pointer';

    this.container.addChild(this.chest1, this.chest2, this.chest3, this.chest4, this.chest5, this.chest6);
  }

  onClickPlayButton() {
    console.log('play button clicked');
    this.button.interactive = false;
    let controller: Controller = new Controller();
    controller.setActivityForChests(this, true);
    controller.setVisibilityForChests(this, true);
  }

  onClickChest(chestNumber: number) {
    console.log('chest clicked');
    this.button.interactive = false; // disables play button

    let controller: Controller = new Controller();
    controller.setActivityForChests(this, false); // disables the chests
    controller.setVisibilityForChests(this, false, chestNumber); // hides the chests


    controller.determineWin();
  }

}
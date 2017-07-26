
import * as  Phaser from "phaser-ce";
import * as Assets from '../resources/index';
	
export  class Knight extends Phaser.Sprite {

	  public direction:string;
	  private speed:number=1;

	  constructor({ game, x, y, direction}) {
	    super(game, x, y,Assets.KnightManager.getAsset("walk",direction,"img"))
	    this.direction=direction;
	    this.game = game
	    this.anchor.setTo(0.5)	 
	    this.loadAnimation();
	  }

	  walkdown(step) {
	  	this.play(Assets.Knight.Spritesheets.SpritesheetsKnightWalkFront.getName(),
	  		Assets.Knight.Spritesheets.SpritesheetsKnightWalkFront.getFrameMax(),true);
	    this.y += step*this.speed;
	  }
	   walkright(step) {
	    this.x += step*this.speed;
	  }

	  loadAnimation(){

         for (let s in Assets.Knight.Spritesheets) {
              this.animations.add(Assets.Knight.Spritesheets[s].getName());             
         };
    } 

}


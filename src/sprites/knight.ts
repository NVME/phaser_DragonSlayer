
import * as  Phaser from "phaser-ce";
import * as Assets from '../resources/index';
	
	export  class Knight extends Phaser.Sprite {

	  public direction:string;
	  private speed:number=1;

	  constructor({ game, x, y, direction}) {
	    super(game, x, y,Assets.KnightAssetsManager.loadAsset("walk",direction,"img"))
	    this.direction=direction;
	    this.game = game
	    this.anchor.setTo(0.5) 
	  }

	  walkdown(step) {
	    this.y += step*this.speed;
	  }
	   walkright(step) {
	    this.x += step*this.speed;
	  }

	  loadanimations(){

	  // 	 for (let spritesheet in Assets.Spritesheets) {
   //          if (Assets.Spritesheets[spritesheet].getTag()=="knight") {
                
			// }
   //      }
	  }

}


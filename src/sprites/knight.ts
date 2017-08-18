
import * as  Phaser from "phaser-ce";
import * as Assets from '../resources/index';
	
export  class Knight extends Phaser.Sprite {

	  public direction:string;
	  private speed:number =100;
	  

	  constructor({ game, x, y, direction}) {
	    super(game, x, y,Assets.KnightManager.getAsset("walk",direction,"img"))
	    this.direction=direction;
	    this.game = game
	    this.anchor.setTo(0.5)		    
	    this.loadAnimation();
	  }

      walk(step){
      	let d=this.direction;
      	let direction=Phaser.ANGLE_DOWN;
      	let movement=null;
      	if(d=="front"){
      		direction=Phaser.ANGLE_DOWN;       		
      		movement=this.play(Assets.Knight.Spritesheets.SpritesheetsKnightWalkFront.getName(),
		  	Assets.Knight.Spritesheets.SpritesheetsKnightWalkFront.getFrameMax(),true);
      	}else if(d=="up"){
      		direction=Phaser.ANGLE_UP;			
      		movement=this.play(Assets.Knight.Spritesheets.SpritesheetsKnightWalkUp.getName(),
		  	Assets.Knight.Spritesheets.SpritesheetsKnightWalkUp.getFrameMax(),true);
      	}else if(d=="left"){
      		direction=Phaser.ANGLE_LEFT;      		
      		movement=this.play(Assets.Knight.Spritesheets.SpritesheetsKnightWalkLeft.getName(),
		  	Assets.Knight.Spritesheets.SpritesheetsKnightWalkLeft.getFrameMax(),true);
      	}else if(d=="right"){
      		direction=Phaser.ANGLE_RIGHT;			
      		movement=this.play(Assets.Knight.Spritesheets.SpritesheetsKnightWalkRight.getName(),
		  	Assets.Knight.Spritesheets.SpritesheetsKnightWalkRight.getFrameMax(),true);
      	}else{

      	}
      	this.body.moveFrom(step*(this.speed), this.speed, direction);
      	// movement.stop();


      }	 
	  turn(direction){
	  	this.animations.stop();
	  	this.loadTexture(Assets.KnightManager.getAsset("walk",direction,"img"));
	  }

	  loadAnimation(){

         for (let s in Assets.Knight.Spritesheets) {
              this.animations.add(Assets.Knight.Spritesheets[s].getName());             
         };
    } 

}


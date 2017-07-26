
import * as Assets from '../assets';
import {Knight} from '../sprites/index';

export default class Game extends Phaser.State {

 private backgroundTemplateSprite: Phaser.Sprite = null;
 private hero:Knight =null ; 
 private foe:Knight=null;

 public create(): void {

	 	this.backgroundTemplateSprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY,
	 															 Assets.Images.ImagesBackgroundTemplate.getName());
        this.backgroundTemplateSprite.anchor.setTo(0.5);

        this.hero=new Knight({
        	game:this.game,
        	x:100,
        	y:100,
        	direction:"front"
        });	
        this.foe=new Knight({
        	game:this.game,
        	x:this.game.world.centerX,
        	y:this.game.world.centerY,
        	direction:"right"
        });
          // this.foe.animations.add(Assets.Spritesheets.SpritesheetsKnightWalkRight.getName())
          // .play(Assets.Spritesheets.SpritesheetsKnightWalkRight.getFrameMax(),true);	
        this.game.add.existing(this.hero);
        this.game.add.existing(this.foe);

 }
 
 public update():void {
 	this.hero.walkdown(1);
 	this.foe.walkright(1);
 }

}
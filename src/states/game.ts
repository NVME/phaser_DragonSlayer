
import * as Assets from '../assets';
import {Knight} from '../sprites/index';

export default class Game extends Phaser.State {

 private backgroundTemplateSprite: Phaser.Sprite = null;
 private hero:Knight =null ; 
 private foe:Knight=null;

 public create(): void {

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
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
        	direction:"left"
        });
          // this.foe.animations.add(Assets.Spritesheets.SpritesheetsKnightWalkRight.getName())
          // .play(Assets.Spritesheets.SpritesheetsKnightWalkRight.getFrameMax(),true);	
        this.game.add.existing(this.hero);
        this.game.add.existing(this.foe);

       this.game.physics.arcade.enable(this.hero);
       this.game.physics.arcade.enable(this.foe);
        // this.body.bounce.set(1);
        this.hero.body.collideWorldBounds=true;
        this.foe.body.collideWorldBounds=true;
       
       //sprite.body.angularVelocity = 0;
       //this.hero.body.moveTo(2000,1000,Phaser.ANGLE_DOWN)
       this.hero.walk(15);
       this.hero.turn("right");
       this.foe.walk(20);


 }
 
 public update():void {
 	
     this.game.physics.arcade.collide(this.hero,this.foe);
     //this.hero.turnTo("right");
    // this.hero.walkright(60);
 	//this.foe.walkright(2);
 }

}
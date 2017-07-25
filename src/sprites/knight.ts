

export default class Knight extends Phaser.Sprite {
  
  constructor({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.game = game
    this.anchor.setTo(0.5) 

  }

  walkdown() {
    this.y += 1;
  }
   walkright() {
    this.x += 1;
  }

}

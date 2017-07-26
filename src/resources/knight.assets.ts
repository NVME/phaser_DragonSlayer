namespace Knight.Images{
     class ImagesKnight{
         
        static getTag():string {return "knight";}
     }
     class ImagesKnightThrust extends ImagesKnight{
         static getAction():string {return "Thrust";}
     }
     class ImagesKnightWalk extends ImagesKnight{
         static getAction():string {return "Walk";}
     }
    export class ImagesKnightThrustFront extends ImagesKnightThrust{
        static getName(): string { return 'thrust_front'; }
        static getDirection():string {return "front"}
        static getPNG(): string { return require('assets/images/thrust_front.png');}
    }
    export class ImagesKnightThrustLeft extends ImagesKnightThrust {
        static getName(): string { return 'thrust_left'; }
        static getDirection():string {return "left"}
        static getPNG(): string { return require('assets/images/thrust_left.png') ;}
    }
    export class ImagesKnightThrustRight extends ImagesKnightThrust{
        static getName(): string { return 'thrust_right'; }
        static getDirection():string {return "right"}
        static getPNG(): string { return require('assets/images/thrust_right.png'); }
    }
    export class ImagesKnightThrustUp extends ImagesKnightThrust {
        static getName(): string { return 'thrust_up'; }
        static getDirection():string {return "up"}
        static getPNG(): string { return require('assets/images/thrust_up.png'); }
    }
    export class ImagesKnightWalkFront extends ImagesKnightWalk{
        static getName(): string { return 'walk_front'; }
         static getDirection():string {return "front"}
        static getPNG(): string { return require('assets/images/walk_front.png'); }
    }
    export class ImagesKnightWalkLeft extends ImagesKnightWalk {
        static getName(): string { return 'walk_left'; }
         static getDirection():string {return "left"}
        static getPNG(): string { return require('assets/images/walk_left.png'); }
    }
    export class ImagesKnightWalkRight extends ImagesKnightWalk {
        static getName(): string { return 'walk_right'; }
         static getDirection():string {return "right"}
        static getPNG(): string { return require('assets/images/walk_right.png'); }
    }
    export class ImagesKnightWalkUp extends ImagesKnightWalk {
        static getName(): string { return 'walk_up'; }
         static getDirection():string {return "up"}
        static getPNG(): string { return require('assets/images/walk_up.png'); }
    }
}
namespace Knight.Spritesheets{
    class SpritesheetsKnight { 
        static getFrameWidth(): number { return 57; }
        static getFrameHeight(): number { return 64; }
        static getFrameMax(): number { return 8; }
        static getMargin(): number { return 0; }
        static getSpacing(): number { return 0; }
        static getTag():string {return "knight";}
    }
   export class SpritesheetsKnightThrustFront extends SpritesheetsKnight{
        static getName(): string { return 'knight_thrust_front'; }

        static getImg(): string { return require('assets/spritesheets/sprite_thrust_front.jpg'); } 
    }
    export class SpritesheetsKnightThrustLeft extends SpritesheetsKnight{
         static getName(): string { return 'knight_thrust_left'; }

        static getImg(): string { return require('assets/spritesheets/sprite_thrust_left.jpg'); } 
    }
    export class SpritesheetsKnightThrustRight extends SpritesheetsKnight{
         static getName(): string { return 'knight_thrust_right'; }

        static getImg(): string { return require('assets/spritesheets/sprite_thrust_right.jpg'); } 
    }
    export class SpritesheetsKnightThrustUp extends SpritesheetsKnight{
         static getName(): string { return 'knight_thrust_up'; }

        static getImg(): string { return require('assets/spritesheets/sprite_thrust_up.jpg'); } 
    }
    export class SpritesheetsKnightWalkLeft extends SpritesheetsKnight{
         static getName(): string { return 'knight_walk_left'; }

        static getImg(): string { return require('assets/spritesheets/sprite_walk_left.jpg'); } 
    }
    export class SpritesheetsKnightWalkFront extends SpritesheetsKnight{
         static getName(): string { return 'knight_walk_front'; }

        static getImg(): string { return require('assets/spritesheets/sprite_walk_front.png'); } 
    }
    export class SpritesheetsKnightWalkRight extends SpritesheetsKnight{
         static getName(): string { return 'knight_walk_right'; }

        static getImg(): string { return require('assets/spritesheets/sprite_walk_right.jpg'); } 
    }
    export class SpritesheetsKnightWalkUp extends SpritesheetsKnight{
         static getName(): string { return 'knight_walk_up'; }

        static getImg(): string { return require('assets/spritesheets/sprite_walk_up.jpg'); } 
    }
}
export class KnightAssetsManager{

    public static loadAssets(game: Phaser.Game){

         for (let image in Knight.Images) {   
          if (!game.cache.checkImageKey(Knight.Images[image].getName())) { 
               let name=Knight.Images[image].getName();
               let png=  Knight.Images[image].getPNG();      
               game.load.image(name, png);
             }
         };

         for (let spritesheet in Knight.Spritesheets) {
             
             game.load.spritesheet(Knight.Spritesheets[spritesheet].getName(),
              Knight.Spritesheets[spritesheet].getImg(),
               Knight.Spritesheets[spritesheet].getFrameWidth(),
                Knight.Spritesheets[spritesheet].getFrameHeight(),
                 Knight.Spritesheets[spritesheet].getFrameMax(),
                  Knight.Spritesheets[spritesheet].getMargin(),
                  Knight.Spritesheets[spritesheet].getSpacing());
         };
     }

     public static loadAsset(action:string,direction:string,type:string):string {
        for (let image in Knight.Images) {
             if(Knight.Images[image].getAction().toLowerCase( )==action.toLowerCase( )
                 &&Knight.Images[image].getDirection().toLowerCase( )==direction.toLowerCase( ))
                        return Knight.Images[image].getName();                  
        }
        return "walk_up";
     }
}

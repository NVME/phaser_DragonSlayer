/* AUTO GENERATED FILE. DO NOT MODIFY. YOU WILL LOSE YOUR CHANGES ON BUILD. */

export namespace Images {
    export class ImagesBackgroundTemplate {
        static getName(): string { return 'background_template'; }
        static getPNG(): string { return require('assets/images/background_template.png'); }
    }
     export class ImagesKnightThrustFront {
        static getName(): string { return 'thrust_front'; }
        static getPNG(): string { return require('assets/images/thrust_front.png'); }
    }
     export class ImagesKnightThrustLeft {
        static getName(): string { return 'thrust_left'; }
        static getPNG(): string { return require('assets/images/thrust_left.png'); }
    }
    export class ImagesKnightThrustRight {
        static getName(): string { return 'thrust_right'; }
        static getPNG(): string { return require('assets/images/thrust_right.png'); }
    }
    export class ImagesKnightThrustUp {
        static getName(): string { return 'thrust_up'; }
        static getPNG(): string { return require('assets/images/thrust_up.png'); }
    }
    export class ImagesKnightWalkFront {
        static getName(): string { return 'walk_front'; }
        static getPNG(): string { return require('assets/images/walk_front.png'); }
    }
    export class ImagesKnightWalkLeft {
        static getName(): string { return 'walk_left'; }
        static getPNG(): string { return require('assets/images/walk_left.png'); }
    }
     export class ImagesKnightWalkRight {
        static getName(): string { return 'walk_right'; }
        static getPNG(): string { return require('assets/images/walk_right.png'); }
    }
     export class ImagesKnightWalkUp {
        static getName(): string { return 'walk_left'; }
        static getPNG(): string { return require('assets/images/walk_up.png'); }
    }

}

export namespace Spritesheets {
     class SpritesheetsKnight {         
        static getFrameWidth(): number { return 57; }
        static getFrameHeight(): number { return 64; }
        static getFrameMax(): number { return 8; }
        static getMargin(): number { return 0; }
        static getSpacing(): number { return 0; }
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

export namespace Atlases {
    enum AtlasesPreloadSpritesArrayFrames {
        PreloadBar = <any>'preload_bar.png',
        PreloadFrame = <any>'preload_frame.png',
    }
    export class AtlasesPreloadSpritesArray {
        static getName(): string { return 'preload_sprites_array'; }

        static getJSONArray(): string { return require('assets/atlases/preload_sprites_array.json'); }

        static getPNG(): string { return require('assets/atlases/preload_sprites_array.png'); }

        static Frames = AtlasesPreloadSpritesArrayFrames;
    }
    enum AtlasesPreloadSpritesHashFrames {
        PreloadBar = <any>'preload_bar.png',
        PreloadFrame = <any>'preload_frame.png',
    }
    export class AtlasesPreloadSpritesHash {
        static getName(): string { return 'preload_sprites_hash'; }

        static getJSONHash(): string { return require('assets/atlases/preload_sprites_hash.json'); }

        static getPNG(): string { return require('assets/atlases/preload_sprites_hash.png'); }

        static Frames = AtlasesPreloadSpritesHashFrames;
    }
    enum AtlasesPreloadSpritesXmlFrames {
        PreloadBar = <any>'preload_bar.png',
        PreloadFrame = <any>'preload_frame.png',
    }
    export class AtlasesPreloadSpritesXml {
        static getName(): string { return 'preload_sprites_xml'; }

        static getPNG(): string { return require('assets/atlases/preload_sprites_xml.png'); }

        static getXML(): string { return require('assets/atlases/preload_sprites_xml.xml'); }

        static Frames = AtlasesPreloadSpritesXmlFrames;
    }
}

export namespace Audio {
    export class AudioMusic {
        static getName(): string { return 'music'; }

        static getAC3(): string { return require('assets/audio/music.ac3'); }
        static getM4A(): string { return require('assets/audio/music.m4a'); }
        static getMP3(): string { return require('assets/audio/music.mp3'); }
        static getOGG(): string { return require('assets/audio/music.ogg'); }
    }
}

export namespace Audiosprites {
    enum AudiospritesSfxSprites {
        Laser1 = <any>'laser1',
        Laser2 = <any>'laser2',
        Laser3 = <any>'laser3',
        Laser4 = <any>'laser4',
        Laser5 = <any>'laser5',
        Laser6 = <any>'laser6',
        Laser7 = <any>'laser7',
        Laser8 = <any>'laser8',
        Laser9 = <any>'laser9',
    }
    export class AudiospritesSfx {
        static getName(): string { return 'sfx'; }

        static getAC3(): string { return require('assets/audiosprites/sfx.ac3'); }
        static getJSON(): string { return require('assets/audiosprites/sfx.json'); }
        static getM4A(): string { return require('assets/audiosprites/sfx.m4a'); }
        static getMP3(): string { return require('assets/audiosprites/sfx.mp3'); }
        static getOGG(): string { return require('assets/audiosprites/sfx.ogg'); }

        static Sprites = AudiospritesSfxSprites;
    }
}

export namespace GoogleWebFonts {
    export const Barrio: string = 'Barrio';
}

export namespace CustomWebFonts {
    export class Fonts2DumbWebfont {
        static getName(): string { return '2Dumb-webfont'; }

        static getFamily(): string { return '2dumbregular'; }

        static getCSS(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.css'); }
        static getEOT(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.eot'); }
        static getSVG(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.svg'); }
        static getTTF(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.ttf'); }
        static getWOFF(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.woff'); }
    }
}

export namespace BitmapFonts {
    export class FontsFontFnt {
        static getName(): string { return 'font_fnt'; }

        static getFNT(): string { return require('assets/fonts/font_fnt.fnt'); }
        static getPNG(): string { return require('assets/fonts/font_fnt.png'); }
    }
    export class FontsFontXml {
        static getName(): string { return 'font_xml'; }

        static getPNG(): string { return require('assets/fonts/font_xml.png'); }
        static getXML(): string { return require('assets/fonts/font_xml.xml'); }
    }
}

export namespace JSON {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace XML {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace Text {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace Scripts {
    export class ScriptsBlurX {
        static getName(): string { return 'BlurX'; }

        static getJS(): string { return require('assets/scripts/BlurX.js'); }
    }
    export class ScriptsBlurY {
        static getName(): string { return 'BlurY'; }

        static getJS(): string { return require('assets/scripts/BlurY.js'); }
    }
}
export namespace Shaders {
    export class ShadersPixelate {
        static getName(): string { return 'pixelate'; }

        static getFRAG(): string { return require('assets/shaders/pixelate.frag'); }
    }
}
export namespace Misc {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

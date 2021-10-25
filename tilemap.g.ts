// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001000000000000000000000000000000010000000000000000000000000000000100000000000000000000000000000001000000000000000000000000000000010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000101010000000000000000000000000001010100000000000000000000000000010101000000000000000000000000000101010000000000000000000000000001010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
            case "level 1":
            case "level2":return tiles.createTilemap(hex`220014000404040404040404040404040404040404040404040404040404040404040404040404040404030303030303030303030303030303030303030303030303030304040404040b0c0c03060606060603060606060606060606060606060606060606030d0d0f04040d0d0d03060606060603060606060606060606060606060606060606030d0d0d04040d0d040306060606060306060606060606060606060606060606060603040d0d04040d0d040306060606060706060606060606060606060606060606060603040d0d04040d0d040306060606060506060606060606060606060606060606060603040d0d04040d0d040308030803030303030303030308030303030303030308080808040d0d04040d0d0403060606060606060606060606060606030606060606060606080d0d0d04040d0d0408060606060606060606060606060606030606060606060606080d0d1004040d0d04080606060606060606060606060606060306060606060606060304040404040d0d04080606060606060606060606060606060806060606060606060304040404040d0d04030606060606060606060606060606060306060606060606060304040404040d0d04070606060606060606060606060606060706060606060606060304040404040d0d04050606060606060606060606060606060506060606060606060304040404090d0d090303030303080808030303030303030303030303080303080303090909090a0d0d0d1101010101010101010101010101010101010101010101010111010101010a0e0d0d1102020202020202020202020202020202020202020202020211010101010a0a0a0a1102020202020202020202020202020202020202020202020211010101010a0a0a0a111111111111111111111111111111111111111111111111111101010101`, img`
..................................
2222222222222222222222222222222222
2.........2......................2
2.........2......................2
2..22........................22..2
2..22........................22..2
2..22........................22..2
2..2222222222222222222222222222..2
2..22...............2............2
2..22...............2............2
2..22...............2........22222
2..22...............2........2....
2..22........................2....
2..22........................2....
2..22........................2....
2..222222222222222222222222222....
2............................2....
2............................2....
22222........................2....
....22222222222222222222222222....
`, [myTiles.transparency16,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.floorLight0,myTiles.tile3,myTiles.tile4,myTiles.tile1,myTiles.tile6,sprites.dungeon.floorLight1,myTiles.tile7,sprites.dungeon.darkGroundNorthWest1,sprites.swamp.swampTile6,sprites.swamp.swampTile7,sprites.swamp.swampTile9,sprites.swamp.swampTile12,sprites.swamp.swampTile8,sprites.swamp.swampTile14,sprites.dungeon.floorDark4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

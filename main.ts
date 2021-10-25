let list = [-50, 50]
scene.setBackgroundImage(img`
    8888888888888888888888888888888888
    8888888888888888888888888888888888
    8888888888888888888888888888888888
    8888888888888888888888888888888888
    8888888888888888888888888888888888
    8888888888888888888888888888888888
    8888888888888888888888888888888888
    8888888888888888888888888888888888
    8888888888888888888888888888888888
    8888888888888888888888888888888888
    8888888888888888888888888888888888
    8888888888888888888888888888888888
    cccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccc
    `)
tiles.setTilemap(tilemap`level 1`)
info.setLife(2)
let mySprite = sprites.create(assets.image`Teacher right`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 13))
scene.cameraFollowSprite(mySprite)
let Enemy_1 = sprites.create(assets.image`Enemy 1 left`, SpriteKind.Enemy)
tiles.placeOnTile(Enemy_1, tiles.getTileLocation(6, 13))
Enemy_1.setBounceOnWall(false)
let Enemy_2 = sprites.create(assets.image`Enemy 2 left`, SpriteKind.Enemy)
tiles.placeOnTile(Enemy_2, tiles.getTileLocation(22, 17))
Enemy_2.setBounceOnWall(false)
tiles.placeOnTile(Enemy_2, tiles.getTileLocation(22, 17))
let Enemy_3 = sprites.create(assets.image`Enemy 3 left`, SpriteKind.Enemy)
tiles.placeOnTile(Enemy_3, tiles.getTileLocation(24, 13))
Enemy_3.setBounceOnWall(false)
let Enemy_4 = sprites.create(assets.image`Enemy 4 left`, SpriteKind.Enemy)
tiles.placeOnTile(Enemy_4, tiles.getTileLocation(7, 5))
Enemy_4.setBounceOnWall(false)
let Enemy_5 = sprites.create(assets.image`Enemy 5 left`, SpriteKind.Enemy)
tiles.placeOnTile(Enemy_5, tiles.getTileLocation(17, 5))
Enemy_5.setBounceOnWall(false)
forever(function () {
    controller.moveSprite(mySprite)
})
forever(function () {
    if (0 < 0) {
    	
    }
})
forever(function () {
    pause(2000)
    Enemy_1.setVelocity(0, 50)
    Enemy_1.setVelocity(list._pickRandom(), 50)
    Enemy_2.setVelocity(0, 50)
    Enemy_2.setVelocity(list._pickRandom(), 50)
    Enemy_3.setVelocity(0, 50)
    Enemy_3.setVelocity(list._pickRandom(), 50)
    Enemy_4.setVelocity(0, 50)
    Enemy_4.setVelocity(list._pickRandom(), 50)
    Enemy_5.setVelocity(0, 50)
    Enemy_5.setVelocity(list._pickRandom(), 50)
})

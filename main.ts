let velocity = 0
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
tiles.setTilemap(tilemap`level2`)
info.setLife(2)
let mySprite = sprites.create(assets.image`Teacher right`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
let Enemy_1 = sprites.create(assets.image`Enemy 1 left`, SpriteKind.Enemy)
tiles.placeOnTile(Enemy_1, tiles.getTileLocation(6, 13))
Enemy_1.setBounceOnWall(true)
Enemy_1.setVelocity(50, 0)
let Enemy_2 = sprites.create(assets.image`Enemy 2 left`, SpriteKind.Enemy)
tiles.placeOnTile(Enemy_2, tiles.getTileLocation(22, 17))
Enemy_2.setBounceOnWall(true)
Enemy_2.setVelocity(50, 0)
let Enemy_3 = sprites.create(assets.image`Enemy 3 left`, SpriteKind.Enemy)
tiles.placeOnTile(Enemy_3, tiles.getTileLocation(24, 13))
Enemy_3.setBounceOnWall(true)
Enemy_3.setVelocity(50, 0)
let Enemy_4 = sprites.create(assets.image`Enemy 4 left`, SpriteKind.Enemy)
tiles.placeOnTile(Enemy_4, tiles.getTileLocation(7, 5))
Enemy_4.setBounceOnWall(true)
Enemy_4.setVelocity(50, 0)
let Enemy_5 = sprites.create(assets.image`Enemy 5 left`, SpriteKind.Enemy)
tiles.placeOnTile(Enemy_5, tiles.getTileLocation(17, 5))
Enemy_5.setBounceOnWall(true)
Enemy_5.setVelocity(50, 0)
forever(function () {
    velocity = 0
})
forever(function () {
    controller.moveSprite(mySprite)
    Enemy_4.setVelocity(0, 50)
    Enemy_4.setVelocity(velocity, 50)
})

namespace SpriteKind {
    export const Object = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`Teacher Screaming`)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 . 7 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 23)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . 3 . . 3 . . . . . . 
        . . . . . . 3 . . 3 3 . . . . . 
        . . . . . 3 . 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -100, 24)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`Teacher left`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`Teacher right`)
})
let v5 = 0
let v4 = 0
let v3 = 0
let v2 = 0
let v1 = 0
let projectile: Sprite = null
let mySprite: Sprite = null
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
info.startCountdown(120)
mySprite = sprites.create(assets.image`Teacher right`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 13))
scene.cameraFollowSprite(mySprite)
let Plate = sprites.create(assets.image`myImage0`, SpriteKind.Object)
tiles.placeOnTile(Plate, tiles.getTileLocation(23, 13))
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
    if (v1 < 0) {
        Enemy_1.setImage(assets.image`Enemy 1 left`)
    } else {
        Enemy_1.setImage(assets.image`Enemy 1 right`)
    }
    if (v2 < 0) {
        Enemy_2.setImage(assets.image`Enemy 2 left`)
    } else {
        Enemy_2.setImage(assets.image`Enemy 2 right`)
    }
    if (v3 < 0) {
        Enemy_3.setImage(assets.image`Enemy 3 left`)
    } else {
        Enemy_3.setImage(assets.image`Enemy 3 right`)
    }
    if (v4 < 0) {
        Enemy_4.setImage(assets.image`Enemy 4 left`)
    } else {
        Enemy_4.setImage(assets.image`Enemy 4 right`)
    }
    if (v5 < 0) {
        Enemy_5.setImage(assets.image`Enemy 5 left`)
    } else {
        Enemy_5.setImage(assets.image`Enemy 5 right`)
    }
})
forever(function () {
    pause(2000)
    v1 = list._pickRandom()
    v2 = list._pickRandom()
    v3 = list._pickRandom()
    v4 = list._pickRandom()
    v5 = list._pickRandom()
    Enemy_1.setVelocity(0, 50)
    Enemy_1.setVelocity(v1, 50)
    Enemy_2.setVelocity(0, 50)
    Enemy_2.setVelocity(v2, 50)
    Enemy_3.setVelocity(0, 50)
    Enemy_3.setVelocity(v3, 50)
    Enemy_4.setVelocity(0, 50)
    Enemy_4.setVelocity(v4, 50)
    Enemy_5.setVelocity(0, 50)
    Enemy_5.setVelocity(v5, 50)
})
forever(function () {
    while (mySprite.overlapsWith(Plate)) {
        mySprite.setImage(assets.image`myImage2`)
        Plate.setImage(assets.image`myImage1`)
        pause(5000)
    }
    if (!(mySprite.overlapsWith(Plate))) {
        mySprite.setImage(assets.image`Teacher right`)
        Plate.setImage(assets.image`myImage0`)
    }
})

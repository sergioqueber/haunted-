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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
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
info.onCountdownEnd(function () {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`Teacher right`)
})
function clear_everything () {
    info.stopCountdown()
    info.setScore(0)
    mySprite.destroy()
    tiles.setTilemap(tilemap`level4`)
    mySprite = sprites.create(assets.image`Teacher right`, SpriteKind.Player)
    mySprite.ay = 300
    Boss = sprites.create(assets.image`Boss`, SpriteKind.Player)
    tiles.placeOnTile(Boss, tiles.getTileLocation(9, 3))
    for (let index = 0; index < 200; index++) {
        if (projectile.overlapsWith(Boss)) {
            info.player1.changeScoreBy(1)
        }
        Boss_projectile = sprites.createProjectileFromSprite(img`
            . . . b b b b b b b b b . . . . 
            . . b 1 d d d d d d d 1 b . . . 
            . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
            . b d b c c c c c c c b d b . . 
            . b d c 6 6 6 6 6 6 6 c d b . . 
            . b d c 6 d 6 6 6 6 6 c d b . . 
            . b d c 6 6 6 6 6 6 6 c d b . . 
            . b d c 6 6 6 6 6 6 6 c d b . . 
            . b d c 6 6 6 6 6 6 6 c d b . . 
            . b d c c c c c c c c c d b . . 
            . c b b b b b b b b b b b c . . 
            c b c c c c c c c c c c c b c . 
            c 1 d d d d d d d d d d d 1 c . 
            c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
            c b b b b b b b b b b b b b c . 
            c c c c c c c c c c c c c c c . 
            `, Boss, randint(-50, -100), randint(-50, 50))
        Boss_projectile_2 = sprites.createProjectileFromSprite(img`
            ................................
            .....111111111..................
            .....111111111111...............
            .....11111111111111.............
            .....11111111111111.............
            .....111111111111111............
            .........11111111111............
            ............11111111............
            ..............111111............
            ...............11111............
            ..111111......111111............
            ..111111......111111............
            ..111111....11111111............
            ..1111111..111111111............
            ..111111111111111111............
            ...1111111111111111.............
            ...11111111111111111............
            ...111111111111111111...........
            ....111111111111111111..........
            ......11111111111111111.........
            ..............1111111111........
            ...............1111111111.......
            ................1111111111......
            ..................111111111.....
            ...................111111111....
            ...................11111111111..
            ....................11111111111.
            .....................11111111111
            ......................1111111111
            ........................11111111
            .........................1111111
            ..........................111111
            `, Boss, randint(-50, -75), randint(-50, 50))
        pause(1000)
    }
}
let v5 = 0
let v4 = 0
let v3 = 0
let v2 = 0
let v1 = 0
let Boss_projectile_2: Sprite = null
let Boss_projectile: Sprite = null
let Boss: Sprite = null
let mySprite: Sprite = null
let projectile: Sprite = null
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
info.startCountdown(90)
projectile = sprites.create(img`
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
    `, SpriteKind.Projectile)
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
	
})
forever(function () {
    if (projectile.overlapsWith(Enemy_1)) {
        Enemy_1.destroy(effects.fire, 1000)
        info.player1.changeScoreBy(1)
    }
    if (projectile.overlapsWith(Enemy_2)) {
        Enemy_2.destroy(effects.fire, 1000)
        info.player1.changeScoreBy(1)
    }
    if (projectile.overlapsWith(Enemy_3)) {
        Enemy_3.destroy(effects.fire, 1000)
        info.player1.changeScoreBy(1)
    }
    if (projectile.overlapsWith(Enemy_4)) {
        Enemy_4.destroy(effects.fire, 1000)
        info.player1.changeScoreBy(1)
    }
    if (projectile.overlapsWith(Enemy_5)) {
        Enemy_5.destroy(effects.fire, 1000)
        info.player1.changeScoreBy(1)
    }
})
forever(function () {
    if (info.player1.score() == 1) {
        clear_everything()
    }
})

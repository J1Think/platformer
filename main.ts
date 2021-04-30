namespace SpriteKind {
    export const enmey2 = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumpcount < 1) {
        mySprite.vy = -141
        jumpcount += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setTilemap(tilemap`level5`)
    mySprite.setPosition(4, 280)
    game.splash("Level 2")
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTilemap(tilemap`level5`)
    mySprite.setPosition(4, 280)
    game.splash("Level 2")
    info.changeLifeBy(1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = 100
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setTilemap(tilemap`level5`)
    mySprite.setPosition(4, 280)
    game.splash("Level 2")
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    mySprite.destroy(effects.disintegrate, 500)
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.setTilemap(tilemap`level5`)
    mySprite.setPosition(4, 280)
    game.splash("Level 2")
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    info.changeLifeBy(-2)
    game.over(false)
})
let mySprite: Sprite = null
let jumpcount = 0
jumpcount = 0
mySprite = sprites.create(img`
    ..................
    ......22222.......
    .....222222222....
    .....eeeddfd......
    ....ededddfddd....
    ....edeedddeddd...
    ....eeddddeeee....
    ......ddddddd.....
    .....22822822.....
    ....2228228222....
    ...222288882222...
    ...dd28588582dd...
    ...ddd888888ddd...
    ...dd88888888dd...
    .....888..888.....
    ....eee....eee....
    ...eeee....eeee...
    ..................
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level3`)
let goomba = sprites.create(img`
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 f f 4 4 4 4 4 4 f f 4 . . 
    . 4 4 4 d f 4 4 4 4 f d 4 4 4 . 
    . 4 4 4 d f f f f f f d 4 4 4 . 
    4 4 4 4 d f d 4 4 d f d 4 4 4 4 
    4 4 4 4 d d d 4 4 d d d 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    . 4 4 4 4 d d d d d d 4 4 4 4 . 
    . . . . d d d d d d d d . . . . 
    . . . . d d d d d d d d f f . . 
    . . . f f d d d d d f f f f f . 
    . . . f f f d d d f f f f f f . 
    . . . . f f f d . f f f f f . . 
    `, SpriteKind.Enemy)
let goomba2 = sprites.create(img`
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 f f 4 4 4 4 4 4 f f 4 . . 
    . 4 4 4 d f 4 4 4 4 f d 4 4 4 . 
    . 4 4 4 d f f f f f f d 4 4 4 . 
    4 4 4 4 d f d 4 4 d f d 4 4 4 4 
    4 4 4 4 d d d 4 4 d d d 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    . 4 4 4 4 d d d d d d 4 4 4 4 . 
    . . . . d d d d d d d d . . . . 
    . . . . d d d d d d d d f f . . 
    . . . f f d d d d d f f f f f . 
    . . . f f f d d d f f f f f f . 
    . . . . f f f d . f f f f f . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(goomba, tiles.getTileLocation(18, 17))
tiles.placeOnTile(goomba2, tiles.getTileLocation(7, 17))
scene.cameraFollowSprite(mySprite)
goomba.vx = 50
goomba2.vx = -50
mySprite.setStayInScreen(true)
goomba.setBounceOnWall(true)
goomba2.setBounceOnWall(true)
mySprite.setPosition(4, 280)
mySprite.ay += 200
controller.moveSprite(mySprite, 100, 0)
info.setLife(2)
info.setScore(0)
info.startCountdown(200)
game.splash("Level 1")
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jumpcount = 0
    }
})

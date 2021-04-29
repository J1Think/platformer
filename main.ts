controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumpcount < 1) {
        mySprite.vy = -141
        jumpcount += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTilemap(tilemap`level5`)
    mySprite.setPosition(4, 280)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = 100
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
	
})
info.onLifeZero(function () {
    mySprite.destroy(effects.disintegrate, 500)
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
	
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
scene.cameraFollowSprite(mySprite)
mySprite.setStayInScreen(true)
mySprite.setPosition(4, 280)
mySprite.ay += 200
controller.moveSprite(mySprite, 100, 0)
info.setLife(3)
info.setScore(0)
info.startCountdown(200)
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jumpcount = 0
    }
})

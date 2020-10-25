controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.setVelocity(0, -250)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 9 9 9 9 9 9 9 9 . . . . 
    . . . . 9 9 9 9 9 9 9 9 . . . . 
    . . . . 9 5 5 5 5 5 5 9 . . . . 
    . . . . 9 5 f 5 5 f 5 9 . . . . 
    . . . . . 5 f 5 5 f 5 . . . . . 
    1 1 5 8 8 5 5 5 5 5 5 8 8 5 1 1 
    1 1 5 8 8 6 6 6 6 6 6 8 8 5 1 1 
    . 5 5 8 8 6 6 6 6 6 6 8 8 5 5 . 
    . . . . . 6 6 6 6 6 6 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(20, 70)
mySprite.ay = 500
tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile1], TileScale.Sixteen))
game.onUpdateInterval(750, function () {
    mySprite2 = sprites.create(img`
        . f f f f f f . 
        f f 5 5 5 5 f f 
        f 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 f 
        f f 5 5 5 5 f f 
        . f f f f f f . 
        `, SpriteKind.Projectile)
    mySprite2.setVelocity(randint(-100, -80), 0)
    mySprite2.setPosition(randint(-100, 80), 0)
    info.changeScoreBy(1)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(9, 5))
})

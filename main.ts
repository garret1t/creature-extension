<<<<<<< HEAD
namespace SpriteKind {
    export const Grass = SpriteKind.create()
}
function makePlayer () {
    myPlayer = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    characterAnimations.loopFrames(
    myPlayer,
    [img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . f f f f f f c f f f . 
        f f f f f f f c c f f f c 
        f f f f c f f f f f f f c 
        . c c c f f f e e f f c c 
        . f f f f f e e f f c c f 
        . f f f b f e e f b f f f 
        . f f 4 1 f 4 4 f 1 4 f f 
        . . f e 4 4 4 4 4 e e f e 
        . f e f b 7 7 7 e 4 4 4 e 
        . e 4 f 7 7 7 7 e 4 4 e . 
        . . . f 6 6 6 6 6 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f c f f f f f f . . 
        c f f f c c f f f f f f f 
        c f f f f f f f c f f f f 
        c c f f e e f f f c c c . 
        f c c f f e e f f f f f . 
        f f f b f e e f b f f f . 
        f f 4 1 f 4 4 f 1 4 f f . 
        e f e e 4 4 4 4 4 e f . . 
        e 4 4 4 e 7 7 7 b f e f . 
        . e 4 4 e 7 7 7 7 f 4 e . 
        . . e e 6 6 6 6 6 f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    160,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    myPlayer,
    [img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . f f f c c c c c c f f . 
        f f c c c c c c c c c f f 
        f c c c c f c c c c c c f 
        . f f f f c c c c f c c f 
        . f f f f c c f c c c f f 
        . f f f f f f f f f f f f 
        . f f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . e f f f f f f f f f . 
        . . e f f f f f f f f e f 
        . . 4 c 7 7 7 7 7 e 4 4 e 
        . . e f f f f f f f e e . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . . f f c c c c c c f f . 
        . f f f c c c c c c c f f 
        f f f c c c c c c c c c f 
        f f c c c f c c c c c c f 
        . f f f f f c c c f c f f 
        . f f f f c c f f c f f f 
        . . f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . f f f f f f f f f e . 
        . f e f f f f f f f f e . 
        . e 4 4 e 7 7 7 7 7 c 4 . 
        . . e e f f f f f f f e . 
        . . . . . . . . f f f . . 
        `],
    160,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    myPlayer,
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `],
    160,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    myPlayer,
    [img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . f f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f f 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e 4 4 4 . 
        . . . f 7 7 7 7 e 4 4 e . 
        . . f f 6 6 6 6 f e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    160,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    controller.moveSprite(myPlayer, 80, 80)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Grass, function (sprite, otherSprite) {
    animation.runImageAnimation(
    otherSprite,
    [img`
        5 7 5 7 7 7 6 6 6 6 7 7 7 7 7 7 
        7 7 7 7 7 c 6 7 7 6 c 7 7 1 7 7 
        7 7 7 1 c 6 7 5 7 7 6 c 1 7 1 7 
        7 7 6 6 c c 6 5 5 6 c c 6 6 6 7 
        6 6 6 5 5 5 6 7 5 6 5 5 7 6 6 6 
        6 6 7 7 7 5 7 6 7 5 5 7 7 7 7 6 
        7 c c c 6 6 7 6 6 5 7 6 c c 6 7 
        6 c 6 6 6 6 6 c c 6 6 6 6 6 c 6 
        6 6 7 7 7 c c c c c c 7 7 7 6 6 
        6 7 7 7 6 6 c c c c 6 6 7 7 7 6 
        c 6 c c 6 7 6 c c 6 7 6 c c 6 c 
        7 c c 5 5 7 6 7 7 6 7 5 5 c c 1 
        7 c 6 7 5 5 6 7 7 6 5 5 7 6 c d 
        7 6 6 7 7 6 6 5 5 6 6 7 7 6 6 6 
        7 7 6 6 6 6 c 6 7 6 c 6 6 6 6 7 
        7 7 5 6 6 c 7 6 6 6 7 c 6 7 7 7 
        `,img`
        7 7 7 7 6 6 7 6 6 6 c 1 d 6 7 7 
        7 7 1 6 6 7 6 c 6 7 6 c c 6 6 7 
        7 1 7 6 6 7 c 6 7 7 c c 6 6 6 7 
        7 7 1 6 7 7 c 6 7 7 c 5 7 7 6 6 
        7 7 c c 5 7 6 6 7 6 6 5 5 7 6 c 
        7 c 6 c 5 5 7 6 c 6 7 7 5 6 c 7 
        6 6 7 6 6 5 5 6 c c 6 6 6 6 6 6 
        6 7 7 5 5 7 6 c c c c 7 7 5 7 6 
        6 7 5 5 7 6 6 c c c c 7 7 5 6 6 
        6 6 7 6 6 7 7 6 c c 6 6 6 6 c 7 
        7 c 6 c 5 5 6 6 c 6 7 7 5 6 6 c 
        7 7 c c 5 7 6 6 7 6 6 5 5 7 6 6 
        7 7 1 6 5 7 c 6 7 7 c 5 7 7 6 6 
        5 7 7 6 6 7 c 6 7 7 c c 6 6 6 5 
        7 7 7 7 6 6 c c 6 7 6 c c 6 7 7 
        5 7 7 7 6 6 7 6 6 6 c 7 7 7 7 7 
        `,img`
        7 7 7 6 c 7 6 6 6 7 c 6 6 5 7 7 
        7 6 6 6 6 c 6 7 6 c 6 6 6 6 7 7 
        6 6 6 7 7 6 6 5 5 6 6 7 7 6 6 7 
        d c 6 7 5 5 6 7 7 6 5 5 7 6 c 7 
        1 c c 5 5 7 6 7 7 6 7 5 5 c c 7 
        c 6 c c 6 7 6 c c 6 7 6 c c 6 c 
        6 7 7 7 6 6 c c c c 6 6 7 7 7 6 
        6 6 7 7 7 c c c c c c 7 7 7 6 6 
        6 c 6 6 6 6 6 c c 6 6 6 6 6 c 6 
        7 6 c c 6 7 5 6 6 7 6 6 c c c 7 
        6 7 7 7 7 5 5 7 6 7 5 7 7 7 6 6 
        6 6 6 7 5 5 6 5 7 6 5 5 5 6 6 6 
        7 6 6 6 c c 6 5 5 6 c c 6 6 7 7 
        7 1 7 1 c 6 7 7 5 7 6 c 1 7 7 7 
        7 7 1 7 7 c 6 7 7 6 c 7 7 7 7 7 
        7 7 7 7 7 7 6 6 6 6 7 7 7 5 7 5 
        `,img`
        7 7 7 7 7 c 6 6 6 7 6 6 7 7 7 5 
        7 7 6 c c 6 7 6 c c 6 6 7 7 7 7 
        5 6 6 6 c c 7 7 6 c 7 6 6 7 7 5 
        6 6 7 7 5 c 7 7 6 c 7 5 6 1 7 7 
        6 6 7 5 5 6 6 7 6 6 7 5 c c 7 7 
        c 6 6 5 7 7 6 c 6 6 5 5 c 6 c 7 
        7 c 6 6 6 6 c c 6 7 7 6 6 7 6 6 
        6 6 5 7 7 c c c c 6 6 7 5 5 7 6 
        6 7 5 7 7 c c c c 6 7 5 5 7 7 6 
        6 6 6 6 6 6 c c 6 5 5 6 6 7 6 6 
        7 c 6 5 7 7 6 c 6 7 5 5 c 6 c 7 
        c 6 7 5 5 6 6 7 6 6 7 5 c c 7 7 
        6 6 7 7 5 c 7 7 6 c 7 7 6 1 7 7 
        7 6 6 6 c c 7 7 6 c 7 6 6 7 1 7 
        7 6 6 c c 6 7 6 c 6 7 6 6 1 7 7 
        7 7 6 d 1 c 6 6 6 7 6 6 7 7 7 7 
        `],
    100,
    false
    )
    if (Math.percentChance(10)) {
        sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        creatures.creatureBattleCreature(pikachuCreature, charmanderCreature)
        scene.cameraFollowSprite(myPlayer)
        sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
    } else {
        sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        pause(200)
        sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
    }
})
let myPlayer: Sprite = null
=======
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    creatures.creatureBattleCreature(pikachuCreature, charmanderCreature)
})
>>>>>>> master
let charmanderCreature: creatures.Creature = null
let pikachuCreature: creatures.Creature = null
let pikachu = sprites.create(img`
    .............ff.....
    .............fff....
    ..ff.........fff....
    .f55ffff.....f55f...
    f5555fffff...f55f...
    f55555ff55f.ffb5f...
    .f55555f555f55555f..
    ..f55555c55b555555f.
    ...f5555cb555555551f
    ....f555c555f15555ff
    ...f555fc555ff555c5f
    ...f55f.f5522555555f
    ....f55fe552255555f.
    .....fec5555555bbcbf
    ......fce5555bbbbff.
    .....fec55f55fbbbf..
    ......fc555ffbbbbf..
    .......fc5555bbbbf..
    ........f5555bfff...
    .........f5fff......
    ..........f.........
    `, SpriteKind.Creature)
<<<<<<< HEAD
=======
pikachu.setPosition(68, 55)
>>>>>>> master
let charmander = sprites.create(img`
    ....ffff.........f...
    ...f4444f.......f2f..
    ..f444444f......f22f.
    ..f444444f......f22f.
    .f44444444f....f2222f
    f44441f444f....f2252f
    f4444ff4444f...f2552f
    f4444ff4444f....f5ff.
    .f4444444444f...f4f..
    ..ff444444444f.f44f..
    ....fff44f444ff44f...
    .....f55f44444f44f...
    .....f555ff444f4f....
    .....f55554444ff.....
    ....f1f5554444f......
    .....fff55444ff......
    ........fff4ff.......
    .........f141f.......
    ..........ffff.......
    `, SpriteKind.Creature)
<<<<<<< HEAD
pikachuCreature = creatures.makeCreatureFromSprite(
pikachu,
CreatureType.Electric,
"Pikachu"
)
charmanderCreature = creatures.makeCreatureFromSprite(
charmander,
CreatureType.Fire,
"Charmander"
)
makePlayer()
tiles.setCurrentTilemap(tilemap`level1`)
tileUtil.createSpritesOnTiles(assets.tile`myTile4`, img`
    5 7 5 7 7 7 6 6 6 6 7 7 7 7 7 7 
    7 7 7 7 7 c 6 7 7 6 c 7 7 1 7 7 
    7 7 7 1 c 6 7 5 7 7 6 c 1 7 1 7 
    7 7 6 6 c c 6 5 5 6 c c 6 6 6 7 
    6 6 6 5 5 5 6 7 5 6 5 5 7 6 6 6 
    6 6 7 7 7 5 7 6 7 5 5 7 7 7 7 6 
    7 c c c 6 6 7 6 6 5 7 6 c c 6 7 
    6 c 6 6 6 6 6 c c 6 6 6 6 6 c 6 
    6 6 7 7 7 c c c c c c 7 7 7 6 6 
    6 7 7 7 6 6 c c c c 6 6 7 7 7 6 
    c 6 c c 6 7 6 c c 6 7 6 c c 6 c 
    7 c c 5 5 7 6 7 7 6 7 5 5 c c 1 
    7 c 6 7 5 5 6 7 7 6 5 5 7 6 c d 
    7 6 6 7 7 6 6 5 5 6 6 7 7 6 6 6 
    7 7 6 6 6 6 c 6 7 6 c 6 6 6 6 7 
    7 7 5 6 6 c 7 6 6 6 7 c 6 7 7 7 
    `, SpriteKind.Grass)
myPlayer.z = 90
tiles.placeOnTile(myPlayer, tiles.getTileLocation(32, 32))
scene.cameraFollowSprite(myPlayer)
=======
charmander.setPosition(92, 55)
pikachuCreature = creatures.makeCreatureFromSprite(pikachu, CreatureType.Electric)
charmanderCreature = creatures.makeCreatureFromSprite(charmander, CreatureType.Fire)
pikachuCreature.setSayHP(true)
charmanderCreature.setSayHP(true)
>>>>>>> master

enum CreatureType {
    //% block=Bug
    Bug = 0,
    //% block=Dark
    Dark = 1,
    //% block=Dragon
    Dragon = 2,
    //% block=Electric
    Electric = 3,
    //% block=Fairy
    Fairy = 4,
    //% block=Fighting
    Fighting = 5,
    //% block=Fire
    Fire = 6,
    //% block=Flying
    Flying = 7,
    //% block=Ghost
    Ghost = 8,
    //% block=Grass
    Grass = 9,
    //% block=Ground
    Ground = 10,
    //% block=Ice
    Ice = 11,
    //% block=Normal
    Normal = 12,
    //% block=Poison
    Poison = 13,
    //% block=Psychic
    Psychic = 14,
    //% block=Rock
    Rock = 15,
    //% block=Steel
    Steel = 16,
    //% block=Water
    Water = 17
}



namespace creatures{

    //% blockId=makeCreatureFromSprite block="make creature from $sprite=variables_get of type %creatureType"
    export function makeCreatureFromSprite(sprite: Sprite, creatureType: CreatureType) {
        if (!sprite || !creatureType) return;
        const d = sprite.data;
        d["type"] = creatureType;
    }
}
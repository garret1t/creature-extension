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

namespace SpriteKind {
    //% isKind
    export const Creature = SpriteKind.create();
}


//% color=#ff0000
//% weight=79
//% icon="\uf255"
//% blockGap=8 block="Creatures"
//% groups='["Create", "Value", "Battle", "Display", "Events", "Other"]'
namespace creatures{

    export class Creature{
        public _sprite: Sprite;
        public _creatureType: CreatureType;
        public _xp: number;
        public _hp: number;
        public _attackValue: number;

        public _sayHP: boolean;
        public _sayXP: boolean;

        constructor(spr: Sprite, cType: CreatureType) {
            this._sprite = spr;
            this._creatureType = cType;
            this._xp = 0;
            this._hp = 20;
            this._attackValue = 5;
            this._sayHP = false;
            this._sayXP = false;
            game.onUpdate(function () {
                this.update()
            })
        }

        
        
        update(){
            if(this._sayHP) {
                if(this._hp > 0) {
                    this._sprite.say(this._hp);
                } else{
                    this._sprite.say("0");
                }
            }

            if(this._sayXP) {
                if (this._xp > 0) {
                    this._sprite.say(this._xp);
                } else {
                    this._sprite.say("0");
                }
            }
        }

        battle(other: Creature) : boolean {
            return false;
        }

       
        get sprite() {
            return this._sprite;
        }

        set sprite(sprite: Sprite) {
            this._sprite = sprite;
        }

        get creatureType() {
            return this._creatureType;
        }
        set creatureType(creatureType: CreatureType) {
            this._creatureType = creatureType;
        }

        //% group="Value" blockSetVariable="myCreature"
        //% blockCombine block="xp" callInDebugger
        get xp() {
            return this._xp;
        }

        set xp(xp: number) {
            this._xp = xp;
        }

        //% group="Value" blockSetVariable="myCreature"
        //% blockCombine block="hp" callInDebugger
        get hp() {
            return this._hp;
        }

        set hp(hp: number) {
            this._hp = hp;
        }

        //% group="Value" blockSetVariable="myCreature"
        //% blockCombine block="attackValue" callInDebugger
        get attackValue() {
            return this._attackValue;
        }

        set attackValue(attackValue: number) {
            this._attackValue = attackValue;
        }

        //% block="set $this(myCreature) Say HP $sayHP=toggleOnOff"
        //% blockId="creatures_setSayHP"
        setSayHP(sayHP: boolean){
            this._sayHP = sayHP
        }

        //% block="set $this(myCreature) Say XP $sayXP=toggleOnOff"
        //% blockId="creatures_setSayXP"
        setSayXP(sayXP: boolean) {
            this._sayXP = sayXP
        }

    }

    





    //% blockId=makeCreatureFromSprite 
    //%block="make creature from $sprite=variables_get of type %creatureType"
    //% expandableArgumentMode=toggle
    //% blockSetVariable=myCreature
    //% group="Create"
    //% weight=100
    export function makeCreatureFromSprite(sprite: Sprite, creatureType: CreatureType): Creature {
        return new Creature(sprite, creatureType);
    }



    //% group="Value"
    //% blockId="creatures_getCreatureType"
    //% expandableArgumentMode=toggle
    //% block="$creature=variables_get(myCreature) CreatureType" callInDebugger
    export function getCreatureType(creature: Creature): CreatureType {
        return creature.creatureType;
    }


    //% group="Value"
    //% blockId="creatures_setCreatureType"
    //% expandableArgumentMode=toggle
    //% block="set $creature=variables_get(myCreature) CreatureType to %creatureType" callInDebugger
    export function setCreatureType(creature: Creature, creatureType: CreatureType) {
        creature.creatureType = creatureType;
    }

    
    //% group="Value"
    //% blockId="creatures_getSprite"
    //% expandableArgumentMode=toggle
    //% block="$creature=variables_get(myCreature) Sprite" callInDebugger
    export function getCreatureSprite(creature: Creature) : Sprite {
        return creature.sprite;
    }

    //% group="Value"
    //% blockId="creatures_setSprite"
    //% expandableArgumentMode=toggle
    //% block="set $creature=variables_get(myCreature) Sprite to $sprite=variables_get(mySprite)" callInDebugger
    export function setCreatureSprite(creature: Creature, sprite: Sprite) {
        creature.sprite = sprite;
    }


    //% blockId=creatureBattleCreature
    //%block="make $creature1=variables_get(myCreature) battle $creature2=variables_get(myCreature2)"
    //% expandableArgumentMode=toggle
    //% group="Battle"
    //% weight=80
    export function creatureBattleCreature(creature1: Creature, creature2: Creature) {
        let turn: number = 0;
        while (creature1.hp > 0 && creature2.hp > 0) {            
            pause(200)
            if(turn ==0){
                animation.runMovementAnimation(creature1.sprite, animation.animationPresets(animation.easeRight), 5000, false)
                pause(500)
                animation.stopAnimation(animation.AnimationTypes.All, creature1.sprite)
                //animation.runMovementAnimation(creature1.sprite, animation.animationPresets(animation.bobbing), 5000, true)
                animation.runMovementAnimation(creature1.sprite, animation.animationPresets(animation.easeLeft), 2000, false)
                pause(200)
                animation.stopAnimation(animation.AnimationTypes.All, creature1.sprite)
                if (Math.percentChance(25)){
                    creature2.hp -= Math.round(creature1.attackValue *  1.5);
                    pause(50)
                    game.showLongText("Critical Hit", DialogLayout.Bottom)
                } else{
                    creature2.hp -= Math.round(creature1.attackValue);
                }
                turn = 1;
            }else{
                animation.runMovementAnimation(creature2.sprite, animation.animationPresets(animation.easeLeft), 5000, false)
                pause(500)
                animation.stopAnimation(animation.AnimationTypes.All, creature2.sprite)
                //animation.runMovementAnimation(creature2.sprite, animation.animationPresets(animation.bobbing), 5000, true)
                animation.runMovementAnimation(creature2.sprite, animation.animationPresets(animation.easeRight), 2000, false)
                pause(200)
                animation.stopAnimation(animation.AnimationTypes.All, creature2.sprite)
                if (Math.percentChance(25)) {
                    creature1.hp -= Math.round(creature2.attackValue * 1.5);
                    pause(50)
                    game.showLongText("Critical Hit", DialogLayout.Bottom)
                } else {
                    creature1.hp -= Math.round(creature2.attackValue);
                }
                turn = 0;
            }
        }

    }
    
}


class CreatureSprite extends Sprite {
    constructor(public _creature: creatures.Creature) {
        super(_creature.sprite.image)
    }
}

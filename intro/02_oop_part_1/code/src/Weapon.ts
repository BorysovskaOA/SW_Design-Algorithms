import { Item } from './Item';

export abstract class Weapon extends Item {
    public abstract polish(): void;
    public static MODIFIER_CHANGE_RATE = 0.05;

    private damageModifier: number = 0;
    private durabilityModifier: number = 0;

    constructor(name: string, private readonly baseDamage: number, private readonly baseDurability: number, value: number, weight: number) {
        super(name, value, weight);
    }

    public use() {
        if (this.getDurability() <= 0) {
            return `You can't use the ${this.getName()}, it is broken.`;
        }

        this.durabilityModifier = this.durabilityModifier - Weapon.MODIFIER_CHANGE_RATE;

        const isBrokenAfterUse = this.getDurability() <=0;
        const useString = `You use the ${this.getName()}, dealing ${this.getDamage().toFixed(2)} points of damage.`

        return `${useString}${isBrokenAfterUse ? `\nThe ${this.getName()} breaks.`: ''}`;
    }

    public toString() {
        return `${super.toString()}, Damage: ${this.getDamage().toFixed(2)}, Durability: ${(100 * this.getDurability()).toFixed(2)}%`;
    }

    public getDamage(): number {
        return this.baseDamage + this.damageModifier;
    }

    public getDurability(): number {
        return this.baseDurability + this.durabilityModifier;
    }

    public getBaseDamage() {
        return this.baseDamage;
    }

    public getDamageModifier() {
        return this.damageModifier;
    }

    public setDamageModifier(damageModifier: number) {
        this.damageModifier = damageModifier;
    }

    public getBaseDurability() {
        return this.baseDurability;
    }

    public getDurabilityModifier() {
        return this.durabilityModifier;
    }

    public setDurabilityModifier(durabilityModifier: number) {
        this.durabilityModifier = durabilityModifier;
    }
}
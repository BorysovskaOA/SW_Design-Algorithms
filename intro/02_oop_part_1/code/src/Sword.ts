import { Weapon } from './Weapon';

export class Sword extends Weapon {
    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, baseDamage, baseDurability, value, weight);
    }

    public polish() {
        const maxDamageModifier = 0.25 * this.getBaseDamage();

        if (this.getDamageModifier() === maxDamageModifier) {
            return;
        }
        const newDamageModifier = this.getDamageModifier() + Weapon.MODIFIER_CHANGE_RATE;

        this.setDamageModifier(Math.min(newDamageModifier, maxDamageModifier));
    }
}
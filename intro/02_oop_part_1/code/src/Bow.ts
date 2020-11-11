import { Weapon } from './Weapon';

export class Bow extends Weapon {
    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, baseDamage, baseDurability, value, weight);
    }

    public polish() {
        const maxDurabilityModifier = 1 - this.getBaseDurability();

        if (this.getDurabilityModifier() === maxDurabilityModifier) {
            return;
        }
        const newDurabilityModifier = this.getDurabilityModifier() + Weapon.MODIFIER_CHANGE_RATE;

        if (maxDurabilityModifier <= 0) {
            this.setDurabilityModifier(Math.max(newDurabilityModifier, maxDurabilityModifier));
        } else {
            this.setDurabilityModifier(Math.min(newDurabilityModifier, maxDurabilityModifier));
        }
    }
}
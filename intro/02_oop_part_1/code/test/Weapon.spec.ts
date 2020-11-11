import { Weapon } from '../src/Weapon';
class TestWeapon extends Weapon {
    polish() {}
}

describe('Weapon', () => {
    let sut: Weapon;

    beforeEach(() => {
        sut = new TestWeapon('hammer', 30.4219, 0.7893, 300, 2.032);
        sut.setDamageModifier(0.05);
        sut.setDurabilityModifier(0.05);
    });

    describe('toString', () => {
        it('should return expected', () => {
            const expected = 'hammer - Value: 300, Weight: 2.03, Damage: 30.47, Durability: 83.93%';
            expect(sut.toString()).toBe(expected);
        });
    });

    describe('use', () => {
        it('should return expected', () => {
            const expected = 'You use the hammer, dealing 30.47 points of damage.';
            expect(sut.use()).toBe(expected);
        });

        it('should alert user that weapon is about to break', () => {
            const expected = 'You use the hammer, dealing 30.47 points of damage.\nThe hammer breaks.';
            do {
                sut.use();
            } while (sut.getDurability() > Weapon.MODIFIER_CHANGE_RATE);
            expect(sut.use()).toBe(expected);
        });

        it('should alert user that weapon is broken', () => {
            const expected = "You can't use the hammer, it is broken.";
            do {
                sut.use();
            } while (sut.getDurability() > 0);
            expect(sut.use()).toBe(expected);
        });
    });
});

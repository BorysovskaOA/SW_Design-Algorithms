import { Bow } from '../src/Bow';

describe('Bow', () => {
    let sut: Bow;

    beforeEach(() => {
        sut = new Bow('bow', 1, 1, 1, 1);
        sut.setDurabilityModifier(-0.3);
    });

    describe('polish', () => {
        it('should increase Durability', () => {
            const beforePolishDurability = sut.getDurability();
            sut.polish();
            const afterPolishDurability = sut.getDurability();
            expect(afterPolishDurability).toBeGreaterThan(beforePolishDurability);
        });

        it('should not increase Durability more that 25%', () => {
            let count = 0;
            while (count < 100) {
                sut.polish();
                count += 1;
            }
            const afterPolishDurability = sut.getDurability();
            expect(afterPolishDurability).toBeLessThanOrEqual(1);
        });
    });
});

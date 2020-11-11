import { Sword } from '../src/Sword';

describe('Sword', () => {
    let sut: Sword;

    beforeEach(() => {
        sut = new Sword('sword', 1, 1, 1, 1);
    });

    describe('polish', () => {
        it('should increase damage', () => {
            const beforePolishDamage = sut.getDamage();
            sut.polish();
            const afterPolishDamage = sut.getDamage();
            expect(afterPolishDamage).toBeGreaterThan(beforePolishDamage);
        });

        it('should not increase damage more that 25%', () => {
            let count = 0;
            while (count < 100) {
                sut.polish();
                count += 1;
            }
            const afterPolishDamage = sut.getDamage();
            expect(afterPolishDamage).toBeLessThanOrEqual(1.25);
        });
    });
});

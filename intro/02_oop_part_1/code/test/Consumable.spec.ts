import { Consumable } from '../src/Consumable';

class TestConsumable extends Consumable {}

describe('Consumable', () => {
    let sut: TestConsumable;

    beforeEach(() => {
        sut = new TestConsumable('bread', 1, 1, false);
    });
    describe('use same as eat', () => {
        it('use same as eat', () => {
            expect(sut.use()).toBe(sut.eat());
        });

        it('should return message for good, not consumed', () => {
            const expected = 'You eat the bread.';
            expect(sut.use()).toBe(expected);
        });

        it('should return message for spoiled, not consumed', () => {
            const expected = 'You eat the bread.\nYou feel sick.';
            sut = new TestConsumable('bread', 1, 1, true);
            expect(sut.use()).toBe(expected);
        });

        it('should return message for good, consumed', () => {
            const expected = 'There is nothing left of the bread to consume.';
            sut.setConsumed(true);
            expect(sut.use()).toBe(expected);
        });
    });
});

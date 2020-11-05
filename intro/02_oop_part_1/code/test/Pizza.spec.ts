import { Pizza } from '../src/Pizza';

describe('Pizza', () => {
    let sut: Pizza;

    describe('good Pizza', () => {
        beforeEach(() => {
            sut = new Pizza(1, false);
        });

        it('should return eaten message', () => {
            const expected = 'You eat a slice of the pizza.';
            expect(sut.use()).toBe(expected);
        });

        it('should return default message', () => {
            const expected = 'There is nothing left of the pizza to consume.';
            sut.use();
            expect(sut.use()).toBe(expected);
        });
    });

    describe('bad Pizza', () => {
        beforeEach(() => {
            sut = new Pizza(1, true);
        });

        it('should return eaten message with spoiled message', () => {
            const expected = 'You eat a slice of the pizza.\nYou feel sick.';
            expect(sut.use()).toBe(expected);
        });
    });
});

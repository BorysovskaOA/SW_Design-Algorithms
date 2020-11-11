import { Item } from '../src/Item';
class TestItem extends Item {
    use() {}
}

describe('Item', () => {
    let sut: Item;

    beforeEach(() => {
        sut = new TestItem('ring', 3000, 0.01);
    });

    describe('toString', () => {
        const expected = 'ring - Value: 3000, Weight: 0.01';

        it('should return expected', () => {
            expect(sut.toString()).toBe(expected);
        });
    });

    describe('compareTo', () => {
        let other: Item;

        it('should return 0 if items are the same', () => {
            expect(sut.compareTo(sut)).toBe(0);
        });

        it('should return 1 if other item is chipper', () => {
            other = new TestItem('Rock', 300, 0.01);
            expect(sut.compareTo(other)).toBe(1);
        });

        it('should return -1 if other item is more expensive', () => {
            other = new TestItem('Rock', 30000, 0.01);
            expect(sut.compareTo(other)).toBe(-1);
        });

        it('should return 0 if items have same value and name different capitalization', () => {
            other = new TestItem('Ring', 3000, 0.01);
            expect(sut.compareTo(other)).toBe(0);
        });

        it('should return 1 if items have same value and < name', () => {
            other = new TestItem('Rack', 3000, 0.01);
            expect(sut.compareTo(other)).toBe(1);
        });

        it('should return -1 if items have same value and > name', () => {
            other = new TestItem('Rock', 3000, 0.01);
            expect(sut.compareTo(other)).toBe(-1);
        });
    });
});

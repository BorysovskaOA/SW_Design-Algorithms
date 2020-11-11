import { ItemWeightComparator } from '../src/ItemWeightComparator';
import { Item } from '../src/Item';

class TestItem extends Item {
    use() {}
}

describe('ItemWeightComparator', () => {
    let sut: ItemWeightComparator;

    beforeEach(() => {
        sut = new ItemWeightComparator();
    });

    describe('compare weight', () => {
        const item1 = new TestItem('ring', 3000, 0.02);
        const item2 = new TestItem('ring', 3000, 0.01);

        it('should return 1 if first item is heavier', () => {
            expect(sut.compare(item1, item2)).toBe(1);
        });

        it('should return -1 if first item is lighter', () => {
            expect(sut.compare(item2, item1)).toBe(-1);
        });
    });

    describe('compareTo', () => {
        let item1 = new TestItem('ring', 3000, 0.01);
        let item2: TestItem;

        it('should return 0 if items are the same', () => {
            item2 = new TestItem('ring', 3000, 0.01);
            expect(sut.compare(item1, item2)).toBe(0);
        });

        it('should return 1 if other item is chipper', () => {
            item2 = new TestItem('Rock', 300, 0.01);
            expect(sut.compare(item1, item2)).toBe(1);
        });

        it('should return -1 if item2 item is more expensive', () => {
            item2 = new TestItem('Rock', 30000, 0.01);
            expect(sut.compare(item1, item2)).toBe(-1);
        });

        it('should return 0 if items have same value and name different capitalization', () => {
            item2 = new TestItem('Ring', 3000, 0.01);
            expect(sut.compare(item1, item2)).toBe(0);
        });

        it('should return 1 if items have same value and < name', () => {
            item2 = new TestItem('Rack', 3000, 0.01);
            expect(sut.compare(item1, item2)).toBe(1);
        });

        it('should return -1 if items have same value and > name', () => {
            item2 = new TestItem('Rock', 3000, 0.01);
            expect(sut.compare(item1, item2)).toBe(-1);
        });
    });
});

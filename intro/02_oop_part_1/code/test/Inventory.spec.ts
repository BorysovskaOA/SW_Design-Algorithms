import { Inventory } from '../src/Inventory';
import { Sword } from '../src/Sword';
import { Bow } from '../src/Bow';
import { ItemWeightComparator } from '../src/ItemWeightComparator';

describe('Inventory', () => {
    let sut: Inventory;

    beforeEach(() => {
        sut = new Inventory();
        sut.addItem(new Sword('sword1', 1, 1, 1, 1));
        sut.addItem(new Sword('sword2', 1, 1, 4, 4));
        sut.addItem(new Bow('bow1', 1, 1, 3, 3));
        sut.addItem(new Bow('bow2', 1, 1, 2, 2));
    });

    it('should sort by value', () => {
        let expected = ['Value: 1', 'Value: 2', 'Value: 3', 'Value: 4'];
        sut.sort();
        expect(sut.toString().match(/Value: \d/g)).toEqual(expected);
    });

    it('should sort by weight', () => {
        let expected = ['Weight: 1', 'Weight: 2', 'Weight: 3', 'Weight: 4'];
        sut.sort(new ItemWeightComparator());
        expect(sut.toString().match(/Weight: \d/g)).toEqual(expected);
    });
});

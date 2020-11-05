import { ItemComparator } from './ItemComparator';
import { Item } from './Item';

export class Inventory {
    private items: Item [] = [];

    constructor();
    constructor(items: Item[]);
    constructor(items?: Item[]) {
        if (Array.isArray(items)) {
            this.items = items;
        }
    }

    public sort(): void;
    public sort(comparator: ItemComparator): void;
    public sort(comparator?: ItemComparator): void {
        const defaultComparator = (a: Item, b: Item) => a.compareTo(b);

        this.items.sort(comparator ? comparator.compare : defaultComparator);
    }

    public addItem(item: Item) {
        this.items.push(item);
    }

    public toString() {
        return this.items.map((el: Item) => el.toString()).join(', ');
    }
}
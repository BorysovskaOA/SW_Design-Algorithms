import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item) {
        const weightDifference = first.getWeight() - second.getWeight();
        if (weightDifference > 0) {
            return 1;
        }

        if (weightDifference < 0){
            return -1
        }

        return first.compareTo(second);
    }
}

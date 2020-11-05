import { Comparable } from './Comparable';

export abstract class Item implements Comparable<Item> {
    public abstract use(): void;
    private static numberOfItems: number = 0;
    private readonly id: number;

    constructor(private name: string, private value: number, private weight: number) {
        this.id = Item.numberOfItems++;
    }

    public compareTo(other: Item): number {
        const valueDifference = this.value - other.value;

        if (valueDifference > 0) {
            return 1;
        }

        if (valueDifference < 0) {
            return -1;
        }

        return this.compareLexicographicallyTo(other);
    }

    private compareLexicographicallyTo(other: Item): number {
        const itemNameLC = this.name.toLocaleLowerCase();
        const otherItemNameLC = other.name.toLocaleLowerCase();

        let comparisonResult = 0;

        for (let i = 0; i < itemNameLC.length ;i++) {
            if (!otherItemNameLC[i]) {
                comparisonResult = 1;
                break;
            }

            if (itemNameLC[i] > otherItemNameLC[i]) {
                comparisonResult = 1;
                break;
            }

            if (itemNameLC[i] < otherItemNameLC[i]) {
                comparisonResult = -1;
                break;
            }
        }

        return comparisonResult;
    }

    public toString() {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight.toFixed(2)}`;
    }

    public reset() {
        Item.numberOfItems = 0;
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getValue() {
        return this.value;
    }

    public setValue(value: number){
        this.value = value;
    }

    public getWeight() {
        return this.weight;
    }

    public setWeight(weight: number) {
        this.weight = weight;
    }
}

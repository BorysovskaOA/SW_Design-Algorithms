import { Item } from './Item';

export abstract class Consumable extends Item {
    private consumed: boolean;

    constructor(name: string, value: number, weight: number, private spoiled: boolean) {
        super(name, value, weight);

        this.consumed = false;
    }

    public use() {
        if (!this.spoiled && !this.consumed) {
            return this.eat();
        }

        if (this.consumed) {
            return `There is nothing left of the ${this.getName()} to consume.`;
        }

        if (this.spoiled) {
            return `${this.eat()}\nYou feel sick.`
        }
    }

    public eat() {
        const weightOfOnePiece = this.getWeight() / this.getValue();
        this.setValue(this.getValue() - 1);
        this.setWeight(this.getWeight() - weightOfOnePiece);
        this.consumed = this.getValue() <= 0;

        return `You eat the ${this.getName()}.`;
    }

    public getConsumed() {
        return this.consumed;
    }

    public setConsumed(consumed: boolean) {
        this.consumed = consumed;
    }

    public getSpoiled() {
        return this.spoiled;
    }

    public setSpoiled(spoiled: boolean) {
        this.spoiled = spoiled;
    }
}
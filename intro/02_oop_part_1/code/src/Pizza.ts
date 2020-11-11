import { Consumable } from './Consumable';

export class Pizza extends Consumable {
  constructor(numberOfSlices: number, spoiled: boolean) {
      super('pizza', numberOfSlices, 1, spoiled);
  }

  public eat() {
      super.eat();
      return `You eat a slice of the ${this.getName()}.`;
  }
}
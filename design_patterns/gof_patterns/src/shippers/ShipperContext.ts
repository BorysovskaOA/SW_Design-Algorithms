import { ShipperStrategy } from './ShipperStrategy';

export class ShipperContext {
  constructor(private strategy: ShipperStrategy) {
  }

  public setStrategy(strategy: ShipperStrategy) {
    this.strategy = strategy;
  }

  public execute(weight: number, type: 'letter' | 'package' | 'oversized') {
    return this.strategy.getCost(weight, type);
  }
}
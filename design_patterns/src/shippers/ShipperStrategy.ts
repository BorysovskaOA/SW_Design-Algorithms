export abstract class ShipperStrategy {
  public abstract getCost(weight: number, type: 'letter' | 'package' | 'oversized'): string;
}
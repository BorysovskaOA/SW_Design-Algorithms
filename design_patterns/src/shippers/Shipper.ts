export abstract class Shipper {
  public abstract getLetterCost(weight: number): string;
  public abstract getPackageCost(weight: number): string;
  public abstract getOversizedCost(weight: number): string;
}
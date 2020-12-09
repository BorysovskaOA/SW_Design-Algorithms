import { ShipmentState } from './ShipmentState';

export abstract class GUI {
  public abstract on(eventType: string, callback: (state: ShipmentState) => void): void;
  public abstract trigger(eventType: string, state: ShipmentState): void;
}
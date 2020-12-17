import { ShipmentState } from '../ShipmentState';

export interface MockShipmentEvent {
  eventType: string;
  callback: (state: ShipmentState) => void;
}
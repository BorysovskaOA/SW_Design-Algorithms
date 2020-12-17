import { GUI } from '../GUI';
import { ShipmentState } from '../ShipmentState';
import { MockShipmentEvent } from './MockShipmentEvent';

export class MockShipmentGUI extends GUI {
  private listeners: MockShipmentEvent[] = [];

  public on(eventType: string, callback: (state: ShipmentState) => void){
    this.listeners.push({
      eventType,
      callback
    })
  }

  public trigger(eventType: string, state: ShipmentState){
    this.listeners.forEach((eventListener: MockShipmentEvent) => {
      if (eventListener.eventType === eventType) {
        eventListener.callback(state);
      }
    })
  }
}
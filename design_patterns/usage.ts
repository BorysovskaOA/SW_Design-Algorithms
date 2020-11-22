import { MockShipmentGUI } from './src/mockedGUI/MockShipmentGUI';
import { Client } from './src/Client';
import { ShipmentState } from './src/ShipmentState';

const gui = new MockShipmentGUI();
const client = new Client(gui);

const package11: ShipmentState = {
  shipmentId: 0,
  fromAddress: 'Lviv',
  fromZipCode: '12345',
  toAddress: 'Kiev',
  toZipCode: '23456',
  weight: 3.25,
  marks: ['mark1', 'mark2']
}

gui.trigger('ship', package11);

const package12: ShipmentState = {
  shipmentId: 0,
  fromAddress: 'Lviv',
  fromZipCode: '52345',
  toAddress: 'Kiev',
  toZipCode: '23456',
  weight: 3.25,
  marks: ['mark1', 'mark2']
}

gui.trigger('ship', package12);

const package13: ShipmentState = {
  shipmentId: 0,
  fromAddress: 'Lviv',
  fromZipCode: '92345',
  toAddress: 'Kiev',
  toZipCode: '23456',
  weight: 3.25,
  marks: ['mark1', 'Fragile']
}

gui.trigger('ship', package13);

const package2: ShipmentState = {
  shipmentId: 3456,
  fromAddress: 'Rivne',
  fromZipCode: '45623',
  toAddress: 'Odessa',
  toZipCode: '45634',
  weight: 23.05,
  marks: ['mark1', 'mark2']
}

gui.trigger('ship', package2);


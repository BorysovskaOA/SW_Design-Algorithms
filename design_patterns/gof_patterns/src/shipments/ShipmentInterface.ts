import { Shippable } from './Shippable';

export interface ShipmentInterface extends Shippable {
  changeFromAddress: (address: string) => void;
  changeToAddress: (address: string) => void;
  changeFromZipCode: (zipCode: string) => void;
  changeToZipCode: (zipCode: string) => void;
  changeMarks: (marks: string[]) => void;
}

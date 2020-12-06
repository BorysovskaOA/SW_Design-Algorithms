export interface ShipmentInterface {
  ship: () => string;
  changeFromAddress: (address: string) => void;
  changeToAddress: (address: string) => void;
  changeFromZipCode: (zipCode: string) => void;
  changeToZipCode: (zipCode: string) => void;
  changeMarks: (marks: string[]) => void;
  getWeight: () => number;
  getFromZipCode: () => string;
}
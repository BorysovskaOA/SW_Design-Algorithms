export class Point {
  public x: number = 0;
  public y: number = 0;

  constructor();
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    if (typeof x === 'number' && typeof y === 'number') {
      this.x = x;
      this.y = y;
    }
  }

  public toString() {
    return `(${this.x}, ${this.y})`;
  }

  public distance(): number;
  public distance(other: Point): number;
  public distance(x?: number, y?: number): number;
  public distance(x?: Point | number, y?: number) {
    if (x instanceof Point) {
      return this.calculateDistance(x);
    }

    if (typeof x === 'number' && typeof y === 'number') {
      return this.calculateDistance(new Point(x, y));
    }

    return this.calculateDistance(new Point());
  }

  private calculateDistance(point: Point) {
    const horizontalDistance = this.x - point.x;
    const verticalDistance = this.y - point.y;

    return Math.sqrt(Math.pow(horizontalDistance, 2) + Math.pow(verticalDistance, 2));
  }
}


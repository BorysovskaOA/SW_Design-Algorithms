import { Point } from './Point';

export abstract class Shape {
  abstract getType(): string;

  private readonly color: string = 'green';
  private readonly filled: boolean = true;
  public points: Point[] = [];

  constructor(points: Point[])
  constructor(points: Point[], color?: string, filled?: boolean)
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length < 3) {
      throw new Error('Not enough points for a shape');
    }

    this.points = points;

    if (color) {
      this.color = color;
    }

    if (typeof filled === 'boolean') {
      this.filled = filled;
    }
  }

    public toString() {
      const pointsString = this.points.join(', ');
      return `A Shape with color of ${this.color} and${
        !this.filled
          ? ' not'
          : ''
      } filled. Points: ${pointsString}.`;
    }

    public getPerimeter() {
      const sides = this.getSides();

      return sides.reduce((acc: number, side: number) => acc + side);
    }

    public getSides() {
      const sides = [];

      // tslint:disable-next-line:no-increment-decrement
      for (let i = 0; i < this.points.length; i++) {
        const nextIndex = i === this.points.length - 1 ? 0 : i + 1;
        const side = this.points[i].distance(this.points[nextIndex]);

        sides.push(side);
      }

      return sides;
    }
}


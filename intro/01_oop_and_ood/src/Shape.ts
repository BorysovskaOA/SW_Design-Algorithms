import { Point } from './Point';

export abstract class Shape {
  abstract getType(): string;

  private readonly color: string;
  private readonly filled: boolean;
  public points: Point[] = [];

  constructor(points: Point[])
  constructor(points: Point[], color?: string, filled?: boolean)
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length < 3) {
      throw new Error('Not enough points for a shape');
    }

    this.points = points;

    this.color = color || 'green';
    this.filled = typeof filled === 'boolean' ? filled : true
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
      return this.points.map((el: Point, index: number, array: Point[]) => {
        const nextIndex = index === array.length - 1 ? 0 : index + 1
        return this.points[index].distance(this.points[nextIndex]);
      });
    }
}


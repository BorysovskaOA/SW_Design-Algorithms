import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
  constructor(points: Point[])
  constructor(point1: Point, point2: Point, point3: Point);
  constructor(points: Point[], color?: string, filled?: boolean)
  constructor(arg1: Point[] | Point, arg2?: string | Point, arg3?: boolean | Point) {
    if (arg1 instanceof Point && arg2 instanceof Point && arg3 instanceof Point) {
      super([arg1, arg2, arg3]);
    }

    if (Array.isArray(arg1)) {
      if (arg2 instanceof Point || arg3 instanceof Point) {
        throw new Error('invalid arguments');
      }
      super(arg1.slice(0, 3), arg2, arg3);
    }
  }

  public toString() {
    return `Triangle[v1=${this.points[0]},v2=${this.points[1]},v3=${this.points[2]}]`;
  }

  public getType() {
    const sides = this.getSides();

    const maxEqualSidesCount = this.getMaxEqualSidesCount(sides);

    switch (maxEqualSidesCount) {
      case 3:
        return 'equilateral triangle';
      case 2:
        return 'isosceles triangle';
      default:
        return 'scalene triangle';
    }
  }

  private getMaxEqualSidesCount(sides: number[]) {
    const sidesEquality = sides.map((side: number, index: number, arr: number[]) => {
      return arr.filter((el: number) => el.toFixed(2) === side.toFixed(2)).length;
    });

    return Math.max(...sidesEquality);
  }
}

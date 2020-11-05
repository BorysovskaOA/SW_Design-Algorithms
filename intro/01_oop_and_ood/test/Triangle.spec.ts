// @ts-nocheck
import { Triangle } from '../src/Triangle';
import { Point } from '../src/Point';

describe('Triangle', () => {
    it('should be able to create instance of Triangle', () => {
        expect(() => new Triangle(new Point(0, 0), new Point(0, 3), new Point(4, 3))).not.toThrow();
    });

    it('should tell if the triangle is equilateral', () => {
        expect(new Triangle(new Point(0, 0), new Point(6, 0), new Point(3, 5.196)).getType()).toBe('equilateral triangle');
    });

    it('should tell if the triangle is isosceles', () => {
        expect(new Triangle(new Point(0, 0), new Point(6, 0), new Point(3, 8)).getType()).toBe('isosceles triangle');
    });

    it('should tell if the triangle is scalene', () => {
        expect(new Triangle(new Point(0, 0), new Point(7, 0), new Point(3, 8)).getType()).toBe('scalene triangle');
    });
});

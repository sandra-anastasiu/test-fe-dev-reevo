import { Shape } from './Shape.js';

export class Triangle extends Shape {
    draw() {
        this.poly([0, 0, 50, 0, 25, 50]);
        this.fill(this.color);
    }

    getArea() {
        return (50 * 50) / 2;
    }
}

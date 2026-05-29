import { Shape } from './Shape.js';

export class Circle extends Shape {
    draw() {
        this.circle(0, 0, 25);
        this.fill(this.color);
    }

    getArea() {
        return Math.PI * 25 * 25;
    }
}

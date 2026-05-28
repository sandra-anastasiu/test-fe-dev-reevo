import { Shape } from './Shape.js';
import { Triangle } from './Triangle.js';
import { Circle } from './Circle.js';
import { Container } from 'pixi.js';

export class ShapeSpawner {
    constructor(stage) {
        this.stage = stage;
        this.shapes = [];
        this.gravity = 0.01;
    }

    spawnShape(x, y) {
        const shapeType = Math.random() < 0.5 ? 'triangle' : 'circle';
        const shape =
            shapeType === 'triangle'
                ? new Triangle(x, y, this.gravity)
                : new Circle(x, y, this.gravity);
        shape.draw();
        this.stage.addChild(shape);
        this.shapes.push(shape);
        shape.interactive = true;
        // not working | added stopPropagation to pointerdown event just to avoid triggering click event on stage
        shape.on('pointerdown', (event) => {
            event.stopPropagation();
            this.removeShape(shape);
        });
        console.log('Shape spawned.');
    }

    removeShape(shape) {
        this.stage.removeChild(shape);
        this.shapes = this.shapes.filter((s) => s !== shape);
        shape.destroy();
        console.log('Shape removed.');
    }

    getTotalArea() {
        return this.shapes.reduce((total, shape) => total + shape.getArea(), 0);
    }

    startSpawning() {
        setInterval(() => {
            this.spawnShape(Math.random() * 600, -10);
        }, 1000);
    }

    update() {
        [...this.shapes].forEach((shape) => {
            shape.update();

            if (shape.y > 400) {
                this.removeShape(shape);
            }

            if (this.shapes.length > 10) {
                this.removeShape(this.shapes[0]); // limit the number of shapes on the stage to prevent performance issues
            }
        });

        document.getElementById('js-number-of-current-shapes').textContent =
            `Number of current Shapes: ${this.shapes.length}`;

        document.getElementById('js-total-area').textContent =
            `Total area: ${this.getTotalArea().toFixed(0)}`;
    }
}

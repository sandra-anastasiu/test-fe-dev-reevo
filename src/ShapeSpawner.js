import { Shape } from './Shape.js';
import { Triangle } from './Triangle.js';
import { Circle } from './Circle.js';
import { Container } from 'pixi.js';

export class ShapeSpawner {
    constructor(stage, canvasHeight, canvasWidth = 600) {
        this.stage = stage;
        this.shapes = [];
        this.gravity = 0.01;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
    }

    spawnShape(x, y) {
        const shapeType = Math.random() < 0.5 ? 'triangle' : 'circle';
        const color = this.generateRandomColor();
        const shape =
            shapeType === 'triangle'
                ? new Triangle(x, y, this.gravity, color)
                : new Circle(x, y, this.gravity, color);
        shape.draw();
        this.stage.addChild(shape);
        this.shapes.push(shape);
        shape.interactive = true;
        // not working properly | added stopPropagation to pointerdown event just to avoid triggering click event on stage
        shape.on('pointerdown', (event) => {
            event.stopPropagation();
            this.removeShape(shape);
        });
        console.log('Shape spawned.');
    }

    generateRandomColor() {
        return Math.floor(Math.random() * 0xffffff);
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
            this.spawnShape(Math.random() * this.canvasWidth, -10);
        }, 1000);
    }

    update() {
        [...this.shapes].forEach((shape) => {
            shape.update();

            if (shape.y > this.canvasHeight) {
                this.removeShape(shape);
            }
        });

        document.getElementById('js-number-of-current-shapes').textContent =
            `Number of current Shapes: ${this.shapes.length}`;

        document.getElementById('js-total-area').textContent =
            `Surface Area occupied by shapes: ${this.getTotalArea().toFixed(0)}`;
    }
}

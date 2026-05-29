import { Graphics } from 'pixi.js';

export class Shape extends Graphics {
    constructor(x, y, gravity, color) {
        super();
        this.x = x;
        this.y = y;
        this.gravity = gravity;
        this.color = color;
        this.speed = 0;
    }

    update() {
        this.speed += this.gravity;
        this.y += this.speed;
    }
}

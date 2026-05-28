import { Graphics } from 'pixi.js';

export class Shape extends Graphics {
    constructor(x, y, gravity) {
        super();
        this.x = x;
        this.y = y;
        this.gravity = gravity;
        this.speed = 0;
    }

    update() {
        this.speed += this.gravity;
        this.y += this.speed;
    }
}

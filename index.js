import { Application } from 'pixi.js';
import { ShapeSpawner } from './src/ShapeSpawner.js';

(async () => {
    const app = new Application();
    await app.init({ background: '#61E8E1', width: 600, height: 400 });

    const shapeSpawner = new ShapeSpawner(app.stage);
    shapeSpawner.startSpawning();
    shapeSpawner.spawnShape(Math.random() * 600, -10);

    const mountNode = document.getElementById('app') || document.body;
    mountNode.appendChild(app.canvas);

    app.canvas.addEventListener('click', (event) => {
        const x = event.offsetX;
        const y = event.offsetY;
        shapeSpawner.spawnShape(x, y);
    });

    app.ticker.add(() => {
        shapeSpawner.update();
    });
})();

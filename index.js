import { Application } from 'pixi.js';
// tried to use isMobile from pixi.js/utils but it doesn't work properly in this case, so I just work with window.innerWidth
// import { isMobile } from 'pixi.js/utils';
import { ShapeSpawner } from './src/ShapeSpawner.js';

(async () => {
    // I will keep it simple and just use window.innerWidth to determine the width of the canvas, but in a real project I would probably use a more robust solution to detect mobile devices and adjust the canvas size accordingly
    // const isMobileDevice = isMobile.any;
    // const w = isMobileDevice ? window.innerWidth : 600;
    // const h = isMobileDevice ? window.innerHeight : 400;

    const w = window.innerWidth < 768 ? window.innerWidth * 0.8 : 600;
    const h = window.innerHeight < 768 ? window.innerHeight * 0.4 : 400;

    const app = new Application();
    await app.init({ background: '#bd0808', width: w, height: h });

    const shapeSpawner = new ShapeSpawner(app.stage, h, w);
    shapeSpawner.startSpawning();
    shapeSpawner.spawnShape(Math.random() * w, -10);

    const shapesIncreaseButton = document.getElementById('js-shapes-increase');
    const shapesDecreaseButton = document.getElementById('js-shapes-decrease');

    const gravityIncreaseButton = document.getElementById(
        'js-gravity-increase'
    );
    const gravityDecreaseButton = document.getElementById(
        'js-gravity-decrease'
    );
    const GRAVITY_STEP = 0.1;

    if (shapesIncreaseButton) {
        shapesIncreaseButton.addEventListener('click', () => {
            // i have to do +1 to the number of shapes per second and update the spawn interval accordingly, but I am not implementing it now because it is not working properly.
        });
    }

    if (shapesDecreaseButton) {
        shapesDecreaseButton.addEventListener('click', () => {
            // i have to do -1 to the number of shapes per second and update the spawn interval accordingly, but I am not implementing it now because it is not working properly.
        });
    }

    if (gravityIncreaseButton) {
        gravityIncreaseButton.addEventListener('click', () => {
            shapeSpawner.gravity = Number(
                (shapeSpawner.gravity + GRAVITY_STEP).toFixed(2)
            );

            console.log('Gravity increased:', shapeSpawner.gravity);
        });
    }

    if (gravityDecreaseButton) {
        gravityDecreaseButton.addEventListener('click', () => {
            shapeSpawner.gravity = Number(
                (shapeSpawner.gravity - GRAVITY_STEP).toFixed(2)
            );
            if (shapeSpawner.gravity < 0.1) {
                shapeSpawner.gravity = 0.1;
            }
            console.log('Gravity decreased:', shapeSpawner.gravity);
        });
    }

    const mountNode =
        document.getElementById('js-pixi-container') || document.body;
    mountNode.appendChild(app.canvas);

    app.canvas.addEventListener('pointerdown', (event) => {
        const x = event.offsetX;
        const y = event.offsetY;
        shapeSpawner.spawnShape(x, y);
    });

    app.ticker.add(() => {
        shapeSpawner.update();
    });
})();

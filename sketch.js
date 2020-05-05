const canvasSize = [500, 500];

let lightSource;
let numRays = 300;
let boundaries = [];
const numBoundaries = 5;

function setup() {
    noCursor();
    createCanvas(canvasSize[0], canvasSize[1]);

    // boundaries.push(new Boundary(canvasSize[0]/2+50, 50, canvasSize[0]/2+100, canvasSize[1]-50));
    // boundaries.push(new Boundary(canvasSize[0]/2-50, 50, canvasSize[0]/2-150, canvasSize[1]-50));

    boundaries.push(new Boundary(0, 0, width, 0));
    boundaries.push(new Boundary(width, 0, width, height));
    boundaries.push(new Boundary(width, height, 0, height));
    boundaries.push(new Boundary(0, height, 0, 0));

    for (let i = 0; i < numBoundaries; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        boundaries.push(new Boundary(x1, y1, x2, y2));
    }

    lightSource = new LightSource(numRays);
}

function draw() {

    background(0);
    
    lightSource.setSource(mouseX, mouseY);
    lightSource.show(boundaries);

    boundaries.forEach(boundary => boundary.show());
}
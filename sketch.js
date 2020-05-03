const canvasSize = 600;

let sourceStep;
let boundaries = [];
const numBoundaries = 7;

function setup() {
    noCursor();
    createCanvas(canvasSize, canvasSize);

    sourceStep = PI / 502;

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

}

function draw() {

    background(0);

    for (const boundary of boundaries) {
        boundary.show();
    }

    for (let i = 0; i < 2 * PI; i += sourceStep) {

        x = cos(i);
        y = sin(i);

        let ray = new Ray(createVector(mouseX, mouseY), createVector(x, y));

        let closest = null;
        let minDist = Infinity;

        // Verify boundary / ray intersection
        // Only draw the closest intersection
        for (const boundary of boundaries) {
            let p = ray.intersection(boundary);
            if (p) {
                const newDist = p5.Vector.dist(ray.source, p);
                if (newDist < minDist) {
                    minDist = newDist;
                    closest = p;
                }
            }
        }
        if (closest) {
            ray.show(closest);
        }

    }
}
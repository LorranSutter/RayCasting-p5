// Intersection given two points of each line
// https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection#Given_two_points_on_each_line
function intersection(ray, boundary) {
    const x1 = boundary.p1.x;
    const y1 = boundary.p1.y;
    const x2 = boundary.p2.x;
    const y2 = boundary.p2.y;

    const x3 = ray.source.x;
    const y3 = ray.source.y;
    const x4 = ray.source.x + ray.direction.x;
    const y4 = ray.source.y + ray.direction.y;

    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den == 0) {
        return;
    }

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
    if (t > 0 && t < 1 && u > 0) {
        const pt = createVector();
        pt.x = x1 + t * (x2 - x1);
        pt.y = y1 + t * (y2 - y1);
        return pt;
    } else {
        return;
    }
}

// TODO Check it this reflec function works
function reflect(ray, surfaceNormal) {
    ray.normalize();
    surfaceNormal.normalize();

    // if(ray.dot(surfaceNormal) > PI/2){
    //     surfaceNormal = surfaceNormal.mult(-1);
    //     console.log('here');
    // }

    return ray.sub(surfaceNormal.mult(2 * ray.dot(surfaceNormal)));
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
    push();
    stroke(myColor);
    strokeWeight(3);
    fill(myColor);
    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    let arrowSize = 7;
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
}
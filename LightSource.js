class LightSource {
    constructor(numRays) {
        this.source = createVector(0, 0);
        this.rays = Array(numRays);

        let theta = 0;
        for (let i = 0; i < numRays; i++) {
            const x = cos(radians(theta));
            const y = sin(radians(theta));
            this.rays[i] = new Ray(this.source, createVector(x, y));
            theta += (360 / numRays);
        }
    }

    setSource(x, y) {
        this.source = createVector(x, y);
    }

    addRay(ray) {
        this.rays.push(ray);
    }

    show(boundaries) {
        for (const ray of this.rays) {
            this.cast(this.source, ray, boundaries, null, 0);
        }
    }

    cast(source, ray, boundaries, currentBoundary, numReflects) {

        if (numReflects === 5) {
            return;
        }

        ray.setSource(source);

        let closestBoundary = null
        let closest = null;
        let minDist = Infinity;

        // Verify boundary / ray intersection
        // Only draw the closest intersection
        for (const boundary of boundaries) {

            if (boundary === currentBoundary) {
                continue;
            }

            let p = intersection(ray, boundary);
            if (p) {
                const newDist = p5.Vector.dist(ray.source, p);
                if (newDist < minDist) {
                    minDist = newDist;
                    closest = p;
                    closestBoundary = boundary;
                }
            }
        }
        if (closest) {
            ray.setEndpoint(closest);
            ray.show();
            // strokeWeight(10);
            // point(closest.x, closest.y);
            // strokeWeight(1);

            // push();
            // translate(closest.x, closest.y);
            // drawArrow(closest, closestBoundary.norm.copy().mult(0.3), 'blue');
            // pop();

            let newDirection = reflect(ray.direction.copy(), closestBoundary.norm.copy());
            // let cosA = newDirection.copy().normalize().dot(ray.direction.copy().normalize());
            // console.log(degrees(cosA).toFixed(4));
            // if(newDirection.copy().normalize().dot(ray.direction.copy().normalize()).toFixed(1)){
            //     console.log('here');
            // }
            // console.log('closest',closest);
            // console.log(newDirection);
            // stroke(255);
            // line(closest[0],closest[1],newDirection[0]*100,newDirection[1]*100);
            let newRay = new Ray(closest, newDirection, ray.alpha / 3);
            this.cast(closest, newRay, boundaries, closestBoundary, numReflects + 1);
        }
    }
}
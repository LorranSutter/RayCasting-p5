class LightSource {
    constructor(numRays) {
        this.source = createVector(0, 0);
        this.rays = Array(numRays);

        let theta= 0;
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

            ray.setSource(this.source);

            let closest = null;
            let minDist = Infinity;

            // Verify boundary / ray intersection
            // Only draw the closest intersection
            for (const boundary of boundaries) {
                let p = intersection(ray, boundary);
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
}
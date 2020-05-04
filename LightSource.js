class LightSource {
    constructor(numRays) {
        this.source = createVector(0, 0);
        this.rays = Array(numRays);

        for (let i = 0; i < numRays; i += 360 / numRays) {
            const x = cos(radians(i));
            const y = sin(radians(i));
            this.rays[i] = new Ray(this.source, createVector(x, y));
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
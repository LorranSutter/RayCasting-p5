class LightSource {
    constructor(numRays) {
        this.source = createVector(0, 0);
        this.rays = Array(numRays);
        this.reflect = true;
        this.maxReflects = 3;
        this.alphaLoss = 1 / 3;

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

    setMaxReflects(n) {
        this.maxReflects = n;
    }

    setAlphaLoss(alpha) {
        this.alphaLoss = alpha > 1 ? 1 : alpha;
    }

    toggleReflect() {
        this.reflect = !this.reflect;
    }

    show(boundaries) {
        for (const ray of this.rays) {
            this.cast(this.source, ray, boundaries, null, 0);
        }
        stroke(255);
        strokeWeight(5);
        point(this.source.x, this.source.y);
        strokeWeight(1);
    }

    cast(source, ray, boundaries, currentBoundary, numReflects) {

        if (numReflects === this.maxReflects || ray.alpha <= 10) {
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

            if (!this.reflect) {
                return;
            }

            // Cast recursively reflected rays
            let newDirection = reflect(ray.direction.copy(), closestBoundary.norm.copy());
            let newRay = new Ray(closest, newDirection, ray.alpha * this.alphaLoss);

            this.cast(closest, newRay, boundaries, closestBoundary, numReflects + 1);
        }
    }
}
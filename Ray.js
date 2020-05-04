class Ray {
    constructor(source, direction) {
        this.source = source;
        this.direction = direction.normalize();
    }

    setSource(source) {
        this.source = source;
    }

    show(endpoint) {
        // colorMode(HSB);
        // stroke((1 + frameCount * 2) % 360, 255, 255, 50);
        stroke(255, 0, 255, 75);
        // stroke(73, 40, 158, 100);
        line(this.source.x, this.source.y, endpoint.x, endpoint.y);
    }
}
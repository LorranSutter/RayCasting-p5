class Ray {
    constructor(source, direction, alpha = 255, endpoint = null) {
        this.source = source;
        this.direction = direction;
        this.alpha = alpha;
        this.endpoint = endpoint ?? direction;
    }

    setSource(source) {
        this.source = source;
    }

    setEndpoint(endpoint) {
        this.endpoint = endpoint;
    }

    show() {
        stroke(0, 0, 255, this.alpha);
        line(this.source.x, this.source.y, this.endpoint.x, this.endpoint.y);
    }

    show2() {
        stroke(255, 0, 255, 75);
        push();
        translate(this.source.x, this.source.y);
        line(0, 0, this.endpoint.x, this.endpoint.y);
        pop();
    }
}
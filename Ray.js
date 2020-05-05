class Ray {
    constructor(source, direction, alpha = 150, endpoint = null) {
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
        stroke(255, 0, 255, this.alpha);
        line(this.source.x, this.source.y, this.endpoint.x, this.endpoint.y);
    }
}
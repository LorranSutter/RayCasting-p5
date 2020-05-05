class Boundary {
    constructor(x1, y1, x2, y2) {
        this.p1 = createVector(x1, y1);
        this.p2 = createVector(x2, y2);
        this.norm = p5.Vector.sub(this.p2,this.p1).rotate(PI/2);
    }

    show() {
        stroke(255);
        line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
    }
}
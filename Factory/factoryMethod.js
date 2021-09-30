class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class PointFactory {
    static newCartesianPoint(x, y) {
        return new Point(x, y);
    }

    static newPolarPoint(rho, theta) {
        return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
    }
}

let p1 = PointFactory.newPolarPoint(5, Math.PI / 2);
console.log(p1);

let p2 = PointFactory.newCartesianPoint(2, 3);
console.log(p2);

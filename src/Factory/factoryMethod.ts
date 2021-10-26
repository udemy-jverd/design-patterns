class Point {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class PointFactory {
  static newCartesianPoint(x: number, y: number): Point {
    return new Point(x, y);
  }

  static newPolarPoint(rho: number, theta: number): Point {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

export default PointFactory;

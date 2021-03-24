class Polygon {
  constructor(integersArray) {
    this.sides = integersArray;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce(function(acc, side) {
      return acc + side;
    })
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) return false;
    let a = this.sides[0] + this.sides[1] > this.sides[2];
    let b = this.sides[0] + this.sides[2] > this.sides[1];
    let c = this.sides[1] + this.sides[2] > this.sides[0];
    return a && b && c ? true : false;
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides !== 4) return false;
    return this.sides.every(side => side === this.sides[0]);
  }

  get area() {
    return this.sides[0] ** 2;
  }
}
// Your code here
// After trying for 30 minutes... using "Solution" to understand...
// class Polygon {
//   constructor(arrayOfIngers) {
//     this.arrayOfIngers = arrayOfIngers;
//   }

//   get countSides() {
//     // counts the number of sides (each index in the array)
//     return this.arrayOfIngers.length;
//   }

//   get perimeter() {
//     // calculates the sum of each side (each index in the array)
//     let sum = 0;
//     for (var int of this.sides) {
//       sum = sum + int;
//     }
//     return sum;
//   }

// }

// class Triangle extends Polygon {

//   get isValid() {
//     // getter method isValid that checks if the given 3 sides for a triangle is valid.
//     if (this.countSides === 3) {
//       return "A Valid Triangle";
//     } else {
//       return "Not a valid Triangle";
//     }
//   }

// }

// class Square extends Polygon {
//   get isValid() {

//   }
// }


// Using Solution.... will return for more indepth...
class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    if (!Array.isArray(this.sides)) return;
    let sum = 0;
    for (var int of this.sides) {
      sum += int
    }
    return sum
  }
}

class Triangle extends Polygon {

  get isValid() {
    if (!Array.isArray(this.sides)) return;
    if (this.count !== 3) return;
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}

class Square extends Polygon {

  get isValid() {
    if (!Array.isArray(this.sides)) return;
    if (this.count !== 4) return;
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    let side4 = this.sides[3]
    return ((side1 === side2) && (side1 === side3) && (side1 === side4))
  }

  get area() {
    if (!Array.isArray(this.sides)) return;
    if (this.count !== 4) return;
    return this.sides[0] * this.sides[0]
  }
}
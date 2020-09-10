function funColection() {

  class Figure { //abstarct

    constructor() {
      if (new.target === Figure) {
        //  if ( this.constructor.name  === 'Figure') {
        throw TypeError('Error')
      }

    }

  }

  class Circle extends Figure {
    constructor(radius) {
      super()
      this.radius = radius;
    }

    get area() {

      return Math.PI * this.radius * this.radius
    }

    toString() {
      return this.constructor.name + ` - radius: ${this.radius}`;
    }
  }

  class Rectangle extends Figure {

    constructor(width, height) {
      super()
      this.width = +width;
      this.height = +height;
    }

    get area() {

      return this.width * this.height;
    }

    toString() {
      return this.constructor.name + ` - width: ${this.width}, height: ${this.height}`;

    }
  }

  return {
    Figure,
    Circle,
    Rectangle
  }

}
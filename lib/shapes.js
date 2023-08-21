class Shape {
  constructor() {
    // Here we are instantiating a new variable in this class called shapeColor
    this.shapeColor = "";
    this.textColor = "";
    this.text = "";
  }

  // base variables and methods (setShapeCOlor, setTextColor, setLogo)
  setShapeColor(param) {
    this.shapeColor = param;
  }

  setTextColor(param) {
    this.textColor = param;
  }

  setText(param) {
    this.text = param;
  }
}

class Circle extends Shape {
  constructor() {
    super();
  }
  returnSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="150" r="50" fill="${this.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`;
  }
}

class Triangle extends Shape {
  constructor() {
    super();
  }
  returnSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
 
     <polygon points="150,100 100,200 200,200" fill="${this.shapeColor}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
   </svg>`;
  }
}

class Square extends Shape {
  constructor() {
    super();
  }
  returnSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="100" y="100" width="100" height="100" fill="${this.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`;
  }
}

module.exports = Shape;
module.exports = Square;
module.exports = Circle;
module.exports = Triangle;

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

    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`;
  }
}

class Triangle extends Shape {
  returnSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
 
     <polypoints cx="150" cy="100" r="80" fill="${this.shapeColor}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
   
   </svg>`;
  }
}

class Rectangle extends Shape {
  constructor() {
    super();
  }
  returnSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect cx="150" cy="100" r="80" fill="${this.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`;
  }
}

module.exports = { Shape };

const Shape = require("./shapes.js");
const Triangle = require("./shapes.js");

describe("Shape", () => {
  describe("Shape.setTextColor()", () => {
    it("should update the shape's text color to whatever the user inputted", () => {
      const shape = new Shape();
      shape.setTextColor("blue");
      expect(shape.textColor).toBe("blue");
    });
  });
});
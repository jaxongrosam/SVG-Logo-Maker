const Shape = require("./shapes.js");

// describe("createLogo", () => {
//   it("should create and svg file", () => {
//     createLogo();
//     expect(fs.writeFileSync).toBe("logo.svg", expect.any(String));
//   });
// });

describe("Shape", () => {
  describe("Shape.setTextColor()", () => {
    it("should update the shape's text color to whatever the user inputted", () => {
      const shape = new Shape();
      shape.setTextColor("blue");
      expect(shape.textColor).toBe("blue");
    });
  });
});

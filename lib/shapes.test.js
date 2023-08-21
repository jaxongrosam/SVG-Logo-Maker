const createLogo = require("./shapes.js");

describe("createLogo", () => {
  it("should create and svg file", () => {
    createLogo();
    expect(fs.writeFileSync).toBe("logo.svg", expect.any(String));
  });
});

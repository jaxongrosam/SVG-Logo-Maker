const {Circle, Square, Triangle} = require("./lib/shapes.js");
const fs = require("fs");
const inquirer = require("inquirer");

async function createLogo() {
  const questions = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for your logo",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color (or hexadecimal) for your logo",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape would you like to use for your logo?",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color (or hexadecimal) for your logo",
    },
  ]);
  // from the results of the inquirer prompts, you want to create an instance of one of your classes depending on they
  var shape;
  if (questions.shape === "circle") {
    shape = new Circle();
  } else if (questions.shape === "square") {
    shape = new Square();
  } else if (questions.shape === "triangle") {
    shape = new Triangle();
  }
  shape.setTextColor(questions.textColor);
  shape.setShapeColor(questions.shapeColor);
  shape.setText(questions.text);

  fs.writeFileSync("logo.svg", shape.returnSVG());
  console.log("Generated logo.svg");
}

createLogo();

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
}

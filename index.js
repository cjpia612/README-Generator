const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const util = ("util");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "Username",
        message: "Enter your GitHub username"
    },
    {
        type: "input",
        name: "Title",
        message: "Enter desired title for project"
    },
    {
        type: "input",
        name: "Description",
        message: "Enter a short description of project"
    },
    {
        type: "input",
        name: "Installation ",
        message: "Enter desired title for project"
    },
    {
        type: "input",
        name: "Usage",
        message: "Provide user instructions"
    },
    {
        type: "input",
        name: "Contributing",
        message: "Enter names of project collaborators"
    },
    {
        type: "input",
        name: "Tests",
        message: "Include any requirements to run tests"
    },



];

// function to write README file
function writeToFile(fileName, data) {
    const generate  = generateMarkdown.generateMarkdown(data);

    writeFileAsync(fileName, generate);
}

// function to initialize program
function init() {
    inquirer.prompt(questions);
}

// function call to initialize program
init();

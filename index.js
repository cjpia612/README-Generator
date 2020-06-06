const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");

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
        name: "title",
        message: "Enter desired title for project"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a short description of project"
    },
    {
        type: "input",
        name: "installation ",
        message: "Enter installation steps"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide user instructions"
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter names of project collaborators"
    },
    {
        type: "input",
        name: "tests",
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
    inquirer.prompt(questions)
    .then( data => {
        return writeToFile("README.md", data)
    })
}

// function call to initialize program
init();

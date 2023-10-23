const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/generateSVG.js')

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Logo text?',
        name: 'logoText'
    },
    {
        type: 'input',
        message: 'Text color? ',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Logo shape?',
        name: 'logoShape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        message: 'shape\'s color?',
        name: 'shapeColor'
    },
];

// Function to write SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Generated logo.svg');
    });
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => writeToFile('./examples/logo.svg', generateSVG(data)))
        .catch(error => console.log(error))
}

// Function call to initialize app
init();
const inquirer = require('inquirer');
const { isValidColorName, isValidRGB, isValidHSL } = require('is-valid-css-color');
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
        .then(data => {
            // Validate user inputs using 'is-valid-css-color' package
            if (!data.logoText || data.logoText.length > 3) {
                console.log('Logo text must between 1 to 3 characters!')
            }
            else if (!isValidColorName(data.textColor) && !isValidRGB(data.textColor) && !isValidHSL(data.textColor)) {
                console.log('invalid text color!')
            }
            else if (!isValidColorName(data.shapeColor) && !isValidRGB(data.shapeColor) && !isValidHSL(data.shapeColor)) {
                console.log('invalid shape color!')
            }
            else {
                writeToFile('./examples/logo.svg', generateSVG(data))
            }
        })
        .catch(error => console.log(error))
}

// Function call to initialize app
init();
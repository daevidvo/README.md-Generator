// TODO: Include packages needed for this application
const fs = require('fs')
const inq = require('inquirer')
const genMD = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// require str input of title, description, install instructions, usage information, contribution guidelines, test instructions, github username, email, and choose license that the user would like to use. 
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'What are the installation instructions of your project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What are the usage information of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines of your project?',
        name: 'contrib',
    },
    {
        type: 'input',
        message: 'What are the test instructions of your project?',
        name: 'test_instruc',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github_name',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'checkbox',
        message: 'What is the title of your project?',
        choices: ['Apache 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD-3 Clause New or Revised License', 'Unlicensed'],
        name: 'title',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then
}

// Function call to initialize app
init();

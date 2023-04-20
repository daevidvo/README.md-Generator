// TODO: Include packages needed for this application
const fs = require('fs') //file system from node
const inq = require('inquirer') //inquirer module
const generateMarkdown = require('./utils/generateMarkdown'); 

// TODO: Create an array of questions for user input
// require str input of title, description, install instructions, usage information, contribution guidelines, test instructions, github username, email, and choose license that the user would like to use. 
const questions = [ //questions that will be asked to the user
    {
        type: 'input', //type input means that the user will input a string
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
        name: 'usage',
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
        message: 'What is your LinkedIn username?',
        name: 'linkedin_name',
    },
    {
        type: 'input',
        message: 'What is your Instagram username?',
        name: 'ig_name',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'checkbox', //this is a checkbox input instead of string input. user will be prompted with the choices and they select which one they'd like
        message: 'What license would you like to use? (select only one)',
        choices: ['Apache 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD-3 Clause New or Revised License', 'Unlicensed'],
        name: 'license',
    },

];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.appendFile('generated_readme.md', data, (err)=>{err?console.error(err):console.log('generated_readme.md created')})
}

// TODO: Create a function to initialize app
function init() { //function that prompts the user then will use that response in the generateMarkdown function and the writeToFile function will use the output of the generateMarkDown function to create the generated_readme.md file
    inq.prompt(questions).then((r)=>{
        writeToFile(generateMarkdown(r))
    })
}
function test() {
    return '`testing`'
}
// Function call to initialize app
test();
init();

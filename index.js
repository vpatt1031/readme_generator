const inquirer = require('inquirer');
const generateMd = require('./utils/generateMarkdown');
const fs = require('fs');

inquirer
.prompt([
    {
        type: 'input',
        message: `What is your project title?`,
        name: 'title',
    },
    {
        type: "input",
        name: 'description',
        message: `What is a short description of your project? `
    },
    {
        type: "list",
        message: `Which License are you utilizing? `,
        name: "license",
        choices: ["MIT", "Apache", "Eclipse", "Mozilla", "No license provided"]
    },
    {
        type: 'input',
        message: 'Enter the installation information for this project',
        name: 'installation',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information for this project',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributing information for this project',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests were utilized on this project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your email address"
    }

]).then(res => {
    // console.log(generateMd(res))
    fs.writeFile("README.md", generateMd(res), err => {
        if(err) throw err;
    })
})
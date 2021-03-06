// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        
        {
            name: 'license',
            message: 'Select kind of license for this application:',
            type: 'list',
            choices: ["Academic Free License v3.0", "Apache license 2.0","MIT","Open Software License 3.0"]
        },
        {
            name: 'title',
            message: 'What is the title of this application?',
            type: 'input'
        },
        {
            name: 'description',
            message: 'What does this application do?',
            type: 'input'
        },
        {
            name: 'install',
            message: 'How do I install this application?',
            type: 'input'
        },
        {
            name: 'usage',
            message: 'How do I use this application?',
            type: 'input'
        },
        {
            name: 'contributing',
            message: 'How do I contribute to this application?',
            type: 'input'
        },
        {
            name: 'testing',
            message: 'How do I test this application?',
            type: 'input'
        },
        {
            name: 'username',
            message: 'What is your Github username?',
            type: 'input'
        },
        {
            name: 'email',
            message: 'What is your e-mail?',
            type: 'input'
        },
        
    ])
}

// function to write README file

function writeToFile(fileName, data) {
    questions()
    .then((answers)=>fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then (() => console.log('success'))
    .catch((err) => console.error(err));

    // fs.writeFile(fileName, data, (err) =>
    // err ? console.error(err) : console.log('success')
    // );
}

//function to initialize app
function init() {
    writeToFile();
    

}

// Function call to initialize app
init();

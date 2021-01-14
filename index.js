// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [

    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ]
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile("README.md", generateReadMe())
    })
};

// Function call to initialize app
init();

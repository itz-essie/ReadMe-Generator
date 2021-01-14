// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util") //library
const asyncWrite = util.promisify(fs.writeFile) //method like document.ready

// TODO: Create an array of questions for user input
const questions = (answers) =>
`<h1> Hi! My name is ${answers.name} </h1>`

inquirer
.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Enter a brief description of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter your installation process.',
      name: 'install',
    },
    {
        type: 'input',
        message: 'Please describe the usage of this project.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Enter your installation process.',
        name: 'install',
      },
    ]).then((answers) => {
        const filename = `${answers.name}.md`;
        return asyncWrite(filename, questions (answers) )}
    ) .then (()=>{ console.log("Success!")}).catch ((err)=>{console.log(err)}) ;
    // err ? console.log(err) : console.log("Success!")
  

// TODO: Create a function to write README file
// function writeFile(fileName, data) {
//     fs.writeFile(fileName, data);
// }

// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then((response) => {
//         console.log (response)
//         writeFile("README.md", generateReadMe())
//     })
// };

// Function call to initialize app
// init();

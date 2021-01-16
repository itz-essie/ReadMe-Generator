// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util"); //library
const asyncWrite = util.promisify(fs.writeFile); //method like document.ready

// TODO: Create an array of questions for user input
const questions = (answers) => `# ${answers.title}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

### Installation

\`\`\`
${answers.install}
\`\`\`

### Usage

${answers.usage}

### License

This project is licensed under an ${answers.license} license.

## Contributing

${answers.contributions}

## Tests

To run test, run the following commands:

\`\`\`
${answers.tests}
\`\`\`

## Questions

- If you have any questions regarding this repository, contact me either by email at **${answers.email}**, or you can find more of my work within my github account attached below: 
**[${answers.gitHub}](https://github.com/${answers.gitHub})**.`

function init(){
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "gitHub",
    },
    {
      type: "input",
      message: "what is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a brief description of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "Enter your installation process.",
      name: "install",
    },
    {
      type: "input",
      message: "Please describe the usage of this project.",
      name: "usage",
    },
    {
      type: "list",
      message: "What type of license should your project have?",
      name: "license",
      choices: ['GPLv3', 'MIT' + '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 'Apache 2.0', 'BSD']
    },
    {
      type: "input",
      message: "Please describe any contributions. If not applicable please enter, N/A.",
      name: "contributions",
    },
    {
      type: "input",
      message: "In order to run test, what command line shouls be run?",
      name: "tests",
    },
  ])
  .then((answers) => {
    const nameOfFile = `${answers.title}.md`;
    return asyncWrite(nameOfFile, questions(answers));
  })
  .then(() => {
    console.log("Success!");
  })
  .catch((err) => {
    console.log(err);
  });
// err ? console.log(err) : console.log("Success!")

// TODO: Create a function to write README file
function writeFile(fileName, data) {
  fs.writeFile(fileName, data);
}
}
init();




// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then((response) => {
//         console.log (response)
//         writeFile("README.md", generateReadMe())
//     })
// };

// Function call to initialize app
// init();

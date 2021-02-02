// TODO: Create a function that returns a license badge based on which license is passed in
// TODO: Create a function that returns the license section of README
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let value;

  if(license == "Eclipse"){
    value = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }else if(license == `MIT`){
    value = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }else if(license == `Apache`){
    value = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }else if(license == `Mozilla`){
    value = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }else if(license == "No license provided"){
    value = ``
  }

  return value
}



// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license)
  return `# ${data.title}

## Description

${data.description}

## License

${licenseBadge}

## Table of Contents


* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${data.installation}

## Usage

${data.usage}

## Contributions

${data.contributing}

## Tests

${data.tests}

## Questions
Questions can be sent by clicking on the email below.

GitHub Account: github.com/${data.github}

Email: ${data.email}
`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let value;

  if(license == "Eclipse"){
    value = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  } else{
    value = 'No license provided.'
  }
  if(license == "MIT"){
    value = "[![License]"
  }else{
    value = 'No license provided.'
  }

  return value
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
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
//need to figure out how to link the table of contents to each section

## Installation

${data.installation}

## Usage

${data.usage}

## Contributions

${data.contributing}

## Tests

${data.tests}

## Questions

<${data.github}>

<${data.email}>
`;
}

module.exports = generateMarkdown;

// function to generate markdown for README
function generateMarkdown(data) {
  return `${data.title}
  ${data.getLicenseBadge}
## Description
${data.description}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#test)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Test
${data.test}

## License
${data.license}

## Questions 
Please send your questions to [here](mailto:${data.emailAddress}) or  visit (https://github.com/${data.userName})
`;
}

module.exports = generateMarkdown;

// function to generate markdown for README
function generateMarkdown(data) {
  return `${data.title}
  ${data.getLicenseBadge}
## Description
${data.description}

## Deployed Application Link
${data.link}

## Screenshots
![alt-text](${data.screenshot})

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

`;
}

module.exports = generateMarkdown;

// function to generate markdown for README
function generateMarkdown(data) {
  return `#ProjectTitle
  ${data.title}
  #Description
  ${data.description}
  #Application Deployed Link
  ${data.link}
  #Screenshots
  ![alt-text](${data.screenshot})
  #Table of Contents
  #Installation
  ${data.installation}
  #Usage
  ${data.usage}
  #contributing
  ${data.contributing}
  #test
  ${data.test}


`;
}

module.exports = generateMarkdown;

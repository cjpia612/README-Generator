// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

  ## Installation

  ${data.installlation}

  ## Usage

  ${data.usage}

  ## Contributing 

  ${data.contirbuting}

  ## Tests

  ${data.tests}

`;
}

module.exports = {
  generateMarkdown: generateMarkdown
} 

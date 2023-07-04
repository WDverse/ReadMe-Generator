// Returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let licenseType = license.license;
  let yourLicesnse = '';
  if (licenseType === 'MIT') {
    yourLicesnse = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (licenseType === 'APACHE 2.0') {
    yourLicesnse = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (licenseType === 'GPL 3.0') {
    yourLicesnse = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (licenseType === 'BSD 3') {
    yourLicesnse = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  return yourLicesnse;
}


// Generates markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data);
  return `# ${data.title}

  ${licenseBadge}

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
  
  To install neccessary dependencies, run the following command:
  
  \`\`\`
  ${data.dependencies}
  \`\`\`

  ## Usage 

  ${data.repo}
  
  ## License

  This project is licensed under the ${data.license} license.

  ## Contributing

  ${data.contributing}


  ## Tests

  To run tests, run the following command:

  \`\`\`
  ${data.tests}
  \`\`\`
  
  ## Questions

  For further questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.github}


`;
}

module.exports = generateMarkdown;

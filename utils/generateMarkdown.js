// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
    switch (license) {
      case 'Apache 2.0':
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      case 'GNU General Public License v3.0':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      case 'MIT License':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      case 'BSD 2-Clause Simplified License':
        return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
      case 'BSD-3 Clause New or Revised License':
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      case 'Unlicensed':
        return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    }
  } else{
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){
    switch (license){
      case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0'
      case 'GNU General Public License v3.0':
        return 'https://www.gnu.org/licenses/gpl-3.0'
      case 'MIT License':
        return 'https://opensource.org/licenses/MIT'
      case 'BSD 2-Clause Simplified License':
        return 'https://opensource.org/licenses/BSD-2-Clause'
      case 'BSD-3 Clause New or Revised License':
        return 'https://opensource.org/licenses/BSD-3-Clause'
      case 'Unlicensed':
        return 'https://unlicense.org/'
    }
  } else{
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    switch (license){
      case 'Apache 2.0':
        return ''
      case 'GNU General Public License v3.0':
        return 'https://www.gnu.org/licenses/gpl-3.0'
      case 'MIT License':
        return 'https://opensource.org/licenses/MIT'
      case 'BSD 2-Clause Simplified License':
        return 'https://opensource.org/licenses/BSD-2-Clause'
      case 'BSD-3 Clause New or Revised License':
        return 'https://opensource.org/licenses/BSD-3-Clause'
      case 'Unlicensed':
        return 'https://unlicense.org/'
    }
  } else{
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of the project:'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you be using?',
        choices: ['Apache License 2.0 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            'GNU General Public License v3.0 [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            'MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            'BSD 2-Clause "Simplified" License [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
            'BSD 3-Clause "New" or "Revised" License [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
            'Boost Software License 1.0 [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
            'Creative Commons Zero v1.0 Universal [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
            'Eclipse Public License 2.0 [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
            'GNU Affero General Public License v3.0 [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
            'GNU General Public License v2.0 [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
            'GNU Lesser Public License v2.1 [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
            'Mozilla Public License 2.0 [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
            'The Unlicense [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to the project?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },



];



const fileName = "README.md"
function writeToFile(fileName, data) {


    fs.writeFileSync(fileName, data), (err) =>
        err ? console.log(err) : console.log('Success!')




};

const generateMarkDown = ({ title, description, installation, license, contribution, username, email }) =>
    `
## ${title}

# Description
${description}

# Table of Contents

[Description](#description)

[Installation](#installation)

[License](#license) 

[Contribution](#contribution)

[Questions](#questions)


# Installation
${installation} 

# License
${license} 

# Contribution
${contribution} 

# Questions
Reach me at my Github: https://github.com/${username}

Reach me at my email: ${email}

`
const promptUser = () => {
    return inquirer.prompt(questions)
}




function init() {
    promptUser()
        .then((answers) => writeToFile("README.md", generateMarkDown(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));

};

init();


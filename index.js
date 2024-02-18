// packages needed for the application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown");

// function to validate inputs
function validateInput(value) {
    if (value != "") {
        return true;
    } else {
        return "Please answer the question with some kind on input.";
    }
}

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project",
        validate: validateInput
    },
    {
        type: "input",
        name: "description",
        message: "Please enter any description of your project",
        validate: validateInput

    },

    {
        type: "input",
        name: "installation",
        message: "Please enter the steps of installation of your project",
        validate: validateInput

    },
    {
        type: "input",
        name: "usage",
        message: "Please enter instructions and examples for use for your project",
        validate: validateInput
    },
    {
        type: "input",
        name: "contributing",
        message: "Please list any contributors for the project(List GitHub usernames)",
    },
    {
        type: "input",
        name: "test",
        message: "Provide walkthrough of required tests if applicable."
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
    },
    {
        type: "input",
        name: "userName",
        message: "Please enter your github-username",
        validate: validateInput

    },
    {
        type: "input",
        name: "emailAddress",
        message: "Please enter your email-address ",
        validate: function (value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true;
            } else {
                return "Not a valid email address. Please enter a valid email address.";
            }
        }
    }
];
// function to get the appropriate license badge 
function getLicenseBadge(values) {
    const badges = values.map(value => {
        switch (value) {
            case "GNU AGPLv3":
                return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
            case "GNU GPLv3":
                return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            case "GNU LGPLv3":
                return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
            case "Apache 2.0":
                return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            case "Boost Software 1.0":
                return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
            case "MIT":
                return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            default:
                return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        }
    });

    return badges.join(" ");
}


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.getLicenseBadge = getLicenseBadge(data.license);
        writeToFile("example_README.md", data);
    });
}

// function call to initialize program
init();
// packages needed for the application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type:"input",
        name:"title",
        message:"Please enter the title of your project"
    },
    {
        type:"input",
        name:"description",
        message:"Please enter any description of your project"

    },
    {
        type:"input",
        name:"screenshot",
        message:"Please provide the relative paths of images you want to use as screenshots",

    },
    {
        type:"input",
        name:"link",
        message:"Please provide the link of your deployed application",

    },
    {
        type:"input",
        name:"installation",
        message:"Please enter the steps of installation of your project"

    },
    {
        type:"input",
        name:"usage",
        message:"Please enter instructions and examples for use for your project"
    },
    {
        type:"input",
        name:"contributing",
        message:"Please list any contributors for the project(List GitHub usernames)"
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
    }


];

function getLicenseBadge(value) {
    if (value === "GNU AGPLv3") {
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (value === "GNU GPLv3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (value === "GNU LGPLv3") {
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    } else if (value === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (value === "Boost Software 1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (value === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
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
        console.log(JSON.stringify(data,null," "));
        data.getLicenseBadge = getLicenseBadge(data.license);
        writeToFile("example_README.md",data);
    });
}

// function call to initialize program
init();
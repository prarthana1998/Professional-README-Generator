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
        choices:["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"]
    }


];

// function to write README file
function writeToFile(fileName, data) {
   
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
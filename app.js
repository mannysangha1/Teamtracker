const Manager = require ("./lib/Manager");
const Engineer = require ("./lib/engineer");
const Intern = require ("./lib/intern");
const inquirer = require ("inquirer");
const path = require ("path");
const fs = require ("fs");

const HTMLrenderDone_DIR = path.resolve(__dirname, "htmlrenderdone");
const htmlrenderdonePath = path.join(HTMLrenderDone_DIR, "generatedemployees.html");

const render = require("./lib/htmlRenderer");

const employeeArr = []

function init() {
    managerQuestions();
}

init();

function managerQuestions(){
    inquirer.prompt([
        {
            
        }
    ])
}
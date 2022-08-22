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
            type: "input",
            name: "name",
            message: "What is your name?"

        },
        {
            type: "input",
            name: "id",
            message: "What is your id?"
        },
        {
            type: "input",
            input: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?"
        }
    ]).then(function(result){
        const newManager = new Manager(result.name, result.id, result.email, result.officeNumber);
        console.log(newManager);
        employeeArr.push(newManager);
        addEmployee();
    })
}
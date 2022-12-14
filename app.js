const Manager = require ("./lib/Manager");
const Engineer = require ("./lib/engineer");
const Intern = require ("./lib/intern");
const inquirer = require ("inquirer");
const path = require ("path");
const fs = require ("fs");

const HTML_DIR = path.resolve(__dirname, "html");
const htmlPath = path.join(HTML_DIR, "generatedemployees.html");

const render = require("./lib/htmlRenderer.js");

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
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?"
        }
    ]).then(function(result){
        const newManager = new Manager(result.name,result.id,result.email,result.officeNumber);
        console.log(newManager);
        employeeArr.push(newManager);
        addEmployee();
    })
}

function addEmployee(){
    inquirer.prompt({
        type: "list",
        name: "employeeType",
        message: "What type of employee would you like to add?",
        choices: ["Engineer", "Intern", "Done adding employees"]
    }).then(function(result){
        if(result.employeeType === "Engineer"){
            engineerQuestions();
        } else if (result.employeeType==="Intern"){
            internQuestions();
        } else if (result.employeeType==="Done adding employees"){
            generateHTML();
        }
    })     
}

function engineerQuestions(){
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
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your github?"
        }
    ]).then(function(result){
        const newEngineer = new Engineer(result.name,result.id,result.email,result.github);
        console.log(newEngineer);
        employeeArr.push(newEngineer);
        addEmployee();
    })
}

function internQuestions(){
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
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your school name?"
        }
    ]).then(function(result){
        const newIntern = new Intern(result.name,result.id,result.email,result.school);
        console.log(newIntern);
        employeeArr.push(newIntern);
        addEmployee();
    })

}

function generateHTML(){
    const htmlString = render(employeeArr);
    fs.writeFile(htmlPath, htmlString, (err, data) => {
        if(err){
            throw err;
        }
    })
};
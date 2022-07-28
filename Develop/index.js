//linking npm requirements and classes
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./Lib/Lib/engineer');
const Manager = require('./Lib/Lib/manager');
const Intern = require('./Lib/Lib/intern');
var teamArray = []

//starting prompts
function start() {
    console.table(teamArray)
  inquirer.prompt([
    {
      type: 'list',
      message: "Would you like to add a team member?",
      name: 'newMember',
      choices: [ "Add Manager", "Add Engineer", "Add Intern", "Finish"]
    }
    ]).then(response =>{
    console.log(response.newMember)
  
 //prompt choices
    if (response.newMember === "Add Manager"){
      return addManager()
    } else if (response.newMember === "Add Engineer"){
      return addEngineer()
    } else if (response.newMember === "Add Intern") {
      return addIntern()
    } else {
      return finish()
    } 
  })};

//function per each position
//for Engineers
function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the first & last name of the Engineer',
                name: 'engineerName', 
              },
              {
                type: 'input',
                message: 'Please enter the Engineers ID',
                name: 'engineerID',  
              },
              {
                type: 'input',
                message: 'Please enter the Engineers email address',
                name: 'engineerEmail',    
              },  
              {
                type: 'input',
                message: 'Please enter the engineers gitHub username',
                name: 'engineerGithub',   
              },
            
        ]).then((data) => {
            const engineer = new Engineer (
                data.engineerName,
                data.engineerID,
                data.engineerEmail,
                data.engineerGithub
            );
            teamArray.push(engineer);
            return start();
        });
}

//for Interns
function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the first & last name of the Intern',
                name: 'internName', 
              },
              {
                type: 'input',
                message: 'Please enter the Interns ID',
                name: 'internID',  
              },
              {
                type: 'input',
                message: 'Please enter the Interns email address',
                name: 'internEmail',    
              },  
              {
                type: 'input',
                message: 'What school does the Intern attend?',
                name: 'internSchool',   
              },
              
        ]).then((data) => {
            const intern = new Intern(
                data.internName,
                data.internID,
                data.internEmail,
                data.internSchool
            );
            teamArray.push(intern);
            return start();
        });
    } 
 
//for Managers
function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the first & last name of the team Manager',
                name: 'managerName', 
              },
              {
                type: 'input',
                message: 'Please enter the team Managers ID',
                name: 'managerID',  
              },
              {
                type: 'input',
                message: 'Please enter the team Managers email address',
                name: 'managerEmail',    
              },  
              {
                type: 'input',
                message: 'What is the team Managers office number?',
                name: 'managerPhone',   
              },
              
        ]).then((data) => {
            const manager = new Manager (
                data.managerName,
                data.managerID,
                data.managerEmail,
                data.managerPhone
            );
            teamArray.push(manager);
            return start();
        });
    } 
    start();

// function to create the HTML for team profile
function generateHTML(cards) {
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <link href="./style.css" rel="stylesheet">
        </head>
        <body>
        <div class="title-info">
        <title id="title">Team Profile</title>
        <p id="description"> Explore our team members & contact them with the information on each card!</p>
        </div>
            ${cards} 
        </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
        </html>`
    }   

//for loop for card generation
function finish() {
    let cards = ""
    for (let i = 0; i < (teamArray.length); i++) {
        console.log(teamArray[i].renderSpecificHTML());
        cards += teamArray[i].renderSpecificHTML();
    }
    fs.writeFile("index.html", generateHTML(cards), err => {
        if (err) throw err });
};

module.exports = addEngineer;
module.exports = addIntern;
module.exports = addManager;
module.exports = generateHTML;
module.exports = finish;
















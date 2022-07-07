//linking npm requirements and classes
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./Utils/Lib/engineer');
const Manager = require('./Utils/Lib/manager');
const Intern = require('./Utils/Lib/intern');
const Team = require('./Utils/Lib/team');

const team = new Team();

//function for adding team members 
function createMember(option) {
    if (option === 'addEngineer') {
        addEngineer();
    }
    if (option === 'addIntern') {
        addIntern();
    }
    if (option === 'addManager') {
        addManager();
    }    
    if (option === 'finish') {
        team.saveFile();
    }
}

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
              {
                type: 'list',
                name: 'addMore',
                choices: [
                    {
                        value: 'addEngineer',
                        name: 'Add Engineer',
                    },
                    {
                        value: 'addIntern',
                        name: 'Add Intern',
                    },
                    {
                        value: 'finish',
                        name: 'Finish',
                    },
                ]
              },
        ]).then((data) => {
            const engineer = new Engineer (
                data.engineerName,
                data.engineerID,
                data.engineerEmail,
                data.engineerGithub
            );
            team.addMember(engineer);
            createMember(data.addMore);
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
              {
                type: 'list',
                name: 'addMore',
                choices: [
                    {
                        value: 'addEngineer',
                        name: 'Add Engineer',
                    },
                    {
                        value: 'addIntern',
                        name: 'Add Intern',
                    },
                    {
                        value: 'finish',
                        name: 'Finish',
                    },
                ]
              },
        ]).then((data) => {
            const intern = new Intern(
                data.internName,
                data.internID,
                data.internEmail,
                data.internSchool
            );
            team.addMember(intern);
            createMember(data.addMore);
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
                message: 'What is the team Mnangers office number?',
                name: 'managerPhone',   
              },
              {
                type: 'list',
                name: 'addMore',
                choices: [
                    {
                        value: 'addEngineer',
                        name: 'Add Engineer',
                    },
                    {
                        value: 'addIntern',
                        name: 'Add Intern',
                    },
                    {
                        value: 'finish',
                        name: 'Finish',
                    },
                ]
              },
        ]).then((data) => {
            const manager = new Manager (
                data.managerName,
                data.managerID,
                data.managerEmail,
                data.managerPhone
            );
            team.addMember(manager);
            createMember(data.addMore);
        });
    } 

// function to create the HTML team profile
function generateHTML() {
    const allTeam = JSON.stringify(team);
    fs.writeFile('team.txt', allTeam, 'utf-8', (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Team Profile Created!');
        }
    });
  }

generateHTML()

// function init() {
//     inquirer.prompt().then(userInput => {
//         const merging = path.join(generateHTML, 'team.txt')
//         fs.writeFile(merging, generateHTML(userInput))
//         console.log('Created!')
//     })
// }

// init()








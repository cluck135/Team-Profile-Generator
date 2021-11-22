const fs = require('fs');
const inquire = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const questions = require('./src/Questions');
const makeWebsite = require('./src/WriteFile');
const teamList = [];
let teamName = '';

function assemble() {
    inquire
    .prompt(questions.manager).then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        teamList.push(manager);
        teamName = data.team;
        newTeamMember();
    });
}

let newTeamMember = () => {
    inquire.prompt([
        {
            type: 'list',
            message: 'Who do you want to add next? select finish if done',
            choices: ['Engineer', 'Intern', 'Finish'],
            name: 'title'
        }
    ]).then((data) => {
        if (data.title == 'Engineer') {
            inquire.prompt(questions.engineer).then((data) => {
                let engineer = new Engineer(data.name, data.id, data.email, data.github);
                teamList.push(engineer);
                newTeamMember();
    })} else if (data.title == 'Intern') {
            inquire.prompt(questions.intern).then((data) => {
                let intern = new Intern(data.name, data.id, data.email, data.school);
                teamList.push(intern)
                newTeamMember();
    })} else {
        console.log("Team assembled!");
        makeWebsite(teamList, teamName);
    }
    });

} 



assemble();





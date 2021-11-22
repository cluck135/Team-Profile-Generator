const inquirer = require('inquirer');

const questions = {
    manager: [{
        type: 'Input',
        message: 'What is the team name?',
        name: 'team'
    },
    {
        type: 'input',
        message: 'What is the the Manager\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the the Manager\'s ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the the Manager\'s email?',
        name: 'email',
        validate: email => {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
    {
        type: 'input',
        message: 'What is the  Manager\'s office number?',
        name: 'officeNumber'
    }],
    engineer: [{
        type: 'input',
        message: 'What is the Engineer\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s email?',
        name: 'email',
        validate: email => {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }         },
    {
        type: 'input',
        message: 'what is your github',
        name: 'github',
    }],
    intern: [{
        type: 'input',
        message: 'What is the Intern\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the Intern\'s ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the Intern\'s email?',
        name: 'email',
        validate: email => {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }          
    },
    {
        type: 'input',
        message: 'what is the Intern\'s school?',
        name: 'school',
    }]
}

module.exports = questions;
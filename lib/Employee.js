const inquire = require('inquirer')
const engineer = require('./Engineer')
const intern = require('./Intern')
const manager = require('./Manager')

class Employee { ///NEXT to work on: make it so program asks for managers name id email first then you can select which employee(enigneer, intern) to add to the team next
    ///perhaps we make it so that the index.js file is runs a const manager = new Manager(); and then manager.getName which in turn 
constructor() {
    this.name = '';
    this.id = '';
    this.email = '';
}

getName() {
    inquire
    .prompt ([
        {
            type: 'input',
            message: 'What is the employee\'s name?',
            name: 'name'
        }
    ]).then((data) => {
        this.name = data.name;
    })
    this.getId() // temporary not sure if it works
}
getId() {
    inquire
    .prompt ([
        {
            type: 'input',
            message: 'What is the employee\'s ID?',
            name: 'id'
        }
    ]).then((data) => {
        this.id = data.id;
    })
    this.getEmail()// temporary not sure if it works
}
getEmail() {
    inquire
    .prompt([
        {
            type: 'input',
            message: 'What is the employee\'s email?',
            name: 'title'
        }
    ]).then((data) => {
        this.email = data.email;
    })
    this.getRole()// temporary not sure if it works
}
getRole(){
    return 'Employee'
}
}
const first = new Employee();// temporary not sure if it works

first.getName()// temporary not sure if it works
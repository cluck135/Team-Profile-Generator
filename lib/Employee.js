const inquire = require('inquirer')

class Employee { ///NEXT to work on: make it so program asks for managers name id email first then you can select which employee(enigneer, intern) to add to the team next
    ///perhaps we make it so that the index.js file is runs a const manager = new Manager(); and then manager.getName which in turn 
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;
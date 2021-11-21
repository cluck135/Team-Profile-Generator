const Employee = require('../lib/Employee');

describe('Employee test', () => {
    it('the name entered is a string', () => {
        const employee = new Employee('John', '5', 'john@gmail.com');
        expect(employee.getName()).toEqual('John');
    });
    it('the id entered is a string', () => {
        const employee = new Employee('John', '5', 'john@gmail.com');
        expect(employee.getId()).toEqual('5');
    });
    it('the email entered is a string', () => {
        const employee = new Employee('John', '5', 'john@gmail.com');
        expect(employee.getEmail()).toEqual('john@gmail.com');
    });
});
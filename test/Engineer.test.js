//const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer test', () => {
    it('the github entered is a string', () => {
        const engineer = new Engineer('John', '5', 'john@gmail.com', 'cluck135');
        expect(engineer.getGithub()).toEqual('cluck135');
    });
})
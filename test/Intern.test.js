const Intern = require('../lib/Intern');

describe('Intern test', () => {
    it('the School entered is a string', () => {
        const intern = new Intern('John', '5', 'john@gmail.com', 'WIT');
        expect(intern.getSchool()).toEqual('WIT');
    });
})
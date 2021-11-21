const Manager = require('../lib/Manager');

describe('Manager test', () => {
    it('the office number entered is a number', () => {
        const manager = new Manager('John', '2', 'john@gmail.com', 5);
        expect(manager.getOfficeNumber()).toEqual(5);
    });
})
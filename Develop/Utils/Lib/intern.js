const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, ID, email, school) {
        super(name, ID, 'Intern', email);
        this.school = school;
    }
    renderSpecificHTML() {
        return this.renderBaseHTML();
    }
}

module.exports = Intern;
const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, ID, email, school) {
        super('Intern', name, ID, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    renderSpecificHTML() {
        const input = `School: ${this.getSchool()}`
        return this.renderBaseHTML(input);
    }
}

module.exports = Intern;
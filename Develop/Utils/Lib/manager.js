const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, ID, email, officeNumber) {
        super(name, ID, 'Manager', email);
        this.officeNumber = officeNumber;
    }
    renderSpecificHTML() {
        return this.renderBaseHTML();
    }
}

module.exports = Manager;
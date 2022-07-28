const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, ID, email, officeNumber) {
        super('Manager', name, ID, email);
        this.officeNumber = officeNumber;
    }

    getPhone(){
        return this.officeNumber;
    }

    renderSpecificHTML() {
        const input = `Phone Number: ${this.getPhone()}`
        return this.renderBaseHTML(input);
    }
}

module.exports = Manager;
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, ID, email, github) {
        super(name, ID, 'Engineer', email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    renderSpecificHTML() {
        const input = `<a href="https://www.github.com/${this.getGithub()}">Github</a>`;
        return this.renderBaseHTML(input);
    }
}

module.exports = Engineer;
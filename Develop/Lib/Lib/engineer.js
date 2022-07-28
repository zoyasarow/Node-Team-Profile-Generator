const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, ID, email, github) {
        super('Engineer', name, ID, email);
        this.gitHub = github;
    }

    getGithub() {
        return this.gitHub;
    }

    renderSpecificHTML() {
        const input = `<a href="https://www.github.com/${this.getGithub()}">Github</a>`;
        return this.renderBaseHTML(input);
    }
}

module.exports = Engineer;
class Employee {
    constructor(position, name, ID, email) {
        this.position = position;
        this.name = name;
        this.ID = ID;
        this.email = email;
    }

    renderBaseHTML(input) {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> 
              <h1 class="team-name">${this.name}</h1>
              <h3 class="team-position">${this.position}</h3>
          </h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${this.ID}</li>
          <li class="list-group-item"><a href="mailto:${this.email}">Email</a></li>
          <li class="list-group-item"> ${input}</li>
        </ul>
    </div>  `
    }

    renderSpecificHTML() {
        return;
    }
}

module.exports = Employee;
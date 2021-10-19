// Requiring everything I need
const HTMLmaker = require('./src/HTMLmaker.js');

const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');


const inquirer = require('inquirer');
const fs = require('fs');


const teamArray = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the MANAGER NAME: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the EMPLOYEE ID: '
       },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the MANAGER EMAIL: '
           
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the OFFICE NUMBER: '     
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);
        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log(`
    ADDING employees
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'ADD an ENGINEER or ADD an INTERN',
            choices: ['ENGINEER', 'INTERN']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the EMPLOYEE NAME: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the EMPLOYEE ID: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the EMPLOYEE EMAIL: '
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Please enter the EMPLOYEE GITHUB USERNAME: ',
            when: (input) => input.role === 'ENGINEER'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the EMPLOYEE SCHOOL: ',
            when: (input) => input.role === 'INTERN'
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add an additional EMPLOYEE?',
            default: false
        }
    ])
    .then(employeeInput => {
        let { name, id, email, role, gitHub, school, confirmAddEmployee } = employeeInput;
        let employee;

        if(role === 'ENGINEER') {
            employee = new Engineer(name, id, email, gitHub);
            console.log(employee);
        } else if (role === 'INTERN') {
            employee = new Intern(name, id, email, school);
            console.log(employee);
        }

        teamArray.push(employee);

        if(confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log('index.html has been created.');
        }
    })
};

addManager()
.then(addEmployee)
.then(teamArray => {
    return HTMLmaker(teamArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});





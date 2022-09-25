
const inquire = require('inquirer');
const cTable = require('console.table');
require("console.table");

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'new_password',
    database: 'employee_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${db.threadId}`);
    start();
});

function start() {

    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View all employees",
            "View all departments",
            "View all roles",
            "Add employee",
            "Add department",
            "Add role",
            "Update employee role",
            "Exit"
        ]
    }).then((answer) => {
        switch (answer.action) {
            case "View all employees":
                viewAllEmployees();
                break;
            case "View all departments":
                viewAllDepartments();
                break;
            case "View all roles":
                viewAllRoles();
                break;
            case "Add employee":
                addEmployee();
                break;
            case "Add department":
                addDepartment();
                break;
            case "Add role":
                addRole();
                break;
            case "Update employee role":
                updateEmployeeRole();
                break;
            case "Exit":
                exit();
                break;
        }
    });
}

function viewAllEmployees() {
    db.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

function viewAllDepartments() {
    db.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

function viewAllRoles() {
    db.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

function addEmployee() {
    inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "What is the employee's first name?"
        },
        {
            name: "lastName",
            type: "input",
            message: "What is the employee's last name?"
        },
        {
            name: "roleId",
            type: "input",
            message: "What is the employee's role id?"
        },
        {
            name: "managerId",
            type: "input",
            message: "What is the employee's manager id?"
        }
    ]).then((answer) => {
        db.query('INSERT INTO employee SET ?', {
            first_name: answer.firstName,
            last_name: answer.lastName,
            role_id: answer.roleId,
            manager_id: answer.managerId
        }, (err) => {
            if (err) throw err;
            console.log("Employee added!");
            start();
        });
    });
}

function addDepartment() {
    inquirer.prompt([
        {
            name: "departmentName",
            type: "input",
            message: "What is the name of the department?"
        }
    ]).then((answer) => {
        db.query('INSERT INTO department SET ?', {
            name: answer.departmentName
        }, (err) => {
            if (err) throw err;
            console.log("Department added!");
            start();
        });
    });
}

function addRole() {
    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What is the title of the role?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary of the role?"
        },
        {
            name: "departmentId",
            type: "input",
            message: "What is the department id of the role?"
        }
    ]).then((answer) => {
        db.query('INSERT INTO role SET ?', {
            title: answer.title,
            salary: answer.salary,
            department_id: answer.departmentId
        }, (err) => {
            if (err) throw err;
            console.log("Role added!");
            start();
        });
    });
}

function updateEmployeeRole() {
    inquirer.prompt([
        {
            name: "employeeId",
            type: "input",
            message: "What is the id of the employee?"
        },
        {
            name: "roleId",
            type: "input",
            message: "What is the new role id of the employee?"
        }
    ]).then((answer) => {
        db.query('UPDATE employee SET ? WHERE ?', [{
            role_id: answer.roleId
        }, {
            id: answer.employeeId
        }], (err) => {
            if (err) throw err;
            console.log("Employee role updated!");
            start();
        });
    });
}

function exit() {
    db.end();
}

// Language: javascript
// Path: package.json
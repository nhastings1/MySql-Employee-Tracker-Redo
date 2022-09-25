const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({

    host: "localhost",

    port: 3306,

    user: "root",

    password: "new_password",

    database: "employee_db"

});

connection.connect(function (err) {

    if (err) throw err;

    console.log("connected as id " + connection.threadId);

    startView();

});

function startView() {
    inquirer.prompt({
        type: "list",
        choices: ["View All Employees", "View All Employees By Department", "View All Employees By Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager", "View All Roles", "Add Role", "Remove Role", "View All Departments", "Add Department", "Remove Department", "Quit"],
        name: "option"
    }).then(function (answer) {
        console.log("You chose: " + answer.option);

        switch (answer.option) {
            case "View All Employees":
                viewAllEmployees();
                break;
            case "View All Employees By Department":
                viewAllEmployeesByDepartment();
                break;
            case "View All Employees By Manager":
                viewAllEmployeesByManager();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Remove Employee":
                removeEmployee();
                break;
            case "Update Employee Role":
                updateEmployeeRole();
                break;
            case "Update Employee Manager":
                updateEmployeeManager();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "Add Role":
                addRole();
                break;
            case "Remove Role":
                removeRole();
                break;
            case "View All Departments":
                viewAllDepartments();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Remove Department":
                removeDepartment();
                break;
            case "Quit"():
        }
    });
}

function viewAllEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        startView();
    });
}

function viewAllEmployeesByDepartment() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        startView();
    });
}

function viewAllEmployeesByManager() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        startView();
    });
}

function addEmployee() {
    inquirer.prompt([{
        type: "input",
        message: "What is the employee's first name?",
        name: "firstName"
    },
    {
        type: "input",
        message: "What is the employee's last name?",
        name: "lastName"
    },
    {
        type: "input",
        message: "What is the employee's role ID?",
        name: "roleID"
    },
    {
        type: "input",
        message: "What is the employee's manager ID?",
        name: "managerID"
    }
    ]).then(function (answer) {
        connection.query("INSERT INTO employee SET ?",
            {
                first_name: answer.firstName,
                last_name: answer.lastName,
                role_id: answer.roleID,
                manager_id: answer.managerID
            },
            function (err, res) {
                if (err) throw err;
                console.table(res);
                startView();
            });
    });
}

function removeEmployee() {
    inquirer.prompt({
        type: "input",
        message: "What is the employee's ID?",
        name: "employeeID"
    }).then(function (answer) {
        connection.query("DELETE FROM employee WHERE ?",
            {
                id: answer.employeeID
            },
            function (err, res) {
                if (err) throw err;
                console.table(res);
                startView();
            });
    });
}

function updateEmployeeRole() {
    inquirer.prompt([{
        type: "input",
        message: "What is the employee's ID?",
        name: "employeeID"
    },
    {
        type: "input",
        message: "What is the employee's new role ID?",
        name: "roleID"
    }
    ]).then(function (answer) {
        connection.query("UPDATE employee SET ? WHERE ?",
            [
                {
                    role_id: answer.roleID
                },
                {
                    id: answer.employeeID
                }
            ],
            function (err, res) {
                if (err) throw err;
                console.table(res);
                startView();
            });
    });
}

function updateEmployeeManager() {
    inquirer.prompt([{
        type: "input",
        message: "What is the employee's ID?",
        name: "employeeID"
    },
    {
        type: "input",
        message: "What is the employee's new manager ID?",
        name: "managerID"
    }
    ]).then(function (answer) {
        connection.query("UPDATE employee SET ? WHERE ?",
            [
                {
                    manager_id: answer.managerID
                },
                {
                    id: answer.employeeID
                }
            ],
            function (err, res) {
                if (err) throw err;
                console.table(res);
                startView();
            });
    });
}

function viewAllRoles() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        startView();
    });
}

function addRole() {
    inquirer.prompt([{
        type: "input",
        message: "What is the role's title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the role's salary?",
        name: "salary"
    },
    {
        type: "input",
        message: "What is the role's department ID?",
        name: "departmentID"
    }
    ]).then(function (answer) {
        connection.query("INSERT INTO role SET ?",
            {
                title: answer.title,
                salary: answer.salary,
                department_id: answer.departmentID
            },
            function (err, res) {
                if (err) throw err;
                console.table(res);
                startView();
            });
    });
}

function removeRole() {
    inquirer.prompt({
        type: "input",
        message: "What is the role's ID?",
        name: "roleID"
    }).then(function (answer) {
        connection.query("DELETE FROM role WHERE ?",
            {
                id: answer.roleID
            },
            function (err, res) {
                if (err) throw err;
                console.table(res);
                startView();
            });
    });
}

function viewAllDepartments() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        startView();
    });
}

function addDepartment() {
    inquirer.prompt({
        type: "input",
        message: "What is the department's name?",
        name: "departmentName"
    }).then(function (answer) {
        connection.query("INSERT INTO department SET ?",
            {
                name: answer.departmentName
            },
            function (err, res) {
                if (err) throw err;
                console.table(res);
                startView();
            });
    });
}

function removeDepartment() {
    inquirer.prompt({
        type: "input",
        message: "What is the department's ID?",
        name: "departmentID"
    }).then(function (answer) {
        connection.query("DELETE FROM department WHERE ?",
            {
                id: answer.departmentID
            },
            function (err, res) {
                if (err) throw err;
                console.table(res);
                startView();
            });
    });
}

function viewBudgetByDepartment() {
    inquirer.prompt({
        type: "input",
        message: "What is the department's ID?",
        name: "departmentID"
    }).then(function (answer) {
        connection.query("SELECT SUM(salary) FROM role WHERE department_id = ?", [answer.departmentID],
            function (err, res) {
                if (err) throw err;
                console.table(res);
                startView();
            });
    });
}

function exit() {
    connection.end();
    process.exit();
}

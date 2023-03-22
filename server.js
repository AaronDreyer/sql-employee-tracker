const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: 'CashMoney$396',
    database: 'company_db',
});

connection.connect(err => {
    if (err) throw err;
    console.log("Welcome to the Dunder Mifflin - Scranton Branch Employee Tracker");
    startMenu();
});

const startMenu = () => {
    inquirer.prompt({
        message: 'Please choose one of the following:',
        name: 'menu',
        type: 'list',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit',
        ],
    })
    .then(response => {
        if (response.menu === 'View all departments') {
            viewAllDepartments();
        } else if (response.menu === 'View all roles') {
            viewAllRoles();
        } else if (response.menu === 'View all employees') {
            viewAllEmployees();
        } else if (response.menu === 'Add a department') {
            addDepartment();
        } else if (response.menu === 'Add a role') {
            addRole();
        } else if (response.menu === 'Add an employee') {
            addEmployee();
        } else if (response.menu === 'Update an employee role') {
            updateEmployeeRole();
        } else {
            connection.end();
        }
    });
};

const viewAllDepartments = () => {
    connection.query('SELECT * FROM department', function (err, res) {
        if (err) throw err;
        console.table(res);
        startMenu();
    });
};

const viewAllRoles = () => {
    connection.query('SELECT * FROM role', function (err, res) {
        if (err) throw err;
        console.table(res);
        startMenu;
    });
};

const viewAllEmployees = () => {
    connection.query('SELECT * FROM employee', function (err, res) {
        if (err) throw err;
        console.table(res);
        startMenu;
    });
};

const addDepartment = () => {
    inquirer.prompt([
        {
            name: 'department',
            type: 'input',
            message: 'Please enter a department.',
    
        },
    ])
    .then(answer => {
        connection.query(
            'INSERT INTO department (name) VALUES (?)',
            [answer.department],
            function (err, res) {
                if (err) throw err;
                console.log('Department successfully added!');
                startMenu;
            }
        );
    });
};

const addRole = () => {
    connection.query('SELECT name FROM department', (err, res) => {
        if (err) throw err;

        const departmentNames = res.map(department => department.name);
    
   inquirer.prompt([
    {
        name: 'role',
        type: 'input',
        message: 'Please enter your role in the company.'
    },
    {
        name: 'salary',
        type: 'input',
        message: 'Please enter your salary.'
    },
    {
        name: 'department',
        type: 'list',
        message: 'Please select which department your role is in.',
        choices: departmentNames
    }
   ]).then(answer => {
        connection.query(
                'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',
                [answer.role, answer.salary, answer.department],
                function (err, res) {
                    if (err) throw err;
                    console.log('Role added!');
                    startMenu();
                }
            );
        })
    });
};

const addEmployee = () => {
        
};

const updateEmployeeRole = () => {
    
};
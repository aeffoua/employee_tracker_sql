var inquirer = require('inquirer');

module.exports =[

    {
        type: 'list',
        name: 'main menu',
        message: 'what would you like to do?',
        choices: ['Add Department','Add Role','Add Employee','View Departments','View Roles', 'View Employees''Update An Employee Role','Nevermind']

    },

    {
        type: 'list',
        name: 'department list',
        message: 'what is the name of the department?',
        choices: ['sales','engineering','finance','legal']
        
    },

    {
        type: 'list',
        name: 'rolelist',
        message: 'what is the name of the role?',
        choices: ['sales lead','salesperson','lead engineer','lawyer','software engineer','account manager','Accountant','legal team lead']
        
    },
    
]

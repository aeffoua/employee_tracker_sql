const menuChoices = [  {    name: 'Add Department',    value: 'addDepartment'  }, 
 {    name: 'Show Departments',    value: 'showDepartments'  },
  {    name: 'Add Role',    value: 'addRole'  },  {    name: 'Show Roles',    value: 'showRoles'  }, 
   {    name: 'Add Employee',    value: 'addEmployee'  },  {    name: 'Show Employees',    value: 'showEmployees'  },
   {    name: 'quit',    value: 'quit'  }];
   
  module.exports= {
     menuQuestions: [
        {
          type: 'list',
          name: 'menuChoice',
          message: 'What do you want to do?',
          choices: menuChoices
        }
    ],
    addDepartmentQuestions : [
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of the department?',
          validate: function(value) {
            if (value.trim().length < 1) {
              return 'Please enter the name of the department.';
            }
            return true;
          }
        }
      ],


      addRoleQuestions : [
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of the role?',
          validate: function(value) {
            if (value.trim().length < 1) {
              return 'Please enter the title of the role.';
            }
            return true;
          }
        },
        {
          type: 'number',
          name: 'salary',
          message: 'What is the salary of the role?',
          validate: function(value) {
            if (isNaN(value) || value < 0) {
              return 'Please enter a valid salary.';
            }
            return true;
          }
        },
        {
          type: 'list',
          name: 'department',
          message: 'What department does the role belong to?',
          choices: ['Sales', 'Marketing', 'IT', 'Finance']
        }
      ],
      addEmployeeQuestions :[
        {
          type: 'input',
          name: 'firstName',
          message: 'What is the first name of the employee?',
          validate: function(value) {
            if (value.trim().length < 1) {
              return 'Please enter the first name of the employee.';
            }
            return true;
          }
        },
        {
          type: 'input',
          name: 'lastName',
          message: 'What is the last name of the employee?',
          validate: function(value) {
            if (value.trim().length < 1) {
              return 'Please enter the last name of the employee.';
            }
            return true;
          }
        },
        {
          type: 'list',
          name: 'role',
          message: 'What is the role of the employee?',
          choices: ['Sales Manager', 'Marketing Manager', 'IT Manager', 'Finance Manager', 'Sales Representative', 'Marketing Representative', 'IT Specialist', 'Financial Analyst']
        },
        {
          type: 'list',
          name: 'manager',
          message: 'Who is your manager?',
          choices: ['Alfredo', 'Mike', 'Tianna',"I don't know yet"]
        }
      ]
    }




//     {
//         type: 'list',
//         name: 'main menu',
//         message: 'what would you like to do?',
//         choices: ['Add Department','Add Role','Add Employee','View Departments','View Roles', 'View Employees','Update An Employee Role','Nevermind']

//     },

//     {
//         type: 'list',
//         name: 'department list',
//         message: 'what is the name of the department?',
//         choices: ['sales','engineering','finance','legal']
        
//     },

//     {
//         type: 'list',
//         name: 'job title',
//         message: 'what is the name of the role?',
//         choices: ['sales lead','salesperson','lead engineer','lawyer','software engineer','account manager','Accountant','legal team lead']
        
//     },

//     {
//         type: 'list',
//         name: 'job title',
//         message: '',
//         choices: ['','salesperson','lead engineer','lawyer','software engineer','account manager','Accountant','legal team lead']
        
//     },

// ]
const menuChoices = [  {    name: 'Add Department',    value: 'addDepartment'  }, 
 {    name: 'Show Departments',    value: 'showDepartments'  },
  {    name: 'Add Role',    value: 'addRole'  },  {    name: 'Show Roles',    value: 'showRoles'  }, 
   {    name: 'Add Employee',    value: 'addEmployee'  },  {    name: 'Show Employees',    value: 'showEmployees'  }];
   
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
let insertRoles= 'insert into roles(title,salary,department_id) values("manager",70000,1)'
let insertDepartments= 'insert into departments (name) values("hr")'
let insertEmployees='insert into employees(first_name,last_name,role_id,manager_id) values("Hackeem","Aya",1,1)'
let selectDepartments='select * from departments;'
let selectRoles="select * from roles"
let selectEmployees= "select * from employees"

// all the prompts to insert roles-name of roles-dpt-
// all prompts to insert dpt/employees(firt and last name,,, ask if add new employee yes or no- give dpt manager name)
// menu insert role dept employee or choices for employee dpt role

// in utils create file question.js to add the questions 
// add cladd for inquire.js from readme assignments

function selectEmployees ({employees}) {
    return `
    select * from employees
    `}
function generateRoleInsertQuery({salary,department_id,title}) {
    return `
    insert into roles(title,salary,department_id) values(${title},${salary},${department_id})`
}

function generateDptInsertQuery({name,hour}) {
    return `
    'insert into departments (name) values("${hour}")'
    `
}

function generateEmployeesInsertQuery({first_name,last_name,role_id,manager_id}) {
    return `
    insert into roles(first_name,last_name,role_id,manager_id) values(${first_name},${last_name},${role_id},${manager_id})`
}

function selectRoles ({roles}) {
    return `
    select * from roles
    `}

function selectDepartments ({departments}) {
    return `
    select * from departments
    `}

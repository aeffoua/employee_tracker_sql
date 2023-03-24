let insertRoles= 'insert into roles(title,salary,department_id) values("manager",70000,1)'
let insertDepartments= 'insert into departments (name) values("hr")'
let insertEmployees='insert into employees(first_name,last_name,role_id,manager_id) values("Hackeem","Aya",1,1)'
let selectDepartments='select * from departments;'
let selectRoles="select * from roles"
let selectEmployees= "select * from employees"



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

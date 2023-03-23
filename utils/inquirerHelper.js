
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

function selectRoles ({roles})
    return `
    select * from roles
    `

function selectDepartments ({departments})
    return `
    select * from departments
    `

function selectEmployees ({employees})
    return `
    select * from employees
    `
    
    
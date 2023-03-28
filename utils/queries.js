// let insertRoles= 'insert into roles(title,salary,department_id) values("manager",70000,1)'
// let insertDepartments= 'insert into departments (name) values("hr")'
// let insertEmployees='insert into employees(first_name,last_name,role_id,manager_id) values("Hackeem","Aya",1,1)'
// let selectDepartments='select * from departments;'
// let selectRoles="select * from roles"
// let selectEmployees= "select * from employees"
function showEmployee () {
    return `
    select * from employees
    `}
 function generateRole({salary,department_id,title}) {
        return `
        insert into roles(title,salary,department_id) values(${title},${salary},${department_id})`
    }
function generateDpt(name) {
        return `
        insert into departments (name) values('${name}')
        `
    }
function generateEmployee({first_name,last_name,role_id,manager_id}) {
        return `
        insert into roles(first_name,last_name,role_id,manager_id) values(${first_name},${last_name},${role_id},${manager_id})`
    }
function showRoles () {
        return `
        select * from roles
        `}
function showDpt () {
            return `
            select name from departments
            `}
    
module.exports={
    showEmployee,
    generateRole,
    generateDpt,
    generateEmployee, 
    showRoles, 
    showDpt

}












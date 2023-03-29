function showEmployee () {
    return `
    select e.first_name, e.last_name, d.name, r.title, r.salary from employees as e inner join 
    roles as r on e.role_id=r.id inner join 
    departments as d on r.department_id= d.id
    `}
 function generateRole({salary,department,title}) {
        return `
        insert into roles(title,salary,department_id) values('${title}',${salary},${department})`
    }
function generateDpt(name) {
        return `
        insert into departments (name) values('${name}')
        `
    }
function generateEmployee({first_name,last_name,role_id}) {
        return `
        insert into employees (first_name,last_name,role_id) values('${first_name}','${last_name}',${role_id})`
    }
function showRoles () {
        return `
        select r.title as title, r.salary as salary, d.name as department  from roles as r inner join departments as d on r.department_id=d.id 
        `}
function showDpt () {
            return `
            select name from departments
            `}
function getDepartmentId(name){
    return `
    select id from departments where name= '${name}' limit 1
    `
}
function getRoleId(title){
    return`
    select id from roles where title= '${title}' limit 1
    `
}
function getRoleTitle(){
    return`
    select title as name from roles
    `
}

    
module.exports={
    showEmployee,
    generateRole,
    generateDpt,
    generateEmployee, 
    showRoles, 
    showDpt,
    getDepartmentId,
    getRoleId,
    getRoleTitle
    
}












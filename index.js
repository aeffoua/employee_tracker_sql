const InquirerHelper= require('./utils/inquirerHelper.js')
const {menuQuestions, addDepartmentQuestions, addRoleQuestions, addEmployeeQuestions}= require ('./utils/questions')
let inquirerHelper= new InquirerHelper([])
const {generateDpt,showDpt, getDepartmentId, generateRole, showRoles, generateEmployee, getRoleTitle, getRoleId,showEmployee}= require('./utils/queries.js')
const {dbHelper}= require('./utils/database')


async function showMenu(){
    
    inquirerHelper.setQuestion(menuQuestions)
    let response= await inquirerHelper.getUserInput()
    return response 
}
async function showQuestions(questions){
    inquirerHelper.setQuestion(questions)
    let response= await inquirerHelper.getUserInput()
    return response 
}

async function main(){
    
    let choice = await showMenu()
    let responses 
    switch(choice.menuChoice){
        case 'addDepartment':
            responses= await showQuestions(addDepartmentQuestions)
            let departmentQuery= generateDpt(responses.name)
            console.log(departmentQuery)
            let saveData=await dbHelper.executeQuery(departmentQuery)
            console.log(saveData)
            main()
            break 
        case 'addRole':
            let query=addRoleQuestions(await getDepartment())
             responses= await showQuestions(query)
             let departmentId= await dbHelper.executeQuery(getDepartmentId(responses.department))
             responses.department= departmentId[0].id 
             let saveRole= await dbHelper.executeQuery(generateRole(responses))
            console.log(saveRole)
            main()
            break 

        case 'addEmployee':
            let queryEmployee= addEmployeeQuestions(await getRoleByTitle())
            responses= await showQuestions(queryEmployee)
            let roleId= await dbHelper.executeQuery(getRoleId(responses.role))
            responses.role_id= roleId[0].id
            let saveEmployee= await dbHelper.executeQuery(generateEmployee(responses))
            console.log(saveEmployee)
            main()
            break 




        case 'quit':
                        
               console.log('thank you for using our app')
              
               break 
        case 'addEmployee':
             responses= await showQuestions(addEmployeeQuestions)
            console.log(responses)
           main()
            break 
        case 'showDepartments':
          responses= await getDepartment()      
               console.table(responses)
              main()
               break 
        case 'showRoles':
                responses= await getRoles()
                    console.table(responses)
                    main()
                    break
        case 'showEmployees':
            responses= await getEmployee()
            console.table(responses)
            main()
            break 
        default:  
            console.log('wrong choice')
            main()

         
    }
}
async function getDepartment(){
    let responses= await dbHelper.executeQuery(showDpt())
    return responses 
}

async function getRoles(){
    let responses = await dbHelper.executeQuery(showRoles())
    return responses
}
async function getRoleByTitle(){
    let responses= await dbHelper.executeQuery(getRoleTitle())
    return responses 
}
async function getEmployee(){
    let responses= await dbHelper.executeQuery(showEmployee())
    return responses 
}
main()




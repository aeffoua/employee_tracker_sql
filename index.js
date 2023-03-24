const InquirerHelper= require('./utils/inquirerHelper.js')
const {menuQuestions, addDepartmentQuestions, addRoleQuestions, addEmployeeQuestions}= require ('./utils/questions')
let inquirerHelper= new InquirerHelper([])



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
    console.log(choice)
    switch(choice.menuChoice){
        case 'addDepartment':
            responses= await showQuestions(addDepartmentQuestions)
            console.log(responses)
            main()
            break 
        case 'addRole':
             responses= await showQuestions(addRoleQuestions)
            console.log(responses)
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
        default:  
            console.log('wrong choice')
            main()



    }
}
main()



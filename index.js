const InquirerHelper= require('./utils/inquirerHelper.js')
const {menuQuestions, addDepartmentQuestions}= require ('./utils/questions')
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
    console.log(choice)
    switch(choice.menuChoice){
        case 'addDepartment':
            let responses= await showQuestions(addDepartmentQuestions)
            console.log(responses)
            break 
        default:  
            console.log('over')


    }
}
main()



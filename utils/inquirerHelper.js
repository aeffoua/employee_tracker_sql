var inquirer = require('inquirer');

module.exports= class InquirerHelper {
    constructor(question){
        this.question= question 


    }
    async getUserInput(){
        let prompt= inquirer.createPromptModule()
        let response= await prompt(this.question)
        return response


    }
    setQuestion(question){
        this.question= question
    }
}


 
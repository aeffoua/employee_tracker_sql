const mysql = require('mysql2');

class DbHelper{
    constructor(){
       
    }
    async connection(){
       return new Promise((resolve,reject)=>{
            try{
                const connection = mysql.createConnection({
                    
                      connectionLimit: 10,
                     host: "127.0.0.1",
                      port: 3306,
                      waitForConnections: true, 
                      user: "root",
                      database: "employee_tracker_db",
                      password:"MyGodisgood12@"
                  });
                  return resolve(connection)
            }
            catch(error){
                console.error(error.message)
                reject(error)
            }
       })
    }
    async getInstance(){
        if(!this.instance){
            try {
                this.instance= await this.connection()
            } catch (error) {
              console.error('cannot be connected to the database',error.message)  
            }
            
        }
        return this.instance
    }
    async executeQuery(query){
        return new Promise(async(resolve, reject)=>{
            try {
                let pool=await this.getInstance()
                if (pool){
                     pool.query(query,(error,results,fields)=>{
                        if (error){
                            console.log(error)
                             reject (error)
                        }
                         else{
                            resolve(results)
                        }
                         pool.end()
                     })
                    
                }
                
            } catch (error) {
                console.error('error cannot reach server',error.message)
                reject(error)
            }
        })

    }
}
const dbHelper = new DbHelper()
module.exports= {dbHelper}
const mysql = require('mysql2');

class DbHelper{
    constructor(){
       
    }
    static async connection(){
       return new Promise((resolve,reject)=>{
            try{
                const connection = mysql.createConnection({
                    host: 'localhost',
                    user: 'root',
                    database: 'test'
                  });
                  return resolve(connection)
            }
            catch(error){
                console.error(error.message)
                reject(error)
            }
       })
    }
    static async getInstance(){
        if(!this.instance){
            try {
                this.instance= await this.connection()
            } catch (error) {
              console.error('cannot be connected to the database',error.message)  
            }
            
        }
        return this.instance
    }
    static async executeQuery(query){
        return new Promise(async(resolve, reject)=>{
            try {
                let pool=await this.getInstance()
                if (pool){
                    let data=await pool.execute(query)
                    return resolve (data) 
                }
                return reject(pool)
            } catch (error) {
                console.error('error cannot reach server',error.message)
                reject(error)
            }
        })

    }
}
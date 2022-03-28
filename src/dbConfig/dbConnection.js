
const mysql = require('mysql2/promise')
     const connectDb = async() =>{
        try {
             await mysql.createConnection({
                host:process.env.DATABASEHOST,
                port:process.env.DB_PORT,
                user:process.env.DATABASEUSER
            })
            console.log('dbConnected')
        } catch (error) {
            console.log(error)
        }
    
    }

module.exports={
    connectDb
}
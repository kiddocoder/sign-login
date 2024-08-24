require("dotenv").config();
const mysql = require("mysql2");

class DBCon{
      constructor () {
            this.db = mysql.createPool({
                  user: process.env.DB_USER,
                  password: process.env.DB_PASS,
                  host: process.env.HOST,
                  database: process.env.DB_NAME
               });
      }

      CheckConnection = () =>{
            this.db.getConnection((err, connection) => {
                  if(err){
                        console.log("connection failed");
                  }
                  if(connection){
                        console.log("successfully connected to BD")
                        connection.release();
                  }
            })
      }

      query = async (sql, values) => {
            return new Promise((resolve, reject) => {
                const callback = (error, result) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(result);
                }
                // execute will internally call prepare and query
                this.db.execute(sql, values, callback);
            }).catch(err => {
                const mysqlErrorList = Object.keys(HttpStatusCodes);
                // convert mysql errors which in the mysqlErrorList list to http status code
                err.status = mysqlErrorList.includes(err.code) ? HttpStatusCodes[err.code] : err.status;
    
                throw err;
            });
        } 
}


module.exports = new DBCon().query
module.exports = new DBCon().CheckConnection
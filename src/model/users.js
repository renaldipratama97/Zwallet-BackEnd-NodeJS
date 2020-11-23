const connection = require('../config/db')

const users = {
    getUser: (username, limit, offset)=>{
        return new Promise((resolve, reject)=>{
            if (username) {
                connection.query(`SELECT * FROM user WHERE username LIKE ? LIMIT ${limit} OFFSET ${offset}`, `%${username}%`, (error, results) => {
                    if (!error) {
                        resolve(results)
                    } else {
                        reject(error)
                    }
                })
            } else {
                connection.query('SELECT * FROM user',(error, results) => {
                    if (!error) {
                        resolve(results)
                    } else {
                        reject(error)
                    }
                })
            } 
        })
    },
    getUserById: (id)=>{
        return new Promise((resolve, reject)=>{
            connection.query("SELECT * FROM user WHERE id = ?", id,(error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
    insertUser: (data)=>{
        return new Promise((resolve, reject)=>{
            connection.query("INSERT INTO user SET ?", data,(error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
    updateUser: (id, dataUpdate)=>{
        return new Promise((resolve, reject)=>{
            connection.query(`UPDATE user SET ? WHERE id=?`, [dataUpdate, id] ,(error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
    deleteUser: (id)=>{
        return new Promise((resolve, reject)=>{
            connection.query("DELETE FROM user WHERE id = ?", id,(error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
}

module.exports = users
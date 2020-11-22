const connection = require('../config/db')

const topups = {
    getTopup: ()=>{
        return new Promise((resolve, reject)=>{
            connection.query("SELECT top_up.*, user.username FROM top_up INNER JOIN user ON top_up.id_user = user.id", (error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
    getTopupById: (id)=>{
        return new Promise((resolve, reject)=>{
            connection.query("SELECT * FROM top_up WHERE id = ?", id,(error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
    insertTopup: (data)=>{
        return new Promise((resolve, reject)=>{
            connection.query("INSERT INTO top_up SET ?", data,(error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
    updateUserAfterInsert: (amount, id_user)=>{
        return new Promise((resolve, reject)=>{
            connection.query("UPDATE user SET balance = balance + ? WHERE id = ?", [amount, id_user],(error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
    updateTopup: (id, dataUpdate)=>{
        return new Promise((resolve, reject)=>{
            connection.query(`UPDATE top_up SET ? WHERE id=?`, [dataUpdate, id] ,(error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
    deleteTopup: (id)=>{
        return new Promise((resolve, reject)=>{
            connection.query("DELETE FROM top_up WHERE id = ?", id,(error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
}

module.exports = topups
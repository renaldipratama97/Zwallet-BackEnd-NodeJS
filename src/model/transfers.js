const connection = require('../config/db')

const transfers = {
    getTransfer: ()=>{
        return new Promise((resolve, reject)=>{
            connection.query("SELECT * FROM transfer ORDER BY id DESC", (error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
    getTransferById: (id)=>{
        return new Promise((resolve, reject)=>{
            connection.query("SELECT * FROM transfer WHERE id = ?", id,(error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
    insertTransfer: (data)=>{
        return new Promise((resolve, reject)=>{
            connection.query("INSERT INTO transfer SET ?", data,(error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
    updateSenderAfterInsert: (amount, sender_id)=>{
        return new Promise((resolve, reject)=>{
            connection.query("UPDATE user SET balance = balance - ? WHERE id = ?", [amount, sender_id],(error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
    updateReceiverAfterInsert: (amount, receiver_id)=>{
        return new Promise((resolve, reject)=>{
            connection.query("UPDATE user SET balance = balance + ? WHERE id = ?", [amount, receiver_id],(error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
    updateTransfer: (id, dataUpdate)=>{
        return new Promise((resolve, reject)=>{
            connection.query("UPDATE transfer SET ? WHERE id=?", [dataUpdate, id] ,(error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
    deleteTransfer: (id)=>{
        return new Promise((resolve, reject)=>{
            connection.query("DELETE FROM transfer WHERE id = ?", id,(error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
}

module.exports = transfers
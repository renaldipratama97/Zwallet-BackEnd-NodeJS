const { throws } = require('assert')
const modelTopups = require('../model/topups')
const helper = require('../helper/helpers')
const topups = {
    getTopups:(req, res)=>{
        modelTopups.getTopup()
        .then(result=>{
            const resultTopup = result
            helper.response(res, resultTopup, 200, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    detailTopups:(req, res)=>{
        const id = req.params.id
        modelTopups.getTopupById(id)
        .then(result=>{
            const resultTopup = result
            helper.response(res, resultTopup, 200, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    insertTopup: (req, res)=>{
        const {id_user, amount} = req.body

        const data = {
            id_user,
            amount,
            date_time: new Date()
        }
        modelTopups.insertTopup(data)
        modelTopups.updateUserAfterInsert(amount, id_user)
        .then(result=>{
            const resultTopup = result
            helper.response(res, resultTopup, 201, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    updateTopup: (req, res)=>{
        const id = req.params.id
        const id_user = req.body.id_user || ''
        const amount = req.body.amount || ''

        const dataUpdate = {
            id_user,
            amount
        }
        modelTopups.updateTopup(id, dataUpdate)
        .then(result => {
            const resultTopup = result
            helper.response(res, resultTopup, 201, null)
        })
        .catch(err => {
            console.log(err)
        })
    },
    deleteTopup:(req, res)=>{
        const id = req.params.id
        modelTopups.deleteTopup(id)
        .then(result=>{
            const resultTopup = result
            helper.response(res, resultTopup, 200, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

module.exports = topups
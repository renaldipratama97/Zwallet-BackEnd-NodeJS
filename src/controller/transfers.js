const { throws } = require('assert')
const helper = require('../helper/helpers')
const modelTransfers = require('../model/transfers')
const transfers = {
    getTransfers:(req, res)=>{
        modelTransfers.getTransfer()
        .then(result=>{
            const resultTransfer = result
            helper.response(res, resultTransfer, 200, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    detailTransfers:(req, res)=>{
        const id = req.params.id
        modelTransfers.getTransferById(id)
        .then(result=>{
            const resultTransfer = result
            helper.response(res, resultTransfer, 200, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    insertTransfer: (req, res)=>{
        const {sender_id, receiver_id, amount, notes} = req.body

        const data = {
            sender_id,
            receiver_id,
            amount,
            date_time: new Date(),
            notes
        }
        modelTransfers.insertTransfer(data)
        modelTransfers.updateSenderAfterInsert(amount, sender_id)
        modelTransfers.updateReceiverAfterInsert(amount, receiver_id)
        .then(result=>{
            const resultTransfer = result
            helper.response(res, resultTransfer, 200, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    updateTransfer: (req, res)=>{
        const id = req.params.id
        const transfer_to = req.body.transfer_to || 0
        const amount = req.body.amount || 0
        const notes = req.body.notes || ''

        const dataUpdate = {
            transfer_to,
            amount,
            notes
        }
        modelTransfers.updateTransfer(id, dataUpdate)
        .then(result => {
            const resultTransfer = result
            helper.response(res, resultTransfer, 200, null)
        })
        .catch(err => {
            console.log(err)
        })
    },
    deleteTransfer:(req, res)=>{
        const id = req.params.id
        modelTransfers.deleteTransfer(id)
        .then(result=>{
            const resultTransfer = result
            helper.response(res, resultTransfer, 200, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

module.exports = transfers
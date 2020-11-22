const { throws } = require('assert')
const modelUsers = require('../model/users')
const helper = require('../helper/helpers')
const users = {
    getUsers:(req, res)=>{
        const username = req.query.username || null
        const page = req.query.page || 1
        const limit = req.query.limit || 3
        const offset = (page - 1) * limit
        modelUsers.getUser(username, limit, offset)
        .then(result=>{
            const resultUser = result
            helper.response(res, resultUser, 200, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    detailUsers:(req, res)=>{
        const id = req.params.id
        modelUsers.getUserById(id)
        .then(result=>{
            const resultUser = result
            helper.response(res, resultUser, 201, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    insertUser: (req, res)=>{
        const {firstname, lastname, username, email, password, pin, phonenumber, balance} = req.body

        const data = {
            firstname,
            lastname,
            username,
            email,
            password,
            pin,
            phonenumber,
            balance,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        modelUsers.insertUser(data)
        .then(result=>{
            const resultUser = result
            helper.response(res, resultUser, 201, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    updateUser: (req, res)=>{
        const id = req.params.id
        const firstname = req.body.firstname || ''
        const lastname = req.body.lastname || ''
        const username = req.body.username || ''
        const email = req.body.email || ''
        const password = req.body.password || ''
        const pin = req.body.pin || 0
        const phonenumber = req.body.phonenumber || ''
        const balance = req.body.balance || 0

        const dataUpdate = {
            firstname,
            lastname,
            username,
            email,
            password,
            pin,
            phonenumber,
            balance
        }
        modelUsers.updateUser(id, dataUpdate)
        .then(result => {
            const resultUser = result
            helper.response(res, resultUser, 201, null)
        })
        .catch(err => {
            console.log(err)
        })
    },
    deleteUser:(req, res)=>{
        const id = req.params.id
        modelUsers.deleteUser(id)
        .then(result=>{
            const resultUser = result
            helper.response(res, resultUser, 201, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

module.exports = users
const express = require('express')
const router = express.Router()
const userController = require('../controller/users')
router
    .get('/', userController.getUsers)
    .get('/:id', userController.detailUsers)
    .post('/', userController.insertUser)
    .put('/:id', userController.updateUser)
    .delete('/:id', userController.deleteUser)
module.exports = router
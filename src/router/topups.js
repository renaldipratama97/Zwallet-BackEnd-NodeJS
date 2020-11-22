const express = require('express')
const router = express.Router()
const topupController = require('../controller/topups')
router
    .get('/', topupController.getTopups)
    .get('/:id', topupController.detailTopups)
    .post('/', topupController.insertTopup)
    .put('/:id', topupController.updateTopup)
    .delete('/:id', topupController.deleteTopup)
module.exports = router
const express = require('express')
const router = express.Router()
const transferController = require('../controller/transfers')
router
    .get('/', transferController.getTransfers)
    .get('/:id', transferController.detailTransfers)
    .post('/', transferController.insertTransfer)
    .put('/:id', transferController.updateTransfer)
    .delete('/:id', transferController.deleteTransfer)
module.exports = router
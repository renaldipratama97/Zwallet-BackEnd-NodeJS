require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
var cors = require('cors')
const index = express()
const PORT = process.env.PORT
const routerUsers = require('./src/router/users')
const routerTransfers = require('./src/router/transfers')
const routerTopups = require('./src/router/topups')
const bodyParser = require('body-parser')

const mymiddleware = (req, res, next) =>{
    console.log('Running')
    next()
}
index.use(cors())

index.use(bodyParser.urlencoded({ extended: false }))

index.use(bodyParser.json())

index.use(morgan('dev'))

index.use(mymiddleware)



index.use('/users',routerUsers)
index.use('/transfers',routerTransfers)
index.use('/topups',routerTopups)


index.listen(PORT, ()=> console.log(`server is running port ${PORT}`))
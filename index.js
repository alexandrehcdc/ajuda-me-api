'use strict'

const express = require('express')
const geolib = require('./Locations')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://ajudame:a1b2c3@ds153980.mlab.com:53980/ajuda-me-api')

const app = express()
const routes = require('./Routes')
const PORT = process.env.PORT || '3000'
const userRouter = require('./Routes/userRouter')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(routes)
app.use(userRouter)


app.listen(PORT, () => console.log('listening on ', PORT))


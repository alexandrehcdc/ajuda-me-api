'use strict'

const mongoose = require('mongoose')
const path = 'helpcalls'
const helpCallSchema = new mongoose.Schema({
    userId : {type: String},
    serviceId : {type: String},
    timestamp : {type: String},
    geometry : {
        type : {type: String},
        coordinates : [Number]
    }
})

const helpCallModel = mongoose.model(path, helpCallSchema)

module.exports = helpCallModel
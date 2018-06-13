'use strict'

const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
    callerId        : {type: String},
    serviceId       : {type: String},
    callerLocation  : {type: String},
    requestId       : {type: String}
})

const requestModel = mongoose.model('help_request', requestSchema)

module.exports = requestModel
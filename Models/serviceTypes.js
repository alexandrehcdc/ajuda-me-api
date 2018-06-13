'use strict'

const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    type : {type: String, unique: true}
})

const serviceModel = mongoose.model('services_types', serviceSchema)

module.exports = serviceModel
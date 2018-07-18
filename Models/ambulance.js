'use strict'

const mongoose = require('mongoose')
const path = 'ambulance'
const ambulanceSchema = new mongoose.Schema({
    hospitalId: {type: String},
    properties : {
        model : {type: String},
        year : {type: String},
        plate : {type: String},
        status : {type: String},
        state : {type: String}
    }
})

const ambulanceModel = mongoose.model(path, ambulanceSchema, path)

module.exports = ambulanceModel
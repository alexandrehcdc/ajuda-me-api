'use strict'

const mongoose = require('mongoose')
const path = 'ambulance'
const ambulanceSchema = new mongoose.Schema({
    hospitalId: {type: String},
    properties : {
        model : {type: String},
        year : {type: String},
        state : {type: String}
    }
})

const ambulanceModel = mongoose.model(path, ambulanceSchema)

module.exports = ambulanceModel
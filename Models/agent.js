'use strict'

const mongoose = require('mongoose')
const path = 'agent'
const agentSchema = new mongoose.Schema({
    hospitalId: {type: String},
    properties : {
        model : {type: String},
        year : {type: String},
        state : {type: String}
    }
})

const agentModel = mongoose.model(path, agentSchema)

module.exports = agentModel
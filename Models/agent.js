'use strict'

const mongoose = require('mongoose')
const path = 'agent'
const agentSchema = new mongoose.Schema({
    hospitalId: {type: String},
    name: {type: String},
    status: {type: String},
    crm: {type: String},
    cpf: {type: String}
})

const agentModel = mongoose.model(path, agentSchema, path)

module.exports = agentModel
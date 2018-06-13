'use strict'

const mongoose = require('mongoose')
const path = 'bases_samu_als'
const baseSchema = new mongoose.Schema({
    type : {type: String},
    properties : {
        nome : {type: String},
        municipio : {type: String},
        endereco : {type: String}
    },
    geometry : {
        type : {type: String},
        coordinates : [Number]
    }
})

const baseModel = mongoose.model(path, baseSchema)

module.exports = baseModel
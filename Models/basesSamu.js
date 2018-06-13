'use strict'

const mongoose = require('mongoose')

const baseSchema = new mongoose.Schema({
    type : {type: String},
    properties : {
        nome : {type: String, unique: true},
        municipio : {type: String},
        endereco : {type: String}
    },
    geometry : {
        type : {type: String},
        coordinates : [Number]
    }
})

const baseModel = mongoose.model('bases_samu_al', baseSchema)

module.exports = baseModel
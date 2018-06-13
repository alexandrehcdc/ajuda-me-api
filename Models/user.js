'use strict'

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, index: true},
    password: {type: String, index: true},
    cpf: {type: String, unique: true},
    email: {type: String, unique: true},
    address: {type: String},
    phone: {type: String}
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel
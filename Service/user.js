'use strict'

// const mongoose = require('mongoose')
const { userModel } = require('../Models')

function create({name, password, cpf, email, address, phone}) {
    const newUser = new userModel({name, password, cpf, email, address, phone})
    return newUser.save()
}

function update(name, cpf, email, address, phone) {
    const user = getBy(name)
    return newUser.save()
}

async function getBy(name) {
    console.log(name)
    return await userModel.findOne({name: name})
}

function removeBy(name) {
    return userModel.deleteOne({name: name})
}

module.exports = { create, update, getBy, removeBy }
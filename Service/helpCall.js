'use strict'

const { helpCall } = require('../Models')

async function get() {
    return await helpCall.find().exec()
}

async function amount() {
    return await helpCall.count()
}

async function save(model) {
    return await model.save()
}

module.exports = {get: get,
                  amount: amount,
                  save: save}
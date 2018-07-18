'use strict'

const { helpCall } = require('../Models')

async function get() {
    console.log(await helpCall.count())
    return await helpCall.find().exec()
}

async function amount() {
    return await helpCall.count()
}

async function save(model) {
    const call = new helpCall(model)
    return await call.save()
}

module.exports = {get: get,
                  amount: amount,
                  save: save}
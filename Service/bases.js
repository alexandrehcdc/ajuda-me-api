'use strict'

const { basesSamu } = require('../Models')

async function get() {
    return await basesSamu.find().exec()
}

async function available() {
    return await basesSamu.count()
}

module.exports = {get: get, available: available}
'use strict'

const { basesSamu } = require('../Models')

async function get() {
    return await basesSamu.find().exec()
}

module.exports = {get: get}
'use strict'

const { ambulance } = require('../Models')

async function get() {
    return await ambulance.find().count().exec()
}

module.exports = {get: get}
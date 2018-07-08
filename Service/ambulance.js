'use strict'

const { ambulance } = require('../Models')

async function get() {
    return await ambulance.count()
}

module.exports = {get: get}
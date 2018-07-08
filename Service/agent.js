'use strict'

const { agent } = require('../Models')

async function get() {
    return await agent.find().count().exec()
}

module.exports = {get: get}
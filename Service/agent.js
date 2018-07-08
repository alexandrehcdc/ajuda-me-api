'use strict'

const { agent } = require('../Models')

async function get() {
    return await agent.count()
}

module.exports = {get: get}
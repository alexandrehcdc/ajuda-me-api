'use strict'

const express = require('express')
const router = new express.Router()
const { agentService } = require('../Service')

router.route('/')
    .get((req, res, next) => {
        agentService.get()
            .then(amount => {
                res.json(amount)
            })
            .catch(next)
    })

module.exports = {agentRouter : router, agentPath: '/agent'}    
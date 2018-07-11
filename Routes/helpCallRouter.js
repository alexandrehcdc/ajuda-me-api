'use strict'

const express = require('express')
const router = new express.Router()
const { helpCallService } = require('../Service')

router.route('/')
    .get((req, res, next) => {
        helpCallService.get()
            .then(locations => {
                res.json(locations)
            })
            .catch(next)
    })

router.route('/available')
    .get((req, res, next) => {
        helpCallService.available()
            .then(amount => {
                res.json(amount)
            })
            .catch(next)
    })

    router.route('/available')
    .post((req, res, next) => {
        helpCallService.save(req.body)
            .then(helpObject => {
                res.json(helpObject)
            })
            .catch(next)
    })

module.exports = {helpCallRouter : router, helpCallPath: '/helpCall'}    
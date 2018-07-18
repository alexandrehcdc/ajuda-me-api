'use strict'

const express = require('express')
const router = new express.Router()
const { helpCallService } = require('../Service')

router.route('/')
    .get((req, res, next) => {
        helpCallService.get()
            .then(calls => {
                console.log('calls' + calls)
                res.json(calls)
            })
            .catch(next)
    })

router.route('/')
    .post((req, res, next) => {
        helpCallService.save(req.body)
            .then(helpObject => {
                res.json(helpObject)
            })
            .catch(next)
    })

module.exports = {helpCallRouter : router, helpCallPath: '/helpCall'}    
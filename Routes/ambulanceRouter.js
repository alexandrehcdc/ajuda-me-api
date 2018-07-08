'use strict'

const express = require('express')
const router = new express.Router()
const { ambulanceService } = require('../Service')

router.route('/')
    .get((req, res, next) => {
        ambulanceService.get()
            .then(amount => {
                res.json(amount)
            })
            .catch(next)
    })

module.exports = {ambulanceRouter : router, ambulancePath: '/ambulance'}    
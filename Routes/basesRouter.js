'use strict'

const express = require('express')
const router = new express.Router()
const { basesService } = require('../Service')

router.route('/')
    .get((req, res, next) => {
        basesService.get()
            .then(locations => {
                res.json(locations)
            })
            .catch(next)
    })

module.exports = {basesRouter : router, basesPath: '/bases'}    
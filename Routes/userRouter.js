'use strict'

const express = require('express')
const app = express()
const router = new express.Router()
const { userService } = require('../Service')
const path = require('path')

router.route('/')
    .get((req, res, next) => {
        const { name } = req.query
        userService.getBy(name)
            .then(savedUser => res.json(savedUser))
            .catch(next)
    })
    .post((req, res, next) => {
        console.log(req.body)
        userService.create(req.body)
            .then(savedUser => res.send(savedUser))
            .catch(next)
    })
    // .update((req, res, next) => {
    //     res.send('update')
    // // })
    // .delete((req, res, next) => {
    //     res.send('delete')
    // })

module.exports = router    
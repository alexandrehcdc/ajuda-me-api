'use strict'

const express = require('express')
const router = new express.Router()
const { userService } = require('../Service')

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
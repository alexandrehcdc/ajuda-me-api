'use strict'

const express = require('express')
const router = new express.Router()
const {readFile} = require('fs')

router.route('/')
    .get((req, res, next) => {
        readFile(__dirname + '/../bases_samu_al.json','utf8', (err, data) => {
            if (err) throw err
            res.send(data)
        })
    })

module.exports = router
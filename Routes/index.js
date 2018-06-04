'use strict'

const express = require('express')
const router = new express.Router()
const path = require('path')
const {readFile} = require('fs')

router.route('/locations')
  .get((req, res, next) => {
    readFile(path.join(__dirname, '/../bases_samu_al.json'), 'utf8', (err, data) => {
      if (err) throw err
        res.send(data)
    })
  })

module.exports = router
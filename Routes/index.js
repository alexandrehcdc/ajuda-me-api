'use strict'

const express = require('express')
const router = new express.Router()
const path = require('path')
const {readFile} = require('fs')
const userRouter = require('./userRouter')
const { basesRouter, basesPath } = require('./basesRouter')
const { agentRouter, agentPath } = require('./agentRouter')
const { helpCallRouter, helpCallPath} = require('./helpCallRouter')
const { ambulanceRouter, ambulancePath } = require('./ambulanceRouter')

router.use('/user', userRouter)
router.use(basesPath, basesRouter)
router.use(agentPath, agentRouter)
router.use(ambulancePath, ambulanceRouter)
router.use(helpCallPath, helpCallRouter)

router.route('/locations')
  .get((req, res, next) => {
    readFile(path.join(__dirname, '/../bases_samu_al.json'), 'utf8', (err, data) => {
      if (err) throw err
      res.send(data)
    })
  })

router.route('/teste')
  .post((req, res, next) => {
    console.log(req.body)
    res.send(req.body)
  })

router.route('/accidents')
  .get((req, res, next) => {
    readFile(path.join(__dirname, '/../service_types.json'), 'utf8', (err, data) => {
      if (err) throw err
      res.send(data)
    })
  })

module.exports = router

'use strict'

const express = require('express')

const app = express()
const routes = require('./Routes')
const PORT = process.env.PORT || '3000'

app.use(routes)

app.listen(PORT, () => console.log('listening on ', PORT))


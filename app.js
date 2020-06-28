require('dotenv').config()

// Database
require('./configs/mongoose.config')

// Debugger
require('./configs/debugger.config')

// App
const express = require('express')
const app = express()

// Configs
require('./configs/preformatter.config')(app)
require('./configs/middleware.config')(app)
require('./configs/views.configs')(app)
require('./configs/locals.config')(app)

// Base URLS
require('./routes')(app)

app.use('/', require('./routes/base.routes'))

app.use('/', require('./routes/celebrities'))

app.use('/', require('./routes/index'))



module.exports = app

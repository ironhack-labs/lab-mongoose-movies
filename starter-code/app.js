require('dotenv').config()

// Database
require('./config/mongoose.config')

// Debugger
require('./config/debugger.config')

// App
const express = require('express')
const app = express()

// Configs
require('./config/middleware.config')(app)
require('./config/preformatter.config')(app)
require('./config/views.configs')(app)
require('./config/locals.config')(app)

// Base URLS
app.use('/', require('./routes/index'))
app.use('/celebrities', require('./routes/celebrities'))

module.exports = app
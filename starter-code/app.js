require('dotenv').config()

// Database
require('./configs/mongoose.config')

// Debugger
require('./configs/debugger.config')

// App
const express = require('express')
const app = express()

// Configs
require('./configs/middleware.config')(app)
require('./configs/preformatter.config')(app)
require('./configs/views.configs')(app)
require('./configs/locals.config')(app)

// Base URLS
app.locals.title = 'Celebritiiiiiieeeees';
app.use('/', require('./routes/index.routes'))
app.use('/celebrities', require('./routes/celebrities.routes'))


module.exports = app;

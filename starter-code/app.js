require('dotenv').config();

// DataBase 
require('./configs/mongoose.config')

// Debugger
require('./configs/debugger.config')

// App
const express = require('express')
const app = express();

// Configs
require('./configs/middleware.config')(app)
require('./configs/preformatter.config')(app)
require('./configs/views.config')(app)
require('./configs/locals.config')(app)

// Base URLS
app.use('/', require('./routes/index.routes'))
app.use('/celebrities', require('./routes/celebrities.routes'))
app.use('/movies', require('./routes/movies.routes'))



module.exports = app;
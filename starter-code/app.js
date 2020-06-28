require('dotenv').config();

//Database
require ('./configs/mongoose.config.js')


//Debugger
require('./configs/debugger.config')


//APP
const express = require('express')
const app = express();

//Configs
require('./configs/preformatter.config')(app)
require('./configs/middleware.config')(app)
require('./configs/views.configs')(app)
require('./configs/locals.config')(app)


//Routes
require('./routes')(app)


module.exports = app;

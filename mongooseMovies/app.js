const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')

const index = require('./routes/index')
const celebrities = require('./routes/celebrities')
const movies = require('./routes/movies')

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/celebrities', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
})

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(expressLayouts)

app.use('/', index)
app.use('/celebrities', celebrities)
app.use('/movies', movies)

// -- 404 and error handler

// NOTE: requires a views/not-found.ejs template
app.use(function (req, res, next) {
  res.status(404)
  res.render('not-found')
})

// NOTE: requires a views/error.ejs template
app.use(function (err, req, res, next) {
  // always log the error
  console.error('ERROR', req.method, req.path, err)

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500)
    res.render('error')
  }
})

module.exports = app

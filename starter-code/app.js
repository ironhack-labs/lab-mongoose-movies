'use strict';
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const createError = require('http-errors');
const morgan = require('morgan');

const celebritiesRouter = require('./routes/celebrities');
const moviesRouter = require('./routes/movies');
const indexRouter = require('./routes/index');

const app = express();

mongoose.connect('mongodb://localhost/celebritiesApp',{
  useNewUrlParser: true,
});

// view engine setup
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routers
app.use('/', indexRouter);
app.use('/movies', moviesRouter);
app.use('/celebrities', celebritiesRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
const createError = require('http-errors');
const express = require('express');
const layouts = require('express-ejs-layouts');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();

//mongoose connection
mongoose.connect('mongodb://localhost/celebritiesdb', {useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

//rutes
const indexRouter = require('./routes/index');
const celebsRouter = require('./routes/celebs');
const moviesRouter = require('./routes/movies');

// view engine setup
app.use(layouts);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main')
app.set((req, res, next) => {
  console.log(req.method, req.url);
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/celebs', celebsRouter);
app.use('/movies', moviesRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404)
  res.render('errors/404');
});

// error handler
app.use(function(err, req, res, next) {
  console.log("error", err)
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  const status = err.status || 500
  res.status(status);
  res.locals.status = status;

  // render the error page
  res.render('errors/error');
});

module.exports = app;
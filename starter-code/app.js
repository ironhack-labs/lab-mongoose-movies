// First require "const = require", then route paths
// Second Instantiate "app.use"
// Third Routers pointing to route paths
// Fourth Error handlers
// Last module.exports = app;
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');
const mongoose = require('mongoose');
const celebrityRoutes = require('./routes/celebrities');
const movieRoutes = require('./routes/movies');
const morgan = require('morgan');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect('mongodb://localhost/celebs', {useMongoClient: true});

app.use('/', index);
app.use('/users', users);
app.use('/celebrities', celebrityRoutes);
app.use('/movies', movieRoutes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

// app.listen(3000, () => {
//   console.log('We out Hea!')
// });

module.exports = app;

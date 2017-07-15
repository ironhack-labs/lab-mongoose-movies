//REQUIRED VARIABLES!
//add the expreess variable and require express!
var express = require('express');

var path = require('path');
var favicon = require('serve-favicon');

//add morgan as the required logger for our app.
var logger = require('morgan');

//add cookie parser to manage sessions
var cookieParser = require('cookie-parser');

//add body parser variable and require it to be able to query the req.body
var bodyParser = require('body-parser');

//add mongosse variable and require it as well as connect to the new mongodb instance
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mongoose-movies")

//require the relevant routes for our app
var index = require('./routes/index');
var celebrities = require("./routes/celebrities");
var profile = require("./routes/celebrities/profile");

//finally assign our server app to express!
var app = express();

//SET-UPS!
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//USE THE MIDDLEWARE!
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//USE THE ROUTES TO FINALISE REQUESTS
app.use('/', index);
app.use("/celebrities/", celebrities, profile);


//CATCH & RENDER ERRORS!
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

//FINALLY, JUST EXPORT YOUR APP AS A MODULE!
module.exports = app;

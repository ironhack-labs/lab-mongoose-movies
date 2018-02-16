var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
const expressLayouts = require('express-ejs-layouts');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose       = require('mongoose');

var index = require('./routes/index');
var users = require('./routes/users');
const celebrities = require('./routes/celebrities');
const movies = require('./routes/movies');

mongoose.connect('mongodb://localhost/celebrityMovie');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.set("layout", "layouts/main-layout");
app.locals.title = 'Celebrity App';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/celebrities', celebrities);
app.use('/movies', movies);

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

app.listen(3000, function(err){
  if(err) console.log(err);
  console.log("Tu servidor esta funcionando");
})

module.exports = app;

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

var index = require('./routes/index');
var celebrity = require('./routes/celebrity');

mongoose.connect('mongodb://localhost/movies');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(expressLayouts);
app.locals.title = 'Celebrity';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/celebrities', celebrity); // In celebrity route only get / to root


module.exports = app;

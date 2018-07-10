// --- Dependencies
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');

const mongoose = require('mongoose');
const fs = require('fs');
const rfs = require('rotating-file-stream');
const helmet = require('helmet');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

const indexRouter = require('./routes/index');

// --- Instantiations
const app = express();

// --- Configurations
// database
const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// logging
const logDirectory = path.join(__dirname, 'log');
// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
// create a rotating write stream
const accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory
});

// --- Middleware
app.use(helmet());
app.use(logger('dev', { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'mongoose-movies',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  })
}));
app.use(flash());
app.use((req, res, next) => {
  app.locals.currentUser = req.session.currentUser;
  next();
});

// --- Routes
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

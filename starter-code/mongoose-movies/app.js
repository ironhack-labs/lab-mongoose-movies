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
const hbs = require('hbs');

const indexRouter = require('./routes/index');

// --- Instantiations
const app = express();

// --- Configurations
// -- database
const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);
// -- logging
const logDirectory = path.join(__dirname, 'log');
// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
// create a rotating write stream
const accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory
});
// -- View engine
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// Register handlebars helpers
hbs.registerHelper('ifIn', function (elem, list, options) {
  if (list.indexOf(elem) > -1) {
    return options.fn(this);
  }
  return options.inverse(this);
});
// Use partials
hbs.registerPartials(path.join(__dirname, '/views/partials'));

// --- Middleware
app.use(helmet());
app.use(logger('dev', { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
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

app.use((req, res, next) => {
  app.locals.currentUser = req.session.currentUser;
  next();
});

// --- Routes
app.use('/', indexRouter);
// NOTE: requires a views/not-found.ejs template
app.use((req, res, next) => {
  res.status(404);
  res.render('not-found');
});

// NOTE: requires a views/error.ejs template
app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500);
    res.render('error');
  }
});

module.exports = app;

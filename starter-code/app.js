require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

const session       = require("express-session");
const bcrypt        = require("bcryptjs");
const passport      = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash         = require("connect-flash");


require('./config/passport');  // this line brings in all the stuff from the passport.js file in the config folder


mongoose.connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// activate the flash messages package
app.use(flash());

app.use(session({
  secret: "our-passport-local-strategy-app",
  resave: true,
  saveUninitialized: true
}));  // this block of code configures and activates a session in express

app.use(passport.initialize());  // this line 'turns on' the passport package
app.use(passport.session());  //this line connects passport to the session you created



const index = require('./routes/index');
app.use('/', index);

const indexMovie = require('./routes/indexMovie');
app.use('/', indexMovie);

const indexUser = require("./routes/indexUser");
app.use('/user', indexUser);


module.exports = app;

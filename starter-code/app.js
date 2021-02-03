require('dotenv').config();
require("./config/db.config")

const createError = require("http-errors");
const routes = require("./config/routes")
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');




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
hbs.registerPartials(__dirname + "/views/partials");



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



app.use('/', routes);

// app.use((req, res, next) => {
//   next(createError(404));
// });

// app.use((error, req, res, next) => {
//   console.log(error);
//   if (!error.status) {
//     error = createError(500);
//   }
//   res.status(error.status);
//   res.render("error", error);
// });


module.exports = app;

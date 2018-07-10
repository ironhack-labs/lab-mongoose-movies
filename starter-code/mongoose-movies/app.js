require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

hbs.registerPartials(__dirname + '/views/partials');

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/mongoose-movies', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
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



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';


//routes middlewares is always the last thing in the APP.js
const index = require('./routes/index');
app.use('/', index);

const movieRoutes = require('./routes/movies');
app.use('/', movieRoutes);

const celebs = require('./routes/celebrities');
app.use('/', celebs);

const show = require('./routes/celebrities');
app.use('/', show);

const reviewRoutes = require('./routes/reviewRoutes');
app.use('/', reviewRoutes);
//we can add routes here in the / section of app.use to avoid having to type it out in our routes

module.exports = app;

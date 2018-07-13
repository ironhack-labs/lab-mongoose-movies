//installed irongenerate
require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

//Calling celebrity.js model
const Celebrity    = require('./models/celebritymodelfile');
const Movie        = require('./models/moviemodelfile');


//mongoose promise for activation on local host
mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
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



// default value for title local
app.locals.title = 'Mongoose Movies';



const index = require('./routes/index');
app.use('/', index);

//Makes app look at routes/celebrities.js
const celebrities = require('./routes/celebrities');

//Makes the route link so people see it when they type in site/celebrities
app.use('/', celebrities);


//Makes app look at routes/movies.js
const movies = require('./routes/movies');
app.use('/', movies);

//calls the file so things will be routed there
const reviewRoutes = require('./routes/reviewRoutes');
app.use('/', reviewRoutes);


const apiRoutes = require ('./routes/apiRouter')
app.use('/', apiRoutes);

module.exports = app;

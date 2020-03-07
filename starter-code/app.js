require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const celebritiesSeeds  = require('./bin/seeds')
const Celebrity    = require('./models/celebrity')



mongoose
  .connect('mongodb://localhost/celebrity', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .then(() => {
    return Celebrity.deleteMany({});
  })
  .then(() => {
    console.log("Importing data to Celebrity database")
    return Celebrity.insertMany(celebritiesSeeds)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })
  
//ERROR CREANDO "MOVIES" EN MONGO
/*
  mongoose
  .connect('mongodb://localhost/movie', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .then(() => {
    return Movie.deleteMany({});
  })
  .then(() => {
    console.log("Importing data to Movies database")
    return Movie.insertMany(movieSeeds)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })
*/


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



const index = require('./routes/index');
app.use('/', index);

const indexCelebrities = require('./routes/celebrities');
app.use('/celebrities', indexCelebrities)


module.exports = app;

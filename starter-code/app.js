require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

const data = require('./bin/seeds')
const Celebrity = require('./models/Celebrity')

const moviesData = require('./bin/data')
const Movie = require('./models/Movie')


mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(  async  x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

    await Celebrity.create(data, () => console.log('⭐️ Celebrities DB created!'))
    await Movie.create(moviesData, () => console.log('🍿 Movies DB created!'))

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



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

const index = require('./routes/index');
app.use('/', index);

const celebritiesRoute = require('./routes/celebrities')
app.use('/', celebritiesRoute) /* --- DUDA --- */

const moviesRoute = require('./routes/movies')
app.use('/', moviesRoute) /* --- DUDA --- */

module.exports = app;

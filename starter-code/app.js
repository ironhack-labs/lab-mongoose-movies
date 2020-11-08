require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

const info= require ('./bin/seeds')
const Celebrity = require('./models/celebrity');
const Movie = require('./models/movie');

mongoose
.connect('mongodb://localhost/starter-code', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(x =>{
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  // self.connection.dropDatabase();
  
})
// create a list of celebrities
// .then(() => {
//   Celebrity.insertMany(info)
//   .then(console.log('celebrities were created'))
//   .catch(err => console.log(err))
// })
.then(() => {
  Movie.insertMany(info)
  .then(console.log('movies were created'))
  .catch(err => console.log(err))
})
.catch(error => console.log(error));



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


const celebrities = require('./routes/celebrities');
const movies = require('./routes/movies');
const index = require('./routes/index');
app.use('/', index);
app.use('/', celebrities);
app.use('/', movies);

module.exports = app;

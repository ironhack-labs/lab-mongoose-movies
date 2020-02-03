require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

/*const Celeb=require('./models/Celebrity')

const Movie=require('./models/Movie')
const {celebData,movieData}=require("./bin/seeds")
*/
mongoose
  .connect('mongodb://localhost/movieMongoose', {useNewUrlParser: true})
  .then(/*async*/ x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    /*await Celeb.create(celebData)
    .then(success=>console.log('Celebrities imported to DB'))
    .catch(err=>console.log('Error importing data'))
    await Movie.create(movieData)
    .then(success=>console.log('Movies imported to DB'))
    .catch(err=>console.log('Error importing data'))*/
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
const celebrities = require('./routes/celebRoutes');
app.use('/celebrities', celebrities);
//const movies = require('./routes/moviesRoutes');
//app.use('/movies', movies);


module.exports = app;

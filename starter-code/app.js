require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const index = require('./routes/index');
const celebrities = require("./routes/celebrities");
const movies = require("./routes/movies");

mongoose
.connect('mongodb://localhost/Celebrity', {useNewUrlParser: true,
useUnifiedTopology: true })
.then(dbName => {
 console.log(`Connected to Mongo! Database name: ${dbName.connections[0].name}`)
})
.catch(err => {
 console.error('Error connecting to mongo', err)
});

const app_name = require('./package.json').name;
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
app.locals.Celebrities = 'Celebrities';
app.locals.Movies = 'Movies';


app.use('/', index);
app.use("/celebrities", celebrities);
app.use("/movies", movies);

module.exports = app;

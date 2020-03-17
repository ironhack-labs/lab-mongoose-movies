require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');


mongoose
  .connect('mongodb://localhost/Celebrity-project', {useNewUrlParser: true, useUnifiedTopology:true} )
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



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

/* como acceder a las distintas rutas: (recuerda que para hacerselo más fácil a js vamos a tener las rutas en varios archivos js) */

/* como le digo a la app en que archivo buscar las rutas? */

/* le vamos a decir que las rutas qeu empiexen por / las mire en index.js */

/* y las que empiecen por /celebrities qeu las bbbbbbbusque en celebrities.js */

const index = require('./routes/index.js');
app.use('/', index);

const celebritiesCall /* celebritisCall es el nombre que tu quieras */= require ('./routes/celebrities.js' /* es el archivo .js donde la app tiene que buscar mi ruta */);
app.use ('/celebrities' /* /celebrities es como van a empezar a las rutas */, celebritiesCall /* es como yo haya llamado a mi constante de la linea anterior */);


module.exports = app;

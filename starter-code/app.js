require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
//const modelCelebrity =require('./models/Celebrity') //importar el modelo 

//const {celebrityData} = require('./bin/seeds') //importar la informacion 
mongoose
  .connect('mongodb://localhost/DataCelebrityMovie', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
  .then(/*async*/ x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  //await modelCelebrity.create(celebrityData)}) // se incerta la informacion en el modelo
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
const celeb = require('./routes/celebrityRoute');
app.use('/celebrities', celeb);
const mov = require('./routes/movieRoute');
app.use('/movies', mov);


module.exports = app;

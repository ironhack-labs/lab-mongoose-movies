require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose'); // npm package that allows us as users to communicate with the database
//methods that allow the developer to communicate with the database in the back end  
const logger       = require('morgan');
const path         = require('path');

//movies-app is the name of the db
mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/movies-app', {useMongoClient: true})
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
app.locals.title = 'Express - Generated with IronGenerator';



const index = require('./routes/index');
app.use('/', index);



//at the end so everything is ready
//middleware: 
const celebrities = require('./routes/celebritiesRoutes'); //this is to conect the route!!!!!!
app.use('', celebrities);
const movies = require('./routes/moviesRoutes'); //this is to conect the route!!!!!!
app.use('', movies);
const reviewRouter = require('./routes/reviewRoutes')
app.use('', reviewRouter)

module.exports = app; //last line! dont touch it!!!!!!!

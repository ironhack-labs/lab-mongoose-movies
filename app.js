require('dotenv').config();

// require('./db');

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

const app = express();

// require session
const session = require('express-session');

// ADDED: require mongostore
const MongoStore = require('connect-mongo');

app.use(
  session({
    secret: 'doesnt matter',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }, // 10 minutes
    store: MongoStore.create({
      // <== ADDED !!!
      mongoUrl: "mongodb://localhost/MapUrVacation_app",
      //mongooseConnection: mongoose.connection,
      // ttl => time to live
      // ttl: 60 * 60 * 24 // 60sec * 60min * 24h => 1 day
    })
  })
);

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

mongoose
  .connect('mongodb://localhost/MapUrVacation_app', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);



// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



const index = require('./routes/index');
app.use('/', index);
const celebrities = require('./routes/locations');
app.use('/', celebrities);
const movies = require('./routes/movies');
app.use('/', movies);
const user = require('./routes/userRoutes');
app.use('/', user);


module.exports = app;

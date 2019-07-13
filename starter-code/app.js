require('dotenv').config();

const bodyParser    = require('body-parser');
const cookieParser  = require('cookie-parser');
const express       = require('express');
const favicon       = require('serve-favicon');
const hbs           = require('hbs');
const mongoose      = require('mongoose');
const logger        = require('morgan');
const path          = require('path');
const session       = require("express-session");
const bcrypt        = require("bcryptjs");
const passport      = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User          = require("./models/user");
const flash         = require("connect-flash");

mongoose.set('useCreateIndex', true);

mongoose
  .connect('mongodb://localhost/the-celebrities', {useNewUrlParser: true})
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

// Setup express-session 
app.use(session({
  secret: "our-passport-local-strategy-app",
  resave: true,
  saveUninitialized: true
}));

// Setup passport
passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

app.use(flash());

passport.use(new LocalStrategy({passReqToCallback: true}, (req, username, password, next) => {
  User.findOne({ username }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(null, false, { message: "Incorrect username" });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return next(null, false, { message: "Incorrect password" });
    }

    return next(null, user);
  });
}));

app.use(passport.initialize());
app.use(passport.session());

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

//Global error messages get passed to all hbs temlpates
app.use((req, res, next)=>{
  res.locals.message = req.flash('error');
  next();
})

//ROUTES CELEBRITIES
const index = require('./routes/index');
app.use('/', index);

const celebs = require('./routes/celebrities');
app.use('/', celebs);

const editCeleb = require('./routes/edit');
app.use('/', editCeleb);

const newCeleb = require('./routes/new');
app.use('/', newCeleb);

const deleteCeleb = require('./routes/delete');
app.use('/', deleteCeleb);

const celebrity = require('./routes/celebrity');
app.use('/', celebrity);

//ROUTES MOVIES
const movies = require('./routes/movies');
app.use('/', movies);

const movie = require('./routes/movie');
app.use('/', movie);

const createMovie = require('./routes/createMovie');
app.use('/', createMovie);

const editMovie = require('./routes/editMovie');
app.use('/', editMovie);

const deleteMovie = require('./routes/deleteMovie');
app.use('/', deleteMovie);

//ROUTES SIGN UP AND LOGING
const signUp = require('./routes/signup');
app.use('/', signUp);

const logIn = require('./routes/login');
app.use('/', logIn);

const authRoute = require('./routes/auth-route');
app.use('/', authRoute);

const userProfile = require('./routes/user-profile');
app.use('/', userProfile);

//ROUTES USER POSTS
const userPosts = require('./routes/user-posts');
app.use('/', userPosts);

const allPosts = require('./routes/posts');
app.use('/', allPosts);

//ROUTES FOR AJAX
const ajaxMovies = require('./routes/ajaxMovies');
app.use('/', ajaxMovies);

const ajaxActors = require('./routes/ajaxActors');
app.use('/', ajaxActors);

const ajaxMoviesApi = require('./routes/ajaxMoviesApi');
app.use('/', ajaxMoviesApi);

const ajaxCreateMovie = require('./routes/ajaxCreateMovie');
app.use('/', ajaxCreateMovie);


module.exports = app;

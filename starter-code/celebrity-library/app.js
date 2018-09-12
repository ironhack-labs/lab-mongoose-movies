require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const ensureLogin  = require("connect-ensure-login");
const flash        = require("connect-flash");

const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);
const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('./models/User')
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/celebrity-library', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  // mongoose.connect('mongodb://localhost/recipeApp')
  // .then(() => {
  //   console.log('Connected to Mongo Recipes!')
  // }).catch(err => {
  //   console.error('Error connecting to mongo', err)
  // });

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
      
app.use(session({
  secret: "basic-auth-secret",
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // store session for 1 day
  })
}));

// start passport package -=-=-=-=-=-
app.use(passport.initialize());
app.use(passport.session());

//This will make a user variable available in all templates, provided that req.user is populated. 
//Make sure that you declare that middleware after you declare the passport.session middleware,
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});


// encrypt user info
passport.serializeUser((user, cb) => {
  cb(null, user._id);
});
// decrypt user info for developer use
passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

//connect-flash package =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=--=-=-=-=-=
app.use(flash());

passport.use(new LocalStrategy((username, password, next) => {
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

    return next(null, user, {message: 'Welcome back!'});
  });
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';


const index = require('./routes/index');
app.use('/', index);

const celebritiesRoutes = require('./routes/celebrities');
app.use('/', celebritiesRoutes);

const moviesRoutes = require('./routes/movies');
app.use('/', moviesRoutes);

const theUserRoutes = require('./routes/authRoutes')
app.use('/', theUserRoutes)

const characterRoutes = require('./routes/characters');
app.use('/', characterRoutes);

const theRoutesForApiStuff = require('./routes/apiroutes')
app.use('/api', theRoutesForApiStuff)

passport.use(new GoogleStrategy({
  clientID: process.env.client_id, // stored in .env
  clientSecret: process.env.client_secret,
  callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ googleID: profile.id })
  .then((user, err) => {
    if (err) {
      return done(err);
    }
    if (user) {
      return done(null, user);
    }

    const newUser = new User({
      googleID: profile.id
    });

    newUser.save()
    .then(user => {
      done(null, newUser);
    })
  })
  .catch(error => {
    console.log(error)
  })

}));

// const recipesRoutes = require('./routes/recipes');
// app.use('/', recipesRoutes);

module.exports = app;

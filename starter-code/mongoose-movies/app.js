require('dotenv').config();

const bodyParser      = require('body-parser');
const cookieParser    = require('cookie-parser');
const express         = require('express');
const session         = require("express-session");
const favicon         = require('serve-favicon');
const hbs             = require('hbs');
const mongoose        = require('mongoose');
const logger          = require('morgan');
const path            = require('path');
const ensureLogin     = require("connect-ensure-login");
const flash           = require("connect-flash");
const MongoStore      = require("connect-mongo")(session);
const bcrypt          = require("bcryptjs");
const passport        = require("passport");
const LocalStrategy   = require("passport-local").Strategy;
const GoogleStrategy  = require("passport-google-oauth").OAuth2Strategy;
const User            = require('./models/User')

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/celebrity-application', {useNewUrlParser: true})
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

//passport set up
app.use(session({
  secret: "basic-auth-secret",
  cookie: { maxAge: 60000 },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 
  })
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

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
    return next(null, user, {message: 'you have successfully logged in'});
  });
}));

passport.use(new GoogleStrategy({
  clientID: process.env.google_client_id,
  clientSecret: process.env.google_client_secret,
  callbackURL: "/auth/google/callback",
  proxy: true
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
    return newUser.save()
    .then(user => {
      done(null, newUser);
    })
  })
  .catch(error => {
    console.log(error)
  })
}));
      




// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

app.use(function (req, res, next){
  res.locals = {
    user: req.user
  };
  next();
})

const index = require('./routes/index');
app.use('/', index);

const celebrity = require('./routes/celebrities');
app.use('', celebrity);

const movie = require('./routes/movies');
app.use('', movie);

const signup = require('./routes/authroutes');
app.use('', signup)

const login = require('./routes/authroutes');
app.use('', login)

const apiRoute = require('./routes/apiroutes')
app.use('/api', apiRoute)

module.exports = app;

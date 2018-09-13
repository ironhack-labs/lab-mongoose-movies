require('dotenv').config();

const bodyParser     = require('body-parser');
const cookieParser   = require('cookie-parser');
const express        = require('express');
const app            = express();
const favicon        = require('serve-favicon');
const hbs            = require('hbs');
const mongoose       = require('mongoose');
const logger         = require('morgan');
const path           = require('path');
// const ensureLogin  = require("connect-ensure-login");
const flash          = require("connect-flash");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const session        = require("express-session");
const bcrypt         = require("bcrypt");
const passport       = require("passport");
const LocalStrategy  = require("passport-local").Strategy;
const User           = require('./models/User')
const MongoStore     = require('connect-mongo')(session);

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
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
app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

//Login setup
app.use(session({
  secret: "basic-auth-secret",
  cookie: { maxAge: 60000 },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 
  })
}));

app.use(session({
  secret: "our-passport-local-strategy-app",
  resave: true,
  saveUninitialized: true
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

    return newUser.save()
    .then(user => {
      done(null, newUser);
    })
  })
  .catch(error => {
    console.log(error)
  })

}));

app.use ((req, res, next)=> {
  res.locals.currentUser = req.user;
  next();
})

app.use(flash());


// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

//route for homepage
const index = require('./routes/index');
app.use('/', index);

//route for celebrities
const celebrityRoute = require('./routes/celebrities');
app.use('/', celebrityRoute);

//route for movies
const movieRoute = require('./routes/movies');
app.use('/', movieRoute);

//route for login authentictaion
const userRoute = require('./routes/authRoutes')
app.use('/', userRoute)

module.exports = app;

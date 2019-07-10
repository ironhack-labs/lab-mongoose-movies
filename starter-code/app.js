require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const bcrypt       = require('bcrypt');
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash      = require("connect-flash");
const passport   = require("passport");
const LocalStrategy = require ("passport-local").Strategy;
const User  = require("./model/user");



mongoose
  .connect('mongodb://localhost/celebs', {useNewUrlParser: true})
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

//PassPort Middleware
app.use(session({
  secret: "theSecret",
  cookie: { maxAge: 60000 },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  })
}));

//Passport config
passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

//Flash for errors
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
    
    return next(null, user);
  });
}));

//Passport Start Place below the config
app.use(passport.initialize());
app.use(passport.session());



//Make Flash Messages
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.error         = req.flash('error');
  res.locals.success       = req.flash("success");
  next();
});

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


//Login Redirect 

const authRouter = require('./routes/auth');
app.use('/', authRouter);


//Orignal Route Set Up

const index = require('./routes/index');
app.use('/', index);


//Movies

const movRouter = require('./routes/movieRoute');
app.use('/', movRouter);

//Profile

const routerProfile = require('./routes/profile');
app.use('/', routerProfile);


module.exports = app;

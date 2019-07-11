require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

const session    = require("express-session");
// const MongoStore = require("connect-mongo")(session);

const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const flash = require("connect-flash");
// User model
const User = require('./models/User');

mongoose
  .connect('mongodb://localhost/celebrityDB', {useNewUrlParser: true})
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
app.locals.title = 'My Celebrity App';
// configure session
// app.use(session({
//   secret: "basic-auth-secret",
//   cookie: { maxAge: 60000 },
//   store: new MongoStore({
//     mongooseConnection: mongoose.connection,
//     ttl: 24 * 60 * 60 // 1 day
//   })
// }));
//
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
app.use(flash());




passport.use(new LocalStrategy({
  passReqToCallback: true
},(req, username, password, next) => {
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

//start google oath
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLEID,
  clientSecret: process.env.GOOGLESECRET,
  callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ googleID: profile.id })
  .then(user => {


    if (user) {
      return done(null, user);
    } else{
      // this else means we did not find a user with this googleID 

      User.findOne({email: profile._json.email})
      .then((userWithThatName)=>{

        if(userWithThatName){
          userWithThatName.googleID = profile.id
          userWithThatName.save()
          .then((updatedUser)=>{
            done(null, updatedUser)
          })
          .catch((err)=>{
            next(err);
          })

        } else {
          // this else means theres nobody with that google id or with that name

          const newUser = new User({
            googleID: profile.id,
            email: profile._json.email
          });
      
          newUser.save()
          .then(user => {
            done(null, newUser);
          })
          .catch(error => {
            next(error)
          })


        }

      })
      .catch((err)=>{
        next(err);
      })


    }


  })
  .catch(error => {
    next(error)
  })
  

}));


//end of google oath

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.err = req.flash('error');
  res.locals.yay = req.flash('success');
  
  next();
});

const index = require('./routes/index');
app.use('/', index);

const cele = require('./routes/celebrities');
app.use('/', cele);

const moviez = require('./routes/movies');
app.use('/', moviez);

const userRouter = require('./routes/auth-routes');
app.use('/', userRouter);

app.use('/', require('./routes/secret-routes'));

// const apiRouter = require('./routes/api-celebrity-routes');
app.use('/api/', require('./routes/apicelebrity-routes'));

module.exports = app;

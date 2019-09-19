require('dotenv').config();

const bodyParser    = require('body-parser');
const cookieParser  = require('cookie-parser');
const express       = require('express');
const favicon       = require('serve-favicon');
const hbs           = require('hbs');
const mongoose      = require('mongoose');
const logger        = require('morgan');
const path          = require('path');

const session       = require('express-session');
const MongoStore    = require('connect-mongo')(session);
const flash         = require("connect-flash");
const passport      = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User          = require('./models/user');
const bcrypt        = require('bcryptjs');

const GoogleStrategy = require("passport-google-oauth20").Strategy;

mongoose
  .connect('mongodb://localhost/movie-celebrity-passport', {useNewUrlParser: true})
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
app.locals.title = 'App';




app.use(session({
  secret: "our-passport-local-strategy-app",
  resave: true,
  saveUninitialized: true
}));



app.use(passport.initialize());
// this line is basically turning passport on

app.use(passport.session());
// this line connects the passport instance you just created, with the session that you just created above it




app.use((flash()));





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
  //                                ^
  //                                |
  //                                ------------------------------------
  //                                                                    |
  // passport by default will grab req.body.username and put it right here
// same thing is true for password

  User.findOne({ username }, (err, user) => {
    // in this callbacksyntax err will only exist if something goes wrong
    // user will only exist if everything goes right
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(null, false, { message: "Sorry, wrong username" });
      // whatever message is equal to automatically gets set to req.flash('error')
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return next(null, false, { message: "Incorrect password" });
    }

    return next(null, user);
  });
}));




passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "/users/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // to see the structure of the data in received response:
      console.log("Google account details:", profile);

      User.findOne({ googleID: profile.id })
        .then(user => {
          if (user) {
            done(null, user);
            return;
          }

          let theImage = "";

          if(profile.photos){
            theImage = profile.photos[0].value;
          }

       

          User.create({
             googleID: profile.id ,
             isAdmin: false,
             image: theImage,
             username: profile._json.name
             
            })
            .then(newUser => {
              done(null, newUser);
            })
            .catch(err => done(err)); // closes User.create()
        })
        .catch(err => done(err)); // closes User.findOne()
    }
  )
);






app.use((req, res, next)=>{
  res.locals.theUser = req.user;
  res.locals.errorMessage = req.flash('error');
  res.locals.successMessage = req.flash('success');
  next();
})
// creating a universal variable inside all the hbs files called theUser
// this variable is equal to the user in the session
// that means if there's no user in the session, this variable will be null/undefined (not sure which one)





const index = require('./routes/index-route');
app.use('/', index);


const celebrity = require('./routes/celebrity-routes');
app.use('/celebrities', celebrity);


const movie = require('./routes/movie-routes');
app.use('/movies', movie);


const user = require('./routes/user-routes');
app.use('/users', user);

const adminUser = require('./routes/admin-routes');
app.use('/admin', adminUser);




module.exports = app;

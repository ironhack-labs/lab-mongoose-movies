require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const bcrypt = require('bcryptjs')

const flash = require('express-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session')

const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')
const celebrityRoutes = require('./routes/celebrity');
const movieRoutes = require('./routes/movie');

const User = require('./models/User')

mongoose
    .connect('mongodb://localhost/lab-celebrity', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);
const app = express();

// Auth Setup
app.use(session({
    secret: process.env.HASH_SECRET,
    saveUninitialized: true,
    resave: true,
}));
app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser((user, cb) => cb(null, user._id));

passport.deserializeUser((id, cb) => {
    User.findById(id, (err, user) => {
        if (err) { return cb(err); }
        cb(null, user);
    });
});

passport.use(new LocalStrategy((username, password, next) => {
    User.findOne({ username }, (err, user) => {
        if (err) return next(err);
        if (!user) return next(null, false, { message: "Incorrect username" })
        if (!bcrypt.compareSync(password, user.password)) return next(null, false, { message: "Incorrect password" });
        return next(null, user);
    });
}));

passport.use(
    new GoogleStrategy({
            clientID: process.env.GOOGLE_OATH_CLIENT_ID,
            clientSecret: process.env.GOOGLE_OATH_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_OATH_CALLBACK
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleID: profile.id })
                .then(user => {
                    let userData = { googleID: profile.id, username: profile._json.name, email: profile._json.email, role: 'User' }
                    if (profile.photos) userData.image = profile.photos[0].value
                    if (user) {
                        done(null, user);
                        return;
                    }
                    User.create(userData)
                        .then(newUser => {
                            done(null, newUser);
                        })
                        .catch(err => done(err));
                })
                .catch(err => done(err));
        }
    )
);

app.use(flash());
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    if (req.user) req.user.isAdmin = req.user.role === "Admin"
    res.locals.sessionFlash = req.session.sessionFlash;
    res.locals.failureMsg = req.flash('failure')
    res.locals.messageMsg = req.flash('message')
    res.locals.successMsg = req.flash('success')
    delete req.session.sessionFlash;
    next();
})

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.use(require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    sourceMap: true
}));

// Handlebars Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Folder setup
app.use(express.static(path.join(__dirname, 'public')));
app.use("/bootstrap", express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'Movie Library';

app.use('/', indexRoutes);
app.use('/', authRoutes);
app.use('/me', userRoutes);
app.use('/admin', adminRoutes);
app.use('/celebrities', celebrityRoutes);
app.use('/movies', movieRoutes);

module.exports = app;
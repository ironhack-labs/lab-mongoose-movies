require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash = require("connect-flash");

mongoose.Promise = Promise;
mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

app.use(
  session({
    secret: "shhhhh-super-secret",
    resave: true,
    saveUninitialized: true
  })
);

// PASSPORT
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

app.use(flash());

passport.use(
  new LocalStrategy((username, password, next) => {
    User.findOne({ username }, (err, user) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return next(null, false, {
          message: "Could not locate username, try again"
        });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return next(null, false, {
          message: "Password does not match username"
        });
      }

      return next(null, user);
    });
  })
);

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.err = req.flash("error");
  res.locals.yay = req.flash("success");
  next();
});

//--------------------------------ROUTES-----------------------------------
// these are used to link the routes file that you will be using in your app 
const index = require("./routes/index");
app.use("/", index);
const celebritiesRoutesVar = require("./routes/celebritiesRoutes");
app.use("/", celebritiesRoutesVar);
// (soooo if we put /celeb here then in celb routes i can just start at the page )
const userRoutes = require("./routes/userRoutes");
app.use("/", userRoutes);
const celebAPIRoutes = require('./routes/celebAPIRoutes');
app.use('/celebAPI', celebAPIRoutes);
//user
//-------------------------------------------------------------------------
module.exports = app;

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

// configure the middleware to enable sessions in Express
app.use(
  session({
    secret: "qwlfblfblfqlfqbdlfjhbl", // Used to sign the session ID cookie (required)
    cookie: { maxAge: 60000 }, //Object for the session ID cookie. In this case, we only set the maxAge attribute, which configures the expiration date of the cookie (in milliseconds).
    store: new MongoStore({
      //store sets the session store instance. In this case, we create a new instance of connect-mongo, so we can store the session information in our Mongo database.
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60
    })
  })
);

// add template variable call 'user' to all your views all at the same time so you dont have to go around passing the user into each view separately
app.use((req, res, next) => {
  res.locals.user = req.session.currentUser;
  next();
});

// default value for title local
app.locals.title = "Mongoose Movie";

const index = require("./routes/index");
app.use("/", index);

// signup and login
const userRoutes = require("./routes/user-routes");
app.use("/", userRoutes);

// every time you add new router, you have to set new route here
app.use("/celebrities", require("./routes/celebrities"));

app.use("/movies", require("./routes/movies"));

module.exports = app;

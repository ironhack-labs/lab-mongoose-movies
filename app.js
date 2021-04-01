require("dotenv").config();

const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const logger = require("morgan");
const path = require("path");
var cors = require("cors");

require("./configs/mongoose.config");

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();
app.use(cors());
// require session
require("./configs/session.config")(app);

// Middleware Setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Express View engine setup

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

const index = require("./routes/index");
app.use("/", index);

const authRoutes = require("./routes/auth");
app.use("/", authRoutes);

// app.use(require('./configs/user-check.config'));

// require the routes from module/file
const celebrityRoutes = require("./routes/celebrity");
// tell app to use the routes found in the module
app.use("/", celebrityRoutes);

const movieRoutes = require("./routes/movie");
app.use("/", movieRoutes);

module.exports = app;

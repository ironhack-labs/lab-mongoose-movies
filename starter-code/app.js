//! CONFIG WITH .ENV FILE
require("dotenv").config();

//! REQUIRE FRAMEWORKS && DEPENDENCIES && MIDDLEWARE
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

//! MONGOOSE CONNECTION
mongoose
  .connect("mongodb://localhost/celebrities-project", { useNewUrlParser: true }) // connect to the compass database
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(`${app_name}:${path.basename(__filename).split(".")[0]}`);

const app = express();

//! MIDDLEWARE SETUP
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//!  EXPRESS VIEW ENGINE SETUP
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

//! DEFAULT VALUE FOR TITLE LOCAL
app.locals.title = "Celebrities & You";

//! BASE ROUTES

//Home page route
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

//
const celebritiesRoutes = require("./routes/celebrities.routes");
app.use("/", celebritiesRoutes);

module.exports = app;

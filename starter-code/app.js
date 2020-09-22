require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

mongoose
<<<<<<< HEAD
  .connect("mongodb://localhost/Celebrity-Movies", { useNewUrlParser: true })
=======
  .connect("mongodb://localhost/movies", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
>>>>>>> 07357bd033f2e9ac8a5bf410b73e99bfc5574598
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
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
    sourceMap: true,
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";
<<<<<<< HEAD

const index = require("./routes/index");
const celebrities = require("./routes/celebrities");
app.use("/", index);
app.use("/celebrities", celebrities);
=======
>>>>>>> 07357bd033f2e9ac8a5bf410b73e99bfc5574598

const index = require("./routes/index");
const movies = require("./routes/movies");
app.use("/", index);
app.use("/movies", movies);
module.exports = app;

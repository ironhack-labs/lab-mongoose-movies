// Packages
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

// Routers
const indexRouter = require("./routes/index");
const celebritiesRouter = require("./routes/celebrities");

// App
const app = express();

// Database Connection
mongoose.connect("mongodb://localhost/celebrityDB", {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
})
.then ( () => {
  console.log("Connected to Mongo!")
})
.catch ( (error) => {
  console.error("Error connecting to mongo", error)
});

// View engine setup
app.use(expressLayouts);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("layout", "layouts/main");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Public
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);
app.use("/celebrities", celebritiesRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

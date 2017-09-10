const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const layouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/awesome-project');
//requerir rutas
const index = require('./routes/index.js');
const celebrities = require("./routes/celebrities.js")
const movies = require("./routes/movies.js")


// view engine setup //lineas de configuración para las plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'Mongoose Movies';

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts)


//usar rutas
app.use('/', index)
app.use("/celebrities", celebrities)
app.use("/movies", movies)


// catch 404 and forward to error handler//capturar errores
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development// depurar errores
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

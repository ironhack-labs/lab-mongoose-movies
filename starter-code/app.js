const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');

require('./configs/db.config.js');

const celebritiesRouter = require('./routes/celebrities.routes');

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/* app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
}); */

//should this go here or on a homepage routes?
app.get('/', (req,res,next) => {
    res.render('index');
});
app.use('/celebrities', celebritiesRouter);

// catch 404 and forward to error handler
/* app.use((req, res, next) => {
  next(createError(404));
});

//ERROR HANDLER
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //render error page
    res.status(err.status || 500);
    res.render('error');
}) */

module.exports = app;


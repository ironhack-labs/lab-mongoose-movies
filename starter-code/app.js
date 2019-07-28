require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');


mongoose
  .connect('mongodb://localhost/Celebrities-movies', {useNewUrlParser: true})
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
  app.locals.title = 'Express - Generated with IronGenerator';
  
  
  
  const index = require('./routes/index')
  app.use('/', index)
  
  const celebritiesRoutes = require('./routes/celebrities.routes')
  app.use('/celebrities', celebritiesRoutes)

  const moviesRoutes = require('./routes/movies.routes')
  app.use('/movies', moviesRoutes)
  
  
  module.exports = app
  
  //////////////
  const http = require('http')
  
  // catch 404 and render a not-found.hbs template
  app.use((req, res, next) => {
    res.status(404)
    res.render('not-found')
  });
  
  app.use((err, req, res, next) => {
    // always log the error
    console.error('ERROR', req.method, req.path, err);
  
    // only render if the error ocurred before sending the response
    if (!res.headersSent) {
      res.status(500);
      res.render('error');
    }
  });
  
  let server = http.createServer(app);
  
  server.on('error', error => {
    if (error.syscall !== 'listen') { throw error }
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(`Port ${process.env.PORT} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`Port ${process.env.PORT} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  })
  
  server.listen(process.env.PORT, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
})
  
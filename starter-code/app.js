require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

//const Celebrity = require('./models/Celebrity'); // Import of the model Celebrity from './models/Celebrity'
// const Movie = require('./models/Movie'); // Import of the model Movie from './models/Movie'
// const data = require('./bin/seeds.js');  // Import of the seeds from './bin/seeds.js'
// const data = false;
mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
 
    // data.forEach(element => {
    //   Celebrity.create(element)
    //     .then(celebrity => { console.log('The celebrity is saved and its value is: ', celebrity) })
    //     .catch(err => { console.log('An error happened:', err) });
    
    // });
    // data.forEach(element => {
    //   Movie.create(element)
    //     .then(movie => { console.log('The movie is saved and its value is: ', movie) })
    //     .catch(err => { console.log('An error happened:', err) });
    
    // });
  

  // Celebrity.updateOne({ title: "Rigatoni alla Genovese" }, { duration: 100 })
  //   .then(celebrity => { console.log('The celebrity was updated and its value is: ', celebrity) })
  //   .catch(err => { console.log('An error happened:', err) });
  
  // Celebrity.deleteOne({ title: "Carrot Cake" })
  //   .then(celebrity => { console.log('The celebrity was deleted and its value is: ', celebrity) })
  //   .catch(err => { console.log('An error happened:', err) });
  
  // Celebrity.findOne({ title: "Carrot Cake" })
  // .then(celebrity => { 
  //   console.log('The celebrity is saved and its value is: ', celebrity) 
  // })
  //   .catch(err => { console.log('An error happened:', err) });
  
  // process.on('SIGINT', () => {
  //   mongoose.connection.close(() => {
  //     console.log('Mongoose default connection disconnected through app termination');
  //     process.exit(0);
  //   });
  // });


  
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
app.locals.title = "Movie's and Celebrity's Maker";


const index = require('./routes/index');
app.use('/', index);


module.exports = app;


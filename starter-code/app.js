const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

app.set('view engine', 'hbs');
app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect('mongodb://localhost/mongooseMovies', { useNewUrlParser: true }, function(err) {
    if(err) console.log("ERROR")
    else console.log("connected")
})



// Routing
const index = require('./routes/index.js');
const celebrities = require('./routes/celebrities.js');
const movies = require('./routes/movies.js');
app.use('/', index);
app.use('/', celebrities);
app.use('/', movies);



module.exports = app;


app.listen(3000, () => {
  console.log('listening')
})
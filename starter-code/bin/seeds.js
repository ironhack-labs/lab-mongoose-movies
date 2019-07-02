const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/Movie');
mongoose.connect('mongodb://localhost/lab-mongose-movies', {useNewUrlParser: true});

const models = [
  {name:'Kim Kardashian', occupation:'unknown', catchPhrase:'me be me'},
  {name:'Budha', occupation:'chill',catchPhrase:'Namaste!'},
  {name:'Ryu', occupation:'traveler',catchPhrase:'Oryuken'}];

// Celebrity.insertMany(models).then(data => {
//   console.log('Success: '+data.length);
// }).catch(err=>console.log(err));

const moviemodels = [
  {title:'Once upon a time', genre: 'Drama', plot: 'Best movie ever'},
  {title: 'Titanic 2', genre: 'Drama', plot: 'movie about cruissing'},
]

Movie.insertMany(moviemodels).then(data=>{
  console.log('Succes' + data);
}).catch(err=>console.log(err));
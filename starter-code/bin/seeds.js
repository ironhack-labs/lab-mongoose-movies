let mongoose = require('mongoose');
let Celebrity = require('../models/celebrity.js');

mongoose.connect('mongodb://localhost/movie-db');

let celebs = [{
  name: 'Rick',
  occupation: 'scientist',
  catchPhrase: 'Wubalubadubdub!'
},{
  name: 'Morty',
  occupation: 'sidekick of Rick',
  catchPhrase:'Oh, geez Rick!'
},{
  name: 'Summer',
  occupation: 'sister of Morty',
  catchPhrase: 'Shut up, Morty!'
}];


Celebrity.create(celebs, err => { 
  console.log('If there was an error, it will be printed here:', err);
  mongoose.connection.close();
});
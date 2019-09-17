const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

const celebrities = [
  {
    name: 'Mike Gold',
    occupation: 'Bank Robber',
    catchPhrase: 'Gimme the gold mate or seal your fate'},
  {
    name: 'Joe Speeds',
    occupation: 'Stunt Driver',     
    catchPhrase: 'Hasta la vista baby'},
  {
    name: 'Mandy Snow',
    occupation: 'Actress',
    catchPhrase: "Let it snow"}
]   

const initMovies = [
  {
    title: 'Stapler',
    genre: 'Comedy',
    plot: 'Rob Schneider is a stapler'},
  {
    title: 'Carrot',
    genre: 'Comedy',
    plot: 'Rob Schneider is a carrot'},
  {
    title: 'Da Derp Dee Derp Da Teetley Derpee Derpee Dumb',
    genre: 'Comedy',
    plot: 'Rob Schneider is a Da Derp Dee Derp Da Teetley Derpee Derpee Dumb'},
]  

// Celebrity.insertMany(initCelebs)
//   .then(data => console.log("add successful"))
//   .catch(err => {
//     console.log("error while adding", err);
//   });

Movie.insertMany(initMovies)
  .then(data => console.log("add successful"))
  .catch(err => {
    console.log("error while adding", err);
});

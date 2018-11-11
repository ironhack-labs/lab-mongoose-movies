const mongoose = require ('mongoose');
const Celebrity  = require('../models/Celebrity');
const Movie = require('../models/Movie');

// console.log(Celebrity);
// console.log(Movie);

const dbtitle = 'celebrity-movies';
mongoose.connect(`mongodb://localhost/${dbtitle}`);
Celebrity.collection.drop();
Movie.collection.drop();

const celebrities = [
  {
    name: 'Romulo & Remo',
    occupation: 'fullstack web dev',
    catchPhrase: 'E ai bichao?'
  },
  {
    name: 'Daniel Ferraro',
    occupation: 'Filho de vó',
    catchPhrase: 'ahwwwmn'
  },
  {
    name: 'Jeff Just Left',
    occupation: 'Pimp',
    catchPhrase: 'I dont understand'
  }
];


const movies = [
  {
    title: "The Hunger Games",
    genre: 'adventure',
    plot: 'lorem ispum'
  },
  {
    title: "Harry Potter",
    genre: 'adventure',
    plot: 'lorem ispum'
  },
  {
    title: "Pride and Prejudice",
    genre: 'drama',
    plot: 'lorem ispum'
  }
];



celebrities.map(celebrity => {
  const newCelebrity = new Celebrity(celebrity)
  return newCelebrity.save()
  .then(celebrity => { console.log('A star is born', celebrity)})
  .catch(err => { console.log('Wtfuck?', err)});
});



movies.map(movie => {
  const newMovie = new Movie(movie)
  return newMovie.save()
  .then(movie => { console.log('Lets see the ', movie)})
  .catch(err => { console.log('No movie today', err)});
});


  // mongoose.connection.close();

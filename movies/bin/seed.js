// bin/seeds.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lab-celebrities');
const Celeb = require('../models/celeb');
const Movie = require('../models/movie');

const celebs = [
  {
    name: 'Hulk Hogan',
    occupation: "Bad ass",
    catchPhrase: 'Whatcha gonna do when Hulkamania  Runs Wild on you Brother'
  },
  {
    name: 'Ricky Gervais',
    occupation: 'Stand-up comedian',
    catchPhrase: 'Brilliant'
  },
  {
    name: 'Marilyn Manson',
    occupation: "Freaker",
    catchPhrase: 'I pity anybody who has to spend a day with me.'
  }
];

// Celeb.create(celebs, (err, docs) => {
//   if (err) {
//     throw err;
//   }

//   docs.forEach((celeb) => {
//     console.log(celeb.name)
//   });
//   mongoose.connection.close();
// });


const movies = [
  {
    title: 'Dracula',
    genre: "horror",
    plot: 'Transilvanian love story'
  },
  {
    title: 'Platoon',
    genre: "war drama",
    plot: 'Vietnam war story'
  },
  {
    title: 'Star Wars',
    genre: "sci-fi",
    plot: 'Galaxy far far away story'
  }
];

Movie.create(movies, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((movie) => {
    console.log(movie.title)
  });
  mongoose.connection.close();
});
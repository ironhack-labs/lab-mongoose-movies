const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/moviesDev');

const Celebrity = require('../models/celebrity.js');
const Movie = require('../models/movie.js');

const celebrities = [
  {
    name: 'Im a celeb',
    occupation: 'celebrity',
    catchPhrase: 'lets do this'
  },
  {
    name: 'Im a celeb 2',
    occupation: 'celebrity2',
    catchPhrase: 'lets do this2'
  },
  {
    name: 'Im a celeb 3',
    occupation: 'celebrity3',
    catchPhrase: 'lets do this3'
  },
];

const movies = [
  {
    title: 'Terminator',
    genre: 'action',
    plot: 'Catch a bad guy'
  },
  {
    title: 'Futurama',
    genre: 'comic sci-fi',
    plot: 'Fly in intergalatic space'
  },
  {
    title: 'Star Wars',
    genre: 'drama',
    plot: 'Defeat Darth Vader'
  }
];

Celebrity.create(celebrities, (err, docs) => {
  console.log(`${Celebrity.name} ${Celebrity._id}`);
});

Movie.create(movies, (err, docs) => {
  console.log(`${Movie.name} ${Movie._id}`);
});

mongoose.disconnect();

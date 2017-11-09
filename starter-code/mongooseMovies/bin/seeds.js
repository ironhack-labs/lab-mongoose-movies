const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongooseMovies', {
  useMongoClient: true
});

const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const celebrities = [{
    name: 'Pepe Kalima',
    occupation: 'Actor, Performer',
    catchPhrase: 'The cat is mine, I fuck it as I please.'
  },
  {
    name: 'Nataly de Palma ',
    occupation: 'Singer',
    catchPhrase: 'Se va a mear la perra.'
  },
  {
    name: 'Johny Delano',
    occupation: 'Scandal specialist',
    catchPhrase: 'An apple a day keeps the doctor away.'
  }
];

const movies = [{
    title: 'Cuando amanezca',
    genre: 'Action',
    plot: 'The sun is about to rise and when it does everyone is going to die.'
  },
  {
    title: 'First days in the jungle',
    genre: 'Adventures',
    plot: 'The year when Jenny arrived to the jungle.'
  },
  {
    title: 'Last days in the jungle',
    genre: 'Adventures',
    plot: 'The year when Peter arrived to the jungle.'
  }
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  };
  docs.forEach((celebrity) => {
    console.log(celebrity.name)
  });
  mongoose.connection.close();
});

Movie.create(movies, (err, docs) => {
  if (err) {
    throw err;
  };
  docs.forEach((movie) => {
    console.log(movie.name)
  });
  mongoose.connection.close();
});

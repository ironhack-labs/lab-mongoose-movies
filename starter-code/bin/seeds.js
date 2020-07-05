const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model');

const celebrities = [{
    name: 'Jennifer Aniston',
    occupation: 'actress',
    catchPhrase: 'Don’t make plans, make options.'
  },{
    name: 'David Schwimmer',
    occupation: 'actor',
    catchPhrase: 'We were on a break!'
  },{
    name: 'Matt LeBlanc',
    occupation: 'actor',
    catchPhrase: 'How you doin’?'
  },{
    name: 'Ben Stiller',
    occupation: 'actor',
    catchPhrase: 'Have you ever wondered if there was more to life other than being really, really, ridiculously good looking?'
  }
];

const movies = [{
    title: 'Friends',
    genre: 'Comedy',
    plot: 'Friends sharing a flat in New York',
    actors: ['Jennifer Aniston', 'David Schwimmer', 'Matt LeBlanc']
  }, {
    title: 'Madagascar',
    genre: 'Animation',
    plot: 'A group of animals escape from a zoo in New York and end up in Madagascar',
    actors: ['David Schwimmer', 'Ben Stiller']
  }, {
    title: 'Along came Polly',
    genre: 'Comedy',
    plot: 'A risk analyst falls in love with an old school friend.',
    actors: ['Jennifer Aniston', 'Ben Stiller']
  }
];

Movie.deleteMany()
.then(() => console.log('movies deleted'))
.catch(error => console.log('Error when deleting movies', error))
.then(() => {
  Movie.create(movies)
  .then(moviesDB => console.log(/* moviesDB */))
  .catch(err => console.log('Error when seeding movies', err))
})

Celebrity.deleteMany({})
.then(() => console.log('celebrities deleted'))
.catch(error => console.log('Error when deleting celebrities', error))
.then(() => {
  Celebrity.create(celebrities)
  .then(celebritiesDB => console.log(/* celebritiesDB */))
  .catch(error => console.log('Error while seeding celebrities', error));
})

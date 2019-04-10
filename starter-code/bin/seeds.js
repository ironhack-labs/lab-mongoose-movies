const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');
const mongoose = require('mongoose');

const celebritiesData = [
    {
        "name": "John Smith",
        "occupation": "Actor",
        "catchPhrase": "Hey there"
    },
    {
        "name": "John Doe",
        "occupation": "Chef",
        "catchPhrase": "Time to cook"
    },
    {
        "name": "Joe Drum",
        "occupation": "Musician",
        "catchPhrase": "Time to entertain"
    }
];

const moviesData = [
    {
    title: 'Test', 
    genre: 'Suspense',
    plot: 'Guess the answers'
    },
    {
    title: 'Bingo', 
    genre: 'Comedy',
    plot: 'Who will win the game'
    },
    {
    title: 'Knock-Knock', 
    genre: 'Action',
    plot: 'Who is at the door'
    }
];

Celebrity.create(celebritiesData)
  .then((celebrities) => console.info(`${celebrities.length} new celebrities added to the database`))
  .catch(error => console.error(error))
  .then(() => mongoose.connection.close());

  Movie.create(moviesData)
  .then((movies) => console.info(`${movies.length} new movies added to the database`))
  .catch(error => console.error(error))
  .then(() => mongoose.connection.close());
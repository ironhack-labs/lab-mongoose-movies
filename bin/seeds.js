// bin/seeds.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lab-mongoose-movies');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const celebrities = [
  {
    name        : 'Mr.Potato',
    occupation  : 'Actor',
    catchPhrase : 'Two Potato or No Potato? That\'s the potato',
  },
  {
    name        : 'Lady Patata',
    occupation  : 'Singer',
    catchPhrase : 'P p p potato face',
  },
  {
    name        : 'Dj tater',
    occupation  : 'Musician',
    catchPhrase : 'Trunip for what ?',
  }
];

Celebrity.remove({}, (err, docs) => {
  if (err) { throw err };
  Celebrity.create(celebrities, (err, docs) => {
    if (err) { throw err };

    docs.forEach( (celebrities) => {
      console.log(celebrities.name)
    })
    mongoose.connection.close();
  });
})

const movies = [
  {
    title : 'Invasion of the Potato Snatchers',
    genre : 'Horror',
    plot  : 'Potato Planet is invaded by Potato Snatchers. Mayhem in Potatoville ensues...',
  },
  {
    title : 'Once Upon A Time in Potatoville',
    genre : 'Drama',
    plot  : 'The tale of Potato who thought being something more than just a potato.',
  },
  {
    title : 'Saving Private Patate',
    genre : 'Action, War',
    plot  : 'A group of armed potatos are on a mission, to save private patate from behind the enemy lines. Will they make it...',
  },
];

Movie.remove({}, (err, docs) => {
  if (err) { throw err };
  Movie.create(movies, (err, docs) => {
    if (err) { throw err };

    docs.forEach( (movies) => {
      console.log(movies.title)
    })
    mongoose.connection.close();
  });
})

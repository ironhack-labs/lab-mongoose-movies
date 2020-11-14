const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model');
 
const DB_NAME = "starter-code";
 
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
    {
        name: 'Tom Hanks',
        occupation: 'Actor',
        catchPhrase: "What's up",
      },
      {
        name: 'Jennifer Aniston',
        occupation: 'Actress',
        catchPhrase: "Hola amigos",
      },
      {
        name: 'Anne Hathaway',
        occupation: 'Actress',
        catchPhrase: "Don't worry, be happy",
      },
  ];

  const movies = [
    {
      title: 'Catch me if you can',
      genre: 'Drama',
      plot: 'Tom Hanks movie',
      celebrities: ["Tom Hanks"]
    },

    {
      title: 'One Day',
      genre: 'Drama',
      plot: 'Anne Hathaway movie',
      celebrities: ["Anne Hathaway"]
    },

    {
      title: 'Borat',
      genre: 'Comedy',
      plot: 'Borat movie',
      celebrities: ["Borat"]
    },

  ]
  Celebrity.create(celebrities)
  .then(celebritiesFromDB => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
 
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));


  Movie.create(movies)
  .then(moviesFromDB => {
    console.log(`Created ${moviesFromDB.length} movies`);

    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));
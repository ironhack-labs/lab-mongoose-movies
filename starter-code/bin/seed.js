// bin.seed.js

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = 'celebrities_movies';
mongoose.connect(`mongodb://localhost/${dbName}`);


// -----  CELEBRITIES SEEDS -----
const celebrities = [
  {
    name: 'Keanu Reeves',
    occupation: 'Actor',
    catchPhrase: 'Greater stardom came for playing Neo in the science fiction series The Matrix, beginning in 1999.'
  },
  {
    name: 'Will Smith',
    occupation: 'Actor',
    catchPhrase: 'In 1990, his popularity increased dramatically when he starred in the NBC television series The Fresh Prince of Bel-Air.'
  },
  {
    name: 'Ara Malikian',
    occupation: 'Violinist',
    catchPhrase: 'He gave his first concert at the age of 12.'
  }
];

Celebrity
  .create(celebrities)
  .then(allCelebritiesCreated => {
    console.log(`Created ${allCelebritiesCreated.length} celebrities`);
    mongoose.connection.close();
  })
.catch(err => console.log(err))



// -----  MOVIES SEEDS -----
const movies = [
  {
    title: 'Matrix',
    genre: 'Action',
    plot: 'The world is not how we see it.'
  },
  {
    title: 'Mr. Robot',
    genre: 'Thriller',
    plot: 'It stars Rami Malek as Elliot Alderson, a cybersecurity engineer and hacker with social anxiety disorder and clinical depression.'
  },
  {
    title: 'This Is Us',
    genre: 'Drama',
    plot: 'This Is Us is an American romantic family tragedy television series.'
  }
];

Movie
  .create(movies)
  .then(allMoviesCreated => {
    console.log(`Created ${allMoviesCreated.length} movies`);
    mongoose.connection.close();
  })
.catch(err => console.log(err))
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const Movies = require('../models/Movie.model')

const DB_NAME = 'starter-code';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// const celebrities = [
//   {
//     firstName: 'Brad',
//     lastName: 'Pitt',
//     occupation: 'actor',
//     catchPhrase: 'always on point'
//   },
//   {
//     firstName: 'Celine',
//     lastName: 'Dion',
//     occupation: 'singer',
//     catchPhrase: 'My heart will go on'

//   },
//   {
//     firstName: 'Keanu',
//     lastName: 'Reeves',
//     occupation: 'actor',
//     catchPhrase: 'just in time'
//   }
// ];
// Celebrity.create(celebrities)
//   .then(createdCelebrities => {
//     console.log(`Created ${createdCelebrities.length} celebrities`);
//     //mongoose.connection.close();

//   })
//   .catch(err => {
//     console.log("Error seeded in db ", err)
//   })

const movies = [
  {
    title: "John wick",
    genre: "Action",
    plot: "Assasin retaired try to live but pass work didn't want"
  },
  {
    title: "Kate and Leopold",
    genre: "Romance",
    plot: "Executive women fall in love for a 2000 years old duke that came in her future"
  },
  {
    title: "Titanic",
    genre: "Drama",
    plot: "Love history in the luxoriest sank ship in the 90s"
  }
];
Movies.create(movies)
  .then(createdMovies => {
    console.log(`Created ${createdMovies.length} movies`);

  })
  .catch(err => {
    console.log("Error seeded in db ", err)
  });

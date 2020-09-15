const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

// const celebrities = [
//   {
//     name: 'Leonardo Mezzanotti',
//     occupation: 'actor',
//     catchPhrase: 'Pamonhas fresquinhas',
//   },
//   {
//     name: 'Emanuele Mezzanotti',
//     occupation: 'singer',
//     catchPhrase: 'Neguinho da nega',
//   },
//   {
//     name: 'Clara Mezzanotti',
//     occupation: 'comedian',
//     catchPhrase: 'Tik tok tik tok',
//   },
// ];

const movies = [
  {
    title: 'Peppa Pig',
    genre: 'Animation',
    plot: 'A little pig named Peppa and her little brother George have journeys everyday with their family and friends.',
  },
  {
    title: 'Back to the Future',
    genre: 'Sci-Fi',
    plot: 'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.',
  },
  {
    title: 'Ferris Buellers Day Off',
    genre: 'Comedy',
    plot: 'A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that.',
  },
];

mongoose
  .connect('mongodb://localhost/lab-movies-ironhack', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    // Celebrity.insertMany(celebrities)
    //   .then(celebs => {
    //     console.log(`Inserted ${celebs.length} celebrities`);

    Movie.insertMany(movies)
      .then(mov => {
        console.log(`Inserted ${mov.length} movies`);

        mongoose.connection.close();
      })
      .catch(error => console.log(error));
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

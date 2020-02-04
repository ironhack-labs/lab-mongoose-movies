const mongoose = require('mongoose');
const Movies = require('../models/Movies.model');

const DB_NAME = 'lab-mongoose&express-movies';

mongoose
  .connect('mongodb://localhost/lab-mongoose&express-movies', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const movies = [
      {
        title: 'Inception',
        genre: 'Action',
        plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
      },
      {
        title: 'Peter Pan',
        genre: 'Animation',
        plot: "Wendy and her brothers are whisked away to the magical world of Neverland with the hero of their stories, Peter Pan."
      },
      {
        title: 'Black Swan',
        genre: 'Drama',
        plot: "A committed dancer struggles to maintain her sanity after winning the lead role in a production of Tchaikovsky's 'Swan Lake'."
      }
  ];

  Movies.create(movies, err => {
    if (err) {
      throw err;
    }
    console.log(`Created ${movies.length} movie files`);
    mongoose.connection.close();
  });
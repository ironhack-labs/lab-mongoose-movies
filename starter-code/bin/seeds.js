const mongoose = require('mongoose');

const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

require('../configs/db.config');

// User.collection.drop();

// const seedCelebs = [
//   {
//     name: 'Kanye West',
//     occupation: 'Future president',
//     catchPhrase: 'I am the greatest'
//   },
//   {
//     name: 'Donald Trump',
//     occupation: 'Scumbag',
//     catchPhrase: 'Huge'
//   },
//   {
//     name: 'Bugs Bunny',
//     occupation: 'Fictional rabbit',
//     catchPhrase: `What's up, doc?`
//   }
// ];

// Celebrity.create(seedCelebs)
//   .then(dbUsers => {
//     console.log(`Created ${dbUsers.length} users`);
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(`An error occurred while creating fake users in the DB: ${err}`));

const seedMovies = [
  {
    title: `Monsters, Inc.`,
    genre: 'Animation',
    plot: 'Little kid in monster world causes trouble'
  },
  {
    title: `Titanic`,
    genre: 'Drama',
    plot: 'Man dies because woman hogs door'
  },
  {
    title: `Goodfellas`,
    genre: 'Biopic',
    plot: 'Italians kill other Italians and eat pasta'
  },

];

Movie.create(seedMovies)
  .then(dbMovies => {
    console.log(`Created ${dbMovies.length} movies`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating movies in the DB: ${err}`));
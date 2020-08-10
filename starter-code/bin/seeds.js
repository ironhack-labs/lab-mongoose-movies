const mongoose = require('mongoose');

// const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model');

require('../configs/db.config');

// Celebs
// const footballCelebs = [
//   {
//     name: 'Messi',
//     occupation: 'Attacker',
//     catchPhrase: 'The best decisions aren’t made with your mind, but with your instinct.'
//   },
//   {
//     name: 'Virgil van Dijk',
//     occupation: 'Defender',
//     catchPhrase: 'There are always things we can still learn to perfect.'
//   },
//   {
//     name: 'Cristiano Ronaldo',
//     occupation: 'Attacker',
//     catchPhrase: 'Sou melhor que Messi'
//   }
// ];

// Celebrity.create(footballCelebs)
//   .then(dbCelebs => {
//     console.log(`Created ${dbCelebs.length} celebrities`);
//     mongoose.connection.close();
//   })
//   .catch(err =>
//     console.log(`An error occurred while creating football celebs in the DB: ${err}`)
//   );


// Movies

const fakeMovies = [
  {
    title: 'The Messias and his teammates',
    genre: 'Drama',
    plot: 'The best player in the world has to deal with some bad teammates.'
  },
  {
    title: 'All Good in Liverpool',
    genre: 'Comedy',
    plot: 'After many years of failure, the new team gets ahead of its rival teams.'
  },
  {
    title: 'There always someone better than me...',
    genre: 'Drama',
    plot: 'Even when he is trying everything to be the best in the world, Christiano Ronaldo will always be the second best.'
  }
];

Movie.create(fakeMovies)
  .then(dbMovies => {
    console.log(`Created ${dbMovies.length} celebrities`);
    mongoose.connection.close();
  })
  .catch(err =>
    console.log(`An error occurred while creating fake movies in the DB: ${err}`)
  );
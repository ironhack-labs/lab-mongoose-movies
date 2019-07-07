const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lab-mongoose-movies');
const Celebrity = require('./models/Celebrities');
const Movie = require('./models/Movies');

// Celebrity.create([
//   {
//     name: 'Matt LeBlanc',
//     occupation: 'Joey in "Friends" tv show',
//     catchPhrase: 'How you doin\'?',
//   },
//   {
//     name: 'Hugh Laurie',
//     occupation: 'Famous mostly because "House" tv show',
//     catchPhrase: 'Everybody lies',
//   },
//   {
//     name: 'Jim Parsons',
//     occupation: 'Got really famous on "The Big Bang Theory" tv series',
//     catchPhrase: 'Bazinga',
//   }
//   ]).then(() => console.log('Everything went well!')).catch(err => console.log(err));

  Movie.create([
    {
      title: 'Kill the bees',
      genre: 'Drama',
      plot: 'WHYYYYYYYYYY?',
    },
    {
      title: 'A Brazilian Soldier',
      genre: 'Documentary',
      plot: 'No time, bro',
    },
    {
      title: 'God\'s city',
      genre: 'Drama',
      plot: 'Little dice is no more. Now i\'m Zé Little!',
    }
    ]).then(() => console.log('Everything went well!')).catch(err => console.log(err));
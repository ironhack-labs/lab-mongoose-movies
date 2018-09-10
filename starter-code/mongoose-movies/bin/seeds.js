const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require ('../models/movie')

const dbName = 'celebrity-application';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: 'Evgeni Malkin',
//     occupation: "Hockey Player",
//     catchphrase: "I am Score",
//     },
//   {
//     name: "Johnny Hammer",
//     occupation: "Reality TV Star",
//     catchphrase: "Stop! Screwdriver Time!",
//   },
//   {
//     name: "Reptar",
//     occupation: "Dinosaur",
//     catchphrase: "There's Kids On the Ice!",
//   },

// ]

const movies = [
  {
    title: 'Morning People',
    genre: 'horror',
    plot: 'People wake up in the morning and are instantly happy'
  },
  {
    title: 'Ghost Puncher',
    genre: 'action',
    plot: 'Downtown Chicago can only be saved by one man: A superhero with the ability to punch ghosts!'
  },
  {
    title: 'Moon Jumper',
    genre: 'drama',
    plot: 'A supehero with the ability to jump 1.5x the height of a normal person struggles to adapt after humanity moves to the moon'
  }
]

// Celebrity.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} stars`)
//   mongoose.connection.close()
// });

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} films`)
  mongoose.connection.close()
});
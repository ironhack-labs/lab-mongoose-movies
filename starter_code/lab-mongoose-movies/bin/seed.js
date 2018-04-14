const mongoose = require('mongoose');
const Movie = require('../models/movie.js');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movie = [
  {
    title: "Ready Player One",
    genre: "Adventure",
    plot: "When the creator of a virtual reality world called the OASIS dies, he releases a video in which he challenges all OASIS users to find his Easter Egg, which will give the finder his fortune.",
  },
  {
    title: "A Quiet Place",
    genre: "Horror",
    plot: "A family is forced to live in silence while hiding from creatures that hunt by sound."
  },
  {
    title: "Avengers: Infinity War",
    genre: "Action",
    plot: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
  },
  {
    title: "Jumanji: Welcome to the Jungle",
    genre: "Adventure",
    plot: "Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.",
  },
  {
    title: "Pulp Fiction",
    genre: "Drama",
    plot: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    plot: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  },
  
]

// Celebrity.create(celebrity, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrity.length} celebrities!`)
//   mongoose.connection.close()
// });

// const celebrity = [
//   {
//     name: "Tom Cruise",
//     occupation: "Actor",
//     catchPhrase: "Praise Xenu!",
//   },
//   {
//     name: "Owen Wilson",
//     occupation: "Actor",
//     catchPhrase: "Wow...!",
//   },
//   {
//     name: "Rihanna",
//     occupation: "Singer",
//     catchPhrase: "Umbrella ella, eh, eh!",
//   },
//   {
//     name: "Beyoncé",
//     occupation: "Singer",
//     catchPhrase: "The truth is out there",
//   },
//   {
//     name: "Marlon Brando",
//     occupation: "Actor",
//     catchPhrase: "I'm going to make him an offer he can't refuse",
//   },
//   {
//     name: "Al Pacino",
//     occupation: "Actor",
//     catchPhrase: "Say hello to my little friend",
//   },
//   {
//     name: "JayZ",
//     occupation: "Singer",
//     catchPhrase: "I got 99 problems and a bitch ain't one",
//   },
  
  
// ]

// Celebrity.create(celebrity, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrity.length} celebrities!`)
//   mongoose.connection.close()
// });

Movie.create(movie, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movie.length} movies!`)
  mongoose.connection.close()
});
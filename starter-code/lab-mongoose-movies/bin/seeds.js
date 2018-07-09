const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');
// const Movie = require('../models/movie')
const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebs = [
//   {
//     name: "Kevin",
//     occupation: "Minion",
//     catchPhrase: "Bello!"
//   },
//   {
//     name: "Stuart",
//     occupation: "Minion",
//     catchPhrase: "Bee Do Bee Do Bee Do!"
//   },
//   {
//     name: "Bob",
//     occupation: "Minion",
//     catchPhrase: "Para tu"
//   }
// ];

// Celebrity.create(celebs)
// .then((result) => {
//   console.log(`${result.length} elements added to db.`);
//   mongoose.disconnect();
// })
// .catch((err) => {
//   console.log(err);
// })

// const movies = [
//   {
//     title: "Despicable Me",
//     genre: "Animated Movies",
//     plot: "Meet Gru and his minions. Join them in their journey to become the gratest evil masterminds"
//   }, 
//   {
//     title: "Despicable Me 2",
//     genre: "Animated Movies",
//     plot: "Join our favorite not-so-evil criminals in their attempt to save the world"
//   },
//   {
//     title: "Despicable Me 3",
//     genre: "Animated Movies",
//     plot: "Our minions search for a new boss."
//   }
// ];

// Movie.create(movies)
// .then((result) => {
//   console.log(`${result.length} elements added to db.`);
//   mongoose.disconnect();
// })
// .catch((err) => {
//   console.log(err);
// });
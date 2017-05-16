const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/celebrities');
//
// const Celebrity = require('../models/celebrity.js');
//
//
// const celebrities = [
//   {
//     name: "Arnold Schwarzenegger",
//     occupation: "Retired",
//     catchPhrase: "I'll be back"
//   },
//   {
//     name: "DJ Khaled",
//     occupation: "Producer",
//     catchPhrase: "They don't want you..."
//   },
//   {
//     name: "Leo Di Caprio",
//     occupation: "Actor",
//     catchPhrase: "Gentlemen, you had my curiosity, but now you have my attention"
//   }
// ];
//
// Celebrity.create(celebrities, (err, moviesCelebs) => {
//   if (err) {
//     throw err;
//   }
//
//   moviesCelebs.forEach((oneCelebrity) => {
//     console.log(`New celebrity ${oneCelebrity.name} - >${oneCelebrity._id}`);
//   });
//   mongoose.disconnect();
// });

mongoose.connect('mongodb://localhost/movies');

const Movie = require('../models/movie.js');


const movies = [
  {
    title: "Terminator",
    genre: "Sci-fi",
    plot: "Disguised as a human, a cyborg assassin known as a Terminator (Arnold Schwarzenegger) travels from 2029 to 1984 to kill Sarah Connor (Linda Hamilton). Sent to protect Sarah is Kyle Reese (Michael Biehn), who divulges the coming of Skynet, an artificial intelligence system that will spark a nuclear holocaust. Sarah is targeted because Skynet knows that her unborn son will lead the fight against them. With the virtually unstoppable Terminator in hot pursuit, she and Kyle attempt to escape. "
  },
  {
    title: "Shottas",
    genre: "Comedy",
    plot: "Deported from the United States, two drug dealers (Ky-Mani Marley, Spragga Benz) travel to Miami and continue their violent ways."
  },
  {
    title: "Django Unchained",
    genre: "Actor",
    plot: "Two years before the Civil War, Django (Jamie Foxx), a slave, finds himself accompanying an unorthodox German bounty hunter named Dr. King Schultz (Christoph Waltz) on a mission to capture the vicious Brittle brothers. Their mission successful, Schultz frees Django, and together they hunt the South's most-wanted criminals. Their travels take them to the infamous plantation of shady Calvin Candie (Leonardo DiCaprio), where Django's long-lost wife (Kerry Washington) is still a slave."
  }
];

Movie.create(movies, (err, movieArray) => {
  if (err) {
    throw err;
  }

  movieArray.forEach((oneMovie) => {
    console.log(`New movie ${oneMovie.title} - >${oneMovie._id}`);
  });
  mongoose.disconnect();
});

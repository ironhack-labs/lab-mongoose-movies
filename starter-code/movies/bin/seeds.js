const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies', {useMongoClient: true});

// const Celebrity = require('../model/celebrity');
//
// const celebrity = [
//  {
//    name  : "Nicolas Cage",
//    occupation : "Actor",
//    catchPhrase   : "Live the moment",
//  },
//
//  {
//    name  : "Judith Mascó",
//    occupation : "Model",
//    catchPhrase   : "Happy month",
//  },
//
//  {
//    name  : "Alejandro Sanz",
//    occupation : "Singer",
//    catchPhrase   : "Don't touch the music",
//  },
// ];
//
// Celebrity.collection.drop();
//
// Celebrity.create(celebrity, (err, docs) => {
//   if (err) {
//     throw err;
//   }
//
//   docs.forEach((celebrity) => {
//     console.log(celebrity.name);
//   });
//
//   mongoose.connection.close();
// });

const Movies = require('../model/movies');

const movies = [
 {
   title  : "gosth",
   genre : "Romantic",
   plot   : "Sam and Molly are a very happy couple and deeply in love. Walking back to their new apartment after a night out at the theatre, they encounter a thief in a dark alley, and Sam is murdered.",
 },

 {
   title  : "Tears and Smiles",
   genre : "Musical",
   plot   : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
 },

 {
   title  : "Gone with the Wind",
   genre : "Comedy",
   plot   : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
 },
];

Movies.collection.drop();

Movies.create(movies, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((movie) => {
    console.log(movie.title);
  });

  mongoose.connection.close();
});

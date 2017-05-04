// bin/seeds.js

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lab-mongoose-movies');

//Commented the section below because I don't want to create duplicates of all the celebrities.
// const Celebrity = require('../models/celebrity-model.js');

// const celebrities = [{
//     name: 'Selena Gomez',
//     occupation: 'Actress and singer',
//     catchPhrase: "People are so mean, it's exhausting."
//   },
//   {
//     name: 'Cristiano Ronaldo',
//     occupation: 'Soccer player',
//     catchPhrase: 'Talent without working hard is nothing.'
//   },
//   {
//     name: 'Beyoncé',
//     occupation: 'Singer, songwriter and actress',
//     catchPhrase: 'Do what you were born to do. You just have to trust yourself!'
//   }
// ];
//
//
// // db.products.insertMany()
// Celebrity.create(celebrities, (err, celebrityDocs) => {
//   if (err) {
//     throw err;
//   }
//
//   celebrityDocs.forEach((oneCelebrity) => {
//     console.log(`NEW CELEB ${oneCelebrity.name} -> ${oneCelebrity._id}`);
//   });
// });

const Movie = require('../models/movies-model.js');

const movies = [{
    name: 'Deadpool',
    genre: 'Action, Adventure, Comedy, Romance, Sci-Fi',
    plot: "After a fast-talking mercenary is diagnosed with terminal cancer, he finds the possibility of healing in a scientific experience of a covert organization. Recovered, with accelerated healing factor and an unusual sense of humor, he adopts the alter-ego Deadpool to seek revenge against the man who destroyed his life (and his face).",
    imageUrl:'https://media.giphy.com/media/l0MYDGA3Du1hBR4xG/giphy.gif'
  },
  {
    name: 'Logan',
    genre: 'Action, Drama, Sci-Fi, Thriller',
    plot: 'In the near future, a weary Logan cares for an ailing Professor X somewhere on the Mexican border. However, Logans attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.',
    imageUrl: 'https://media.tenor.co/images/e01bfc9933a79104aee90f559305ff97/tenor.gif'
  },
  {
    name: 'Moana',
    genre: 'Animation, Adventure, Comedy, Family, Fantasy, Musical',
    plot: 'Moana is a daughter of the chief of her tribe. Coming from a long line of navigators she sets off for a fabled island with her hero, the demigod Maui. Along the voyage they battle the treacherous ocean and all which it hides, all the while learning what the power love between friends can accomplish.',
    imageUrl: 'https://media4.giphy.com/media/l0HlN4JG1HayVviP6/giphy.gif'
  }
];


// db.products.insertMany()
Movie.create(movies, (err, movieDocs) => {
  if (err) {
    throw err;
  }

  movieDocs.forEach((oneMovie) => {
    console.log(`NEW MOVIE ${oneMovie.name} -> ${oneMovie._id}`);
  });
});

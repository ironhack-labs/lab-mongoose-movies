const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movieApp', {useMongoClient: true});
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const celebrities = [
    {
        name: "Brad Pitt",
        occupation: "Actor",
        catchPhrase: "Give me more whisky"
    },
    {
        name: "Mel Gibson",
        occupation: "Actor",
        catchPhrase: "Something awful"
    },
    {
        name: "Jennifer Lawrence",
        occupation: "Actor",
        catchPhrase: "FAAAAAAME"
    }
];

// const movies = [
//     {
//         title: "Titanic",
//         genre: "Utter Shite",
//         plot: "Naked Painting"
//     },
//     {
//         title: "Usual Suspects",
//         genre: "Mystery",
//         plot: "Who is Kaizer Sozé?"
//     },
//     {
//         title: "Star Trek",
//         genre: "Sci-Fi",
//         plot: "Burn 100s of episodes of star trek to the ground"
//     }
// ];

Celebrity.create(celebrities, (err, docs) => {
    if (err) {
      throw err;
    }
  
    docs.forEach((celebrity) => {
      console.log(celebrity.name)
    });
    mongoose.connection.close();
  });

  // Movie.create(movies, (err, docs) => {
  //   if (err) {
  //     throw err;
  //   }
  
  //   docs.forEach((movie) => {
  //     console.log(movie.title)
  //   });
  //   mongoose.connection.close();
  // });
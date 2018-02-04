const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/movies");
const Movie = require("../models/movie");

// const celebrities = [
//   {
//     name: "Natalie Portman",
//     occupation: "Actress",
//     catchPhrase: "I saw her in Paris"
//   },
//   {
//     name: "Roger Federer",
//     occupation: "Tennis Player",
//     catchPhrase:
//       "In an era of specialists, you’re either a clay court specialist, a grass court specialist, or a hard court specialist…or you’re Roger Federer"
//   },
//   {
//     name: "George Clooney",
//     occupation: "Actor",
//     catchPhrase:
//       "I find that as you get older, you start to simplify things in general"
//   }
// ];

// Celebrity.create(celebrities, (err, docs) => {
//   if (err) throw err;
//   docs.forEach(celebrity => {
//     console.log(celebrity.name);
//   });
//   mongoose.connection.close();
// });

const movies = [
  {
    title: "The Dark Knight",
    genre: "Action",
    plot: "AAAAA"
  },
  {
    title: "Les Misérables",
    genre: "Drama",
    plot: "BBBBB"
  },
  {
    title: "Juno",
    genre: "Commedy",
    plot: "CCCCC"
  }
];

Movie.create(movies, (err, docs) => {
  if (err) throw err;
  docs.forEach(movie => {
    console.log(movies);
  });
  mongoose.connection.close();
});

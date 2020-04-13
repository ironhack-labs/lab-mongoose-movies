
const mongoose = require('mongoose');
const Movie = require('../models/movie');


mongoose.connect(`mongodb://localhost/mongoose-movies`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const movies = [
  {
    title: "The Yolonaut",
    genre: "Trashmovies",
    plot: "nothing really happens"
  },
  {
    title: "All Cats",
    genre: "Animals",
    plot: "Lots of purrs and paws"
  },
  {
    title: "Guitars in heaven",
    genre: "Musical",
    plot: "It's acutally not a musical, I hate musicals!"
  },
];

Movie.create(movies).then(() => {
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});



// const Celeb = require('../models/celebrity');

// mongoose.connect(`mongodb://localhost/mongoose-movies`, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const cel = [
//   {
//     name: "Dave Grohl",
//     occupation: "Singer",
//     catchPhrase: "I've got another confession to make"
//   },
//   {
//     name: "Greg Graffin",
//     occupation: "Singer",
//     catchPhrase: "Ya hey!"
//   },
//   {
//     name: "Karl Marx",
//     occupation: "Author",
//     catchPhrase: "Proletarier aller Länder, vereinigt euch!"
//   },
// ];

// Celeb.create(cel).then(() => {
//   console.log(`Created ${cel.length} celebrities`);
//   mongoose.connection.close();
// });
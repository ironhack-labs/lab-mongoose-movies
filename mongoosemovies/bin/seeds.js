const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongooseMovies');
// const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const celebObj = [
  {
		name       		: "Harvey Dent",
		occupation    : "Playa",
		catchPhrase   : "Justice"
  },
  {
		name       		: "Penguin",
		occupation    : "Waddling",
		catchPhrase   : "Come back here"
  },
  {
		name       		: "Pongo",
		occupation    : "Dog",
		catchPhrase   : "Woof much?"
  }
];

const movieObj = [
  {
		title  : "Harvey Goes to Hollywood",
		genre  : "Thriller",
		plot   : "Watch out for Harvey"
  },
  {
		title  : "Ice wars",
		genre  : "Drama",
		plot   : "Penguins can kick ass too"
  },
  {
		title  : "Beauty and the Tramp",
		genre  : "Doggy RomCom",
		plot   : "The most beautiful thing you've ever seen"
  }
];

// Celebrity.create(celebObj, (err, docs) => {
//   if (err) { throw err };
//
//   docs.forEach( (fakeCeleb) => {
//     console.log(fakeCeleb.name)
//   })
//   mongoose.connection.close();
// });

// Movie.create(movieObj, (err, docs) => {
//   if (err) { throw err };
//
//   docs.forEach( (fakeMovie) => {
//     console.log(fakeMovie.title)
//   })
//   mongoose.connection.close();
// });

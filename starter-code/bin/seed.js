const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.js');
const Movie = require('../models/Movie.js');
const MovCeleb = require('../models/MovCeleb');

const dbName = 'starter';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [
  {
    name: 'John Cena',
    occupation: 'Wrestler Badman',
    catchPhrase: 'JOHHHNNN CENNNNAA!'
  },
  {
    name: 'Brian Cranston',
    occupation: 'Chemist',
    catchPhrase: 'Say my name!'
  },
  {
    name: 'Rita Ora',
    occupation: 'Sub-Stanard Singer',
    catchPhrase: 'Ugnhhhhh!'
  }
];


const movies = [
  {
    title: "The Good, The Bad, The Average" ,
    genre: "Western",
    plot: "A good old fashioned western banger" ,
  },
  {
    title: "Isle of Dogs" ,
    genre: "Adventure" ,
    plot: "Dogs are being mercilessly removed from society...",
  },
  {
    title: "A Tale of Two Cities" ,
    genre: "Mystery",
    plot: "I can't remember" ,
  }
]

const movCelbs = [
  {}
]

MovCeleb.create(movCelbs)
.then(movCelebs => {
  console.log(`Database updated with ${movCelebs.length} movies!`);
});


// Movie.create(movies)
// .then(movies => {
//   console.log(`Database updated with ${movies.length} movies!`);
// });

Celebrity.create(celebrities)
.then(celebrities => {
  console.log(`Database updated with ${celebrities.length} celebs!`);
});


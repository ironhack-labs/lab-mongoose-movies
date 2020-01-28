 const mongoose = require('mongoose');
 const Movie = require('../models/movie');
// const Celeb = require('../models/celebrity');


mongoose
  .connect('mongodb://localhost/movie-celebrity-passport', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));




// let celebArray = [
//   {
//     name: 'Jennifer Muniz',
//     occupation: 'Ironhack',
//     catchPhrase: 'Oh no!'
//   },

//   {
//     name: 'Spongebob Squarepants',
//     occupation: 'Krusty Krab',
//     catchPhrase: 'Who lives in a pineapple under the sea'
//   },

//   {
//     name: 'Harry Potter',
//     occupation: 'Auror',
//     catchPhrase: 'Expelliarmus!'
//   }
// ]


// Celeb.create(celebArray);






let movieArray = [
  {
    title: 'Harry Potter and the Deathly Hallows',
    genre: 'fantasy',
    plot: 'Without the guidance and protection of their professors, Harry (Daniel Radcliffe), Ron (Rupert Grint) and Hermione (Emma Watson) begin a mission to destroy the Horcruxes, the sources of Voldemort\'s immortality. Though they must rely on one another more than ever, dark forces threaten to tear them apart. Voldemort\'s Death Eaters have seized control of the Ministry of Magic and Hogwarts, and they are searching for Harry -- even as he and his friends prepare for the ultimate showdown.'
  },

  {
    title: 'Jen\'s life',
    genre: 'drama',
    plot: 'Jen is awesome!'
  },

  {
    title: 'The Spongebob Squarepants Movie',
    genre: 'comedy',
    plot: 'In this lively animated adventure, undersea oddball SpongeBob SquarePants and his starfish friend, Patrick, embark on a quest to clear the name of Mr. Krabs, the owner of the Krusty Krab restaurant, who has been framed for stealing the crown of ocean deity King Neptune. Leaving the familiar confines of Bikini Bottom, SpongeBob and Patrick venture out towards Shell City, where they hope to find Neptune\'s crown, but numerous obstacles stand (or float) in their way.'
  }
]



Movie.create(movieArray);


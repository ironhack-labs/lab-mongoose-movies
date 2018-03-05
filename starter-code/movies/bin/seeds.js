const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-movies');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

// const celebrities =[
//   {name: "Michael Jordan",
//   occupation: "Athlete",
//   catchPhrase: "Be Like Mike"}, 
 
//   {name: "Dave Chapelle",
//   occupation: "Comedian",
//   catchPhrase: "I'm Rick James!"  
// },

// {name: "The Rock",
// occupation: "Actor/Entertainer",
// catchPhrase: "Do you smell what the Rock is cooking?"}
// ]

// Celebrity.create(celebrities, (err, docs) => {
//   if (err) {
//     throw err;
//   }

//   docs.forEach((celebrity) => {
//     console.log(celebrity.name)
//   });
//   mongoose.connection.close();
// });

//Movies DB Test
const movies =[
  {title: "SpaceJam",
  genre: "Comedy",
  plot: "Michael Jordan and NBA Players must beat a group of aliens in a basketball game to save the world from invasion"}, 
 
  {title: "Lord Of the Rings",
  genre: "Action/Adventure/Fantasy",
  plot: "A group of Hobbits embark on a quest to destroy the Ring to prevent the dark lord Sauron from conquering the world"  
},

{title: "Jumnaji",
genre: "Action/Adventure",
plot: "A group of teenagers gets stuck in a board game and must beat the game to survive"}
]

Movie.create(movies, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((movie) => {
    console.log(movie.title)
  });
  mongoose.connection.close();
});
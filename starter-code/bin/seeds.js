const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');

const dbtitle = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });


// Celebrity.collection.drop();


const Movie = require('../models/movie');
Movie.collection.drop();

// const celebrities = [
//   {
//     name: "Gribouille",
//     occupation: "Teddy Bear", 
//     catchPhrase: "Be sweet"
//   },
//   {
//     name: "Bobby Fischer",
//     occupation: "Chess Player", 
//     catchPhrase: "Best by test"
//   },
//   {
//     name: "Augustus",
//     occupation: "Imperator", 
//     catchPhrase: "Make haste slowly."
//   },
 
// ]

const fakeMovies =  [
    {
      title: "The teddy bear on fire",
      genre: "Drama", 
      plot: "A teddy bear goes and use a wet match to threat the teddy bears population"
    },
    {
      title: "A day in 1968",
      genre: "Documentary", 
      plot: "Images of 1968 year gathered in one wonderful documentary"
    },
    {
      title: "Troie",
      genre: "Epic", 
      plot: "This legendary story again in our screens"
    },
   
  ]

  Movie.create(fakeMovies)
  .then( movie => console.log(movie))
  .catch(err => console.log(err))




// Celebrity.create(celebrities)
//     .then( celebrity => console.log(`The celebrity ${celebrity.name} is saved`))
//     .catch(err => console.log(err))


const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')

mongoose
  .connect('mongodb://localhost/MongooseMovies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  
// const celebs = [
//   {
//     name: "Bobby",
//     occupation: "Student",
//     catchPhrase: "Fun Bobby.",
//   },
//   {
//     name: "Ultra Fake",
//     occupation: "Influencer",
//     catchPhrase: "Something"
//   },
//   {
//     name: "A Name",
//     occupation: "A Job",
//     catchPhrase: "Nopppppeee"
//   }
// ]
// Celebrity.create(celebs);

// const movies = [
//   {
//     title: "First Fake Title",
//     genre: "Fake",
//     plot: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam odio repellat fuga consequuntur tenetur atque, nostrum blanditiis tempore! Quis, architecto.",
//   },
//   {
//     title: "Ultra Fake Title",
//     genre: "Fake",
//     plot: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam odio repellat fuga consequuntur tenetur atque, nostrum blanditiis tempore! Quis, architecto.",
//   },
//   {
//     title: "Completely Fake",
//     genre: "Fake",
//     plot: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam odio repellat fuga consequuntur tenetur atque, nostrum blanditiis tempore! Quis, architecto.",
//   }
// ]
// Movie.create(movies);
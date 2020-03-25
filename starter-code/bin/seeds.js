const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const Movie = require('../models/movie');

const movies =[
  {
    title: "Titanic",
    genre:"drama",
    plot:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },{
    title: "Forest Gump",
    genre:"drama",
    plot:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },{
    title: "Baunty hunter",
    genre:"drama",
    plot:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]

Movie.create(movies)
  .then(movies => {
    console.log('created movies', movies)
    mongoose.connection.close()
  })

  // const Celebrity = require('../models/celebrity');

// const celebrities = [
//     {
//         name: "Tom Hanks",
//         occupation: "actor",
//         catchPhrase:"love you life"
//     },{
//         name: "Daffy Duck",
//         occupation: "comedian",
//         catchPhrase:"make fun of life"
//     },{
//         name: "Beyonce",
//         occupation: "singer",
//         catchPhrase:"music is my life"
//     }]

// Celebrity.create(celebrities)
//   .then(celebrities => {
//       console.log('created celebrities: ', celebrities)
//       mongoose.connection.close()
//   })

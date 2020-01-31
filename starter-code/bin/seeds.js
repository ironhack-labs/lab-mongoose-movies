const celebs = [
  {
      name: "Marcel Pagnol",
      occupation: "writer",
      catchPhrase: "Allez l\'OM"
  },
  {
      name: "Akhenaton",
      occupation: "rapper",
      catchPhrase: "Oh fada!"
  },
  {
      name: "Le Corbusier",
      occupation: "architect",
      catchPhrase: "Degun?"
  }
];

// const celebModel = require("./../models/celeb-model")
// const mongoose = require('mongoose');

// mongoose
//   .connect('mongodb://localhost/celebrities', {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });

// celebModel.insertMany(celebs)
// .then(dbSuccess => {
//   console.log("celebs inserted successfully", dbSuccess)
// })
// .catch(dbErr => {
//   console.log("oh no, error connecting to mongo", dbErr)
// })


const movies = [
  {
      title: "Godfather",
      genre: "Drama",
      plot: "Marlon Brando carress his cat. How will it react ?"
  },
  {
      title: "Les Misérables",
      genre: "Drama",
      plot: "Où est Johnny ?"
  },
  {
    title: "Hana-Bi",
    genre: "Drama",
    plot: "Cancer and fireworks"
  }
];

const movieModel = require("./../models/movie-model")
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/celebrities', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

movieModel.insertMany(movies)
.then(dbSuccess => {
  console.log("movies inserted successfully", dbSuccess)
})
.catch(dbErr => {
  console.log("oh no, error connecting to mongo", dbErr)
})
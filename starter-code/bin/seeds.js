// const celebrityModel = require("./../models/Celebrity");
const movieModel = require("./../models/Movie")
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

/* const celebrities = [
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


celebrityModel.create(celebrities)
.then(dbSuccess => {
  console.log("celebrities inserted successfully", dbSuccess)
})
.catch(dbErr => {
  console.log("oh no, error connecting to mongo", dbErr)
});

module.exports = celebrities; */

const movies = [
  {
    title: "A bout de souffle",
    genre: "drama",
    plot: "plot ABDS"
  },

  {
    title: "Machete",
    genre: "comedy",
    plot: "plot Machete"
  },

  {
    title: "Star Wars",
    genre: "fantasy",
    plot: "plot Star Wars"
  }
];

movieModel.create(movies)
.then(dbSuccess => {
  console.log("movies inserted successfully", dbSuccess)
})
.catch(dbErr => {
  console.log("oh no, error connecting to mongo", dbErr)
});

module.exports = movies;
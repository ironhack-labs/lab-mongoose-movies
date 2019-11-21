const Movie = require("../models/movie")
const mongoose = require("mongoose")

/*const celebrities = [
    { 
    name: "George Clooney",
    occupation: "actor",
    catchPhrase: "what else"
},
    {
    name: "Ctangana",
    occupation: "singer",
    catchPhrase: "el madrileno"
    },
    {
    name: "La Rosalia",
    occupation: "singer",
    catchPhrase: "la rosalia"
    }
]*/

const movies = [
    { 
    title: "Avtar",
    genre: "action",
    plot: "jungleeee"
},
    {
    title: "Titanic",
    genre: "drama",
    plot: "boat and stuff"
    },
    {
    title: "Enemy",
    genre: "Drama",
    plot: "mind fuck"
    }
]


mongoose
  .connect('mongodb://localhost/mongoose-movies', { useUnifiedTopology: true, useNewUrlParser: true })
  .then(async () => {
    const allMovies = await Movie.create(movies);
    console.log(`${allMovies.length} created successfully`);
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
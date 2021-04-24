const mongoose = require('mongoose');
const Movie = require("../models/movie.model")

const someMovies = [
  { 
    title: 'The Dark Knight',
    genre: 'Action',
    plot: "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees."
  },
  { 
    title: 'Wonder Woman',
    genre: 'Adventure',
    plot: "Princess Diana of an all-female Amazonian race rescues US pilot Steve. Upon learning of a war, she ventures into the world of men to stop Ares, the god of war, from destroying mankind."
  },
  { 
    title: 'Batman',
    genre: 'Fantasy',
    plot: "Batman, a masked vigilante from Gotham City, fights against evil to keep its citizens safe. He must battle Jack Napier, who turns into the Joker and threatens to take over Gotham City."
  }
]

mongoose
  .connect('mongodb://localhost/starter-code', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

    Movie.create(someMovies)
      .then(resCreateSeeds => {
        console.log(`Seeds created: ${resCreateSeeds}`);

        mongoose.connection.close();
      })
      .catch(seedsError => console.error(`ERROR creating seeds: ${seedsError}`))
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
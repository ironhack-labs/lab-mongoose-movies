const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movies");

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const celebrities = [
  {
    name: "Nicolas Cage",
    occupation: ["Actor...?", "Comedian...?", "Undefined"],
    catchPhrase: "Nobody knows how it feels beeing the worst actor in the world"
  },
  {
    name: "Robert Darwin jr",
    ocuppation: ["Actor", "Iron-man", "Sherlock Holmes"],
    catchPhrase: "I'm Iron-man"
  },
  {
    name: "Ian McKellen",
    occupation: ["Actor", "Gandalf", "Magneto"]
  }
];

const movies = [
  {
    title: "The Lord of rings",
    genre: "Fantasy",
    plot: "A little guy has to throw a ring to a volcano"
  },
  {
    title: "Harry Potter",
    genre: "Fantasy",
    plot: "Muggles"
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});

Movie.create(movies, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});

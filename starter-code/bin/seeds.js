const mongoose = require("mongoose");
const Celebrities = require("../models/Celebrity");
const Movies = require("../models/Movie");

mongoose
  .connect("mongodb://localhost/movies", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Celebrities.deleteMany().then(() => {
  const celebrities = [
    {
      name: "Kirk Douglas",
      occupation: "Actor",
      catchPhrase: "He muerto"
    },
    {
      name: "Michael Douglas",
      occupation: "Actor",
      catchPhrase: "Me drogo"
    },
    {
      name: "Estefania",
      occupation: "Farandula",
      catchPhrase: "Me tiro a todo el mundo"
    }
  ];
  Celebrities.insertMany(celebrities);
});

Movies.deleteMany().then(() => {
  const movies = [
    {
      name: "The Open House",
      genre: "Thriller",
      plot: "Following a tragedy, a mother and her teen son move to a relative's vacant vacation home, where eerie and unexplained forces conspire against them."
    },
    {
      name: "TPuta",
      genre: "Thriller",
      plot: "Following a "
    },
    {
      name: "House",
      genre: "Thriller",
      plot: "A tragedy"
    }
  ];
  Movies.insertMany(movies);
});

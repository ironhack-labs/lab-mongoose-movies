const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

mongoose.Promise = Promise;
mongoose
  .connect("mongodb://localhost/mongoose-movies", { useMongoClient: true })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

  const celebrities = [
    {
      name: "Sylvester Stallone",
      occupation: "actor",
      catchPhrase: "It's not my war"
    },
    {
      name: "Jean Claude Vandame",
      occupation: "guru",
      catchPhrase: "C'est bon les pommes, c'est plein de pectine"
    },
    {
      name: "Yves Lingier",
      occupation: "baker",
      catchPhrase: "Qu'est ce qu'on mange?"
    }
  ]

  const movies = [
    {
      title : "Godzilla",
      genre : "Action",
      plot : "A big monster is rampaging"
    },
    {
      title : "Leon",
      genre : "Action",
      plot : "Leon is a badass killer"
    },
    {
      title : "Seven",
      genre : "Thriller",
      plot : "Let's follow a serial killer"
    }
  ]

  // Celebrity.create(celebrities)
  // .then(() => {
  //   console.log(`Created ${celebrities.length} celebrities in database`);
  //   mongoose.connection.close();
  // })
  // .catch(err => {
  //   console.log("Error", err);
  // });

  Movie.create(movies)
  .then(() => {
    console.log(`Created ${movies.length} movies in database`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log("Error", err);
  })
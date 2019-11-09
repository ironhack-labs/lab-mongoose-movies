const mongoose = require("mongoose");
const Celebrity = require("../models/celebrities.js");
const Movie = require("../models/movies");

const celebs = [
  {
    name: "Chuck Norris",
    occupation: "Actor",
    catchPhrase: "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois"
  },
  {
    name: "Beyonce",
    occupation: "singer",
    catchPhrase: "I woke up like this"
  },
  {
    name: "Mona Chollet",
    occupation: "author",
    catchPhrase:
      "Non, décidément, ‘il n’y a de mal à vouloir être belle’. Mais il serait peut-être temps de reconnaître qu’il n’y a aucun mal non plus à vouloir être."
  }
];

const movies = [
  {
    title: "Au coeur du rivage",
    genre: "Romance",
    plot:
      "Adam(Chuck Norris) falls in love with Berta (Beyonce) who doesn't feel like it"
  }
];

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// Celebrity.insertMany(celebs)
// .then(dbresult => {
//   console.log("the celebs have been inserted");
// })
// .catch(dberror => console.log(dberror));

Movie.insertMany(movies)
  .then(dbresult => {
    console.log("the movies have been inserted");
  })
  .catch(err => {
    console.error("Damn, error connecting to mongo");
  });

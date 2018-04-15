const mongoose = require("mongoose");
const Movie = require("../models/Movie");
const movie_data = require("./movie_data");

const dbURL = "mongodb://localhost/lab-movies";

mongoose.connect(dbURL).then(() => {
  console.log(`Conected to db ${dbURL}`);

  mongoose.connection.db.dropCollection("movies").then(() => {
    console.log("Collection deleted");

    movie_data.forEach(e => {
      let movie = new Movie({
        title: e.title,
        genre: e.genre,
        plot: e.plot
      })
        .save()
        .then(() => {
          console.log("Movie created");
          mongoose.disconnect();
        });
    });
  });
});

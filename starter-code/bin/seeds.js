require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

const dbUrl = process.env.DBURL;

mongoose.Promise = Promise;
mongoose
  .connect( dbUrl, { useMongoClient: true })
  .then(() => {
    console.log("Connected to Mongo!");

    const celebrities = [
      {
        name: "Jude Law",
        occupation: "actor",
        catchPhrase: "I don't want to do anything that I'm not passionate about."
      },
      {
        name: "James Bay",
        occupation: "singer",
        catchPhrase: "The world will turn and we'll grow, we'll learn."
      },
      {
        name: "Taylor Swift",
        occupation: "singer",
        catchPhrase: "Just be yourself, there is no one better."
      }
    ];

    const movies = [
      {
        title: "Movie 01",
        genre: "Terror",
        plot: "Plot Movie 01"
      },
      {
        title: "Movie 02",
        genre: "Terror",
        plot: "Plot Movie 02"
      },
      {
        title: "Movie 03",
        genre: "Terror",
        plot: "Plot Movie 03"
      }
    ];

    Celebrity.collection.drop();
    Movie.collection.drop();

    Celebrity.create(celebrities)
      .then((data) => {
        console.log(`${data.length} celebrities created.`);

        Movie.create(movies)
          .then((data) => {
            console.log(`${data.length} movies created.`);

            mongoose.disconnect();
          });
      });
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

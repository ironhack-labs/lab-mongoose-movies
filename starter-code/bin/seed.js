const mongoose = require("mongoose");
const Celebrities = require("../models/Celebrity");

mongoose
  .connect("mongodb://localhost/CelebritiesDB", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    start();
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

function start() {
  Celebrities.deleteMany()
    .then(deleted => {
      return Celebrities.deleteMany();
    })
    .then(celebritiesDroppedInfo => {
      Celebrities.create([
        {
          name: "Vin Diesel",
          occupation: "actor",
          catchPhrase: "Toreto."
        },
        {
          name: "Charlie Seen",
          occupation: "comedian",
          catchPhrase: "Putero."
        },
        {
          name: "Margot Robbie",
          occupation: "comedian",
          catchPhrase: "Diosa de diosas.",
        }
      ]).then(addedCelebrities => {
        process.exit(0);
      })
        .catch(error => {
          console.log(error);
        });
    });
}

const mongoose = require("mongoose");
const Movies = require("../models/Movies");

mongoose
  .connect("mongodb://localhost/CelebritiesDB", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    start();
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

function start() {
  Movies.deleteMany()
    .then(deleted => {
      return Movies.deleteMany();
    })
    .then(MoviesDroppedInfo => {
      Movies.create([
        {
          title: "Fast & Furious",
          genre: "action",
          plot: "Cars Race"
        },
        {
          title: "Two & a half men",
          genre: "comedy",
          plot: "Stupid things"
        },
        {
          title: "Focus",
          genre: "action",
          plot: "Thiefs"
        }
      ]).then(addedMovies => {
        process.exit(0);
      })
        .catch(error => {
          console.log(error);
        });
    });
}

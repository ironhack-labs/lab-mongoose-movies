const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    return x.connection.dropDatabase();
  })
  .then(() => {
    const celebrities = [
      {
        name: "Dan Oliverio",
        occupation: "Activist",
        catchPhrase: "Talk about fat",
      },
      {
        name: "Tracee Ellis Ross",
        occupation: "Actress",
        catchPhrase:
          "I am learning every day to allow the space between where I am and where I want to be to inspire me and not terrify me",
      },
      {
        name: "Zer0",
        occupation: "Assassin",
        catchPhrase: "I am Rembrandt",
      },
    ];

    Celebrity.insertMany(celebrities)
      .then(console.log("seeding Celebrities succeeded!"))
      .catch((error) => console.log("Error seeding Celebrities: ", error));

    const movies = [
      {
        title: "Hot Fuzz",
        genre: "comedy",
        plot: "bonus commune communitatis",
      },
      {
        title: "Moana",
        genre: "animated",
        plot: "SHIINAAAY",
      },
    ];

    Movie.insertMany(movies)
      .then(console.log("seeding Movies succeeded!"))
      .catch((error) => console.log("Error seeding Movies: ", error));
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const Celebrities = require("../models/celebrity");
const Movies = require("../models/movie")
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    // const firstCelebrities = [
    //   {
    //     name: "Chapolin Colorado",
    //     occupation: "hero",
    //     catchPhrase: "Não contavam com a minha astúcia",
    //   },
    //   {
    //     name: "Cameron Diaz",
    //     occupation: "actress",
    //     catchPhrase: "French fries. I love them",
    //   },
    //   {
    //     name: "Bugs Bunny",
    //     occupation: "bunny",
    //     catchPhrase: "What's up doc",
    //   },
    // ];

    // Celebrities.insertMany(firstCelebrities)
    //   .then((result) => {
    //     console.log("Database seeded", result);
    //     mongoose.connection.close();
    //   })
    //   .catch((err) => console.error(err));

    const firstMovies = [
      {
        title: "Star Wars V: The Empire Strikes Back",
        genre: "Fiction",
        plot: "Talking frog convinces kid to kill his own dad"
      },
      {
        title: "Harry Potter",
        genre: "Fantasy",
        plot: "Noseless guy has an unhealthy obsession with teenage boy"
      },
      {
        title: "Mulan",
        genre: "Animation",
        plot: "A girl has to pretend she's a man to be taken seriously"
      },
    ];

    Movies.insertMany(firstMovies)
      .then((result) => {
        console.log("Database seeded", result);
        mongoose.connection.close();
      })
      .catch((err) => console.error(err));

  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const Celebrities = require("../models/celebrity");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    const firstCelebrities = [
      {
        name: "Chapolin Colorado",
        occupation: "hero",
        catchPhrase: "Não contavam com a minha astúcia",
      },
      {
        name: "Cameron Diaz",
        occupation: "actress",
        catchPhrase: "French fries. I love them",
      },
      {
        name: "Bugs Bunny",
        occupation: "bunny",
        catchPhrase: "What's up doc",
      },
    ];

    Celebrities.insertMany(firstCelebrities)
      .then((result) => console.log("Database seeded", result))
      .catch((err) => console.error(err));
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

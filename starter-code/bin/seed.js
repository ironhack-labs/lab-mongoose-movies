const mongoose = require("mongoose");
const Celebrities = require("../models/Celebrity");

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
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
          name: "Leslie Knope",
          occupation: "comedian",
          catchPhrase: "Treat yo'sealf",
        },
        {
          name: "Liz Lemon",
          occupation: "actor",
          catchPhrase: " I want to go to there.",
        },
        {
          name: "Elle Woods",
          occupation: "unknown",
          catchPhrase: "But if I'm going to be a partner in a law firm by the time I'm 30, I need a boyfriend who's not such a complete bonehead.",
        }
      ]).then(addedCelebrities => {
        process.exit(0);
        })
        .catch(error => {
          console.log(error);
        });
    });
}

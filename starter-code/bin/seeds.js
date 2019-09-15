const mongoose = require("mongoose");
const Celebrities = require("../models/celebrity");

mongoose
  .connect("mongodb://localhost/week4day5celebrities", { useNewUrlParser: true })
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
          name: "Adam Sandler",
          occupation: "comedian",
          catchPhrase: "How do I speak Spanish? Not too well.",
        },
        {
          name: "Jack Lemmon",
          occupation: "actor",
          catchPhrase: " I won't quit until I get run over by a truck, a producer or a critic.",
        },
        {
          name: "E.T.",
          occupation: "unknown",
          catchPhrase: "E.T...Phone...Home.",
        }
      ]).then(addedCelebrities => {
        process.exit(0);
        })
        .catch(error => {
          console.log(error);
        });
    });
}
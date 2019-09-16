const mongoose = require("mongoose");
const celebrities = require("../models/celebrity");

mongoose
  .connect("mongodb://localhost/celebrities", { useNewUrlParser: true })
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
  celebrities.deleteMany()
    .then(deleted => {
      return celebrities.deleteMany();
    })
    .then(celebritiesDroppedInfo => {
      celebrities.create([
        {
          name: "El Payaso",
          occupation: "comedian",
          catchPhrase: "Vivo con tu madre, en un castillo"
        },
        {
          name: "Vicentín",
          occupation: "actor",
          catchPhrase: "A tope"
        },
        {
          name: "Marlo",
          occupation: "unknown",
          catchPhrase: "hijo de puta"
        }
      ])
        .then(addedCelebrities => {
          process.exit(0);
        })
        .catch(error => {
          console.log(error);
        });
    });
}

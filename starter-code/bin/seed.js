
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
            name: "Daniel Radcliffe",
            occupation: "Actor",
            catchPhrase: "Don't try too hard to be something you're not"
        },
        {
            name: 'Matthew McConaughey',
            occupation: 'Actor',
            catchPhrase: 'Alright Alright Alright!'
        },

        {
            name: 'Tom Hanks',
            occupation: 'Actor',
            catchPhrase: 'WILSON!!!'
        }
      ]).then(addedCelebrities => {
        process.exit(0);
        })
        .catch(error => {
          console.log(error);
        });
    });
}

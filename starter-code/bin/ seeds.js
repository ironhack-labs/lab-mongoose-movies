const mongoose = require("mongoose");
const celebrity = require("../models/celebrity");

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
  celebrity.deleteMany()
    .then(deleted => {
      return celebrity.deleteMany();
    })
    //.then(celebrityDroppedInfo => {
        .then(createdCelebrity => {
          celebrity.create([
            {
              name: "Paula",
              occupation: "Actor",
              catchPhrase: "Chacho, chacho, chacho..." 
            },
            {
              name: "Little Paula",
              occupation: "Actor", 
              catchPhrase: "Chacho, chacho, chacho..." 
            },
            {
              name: "Big Paula",
              occupation: "Actor", 
              catchPhrase: "Chacho, chacho, chacho..." 
            }
          ]).then(addedCelebrity => {
            process.exit(0);
          })
        })
        .catch(error => {
          console.log(error);
        });
     //()});
   }

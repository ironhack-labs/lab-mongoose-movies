const celebModel = require("./../models/celebrity");
const mongoose = require("mongoose")

const celebrities = [
  {
    name: "Glasses McSillypants",
    occupation: "trash collector",
    catchPhrase: "Howdy, mate!"
  },

  {
    name: "Lilah Frankenweiss",
    occupation: "button pusher",
    catchPhrase: "Aloha!"
  },

  {
    name: "Georges Wendelpants",
    occupation: "Pirate",
    catchPhrase: "Land, ho!"
  }
];

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );

    celebModel
      .create(celebrities)
      .then(dbResult => {
        console.log(dbResult);
        console.log("You created celebrities!")
      })
      .catch(err => {
        console.log(err);
      });
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

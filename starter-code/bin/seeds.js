const mongoose = require("mongoose");
const celebritySchema = require("../models/celebrity");

mongoose
  .connect("mongodb://localhost/celebrities", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const celebrities = [
  {
    name: "Cara Cuerno",
    occupation: "Actor",
    catchPhrase: "Soy feo, pero gracioso"
  },
  {
    name: "Alcanaza Nidos",
    occupation: "Futbolista",
    catchPhrase: "Dime donde, que yo lo cojo!"
  },
  {
    name: "Pata Churry",
    occupation: "Actor",
    catchPhrase: "Cosa hermosa, si señor!"
  }
];

celebritySchema
  .insertMany(celebrities)
  .then(() => {
    console.log("Import Sucessful");
    mongoose
      .disconnect()
      .then(() => {
        console.log("Discconected to Mongo!");
      })
      .catch(err => {
        console.error("Error disconnecting to mongo", err);
      });
  })
  .catch(err => console.log("An error has ocurred: ", err));

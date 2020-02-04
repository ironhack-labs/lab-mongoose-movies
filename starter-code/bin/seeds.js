const Celebrity = require("../models/Celebrity");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/celebrities")
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
    name: "Bojack Horseman",
    occupation: "actor",
    catchPhrase: "What are you doing here?"
  },
  {
    name: "Arnold Schwarzenegger",
    occupation: "actor",
    catchPhrase: "I'll be back"
  },
  {
    name: "Pierce Brosnan",
    occupation: "actor",
    catchPhrase: "Shaken, not stirred"
  }
];

Celebrity.create(celebrities)
  .then(() => {
    console.log("celebrities added");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
  });

require("dotenv").config();
const mongoose = require("mongoose");

const Celebrity = require("../models/Celebrity");

const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Show me the Money!"
  },
  {
    name: "Tom Hanks",
    occupation: "Actor",
    catchPhrase: "Run Forrest"
  },
  {
    name: "Shakira",
    occupation: "Singer",
    catchPhrase: "Shakira Shakira"
  }
];

mongoose.connect(process.env.DB, { useNewUrlParser: true });

Celebrity.create(celebrities)
  .then(celebs => {
    console.log("Database created");
    mongoose.connection.close();
  })
  .catch(err => {
    console.log("Error", err);
    mongoose.connection.close();
  });

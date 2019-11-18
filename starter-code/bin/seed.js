const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.models");

const dbName = "starter-code";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrity = [
  {
    name: "Eddie Murphy",
    occupation: "comedian",
    catchPhrase:
      "I only want to do what I really want to do; otherwise, I'm content to sit here and play my guitar all day"
  },
  {
    name: "Ellen Degeneres",
    occupation: "comedian",
    catchPhrase: "Be kind to one another"
  },
  {
    name: "Bianca Del Rio",
    occupation: "comedian",
    catchPhrase: "Not Today, Satan"
  }
];
Celebrity.create(celebrity, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrity.length} books`);
  mongoose.connection.close();
});

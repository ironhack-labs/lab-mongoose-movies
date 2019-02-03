const Celebrity = require("../models/celebrity");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongoose-movies");

const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "actor",
    catchPrase: "where are my heels?"
  },
  {
    name: "Arnold Schwarzenegger",
    occupation: "actor",
    catchPrase: "hasta la vista, baby"
  },
  {
    name: "Sylvester Stallone",
    occupation: "actor",
    catchPrase: "AAADRIIAANNN!!"
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} entries`);
  mongoose.connection.close();
});

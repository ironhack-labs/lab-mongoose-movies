const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const dbName = "lab-mongoose-movies-db";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Nelson Mandela",
    occupation: "unknown",
    catchPhrase: "The greatest glory in living lies not in never falling, but in rising every time we fall."
  },
  { name: "Walt Disney", occupation: "unknown", catchPhrase: "The way to get started is to quit talking and begin doing." },
  { name: "John Lennon", occupation: "singer", catchPhrase: "Life is what happens when you're busy making other plans." }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});

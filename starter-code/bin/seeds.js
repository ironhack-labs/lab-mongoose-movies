const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const dbName = "celebs";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebs = [
  {
    name: "Whoopi Goldberg",
    occupation: "Actor",
    catchPhrase: "Say what?"
  },
  {
    name: "Adam Sandler",
    occupation: "Actor",
    catchPhrase: "J.K. Rowling"
  },
  {
    name: "Jack Black",
    occupation: "Actor",
    catchPhrase: "Va-poo-rize"
  }
];

Celebrity.create(celebs, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebs.length} celebrities`);
  mongoose.connection.close();
});

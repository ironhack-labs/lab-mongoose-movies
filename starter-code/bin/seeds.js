const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.js");

const database = 'celebrities';
mongoose.connect(`mongodb://localhost/${database}`);

const celebrities = [
  {
    name: "Teo",
    occupation: "Teacher Assistant",
    catchPhrase: "Google it"
  },
  {
    name: "Giorgio",
    occupation: "Teacher Assistant",
    catchPhrase: "Dani quindi gli spaghetti non sono scritti!"
  },
  {
    name: "Diego",
    occupation: "Teacher Assistant",
    catchPhrase: "Refactorizes!"
  }
];
 Celebrity.collection.drop();

 
Celebrity.create(celebrities)
  .then(() => console.log("Celebs created on DB"))
  .then(() => mongoose.disconnect());
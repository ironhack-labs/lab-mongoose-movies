const Celebrity = require("../Models/Celebrity");
const mongoose = require("mongoose");

const DB_NAME = "libraryCelebs";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebs = [
  { name: "Dua Lipa", occupation: "singer", catchPhrase: "Let`s get physical" },
  { name: "Sia", occupation: "singer", catchPhrase: "Chandelier" },
  {
    name: "Calvin Harris",
    occupation: "singer",
    catchPhrase: "How deep is your love?"
  }
];
Celebrity.create(celebs)
  .then(allCeleb => {
    console.log(`Created ${allCeleb.length} profiles`);
    mongoose.connection.close();
  })
  .catch(err => console.log("An error occured while getting profiles"));
module.exports = celebs;

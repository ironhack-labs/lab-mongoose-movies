let celeberties = [
  {
    name: "Scarlet Johannson",
    occupation: "actress",
    catchPhrase: "I am hot and I know it"
  },
  {
    name: "Eefje de Visser",
    occupation: "singer",
    catchPhrase: "Ik ben een sing en song writer"
  },
  {
    name: "Noam Rubin",
    occupation: "rockstar",
    catchPhrase: "I am gonna rock your world!"
  }
];

// to communicate with the database
const mongoose = require("mongoose");
// require bookschema
const Celeberty = require("../models/Celeberty");
// same address as app.js
mongoose.connect("mongodb://127.0.0.1/starter-code");

Celeberty.create(celeberties)
  .then(document => {
    console.log(`Success! ${celeberties.length} celebrities were added!`);
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err);
  });


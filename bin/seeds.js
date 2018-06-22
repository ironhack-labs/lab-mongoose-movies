const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.js");

const dbtitle = "mongoose-movies";
mongoose.connect(`mongodb://localhost/${dbtitle}`);

const celebrities = [
  {
    name: "Jim Carrey",
    occupation: "Actor",
    catchphrase: "Alrighty then!"
  },
  {
    name: "Tom Hanks",
    occupation: "Actor",
    catchphrase: "Life is like a box of chocolates"
  },
  {
    name: "Beyonce",
    occupation: "Singer",
    catchphrase: "Put a ring on it!"
  }
];

//Adding celebrities array into DB.
Celebrity.insertMany(celebrities)
  .then(celebrity => {
    console.log(`Celebrities have been saved to DB`, celebrity);
  })
  .catch(err => {
    console.log("Error: ", err);
  });

const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const celebrity_data = require("./celebrity_data");

const dbURL = "mongodb://localhost/lab-movies";

mongoose.connect(dbURL).then(() => {
  console.log(`Conected to db ${dbURL}`);

  mongoose.connection.db.dropCollection("celebrities").then(() => {
    console.log("Collection deleted");

    celebrity_data.forEach(e => {
      let celebrity = new Celebrity({
        name: e.name,
        occupation: e.occupation,
        catchPhrase: e.catchPhrase
      })
        .save()
        .then(() => {
          console.log("Celebrity created");
          mongoose.disconnect();
        });
    });
  });
});
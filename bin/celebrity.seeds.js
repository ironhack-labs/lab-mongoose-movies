// Iteration #1
// bin/celebrity.seeds.js
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.model");

const DB_NAME = "lab-mongoose-movies";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const celebrities = [
  { name: "Homer Simpson", occupation: "cartoon character", catchPhrase: "Doh!" },
  { name: "Homer Simpson", occupation: "cartoon character", catchPhrase: "Doh!" },
  { name: "Homer Simpson", occupation: "cartoon character", catchPhrase: "Doh!" },
];

Celebrity.create(celebrities)
  .then((celebritiesFromDB) => {
    console.log(`Created ${celebritiesFromDB.length} celbrities`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("error with seed ", err);
  });

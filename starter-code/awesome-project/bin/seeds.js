require("dotenv").config();
const mongoose = require("mongoose");
const Celebrity = require('../models/Celebrity');
const celebrity_data = require('./celebrity_data');
const dbURL = "mongodb://localhost/lab-mongoose-movies";
//const dbURL = process.env.DBURL;
mongoose.connect(dbURL).then(() => {
  console.log(`Connected to db ${dbURL}`);
  Celebrity.collection.drop();

  celebrity_data.forEach(celebrity_data => {
    let celebrities_new = new Celebrity({
      name: celebrity_data.name,
      occupation: celebrity_data.occupation,
      catchPhrase: celebrity_data.catchPhrase,
    })
      .save()
      .then(() => console.log("Created celebrities"));
  });
});
//mongoose.disconnect();
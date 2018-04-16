require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const celebrities = require("./celebrity_seed");

const dbURL = process.env.DBURL;

mongoose.connect(dbURL).then(() => {
  console.log(`Connected to db ${dbURL}`);
  //Movie.collection.drop();
  console.log(movies);
  celebrities.forEach(celebrity => {
    console.log(celebrity);
    let celebrity_new = new Celebrity({
      name: celebrity.name,
      occupation: celebrity.occupation,
      catchPhrase: celebrity.catchPhrase
    })
      .save()
      .then(() => console.log("Created celebrity"));
  });
});

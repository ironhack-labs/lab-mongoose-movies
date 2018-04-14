require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const celebrities_data = require("./celebrity_data");

const dbURL = process.env.DBURL;

mongoose.connect(dbURL).then(() => {
  console.log(`Connected to db ${dbURL}`);
  Celebrity.collection.drop();

  celebrities_data.forEach(celebrity_data => {
    let celebrity = new Celebrity(celebrity_data)
      .save()
      .then(() => console.log("celebrity created"));
  });
});
//mongoose.disconnect();

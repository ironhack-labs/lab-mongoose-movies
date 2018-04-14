
require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const celebrity_data = require("./celebrity_data");
const dbURL = process.env.DBURL;

mongoose.connect(dbURL).then(() => {
  console.log(`Connected to db ${dbURL}`);

  Celebrity.collection.drop();

  Celebrity_data.forEach(celebrity_data => {
    let celebrity = new Celebrity({
      name: celebrity_data.name,
      ocupation: celebrity_data.ocupation,
      catchPhrase: celebrity_data.catchPhrase
    })
      .save()
      .then(() => console.log("Celebrity created"))
  })
})
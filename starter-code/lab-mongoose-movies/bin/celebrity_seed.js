require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const celebrity_data = require("./celebrity_data");
const DBURL = process.env.DBURL;

mongoose.connect(DBURL).then(() => {
  console.log(`Connected to db ${DBURL}`);
  Celebrity.collection.drop();

  celebrity_data.forEach(celebrity_data => {
    let celebrity = new Celebrity(celebrity_data).save().then(() => {
      console.log("Created Celebrity");
      mongoose.disconnect();
    });
  });
});
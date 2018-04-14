require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const celebrityData = require("./celebrity_data");

const dbURL = process.env.DBURL;

mongoose.connect(dbURL).then( () => {

  Celebrity.collection.drop();

  Celebrity.create(celebrityData)
  .then( () => {
    console.log("Celebrities added to database");
    mongoose.disconnect();
  })

})
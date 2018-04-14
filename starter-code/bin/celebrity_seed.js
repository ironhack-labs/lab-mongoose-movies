require("dotenv").config();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const celebrity_data = require("./celebrity_data");
const dbURL = "mongodb://localhost/lab-mongoose-movies";
console.log(dbURL);

mongoose.connect(dbURL).then (() => {
  Celebrity.collection.drop();
  
  Celebrity.create(celebrity_data)
  .then((celebrities) => {
    console.log(`All the celebrities inserted`, `Celebrities list: ${celebrities}`);
    mongoose.disconnect();
  })
  .catch((err) => {
    console.log(err)
  })
})

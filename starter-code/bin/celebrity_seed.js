require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const celebrity_data = require("./celebrity_data");

mongoose
  .connect(process.env.DBURL, { useMongoClient: true })
  .then(() => {
    console.log("Connected to Mongo!");
    Celebrity.collection.drop();
    Celebrity.insertMany(celebrity_data, (err, obj) => {
        console.log(obj);
    }).then(() => mongoose.disconnect())
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
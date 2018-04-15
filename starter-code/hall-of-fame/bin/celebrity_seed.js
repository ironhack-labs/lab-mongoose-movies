require("dotenv").config();

const async = require("async");
const mongoose = require("mongoose");
const Celeb = require("../models/Famous");
const celebData = require("./celebrity_data");

dbURL = process.env.DBURL;

mongoose.connect(dbURL).then(() => {
  console.log(`Connected to ${dbURL}`);

  Celeb.collection.drop();

  Celeb.collection.insertMany(celebData).then(() => {
    mongoose.disconnect();
  });
});

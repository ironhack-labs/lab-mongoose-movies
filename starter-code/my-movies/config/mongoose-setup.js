"use strict";

const mongoose = require("mongoose");


// Use native JavaScript promises in Mongoose commands
mongoose.Promise = Promise;

// Connect Mongoose to our app's local database 
// We created the name of th databse here and called it celebshop
mongoose.connect("mongodb://localhost/celebshop", { useMongoClient: true })
  .then(() => {
      console.log("Mongoose is connected!");
  })
  .catch((err) => {
      console.log("Mongoose connection FAILED! 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨");
      console.log(err);
  });

const mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/mongoose-movies", {
    useMongoClient: true
  })
  .then(() => {
    console.log("Mongoose is connected");
  }).catch((err) => {
    console.log("Mongoose connection FAILED! WARNING WARNING ");
    console.log(err);
  });

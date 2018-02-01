const mongoose = require("mongoose");


// Use native JavaScript promises in Mongoose commands
mongoose.Promise = Promise;

// Connect Mongoose to our app's local database
mongoose.connect("mongodb://localhost/celeb-maker", { useMongoClient: true})
  .then(() => {
      console.log("Mongoose is conncected!");
  })
  .catch((err) => {
      console.log("Mongoose connection FAILED!");
      console.log(err);
  });

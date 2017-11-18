const mongoose = require("mongoose");

// use native JavaScript promises in Mongoose commands
mongoose.Promise = Promise;

// connect Mongoose to our app's local database
mongoose.connect("mongodb://localhost/mongoosecelebs", { useMongoCLient: true })
  .then( () => {
      console.log("Mongoose is connected!");
  })
  .catch( (err) => {
      console.log("Mongoose connection FAILED! 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨");
      console.log(err);
  });


const mongoose = require("mongoose");
const celebrities = require("./data")
const Celebrity = require("./models/Celebrity.model");
const DB_NAME = "celebrities-app";

mongoose.connect(`mongodb://localhost/${DB_NAME}`)
  .then(() => {
    console.log("Connectec");

    Celebrity.insertMany(celebrities)
      .then(celebrities => {
        console.log(`${celebrities.length} inserted`)
      })
  })
  .catch(error => console.error(error))


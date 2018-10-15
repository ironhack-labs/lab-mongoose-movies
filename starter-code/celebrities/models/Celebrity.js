// Packages
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Definition of the Schema
const celebritySchema = new Schema({
  name: {
    type: String
  },
  occupation: {
    type: String
  },
  catchPhrase: {
    type: String
  }
});

// Definition of the Model
const Celebrity = mongoose.model("Celebrity", celebritySchema);

// Export the model 
module.exports = Celebrity;

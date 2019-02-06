const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create the Celebrity schema using the Mongoose "Schema" class
const celebritySchema = new Schema({
  // document structure & rules defined here
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  catchPhrase: { type: String, required: true }
});

// use the schema to create the Celebrity model (it has the methods for doing the db queries)
// "Celebrity" model gets turned into the "Celebrity" collection
const Celebrity = mongoose.model("Celebrity", celebritySchema);

// share the "Celebrity" model with other part of the app
module.exports = Celebrity;

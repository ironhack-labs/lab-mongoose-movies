const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create the Book schema using the Mongoose "Schema" class
const celebritySchema = new Schema({
  // document strucutre & rules are defined here
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  catchPhrase: { type: String, required: true }
});

const Celebrity = mongoose.model("Celibrity", celebritySchema);

//share the "Book" model with other parts of the app
module.exports = Celebrity;

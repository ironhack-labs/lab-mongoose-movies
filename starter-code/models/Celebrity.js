const mongoose = require("mongoose");
const Schema = mongoose.Schema; // import schema from mongoose
// schema is a plan which shows how your model looks like

// Create the celebrity schema with name, occupation and catchPhrase.
const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

// Create the Celebrity model with the celebritySchema.
const Celebrity = mongoose.model("Celebrity", celebritySchema);

// Export the Celebrity model.
module.exports = Celebrity;

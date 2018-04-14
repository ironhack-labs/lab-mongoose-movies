const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;

// Create the celebrity schema with name, occupation and catchPhrase.
// Create the Celebrity model with the schema.
// Export the Celebrity model.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: { type: String, required: true },
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